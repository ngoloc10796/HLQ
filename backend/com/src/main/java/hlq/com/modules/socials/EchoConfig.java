package hlq.com.modules.socials;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.github.marsbits.restfbmessenger.DefaultMessenger;
import com.github.marsbits.restfbmessenger.Messenger;

/**
 * The Echo config.
 *
 * @author Marcel Overdijk
 */
@Configuration
public class EchoConfig {

	@Autowired
	private EchoCallbackHandler echoCallbackHandler;

	@Bean
	public Messenger messenger() {
		String verifyToken = "the-verify-token";
		String accessToken = "the-access-token";
		String appSecret = "the-app-secret";
		return new DefaultMessenger(verifyToken, accessToken, appSecret, echoCallbackHandler);
	}
}