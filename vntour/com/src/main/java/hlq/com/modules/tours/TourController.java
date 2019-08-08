package hlq.com.modules.tours;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import hlq.com.bean.ResponseBean;
import hlq.com.commons.BaseController;
import hlq.com.entitys.Tour;

@RestController
@RequestMapping("/api/tour")
public class TourController extends BaseController {

	@Autowired
	private TourService service;

	@GetMapping(value = "")
	public ResponseEntity<ResponseBean> getList(
			@RequestParam(value = "page", required = false, defaultValue = "0") int page,
			@RequestParam(value = "size", required = false, defaultValue = "100") int size,
			@RequestParam(value = "sortBy", required = false, defaultValue = "id") String sortBy,
			@RequestParam(value = "sortType", required = false, defaultValue = "asc") String sortType) {
		ResponseBean response = new ResponseBean();
		try {
			response.setData(service.getPage(page, size, sortBy, sortType));
			return response(response);
		} catch (Exception e) {
			return responseError(response, e.getMessage());
		}
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<ResponseBean> getDetail(@PathVariable Integer id) {
		ResponseBean response = new ResponseBean();
		try {
			service.findById(id, response);
			return response(response);
		} catch (Exception e) {
			return responseError(response, e.getMessage());
		}
	}

	@PostMapping(value = "")
	public ResponseEntity<ResponseBean> create(@RequestBody Tour data) {
		ResponseBean response = new ResponseBean();
		try {
			service.save(data, response);
			return response(response);
		} catch (Exception e) {
			return responseError(response, e.getMessage());
		}
	}

	@PutMapping(value = "")
	public ResponseEntity<ResponseBean> update(@RequestBody Tour data) {
		ResponseBean response = new ResponseBean();
		try {
			service.update(data, response);
			return response(response);
		} catch (Exception e) {
			return responseError(response, e.getMessage());
		}
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<ResponseBean> delete(@PathVariable Integer id) {
		ResponseBean response = new ResponseBean();
		try {
			service.delete(id, response);
			return response(response);
		} catch (Exception e) {
			return responseError(response, e.getMessage());
		}
	}
}