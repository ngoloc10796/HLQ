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
 * The persistent class for the z_province database table.
 * 
 */
@Entity
@Table(name = "z_province")
@NamedQuery(name = "ZProvince.findAll", query = "SELECT z FROM ZProvince z")
public class ZProvince implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String code;

	private Integer countryID;

	private String name;

	private String note;

	private Integer order;
	// bi-directional many-to-one association to ZCountry
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "countryID", insertable = false, updatable = false)
	private ZCountry ZCountry;

	public ZProvince() {
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

	public Integer getCountryID() {
		return this.countryID;
	}

	public void setCountryID(Integer countryID) {
		this.countryID = countryID;
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