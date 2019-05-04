package hlq.com.commons;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class EncrytedPasswordUtils {

	// Encryte Password with BCryptPasswordEncoder
	public static String encrytePassword(String password) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.encode(password);
	}
	
	public static Boolean checkPassword(String password, String passCheck) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder.matches(passCheck ,  password);
	}

}