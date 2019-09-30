package hlq.com.commons;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;

import hlq.com.bean.ResponseBean;
import hlq.com.bean.UserPrincipal;

/**
 * @author loc.nt - Siten
 *
 *         Create date: May 4, 2019
 */
@RestController
public abstract class BaseController {
	protected static final Logger LOGGER = LoggerFactory.getLogger(BaseController.class);

	protected ResponseEntity<ResponseBean> responseError(ResponseBean response, String message) {
		if (response.getCode().equals(HttpStatus.UNAUTHORIZED.value() + ""))
			return new ResponseEntity<ResponseBean>(response, HttpStatus.UNAUTHORIZED);
		response.setMessage(message);
		return new ResponseEntity<ResponseBean>(response, HttpStatus.INTERNAL_SERVER_ERROR);
	}

	protected ResponseEntity<ResponseBean> response(ResponseBean response) {
		if (response.getCode().equals(HttpStatus.UNAUTHORIZED.value() + ""))
			return new ResponseEntity<ResponseBean>(response, HttpStatus.UNAUTHORIZED);
		return new ResponseEntity<ResponseBean>(response, HttpStatus.OK);
	}

	protected UserPrincipal getCurrentUserInfo() {
		try {
			return (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		} catch (Exception e) {
			return null;
		}

	}
}
