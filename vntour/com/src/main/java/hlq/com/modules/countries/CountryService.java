package hlq.com.modules.countries;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import hlq.com.commons.Contants;
import hlq.com.entitys.ZCountry;

@Service
public class CountryService {
	@Autowired
	private CountryRepository repo;

	public List<ZCountry> findAll() {
		return repo.findAll();
	}

	public Page<ZCountry> getPage(Integer parentId, int page, int size, String sortBy, String sortType) {
		Sort.Order order = new Sort.Order(
				Contants.ORDER_ASC.equalsIgnoreCase(sortType) ? Direction.ASC : Direction.DESC, sortBy).ignoreCase();

		return repo.getAndPaging(parentId, new PageRequest(page, size, new Sort(order)));
	}
}