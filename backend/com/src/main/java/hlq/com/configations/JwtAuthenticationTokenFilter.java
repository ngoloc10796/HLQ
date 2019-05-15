package hlq.com.configations;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;

import com.fasterxml.jackson.databind.ObjectMapper;

import hlq.com.bean.ResponseBean;
import hlq.com.modules.users.UserService;

public class JwtAuthenticationTokenFilter extends UsernamePasswordAuthenticationFilter {
	private final static String TOKEN_HEADER = "Authorization";
	@Autowired
	private JwtService jwtService;
	@Autowired
	private UserService userService;

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletResponse response1 = (HttpServletResponse) response;
		response1.setHeader("Access-Control-Allow-Origin", "*");
		response1.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
		response1.setHeader("Access-Control-Max-Age", "3600");
		response1.setHeader("Access-Control-Allow-Headers",
				"Content-Type, Authorization, Content-Length, X-Requested-With");

		ResponseBean resBean = new ResponseBean();
		HttpServletRequest httpRequest = (HttpServletRequest) request;

		if (request instanceof HttpServletRequest) {
			String url = httpRequest.getRequestURI();
			String ignored = "/v2/api-docs" + "/configuration/ui" + "/swagger-resources" + "/configuration/security"
					+ "/swagger-ui.html" + "/webjars" + "/api/swagger.json" + "/v2/api-docs" + "/api/login"
					+ "/api/register" + "/admin";

			if (ignored.contains(url) || (url.contains("webjars"))
					|| (url.contains("swagger-resources") || (url.contains("testapi")))) {
				chain.doFilter(request, response);
				return;
			}
		}

		String authToken = httpRequest.getHeader(TOKEN_HEADER);
		if (authToken != null) {
			authToken = authToken.substring(7, authToken.length());
		}
		Boolean hasPermistion = true;

		if (!jwtService.validateTokenLogin(authToken, resBean)) {

			hasPermistion = false;
		}
		hasPermistion = true;
		if (hasPermistion) {
			String username = jwtService.getUsernameFromToken(authToken);
			hlq.com.entitys.User user = userService.loadUserByUsername(username);

			if (user != null) {
				boolean enabled = true;
				boolean accountNonExpired = true;
				boolean credentialsNonExpired = true;
				boolean accountNonLocked = true;
				UserDetails userDetail = new User(username, user.getPassword(), enabled, accountNonExpired,
						credentialsNonExpired, accountNonLocked, user.getAuthorities());
				UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetail,
						null, userDetail.getAuthorities());
				authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpRequest));
				SecurityContextHolder.getContext().setAuthentication(authentication);
			}
			chain.doFilter(request, response1);
		} else {
			byte[] responseToSend = restResponseBytes(resBean);
			((HttpServletResponse) response).setHeader("Content-Type", "application/json");
			((HttpServletResponse) response).setStatus(HttpStatus.OK.hashCode());
			response.getOutputStream().write(responseToSend);
		}
	}

	@Override
	public void destroy() {

	}

	private byte[] restResponseBytes(ResponseBean responseBean) throws IOException {
		String serialized = new ObjectMapper().writeValueAsString(responseBean);
		return serialized.getBytes();
	}
}