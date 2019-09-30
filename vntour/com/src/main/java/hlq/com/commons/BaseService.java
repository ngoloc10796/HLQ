package hlq.com.commons;

import org.springframework.security.core.context.SecurityContextHolder;

import hlq.com.bean.UserPrincipal;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Sep 30, 2019
 */
public class BaseService {
	protected UserPrincipal getCurrentUserInfo() {
		try {
			return (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		} catch (Exception e) {
			return null;
		}

	}
}
