package hlq.com.bean;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Aug 7, 2019
 */
public class Top10NationBean {
	private String country;
	private Long total;

	/**
	 * 
	 */
	public Top10NationBean() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @param country
	 * @param total
	 */
	public Top10NationBean(String country, Long total) {
		super();
		this.country = country;
		this.total = total;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Long getTotal() {
		return total;
	}

	public void setTotal(Long total) {
		this.total = total;
	}

}
