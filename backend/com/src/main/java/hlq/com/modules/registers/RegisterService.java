package hlq.com.modules.registers;

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
import hlq.com.entitys.Register;

@Service
public class RegisterService {
	@Autowired
	private RegisterRepository repo;

	public List<Register> findAll() {
		return repo.findAll();
	}

	public void findById(int id, ResponseBean response) {
		Register data = repo.findById(id);
		if (data == null) {
			response.setCode(HttpStatus.NO_CONTENT);
		} else {
			response.setData(repo.findById(id));
		}
	}

	public void save(Register data, ResponseBean response) {
		response.setData(repo.save(data));
	}

	public void update(Register data, ResponseBean response) {
		response.setData(repo.save(data));
	}

	public Page<Register> getPage(int page, int size, String sortBy, String sortType) {
		Sort.Order order = new Sort.Order(
				Contants.ORDER_ASC.equalsIgnoreCase(sortType) ? Direction.ASC : Direction.DESC, sortBy).ignoreCase();

		return repo.getAndPaging(new PageRequest(page, size, new Sort(order)));
	}

	public void delete(int id, ResponseBean response) {
		Register data = repo.findById(id);
		if (data == null) {
			response.setCode(HttpStatus.NO_CONTENT);
			response.setMessage("Không tìm thấy dữ liệu muốn xóa!");
		} else {
			repo.delete(data);
			response.setData(data);
		}
	}
}