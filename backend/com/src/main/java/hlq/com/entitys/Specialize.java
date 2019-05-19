package hlq.com.entitys;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

/**
 * The persistent class for the specialize database table.
 * 
 */
@Entity
@NamedQuery(name = "Specialize.findAll", query = "SELECT s FROM Specialize s")
public class Specialize implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String code;

	private double duration;

	@Column(name = "group_object")
	private String groupObject;

	private String name;

	private String specialize;

	@Column(name = "trainning_type")
	private String trainningType;

	public Specialize() {
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

	public double getDuration() {
		return this.duration;
	}

	public void setDuration(double duration) {
		this.duration = duration;
	}

	public String getGroupObject() {
		return this.groupObject;
	}

	public void setGroupObject(String groupObject) {
		this.groupObject = groupObject;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSpecialize() {
		return this.specialize;
	}

	public void setSpecialize(String specialize) {
		this.specialize = specialize;
	}

	public String getTrainningType() {
		return this.trainningType;
	}

	public void setTrainningType(String trainningType) {
		this.trainningType = trainningType;
	}

}