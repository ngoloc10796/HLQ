package hlq.com.modules.provinces;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hlq.com.entitys.ZProvince;

@Service
public class ProvinceService {
	@Autowired
	private ProvinceRepository repo;

	public List<ZProvince> findAll() {
		return repo.findAll();
	}

	public List<ZProvince> findAll(Integer parentId) {
		return repo.findByParent(parentId);
	}
}