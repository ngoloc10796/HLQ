package hlq.com.modules.files;

import org.springframework.data.jpa.repository.JpaRepository;

import hlq.com.entitys.User;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface FileRepository extends JpaRepository<User, Integer> {
	public User findById(int id);

	public User findByUsername(String username);
}
