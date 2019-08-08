package hlq.com.modules.areas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hlq.com.entitys.ZArea;

@Service
public class AreaService {
	@Autowired
	private AreaRepository repo;

	public List<ZArea> findAll() {
		return repo.findAll();
	}
	
}