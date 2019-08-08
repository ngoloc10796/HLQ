package hlq.com.bean;

import org.springframework.http.HttpStatus;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 27, 2019
 */
public class ResponseBean {
	private Object data;
	private String message;
	private String code = HttpStatus.OK.value() + "";

	/**
	 * 
	 */
	public ResponseBean() {
		// TODO Auto-generated constructor stub
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getCode() {
		return code;
	}

	public void setCode(HttpStatus httpStatus) {
		this.code = httpStatus.value() + "";
	}

	public void setCode(String code) {
		this.code = code;
	}

}
