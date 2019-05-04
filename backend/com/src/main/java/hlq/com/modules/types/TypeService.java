package hlq.com.modules.types;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import hlq.com.bean.ResponseBean;
import hlq.com.commons.Contants;
import hlq.com.entitys.Type;

@Service
public class TypeService {
	@Autowired
	private TypeRepository repo;

	public List<Type> findAll() {
		return repo.findAll();
	}

	public void findById(int id, ResponseBean response) {
		Type data = repo.findById(id);
		if (data == null) {
			response.setCode(HttpStatus.NO_CONTENT);
		} else {
			response.setData(repo.findById(id));
		}
	}

	public void save(Type data, ResponseBean response) {
		response.setData(repo.save(data));
	}

	public void update(Type data, ResponseBean response) {
		response.setData(repo.save(data));
	}

	public Page<Type> getPage(int page, int size, String sortBy, String sortType, String name, String code,
			String description) {
		Sort.Order order = new Sort.Order(
				Contants.ORDER_ASC.equalsIgnoreCase(sortType) ? Direction.ASC : Direction.DESC, sortBy).ignoreCase();

		return repo.getAndPaging(code, name, description, new PageRequest(page, size, new Sort(order)));
	}

	public void delete(int id, ResponseBean response) {
		Type data = repo.findById(id);
		if (data == null) {
			response.setCode(HttpStatus.NO_CONTENT);
			response.setMessage("Không tìm thấy dữ liệu muốn xóa!");
		} else {
			repo.delete(data);
			response.setData(data);
		}
	}
}