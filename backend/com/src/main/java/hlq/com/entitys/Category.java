package hlq.com.entitys;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Transient;

/**
 * The persistent class for the category database table.
 * 
 */
@Entity
@NamedQuery(name = "Category.findAll", query = "SELECT c FROM Category c")
public class Category implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String code;

	private String description;

	private String name;

	@Column(name = "numerical_order")
	private int numericalOrder;

	@Column(name = "parent_id")
	private Integer parentId;

	@Transient
	private String parent;

	@ManyToOne
	@JoinColumn(name = "parent_id", insertable = false, updatable = false)
	private Category category1;

	@Column(name = "TYPE_ID")
	private Integer typeId;
	@Transient
	private String typeName;

	// bi-directional many-to-one association to Type
	@ManyToOne
	@JoinColumn(name = "TYPE_ID", insertable = false, updatable = false)
	private Type type;

	public Category() {
	}

	public int getId() {
		return this.id;
	}

	public String getParent() {
		if (category1 == null)
			return null;
		return category1.getName();
	}

	public void setParent(String parent) {
		this.parent = parent;
	}

	public Integer getTypeId() {
		return typeId;
	}

	public void setTypeId(Integer typeId) {
		this.typeId = typeId;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
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

	public int getNumericalOrder() {
		return this.numericalOrder;
	}

	public void setNumericalOrder(int numericalOrder) {
		this.numericalOrder = numericalOrder;
	}

	public Integer getParentId() {
		return this.parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

//	public Type getType() {
//		return this.type;
//	}
//
//	public void setType(Type type) {
//		this.type = type;
//	}

	public String getTypeName() {
		if (type == null)
			return null;
		return type.getName();
	}

	public void setTypeName(String typeName) {

		this.typeName = typeName;
	}

}