package hlq.com.entitys;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * The persistent class for the z_country database table.
 * 
 */
@Entity
@Table(name = "z_country")
@NamedQuery(name = "ZCountry.findAll", query = "SELECT z FROM ZCountry z")
public class ZCountry implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private Integer areaID;

	private String code2;

	private String code3;

	private String name;

	private String note;

	private Integer order;
	// bi-directional many-to-one association to ZArea
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "areaID", insertable = false, updatable = false)
	private ZArea ZArea;

	public ZCountry() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getAreaID() {
		return this.areaID;
	}

	public void setAreaID(Integer areaID) {
		this.areaID = areaID;
	}

	public String getCode2() {
		return this.code2;
	}

	public void setCode2(String code2) {
		this.code2 = code2;
	}

	public String getCode3() {
		return this.code3;
	}

	public void setCode3(String code3) {
		this.code3 = code3;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Integer getOrder() {
		return this.order;
	}

	public void setOrder(Integer order) {
		this.order = order;
	}

}