package hlq.com.modules.communas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import hlq.com.commons.Contants;
import hlq.com.entitys.ZCommuna;

@Service
public class CommunaService {
	@Autowired
	private CommunaRepository repo;

	public List<ZCommuna> findAll() {
		return repo.findAll();
	}

//	public List<ZCommuna> findAll(Integer parentId) {
//		return repo.findByParent(parentId);
//	}

	public Page<ZCommuna> getPage(Integer parentId, int page, int size, String sortBy, String sortType) {
		Sort.Order order = new Sort.Order(
				Contants.ORDER_ASC.equalsIgnoreCase(sortType) ? Direction.ASC : Direction.DESC, sortBy).ignoreCase();

		return repo.getAndPaging(parentId, new PageRequest(page, size, new Sort(order)));
	}
}