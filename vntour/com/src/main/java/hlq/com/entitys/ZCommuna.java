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
 * The persistent class for the z_communa database table.
 * 
 */
@Entity
@Table(name = "z_communa")
@NamedQuery(name = "ZCommuna.findAll", query = "SELECT z FROM ZCommuna z")
public class ZCommuna implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String code;

	private Integer districtID;

	private String name;

	private String note;

	private Integer order;

	// bi-directional many-to-one association to ZDistrict
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "districtID", insertable = false, updatable = false)
	private ZDistrict ZDistrict;

	public ZCommuna() {
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

	public Integer getDistrictID() {
		return this.districtID;
	}

	public void setDistrictID(Integer districtID) {
		this.districtID = districtID;
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