package hlq.com.modules.districts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hlq.com.entitys.ZDistrict;

@Service
public class DistrictService {
	@Autowired
	private DistrictRepository repo;

	public List<ZDistrict> findAll() {
		return repo.findAll();
	}

	public List<ZDistrict> findAll(Integer parentId) {
		return repo.findByParent(parentId);
	}
}