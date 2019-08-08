package hlq.com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.web.client.RestTemplate;

/**
 * @author loc.nt - Siten
 *
 *         Create date: AJWSSigner pr 18, 2019
 */
@SpringBootApplication
@EntityScan(basePackageClasses = { Main.class, Jsr310JpaConverters.class })
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}

	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}
}
