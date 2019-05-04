package hlq.com.entitys;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * The persistent class for the role_permistion database table.
 * 
 */
@Entity
@Table(name = "role_permistion")
@NamedQuery(name = "RolePermistion.findAll", query = "SELECT r FROM RolePermistion r")
public class RolePermistion implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	// bi-directional many-to-one association to Function
	@ManyToOne
	@JoinColumn(name = "funtion_id")
	private Function function;

	// bi-directional many-to-one association to Role
	@ManyToOne
	private Role role;

	// bi-directional many-to-one association to User
	@OneToMany(mappedBy = "rolePermistion")
	private List<User> users;

	public RolePermistion() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Function getFunction() {
		return this.function;
	}

	public void setFunction(Function function) {
		this.function = function;
	}

	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

//	public List<User> getUsers() {
//		return this.users;
//	}

//	public void setUsers(List<User> users) {
//		this.users = users;
//	}

//	public User addUser(User user) {
//		getUsers().add(user);
//		user.setRolePermistion(this);
//
//		return user;
//	}

//	public User removeUser(User user) {
//		getUsers().remove(user);
//		user.setRolePermistion(null);
//
//		return user;
//	}

}