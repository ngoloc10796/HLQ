package hlq.com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import hlq.com.commons.EncrytedPasswordUtils;

/**
 * @author loc.nt - Siten
 *
 *         Create date: AJWSSigner pr 18, 2019
 */
@SpringBootApplication
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
		System.out.println(EncrytedPasswordUtils.encrytePassword("admin")); 
	}
}
