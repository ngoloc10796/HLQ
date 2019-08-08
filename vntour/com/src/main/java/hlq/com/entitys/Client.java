package hlq.com.entitys;

import java.io.Serializable;
import java.math.BigInteger;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;


/**
 * The persistent class for the client database table.
 * 
 */
@Entity
@NamedQuery(name="Client.findAll", query="SELECT c FROM Client c")
public class Client implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private int age;

	private String code;

	private String docNum;

	private int docType;

	private String family;

	private String name;

	private BigInteger nationID;

	private String note;

	private BigInteger tourID;
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name = "tourID", insertable = false, updatable = false)
	private Tour tour;

	//bi-directional many-to-one association to ZCountry
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="nationID", insertable = false, updatable = false)
	private ZCountry ZCountry;
	public Client() {
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAge() {
		return this.age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDocNum() {
		return this.docNum;
	}

	public void setDocNum(String docNum) {
		this.docNum = docNum;
	}

	public int getDocType() {
		return this.docType;
	}

	public void setDocType(int docType) {
		this.docType = docType;
	}

	public String getFamily() {
		return this.family;
	}

	public void setFamily(String family) {
		this.family = family;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public BigInteger getNationID() {
		return this.nationID;
	}

	public void setNationID(BigInteger nationID) {
		this.nationID = nationID;
	}

	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public BigInteger getTourID() {
		return this.tourID;
	}

	public void setTourID(BigInteger tourID) {
		this.tourID = tourID;
	}

}