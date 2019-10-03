package hlq.com.entitys;

import java.io.Serializable;
import java.math.BigInteger;

import javax.persistence.Column;
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
 * The persistent class for the z_schedule database table.
 * 
 */
@Entity
@Table(name = "z_schedule")
@NamedQuery(name = "ZSchedule.findAll", query = "SELECT z FROM ZSchedule z")
public class ZSchedule implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;

	private String content;

	private String note;

	private Integer order;

	@Column(name = "tour_id")
	private BigInteger tourId;
	// bi-directional many-to-one association to Tour
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "tour_id", insertable = false, updatable = false)
	private Tour tour;

	public ZSchedule() {
	}

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
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

	public BigInteger getTourId() {
		return tourId;
	}

	public void setTourId(BigInteger tourId) {
		this.tourId = tourId;
	}

//	public Tour getTour() {
//		return this.tour;
//	}
//
//	public void setTour(Tour tour) {
//		this.tour = tour;
//	}

}