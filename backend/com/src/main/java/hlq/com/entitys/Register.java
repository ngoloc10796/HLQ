package hlq.com.entitys;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

/**
 * The persistent class for the register database table.
 * 
 */
@Entity
@NamedQuery(name = "Register.findAll", query = "SELECT r FROM Register r")
public class Register implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;

	private String email;

	@Column(name = "aspiration1_id")
	private Integer aspirations1Id;
	@Transient
	private String aspirations1;

	@Column(name = "aspiration2_id")
	private Integer aspirations2Id;

	@Transient
	private String aspirations2;

	@Temporal(TemporalType.TIMESTAMP)
	private Date birthday;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "graduation_year")
	private Date graduationYear;

	@Column(name = "link_facebook")
	private String linkFacebook;

	@Column(name = "mailing_address")
	private String mailingAddress;

	@Column(name = "people_id")
	private String peopleId;

	@Column(name = "permanent_residence")
	private String permanentResidence;

	private String phone;

	@Column(name = "phone_answered")
	private String phoneAnswered;

	private String schools;

	private double score;

	@Column(name = "want_to_apply")
	private String wantToApply;

	@Column(name = "you_graduated")
	private String youGraduated;

	@Column(name = "province_id")
	private Integer provinceId;
	@Transient
	private String province;
	@Column(name = "district_id")
	private Integer districtId;
	@Transient
	private String district;
	@Column(name = "commune_id")
	private Integer communeId;
	@Transient
	private String commune;
	// bi-directional many-to-one association to Category
	@ManyToOne
	@JoinColumn(name = "province_id", insertable = false, updatable = false)
	private Category category1;

	// bi-directional many-to-one association to Category
	@ManyToOne
	@JoinColumn(name = "district_id", insertable = false, updatable = false)
	private Category category2;

	// bi-directional many-to-one association to Category
	@ManyToOne
	@JoinColumn(name = "commune_id", insertable = false, updatable = false)
	private Category category3;

	@ManyToOne
	@JoinColumn(name = "aspiration1_id", insertable = false, updatable = false)
	private Category category4;

	// bi-directional many-to-one association to Category
	@ManyToOne
	@JoinColumn(name = "aspiration2_id", insertable = false, updatable = false)
	private Category category5;

	public Register() {
	}

	public String getProvince() {
		if (category1 == null)
			return null;
		return category1.getName();
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getDistrict() {
		if (category2 == null)
			return null;
		return category2.getName();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getCommune() {
		if (category3 == null)
			return null;
		return category3.getName();
	}

	public void setCommune(String commune) {
		this.commune = commune;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getAspirations1Id() {
		return aspirations1Id;
	}

	public void setAspirations1Id(Integer aspirations1Id) {
		this.aspirations1Id = aspirations1Id;
	}

	public String getAspirations1() {
		if (category4 == null)
			return null;
		return category4.getName();

	}

	public void setAspirations1(String aspirations1) {
		this.aspirations1 = aspirations1;
	}

	public Integer getAspirations2Id() {
		return aspirations2Id;
	}

	public void setAspirations2Id(Integer aspirations2Id) {
		this.aspirations2Id = aspirations2Id;
	}

	public String getAspirations2() {
		if (category5 == null)
			return null;
		return category5.getName();

	}

	public void setAspirations2(String aspirations2) {
		this.aspirations2 = aspirations2;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public Date getGraduationYear() {
		return graduationYear;
	}

	public void setGraduationYear(Date graduationYear) {
		this.graduationYear = graduationYear;
	}

	public String getLinkFacebook() {
		return this.linkFacebook;
	}

	public void setLinkFacebook(String linkFacebook) {
		this.linkFacebook = linkFacebook;
	}

	public String getMailingAddress() {
		return this.mailingAddress;
	}

	public void setMailingAddress(String mailingAddress) {
		this.mailingAddress = mailingAddress;
	}

	public String getPeopleId() {
		return this.peopleId;
	}

	public void setPeopleId(String peopleId) {
		this.peopleId = peopleId;
	}

	public String getPermanentResidence() {
		return this.permanentResidence;
	}

	public void setPermanentResidence(String permanentResidence) {
		this.permanentResidence = permanentResidence;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPhoneAnswered() {
		return this.phoneAnswered;
	}

	public void setPhoneAnswered(String phoneAnswered) {
		this.phoneAnswered = phoneAnswered;
	}

	public String getSchools() {
		return this.schools;
	}

	public void setSchools(String schools) {
		this.schools = schools;
	}

	public double getScore() {
		return this.score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	public String getWantToApply() {
		return this.wantToApply;
	}

	public void setWantToApply(String wantToApply) {
		this.wantToApply = wantToApply;
	}

	public String getYouGraduated() {
		return this.youGraduated;
	}

	public void setYouGraduated(String youGraduated) {
		this.youGraduated = youGraduated;
	}

	public Integer getProvinceId() {
		return provinceId;
	}

	public void setProvinceId(Integer provinceId) {
		this.provinceId = provinceId;
	}

	public Integer getDistrictId() {
		return districtId;
	}

	public void setDistrictId(Integer districtId) {
		this.districtId = districtId;
	}

	public Integer getCommuneId() {
		return communeId;
	}

	public void setCommuneId(Integer communeId) {
		this.communeId = communeId;
	}

//	public Category getCategory1() {
//		return this.category1;
//	}
//
//	public void setCategory1(Category category1) {
//		this.category1 = category1;
//	}
//
//	public Category getCategory2() {
//		return this.category2;
//	}
//
//	public void setCategory2(Category category2) {
//		this.category2 = category2;
//	}
//
//	public Category getCategory3() {
//		return this.category3;
//	}
//
//	public void setCategory3(Category category3) {
//		this.category3 = category3;
//	}

}