package hlq.com.modules.communas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hlq.com.bean.ResponseBean;
import hlq.com.commons.BaseController;

@RestController
@RequestMapping("/api/communa")
public class CommunaController extends BaseController {

	@Autowired
	private CommunaService service;

	@GetMapping(value = "")
	public ResponseEntity<ResponseBean> getList(
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "size", required = false, defaultValue = "100") int size,
			@RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
			@RequestParam(value = "sortType", required = false, defaultValue = "asc") String sortType,
			@RequestParam(value = "parentId", required = false) Integer parentId) {
		ResponseBean response = new ResponseBean();
		try {
			response.setData(service.findAll(parentId));
			return response(response);
		} catch (Exception e) {
			return responseError(response, e.getMessage());
		}
	}
}