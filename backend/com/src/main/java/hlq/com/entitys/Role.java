package hlq.com.entitys;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the role database table.
 * 
 */
@Entity
@NamedQuery(name="Role.findAll", query="SELECT r FROM Role r")
public class Role implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String name;

	//bi-directional many-to-one association to RolePermistion
	@OneToMany(mappedBy="role")
	private List<RolePermistion> rolePermistions;

	public Role() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<RolePermistion> getRolePermistions() {
		return this.rolePermistions;
	}

	public void setRolePermistions(List<RolePermistion> rolePermistions) {
		this.rolePermistions = rolePermistions;
	}

	public RolePermistion addRolePermistion(RolePermistion rolePermistion) {
		getRolePermistions().add(rolePermistion);
		rolePermistion.setRole(this);

		return rolePermistion;
	}

	public RolePermistion removeRolePermistion(RolePermistion rolePermistion) {
		getRolePermistions().remove(rolePermistion);
		rolePermistion.setRole(null);

		return rolePermistion;
	}

}