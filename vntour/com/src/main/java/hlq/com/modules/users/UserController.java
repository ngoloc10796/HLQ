package hlq.com.modules.users;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import hlq.com.bean.ResponseBean;
import hlq.com.bean.UserLoginBean;
import hlq.com.commons.BaseController;
import hlq.com.configations.JwtTokenProvider;
import hlq.com.entitys.User;

@RestController
@RequestMapping("/api")
public class UserController extends BaseController {
	@Autowired
	AuthenticationManager authenticationManager;
	@Autowired
	private UserService userService;
	@Autowired
	JwtTokenProvider tokenProvider;

	/* ---------------- GET ALL USER ------------------------ */
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public ResponseEntity<List<User>> getAllUser() {
		return new ResponseEntity<List<User>>(userService.findAll(), HttpStatus.OK);
	}

	/* ---------------- GET USER BY ID ------------------------ */
	@RequestMapping(value = "/users/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getUserById(@PathVariable int id) {
		User user = userService.findById(id);
		if (user != null) {
			return new ResponseEntity<Object>(user, HttpStatus.OK);
		}
		return new ResponseEntity<Object>("Not Found User", HttpStatus.NO_CONTENT);
	}

	/* ---------------- CREATE NEW USER ------------------------ */
	@RequestMapping(value = "/signUp", method = RequestMethod.POST)
	public ResponseEntity<Object> createUser(@RequestBody User user) {
		return userService.add(user);
	}

	@RequestMapping(value = "/users", method = RequestMethod.PUT)
	public ResponseEntity<Object> UpdateUser(@RequestBody User user) {
		return new ResponseEntity<Object>(userService.updateUser(user), HttpStatus.OK);
	}

	/* ---------------- DELETE USER ------------------------ */
	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> deleteUserById(@PathVariable int id) {
		if (userService.delete(id))
			return new ResponseEntity<String>("Deleted!", HttpStatus.OK);
		return new ResponseEntity<String>("Not found", HttpStatus.NOT_FOUND);
	}

	@PostMapping(value = "/login")
	public ResponseEntity<ResponseBean> login(HttpServletRequest request, @RequestBody UserLoginBean user) {
		ResponseBean response = new ResponseBean();
		try {
			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

			SecurityContextHolder.getContext().setAuthentication(authentication);

			if (userService.checkLogin(user)) {
				response.setData(tokenProvider.generateToken(authentication));
				response.setCode(HttpStatus.OK);
			} else {
				response.setMessage("Wrong userId and password");
				response.setCode(HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception ex) {

			return responseError(response, ex.getMessage());
		}
		return response(response);
	}
}