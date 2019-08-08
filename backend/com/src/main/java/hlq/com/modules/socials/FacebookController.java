package hlq.com.modules.socials;

import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.marsbits.restfbmessenger.Messenger;

import hlq.com.commons.BaseController;

@RestController
@RequestMapping("/api/facebook")
public class FacebookController extends BaseController {
	private static final Logger logger = Logger.getLogger(FacebookController.class.getName());

	@Autowired
	private Messenger messenger;

	@GetMapping(value = "")
	public ResponseEntity<String> get(@RequestParam("mode") String mode,
			@RequestParam("verifyToken") String verifyToken, @RequestParam("challenge") String challenge) {
		logger.info("Validating webhook...");
		if (messenger.verifyToken(verifyToken)) {
			logger.info("Validating webhook succeeded");
			return new ResponseEntity<>(challenge, HttpStatus.OK);
		} else {
			logger.warning("Validating webhook failed");
			return new ResponseEntity<>("Failed validation. Make sure the validation tokens match.",
					HttpStatus.FORBIDDEN);
		}
	}

	@PostMapping(value = "")
	public void post(@RequestHeader("signature") String signature, @RequestBody String payload) {
		logger.info("Webhook received");
		try {
			messenger.handleCallback(payload, signature);
		} catch (Exception e) {
			logger.severe(e.getMessage());
			throw e;
		}
	}
}