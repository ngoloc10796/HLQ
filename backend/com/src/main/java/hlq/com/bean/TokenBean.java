package hlq.com.bean;

/**
 * @author loc.nt - Siten
 *
 *         Create date: May 5, 2019
 */
public class TokenBean {
	private String username;
	private String token;
	private int expireTime;

	/**
	 * 
	 */
	public TokenBean() {
		// TODO Auto-generated constructor stub
	}

	public String getToken() {
		return token;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public int getExpireTime() {
		return expireTime;
	}

	public void setExpireTime(int expireTime) {
		this.expireTime = expireTime;
	}

}
