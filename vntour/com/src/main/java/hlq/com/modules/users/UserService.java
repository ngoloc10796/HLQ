//package hlq.com.modules.users;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import hlq.com.bean.UserLoginBean;
//import hlq.com.commons.EncrytedPasswordUtils;
//import hlq.com.entitys.User;
//
//@Service
//public class UserService {
//	@Autowired
//	private UserRepository repo;
//
//	public List<User> findAll() {
//		return repo.findAll();
//	}
//
//	public User findById(int id) {
//		return repo.findById(id);
//	}
//
//	public User loadUserByUsername(String username) {
//		return repo.findByUsername(username);
//	}
//
//	public boolean checkLogin(UserLoginBean user) {
//		User find = repo.findByUsername(user.getUsername());
//		if (find == null || !user.getUsername().equals(find.getUsername()))
//			return false;
//		return EncrytedPasswordUtils.checkPassword(find.getPassword(), user.getPassword());
//	}
//}