package hlq.com.entitys;

import java.io.Serializable;

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
 * The persistent class for the report_detail database table.
 * 
 */
@Entity
@Table(name = "report_detail")
@NamedQuery(name = "ReportDetail.findAll", query = "SELECT r FROM ReportDetail r")
public class ReportDetail implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "from_viet_nam")
	private Integer fromVietNam;

	@Column(name = "interior_tour")
	private Integer interiorTour;

	private Integer reportID;

	@Column(name = "to_viet_nam")
	private Integer toVietNam;

	@Column(name = "top10by_nation")
	private String top10byNation;

	@Column(name = "total_client")
	private Integer totalClient;

	@Column(name = "total_tour")
	private Integer totalTour;

	// bi-directional many-to-one association to Report
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "reportID", insertable = false, updatable = false)
	private Report report;

	public ReportDetail() {
	}

	public Integer getFromVietNam() {
		return fromVietNam;
	}

	public void setFromVietNam(Integer fromVietNam) {
		this.fromVietNam = fromVietNam;
	}

	public Integer getInteriorTour() {
		return interiorTour;
	}

	public void setInteriorTour(Integer interiorTour) {
		this.interiorTour = interiorTour;
	}

	public Integer getReportID() {
		return reportID;
	}

	public void setReportID(Integer reportID) {
		this.reportID = reportID;
	}

	public Integer getToVietNam() {
		return toVietNam;
	}

	public void setToVietNam(Integer toVietNam) {
		this.toVietNam = toVietNam;
	}

	public String getTop10byNation() {
		return top10byNation;
	}

	public void setTop10byNation(String top10byNation) {
		this.top10byNation = top10byNation;
	}

	public Integer getTotalClient() {
		return totalClient;
	}

	public void setTotalClient(Integer totalClient) {
		this.totalClient = totalClient;
	}

	public Integer getTotalTour() {
		return totalTour;
	}

	public void setTotalTour(Integer totalTour) {
		this.totalTour = totalTour;
	}

//	public Report getReport() {
//		return report;
//	}
//
//	public void setReport(Report report) {
//		this.report = report;
//	}

}