package hlq.com.modules.countries;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hlq.com.entitys.ZCountry;

@Service
public class CountryService {
	@Autowired
	private CountryRepository repo;

	public List<ZCountry> findAll() {
		return repo.findAll();
	}

	public List<ZCountry> findAll(Integer parentId) {
		return repo.findByParent(parentId);
	}
}