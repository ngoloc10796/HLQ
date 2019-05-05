package hlq.com.configations;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;

import hlq.com.bean.ResponseBean;
import hlq.com.bean.TokenBean;

@Service
@PropertySource("classpath:application.properties")
public class JwtService {
	@Autowired
	private Environment env;
	public static final String USERNAME = "username";
	public static final String SECRET_KEY = "11111111111111111111111111111111";
	public static final int EXPIRE_TIME = 86400000;

	public int getExpireTime() {
		String timeStr = env.getProperty("tokenTimeExpiresMilisecond");
		if (timeStr == null)
			return EXPIRE_TIME;
		return Integer.parseInt(timeStr);
	}

	public TokenBean generateTokenLogin(String username) {
		TokenBean data = new TokenBean();
		try {
			// Create HMAC signer
			JWSSigner signer = new MACSigner(generateShareSecret());
			JWTClaimsSet.Builder builder = new JWTClaimsSet.Builder();
			builder.claim(USERNAME, username);
			builder.expirationTime(generateExpirationDate());
			JWTClaimsSet claimsSet = builder.build();
			SignedJWT signedJWT = new SignedJWT(new JWSHeader(JWSAlgorithm.HS256), claimsSet);
			// Apply the HMAC protection
			signedJWT.sign(signer);
			// Serialize to compact form, produces something like
			// eyJhbGciOiJIUzI1NiJ9.SGVsbG8sIHdvcmxkIQ.onO9Ihudz3WkiauDO2Uhyuz0Y18UASXlSc1eS0NkWyA
			data.setToken(signedJWT.serialize());
			data.setExpireTime(getExpireTime());
			data.setUsername(username);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return data;
	}

	private JWTClaimsSet getClaimsFromToken(String token) {
		JWTClaimsSet claims = null;
		try {
			SignedJWT signedJWT = SignedJWT.parse(token);
			JWSVerifier verifier = new MACVerifier(generateShareSecret());
			if (signedJWT.verify(verifier)) {
				claims = signedJWT.getJWTClaimsSet();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return claims;
	}

	private Date generateExpirationDate() {
		return new Date(System.currentTimeMillis() + getExpireTime());
	}

	private Date getExpirationDateFromToken(String token) {
		Date expiration = null;
		JWTClaimsSet claims = getClaimsFromToken(token);
		expiration = claims.getExpirationTime();
		return expiration;
	}

	public String getUsernameFromToken(String token) {
		String username = null;
		try {
			JWTClaimsSet claims = getClaimsFromToken(token);
			username = claims.getStringClaim(USERNAME);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return username;
	}

	private byte[] generateShareSecret() {
		// Generate 256-bit (32-byte) shared secret
		byte[] sharedSecret = new byte[32];
		sharedSecret = SECRET_KEY.getBytes();
		return sharedSecret;
	}

	public Boolean isTokenExpired(String token) {
		Date expiration = getExpirationDateFromToken(token);
		return expiration.before(new Date());
	}

	public Boolean validateTokenLogin(String token, ResponseBean response) {
		response.setCode(HttpStatus.UNAUTHORIZED);
		if (token == null || token.trim().length() == 0) {
			response.setMessage(Translator.toLocale("authorized.tokenFail"));
			return false;
		}
		String username = getUsernameFromToken(token);
		if (username == null || username.isEmpty()) {

			response.setMessage(Translator.toLocale("authorized.tokenFail"));
			return false;
		}
		if (isTokenExpired(token)) {
			response.setMessage(Translator.toLocale("authorized.tokenExpires"));
			return false;
		}
		response.setCode(HttpStatus.OK);
		return true;
	}
}