package hlq.com.entitys;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the type database table.
 * 
 */
@Entity
@NamedQuery(name="Type.findAll", query="SELECT t FROM Type t")
public class Type implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String code;

	private String description;

	private String name;

	@Column(name="numerical_order")
	private int numericalOrder;
	
	//bi-directional many-to-one association to Category
	@OneToMany(mappedBy="type")
	private List<Category> categories;

	public Type() {
	}

	public int getId() {
		return this.id;
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

//	public List<Category> getCategories() {
//		return this.categories;
//	}
//
//	public void setCategories(List<Category> categories) {
//		this.categories = categories;
//	}

//	public Category addCategory(Category category) {
//		getCategories().add(category);
//		category.setType(this);
//
//		return category;
//	}
//
//	public Category removeCategory(Category category) {
//		getCategories().remove(category);
//		category.setType(null);
//
//		return category;
//	}

}