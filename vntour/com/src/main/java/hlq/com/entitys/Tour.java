package hlq.com.entitys;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * The persistent class for the tour database table.
 * 
 */
@Entity
@NamedQuery(name = "Tour.findAll", query = "SELECT t FROM Tour t")
public class Tour implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private Integer agentID;

	private String code;

	@Lob
	private String content;

	@Temporal(TemporalType.TIMESTAMP)
	private Date finishAt;

	private String name;

	private String note;

	@Temporal(TemporalType.TIMESTAMP)
	private Date startAt;

	private int status;

	private String files;

	private int type;
	@Column(name = "finish_stay")
	private Integer finishStay;

	@Column(name = "start_stay")
	private Integer startStay;
	// bi-directional many-to-one association to ZCommuna
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "finish_stay", insertable = false, updatable = false)
	private ZCommuna ZCommuna1;

	// bi-directional many-to-one association to ZCommuna
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "start_stay", insertable = false, updatable = false)
	private ZCommuna ZCommuna2;

	// bi-directional many-to-one association to Agent
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "agentID", insertable = false, updatable = false)
	private Agent agent;

	public Tour() {
	}

	public String getFiles() {
		return files;
	}

	public void setFiles(String files) {
		this.files = files;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Integer getAgentID() {
		return this.agentID;
	}

	public Integer getFinishStay() {
		return finishStay;
	}

	public void setFinishStay(Integer finishStay) {
		this.finishStay = finishStay;
	}

	public Integer getStartStay() {
		return startStay;
	}

	public void setStartStay(Integer startStay) {
		this.startStay = startStay;
	}

	public void setAgentID(Integer agentID) {
		this.agentID = agentID;
	}

	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getFinishAt() {
		return this.finishAt;
	}

	public void setFinishAt(Date finishAt) {
		this.finishAt = finishAt;
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

	public Date getStartAt() {
		return this.startAt;
	}

	public void setStartAt(Date startAt) {
		this.startAt = startAt;
	}

	public int getStatus() {
		return this.status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getType() {
		return this.type;
	}

	public void setType(int type) {
		this.type = type;
	}

}