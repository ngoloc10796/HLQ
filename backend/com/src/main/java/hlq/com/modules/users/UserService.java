package hlq.com.modules.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

//	public boolean add(User user) {
//		for (User userExist : listUser) {
//			if (user.getId() == userExist.getId() || StringUtils.equals(user.getUsername(), userExist.getUsername())) {
//				return false;
//			}
//		}
//		listUser.add(user);
//		return true;
//	}

	public void delete(int id) {
//    listUser.removeIf(user -> user.getId() == id);
	}

	public User loadUserByUsername(String username) {
		return repo.findByUsername(username);
	}

	public boolean checkLogin(User user) {
		User find = repo.findByUsername(user.getUsername());
		if (find.getPassword().equals(user.getPassword()))
			return true;
		return false;
	}
}