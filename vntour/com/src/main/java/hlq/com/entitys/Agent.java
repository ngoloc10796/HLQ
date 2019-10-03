package hlq.com.entitys;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * The persistent class for the agent database table.
 * 
 */
@Entity
@NamedQuery(name = "Agent.findAll", query = "SELECT a FROM Agent a")
public class Agent implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;

	private String attachment;

	@Column(name = "career_id")
	private Integer careerId;

	@Column(name = "certify_at")
	private String certifyAt;

	private String code;

	private BigInteger communaID;

	private String director;

	private BigInteger distristID;

	private String email;

	private String fax;

	@Column(name = "name_en")
	private String nameEn;

	@Column(name = "name_vi")
	private String nameVi;

	private String note;

	@Column(name = "off_address")
	private String offAddress;

	private int parentID;

	private String phone;

	private BigInteger provinceID;

	@Column(name = "reg_address")
	private String regAddress;

	private String status;

	private byte type;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "valid_at")
	private Date validAt;

	private String website;

	// bi-directional many-to-one association to Tour
//	@OneToMany(mappedBy="agent")
//	private List<Tour> tours;

	public Agent() {
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAttachment() {
		return this.attachment;
	}

	public void setAttachment(String attachment) {
		this.attachment = attachment;
	}

	public int getCareerId() {
		return this.careerId;
	}

	public void setCareerId(int careerId) {
		this.careerId = careerId;
	}

	public String getCertifyAt() {
		return this.certifyAt;
	}

	public void setCertifyAt(String certifyAt) {
		this.certifyAt = certifyAt;
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

	public String getDirector() {
		return this.director;
	}

	public void setDirector(String director) {
		this.director = director;
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

	public String getNameEn() {
		return this.nameEn;
	}

	public void setNameEn(String nameEn) {
		this.nameEn = nameEn;
	}

	public String getNameVi() {
		return this.nameVi;
	}

	public void setNameVi(String nameVi) {
		this.nameVi = nameVi;
	}

	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getOffAddress() {
		return this.offAddress;
	}

	public void setOffAddress(String offAddress) {
		this.offAddress = offAddress;
	}

	public int getParentID() {
		return this.parentID;
	}

	public void setParentID(int parentID) {
		this.parentID = parentID;
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

	public String getRegAddress() {
		return this.regAddress;
	}

	public void setRegAddress(String regAddress) {
		this.regAddress = regAddress;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public byte getType() {
		return this.type;
	}

	public void setType(byte type) {
		this.type = type;
	}

	public Date getValidAt() {
		return this.validAt;
	}

	public void setValidAt(Date validAt) {
		this.validAt = validAt;
	}

	public String getWebsite() {
		return this.website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

//	public List<Tour> getTours() {
//		return this.tours;
//	}
//
//	public void setTours(List<Tour> tours) {
//		this.tours = tours;
//	}

//	public Tour addTour(Tour tour) {
//		getTours().add(tour);
//		tour.setAgent(this);
//
//		return tour;
//	}
//
//	public Tour removeTour(Tour tour) {
//		getTours().remove(tour);
//		tour.setAgent(null);
//
//		return tour;
//	}

}