package hlq.com.bean;

/**
 * @author loc.nt - Siten
 *
 * Create date: Aug 7, 2019
 */
public class ReportDetailBean {
	private Integer totalClient;

	private Integer totalTour;

	/**
	 * 
	 */
	public ReportDetailBean() {
		// TODO Auto-generated constructor stub
	}
	
	/**
	 * @param totalClient
	 * @param totalTour
	 */
	public ReportDetailBean(Integer totalClient, Integer totalTour) {
		super();
		this.totalClient = totalClient;
		this.totalTour = totalTour;
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
	
	
}
