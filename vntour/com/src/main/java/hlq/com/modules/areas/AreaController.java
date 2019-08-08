package hlq.com.modules.areas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hlq.com.bean.ResponseBean;
import hlq.com.commons.BaseController;

@RestController
@RequestMapping("/api/area")
public class AreaController extends BaseController {

	@Autowired
	private AreaService service;

	@GetMapping(value = "")
	public ResponseEntity<ResponseBean> getList(
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "size", required = false, defaultValue = "100") int size,
			@RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
			@RequestParam(value = "sortType", required = false, defaultValue = "asc") String sortType) {
		ResponseBean response = new ResponseBean();
		try {
			response.setData(service.findAll());
			return response(response);
		} catch (Exception e) {
			return responseError(response, e.getMessage());
		}
	}


}