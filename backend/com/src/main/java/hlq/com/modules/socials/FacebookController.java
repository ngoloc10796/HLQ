package hlq.com.modules.socials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hlq.com.bean.ResponseBean;
import hlq.com.commons.BaseController;

@RestController
@RequestMapping("/api/facebook")
public class FacebookController extends BaseController {
	@Autowired
	FacebookService facebookService;

	@GetMapping("/createFacebookAuthorization")
	public String createFacebookAuthorization() {
		return facebookService.createFacebookAuthorizationURL();
	}

	@GetMapping("")
	public ResponseEntity<ResponseBean> createFacebookAccessToken() {
		ResponseBean data = new ResponseBean();
		data.setData(facebookService.getTokenApp());
		return response(data);
	}
}