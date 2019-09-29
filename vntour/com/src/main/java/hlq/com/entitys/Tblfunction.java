package hlq.com.entitys;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

/**
 * The persistent class for the function database table.
 * 
 */
@Entity
@NamedQuery(name = "Tblfunction.findAll", query = "SELECT f FROM Tblfunction f")
public class Tblfunction implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String description;

	private String name;
	@Column(name = "PARENT_id")
	private Integer parentId;

	private String path;

	// bi-directional many-to-one association to RolePermistion
//	@OneToMany(mappedBy = "function")
//	private List<RolePermistion> rolePermistions;

	public Tblfunction() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getParentId() {
		return this.parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

	public String getPath() {
		return this.path;
	}

	public void setPath(String path) {
		this.path = path;
	}

//	public List<RolePermistion> getRolePermistions() {
//		return this.rolePermistions;
//	}
//
//	public void setRolePermistions(List<RolePermistion> rolePermistions) {
//		this.rolePermistions = rolePermistions;
//	}

//	public RolePermistion addRolePermistion(RolePermistion rolePermistion) {
//		getRolePermistions().add(rolePermistion);
//		rolePermistion.setFunction(this);
//
//		return rolePermistion;
//	}
//
//	public RolePermistion removeRolePermistion(RolePermistion rolePermistion) {
//		getRolePermistions().remove(rolePermistion);
//		rolePermistion.setFunction(null);
//
//		return rolePermistion;
//	}

}