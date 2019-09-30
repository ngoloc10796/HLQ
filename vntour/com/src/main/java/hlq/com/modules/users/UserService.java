package hlq.com.modules.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import hlq.com.bean.UserLoginBean;
import hlq.com.commons.EncrytedPasswordUtils;
import hlq.com.entitys.User;

@Service
public class UserService {
	@Autowired
	private UserRepository repo;

	public List<User> findAll() {
		return repo.findAll();
	}

	public User findById(int id) {
		return repo.findById(id);
	}

	public User loadUserByUsername(String username) {
		return repo.findByUsername(username);
	}

	public boolean checkLogin(UserLoginBean user) {
		User find = repo.findByUsername(user.getUsername());
		if (find == null || !user.getUsername().equals(find.getUsername()))
			return false;
		return EncrytedPasswordUtils.checkPassword(find.getPassword(), user.getPassword());
	}

	public User updateUser(User user) {
		user.setEnable(0);
		return repo.save(user);
	}

	/**
	 * 
	 */
	Boolean delete(int id) {
		User user = repo.findById(id);
		if (user == null)
			return false;
		user.setEnable(0);
		repo.save(user);
		return true;
	}

	/**
	 * 
	 */
	@SuppressWarnings("unused")
	ResponseEntity<Object> add(User user) {

		if (user.getUsername() == null || user.getUsername().trim() == "")
			return new ResponseEntity<Object>("Username required true", HttpStatus.INTERNAL_SERVER_ERROR);

		if (user.getPassword() == null || user.getPassword().trim() == "")
			return new ResponseEntity<Object>("Password required true", HttpStatus.INTERNAL_SERVER_ERROR);
		User find = repo.findByUsername(user.getUsername());
		if (find != null)
			return new ResponseEntity<Object>("UserName is exist", HttpStatus.INTERNAL_SERVER_ERROR);
		user.setPassword(EncrytedPasswordUtils.encrytePassword(user.getPassword()));
		repo.save(user);
		return new ResponseEntity<Object>("Successfull", HttpStatus.OK);

	}

}