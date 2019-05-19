package hlq.com.configations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import exception.ResourceNotFoundException;
import hlq.com.bean.UserPrincipal;
import hlq.com.entitys.User;
import hlq.com.modules.users.UserRepository;

/**
 * Created by rajeevkumarsingh on 02/08/17.
 */

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
		// Let people login with either username or email
		User user = userRepository.findByUsername(usernameOrEmail);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username or email : " + usernameOrEmail);
		}
		return UserPrincipal.create(user);
	}

	@Transactional
	public UserDetails loadUserById(int id) {
		User user = userRepository.findById(id);
		if (user == null) {
			throw new ResourceNotFoundException("User", "id", id);
		}
		return UserPrincipal.create(user);
	}
}