package hlq.com.entitys;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * The persistent class for the z_guild database table.
 * 
 */
@Entity
@Table(name = "z_guild")
@NamedQuery(name = "ZGuild.findAll", query = "SELECT z FROM ZGuild z")
public class ZGuild implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;

	private String attachment;

	@Temporal(TemporalType.TIMESTAMP)
	private Date birtday;

	private String email;

	private Integer gender;

	private String name;

	private BigInteger nationalityId;

	private BigInteger nationId;

	private String passport;

	private String phone;

	public ZGuild() {
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

	public Date getBirtday() {
		return this.birtday;
	}

	public void setBirtday(Date birtday) {
		this.birtday = birtday;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getGender() {
		return this.gender;
	}

	public void setGender(Integer gender) {
		this.gender = gender;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigInteger getNationalityId() {
		return this.nationalityId;
	}

	public void setNationalityId(BigInteger nationalityId) {
		this.nationalityId = nationalityId;
	}

	public BigInteger getNationId() {
		return this.nationId;
	}

	public void setNationId(BigInteger nationId) {
		this.nationId = nationId;
	}

	public String getPassport() {
		return this.passport;
	}

	public void setPassport(String passport) {
		this.passport = passport;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

}