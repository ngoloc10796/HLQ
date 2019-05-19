package hlq.com.modules.socials;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.social.facebook.connect.FacebookConnectionFactory;
import org.springframework.social.oauth2.AccessGrant;
import org.springframework.social.oauth2.OAuth2Operations;
import org.springframework.social.oauth2.OAuth2Parameters;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import hlq.com.bean.ResponseTokenFacebook;

@Service
public class FacebookService {
	@Value("${spring.social.facebook.appId}")
	String facebookAppId;
	@Value("${spring.social.facebook.appSecret}")
	String facebookSecret;

	public String createFacebookAuthorizationURL() {
		FacebookConnectionFactory connectionFactory = new FacebookConnectionFactory(facebookAppId, facebookSecret);

		OAuth2Operations oauthOperations = connectionFactory.getOAuthOperations();
		OAuth2Parameters params = new OAuth2Parameters();
		params.setRedirectUri("http://localhost:9090/api/facebook");
		params.setScope("public_profile,email,user_birthday");
		return oauthOperations.buildAuthorizeUrl(params);
	}

	public String createFacebookAccessToken(String code) {
		FacebookConnectionFactory connectionFactory = new FacebookConnectionFactory(facebookAppId, facebookSecret);
		AccessGrant accessGrant = connectionFactory.getOAuthOperations().exchangeForAccess(code,
				"http://localhost:9090/api/facebook", null);
		return accessGrant.getAccessToken();
	}

	public ResponseTokenFacebook getTokenApp() {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<ResponseTokenFacebook> entity = new HttpEntity<ResponseTokenFacebook>(headers);
		RestTemplate restTemplate = new RestTemplate();
		ResponseTokenFacebook data = restTemplate.exchange(
				"https://graph.facebook.com/oauth/access_token?client_id=852632491762103&client_secret=52185e6a42d6402b56b1e487e5d63c14&grant_type=client_credentials&redirect_uri=http%3A%2F%2Flocalhost%3A9090%2Fapi%2Ffacebook",
				HttpMethod.GET, entity, ResponseTokenFacebook.class).getBody();
		return data;
	}
}
