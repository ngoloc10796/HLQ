package hlq.com.entitys;

import java.io.Serializable;
import java.math.BigInteger;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;


/**
 * The persistent class for the agent database table.
 * 
 */
@Entity
@NamedQuery(name="Agent.findAll", query="SELECT a FROM Agent a")
public class Agent implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private String address;

	private String code;

	private BigInteger communaID;

	private BigInteger distristID;

	private String email;

	private String fax;

	private String name;

	private String note;

	private String phone;

	private BigInteger provinceID;

	private String website;
	
	public Agent() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}



	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public BigInteger getCommunaID() {
		return this.communaID;
	}

	public void setCommunaID(BigInteger communaID) {
		this.communaID = communaID;
	}

	public BigInteger getDistristID() {
		return this.distristID;
	}

	public void setDistristID(BigInteger distristID) {
		this.distristID = distristID;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFax() {
		return this.fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
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

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public BigInteger getProvinceID() {
		return this.provinceID;
	}

	public void setProvinceID(BigInteger provinceID) {
		this.provinceID = provinceID;
	}

	public String getWebsite() {
		return this.website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

}