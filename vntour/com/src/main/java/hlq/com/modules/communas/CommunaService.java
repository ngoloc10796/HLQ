package hlq.com.modules.communas;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hlq.com.entitys.ZCommuna;

@Service
public class CommunaService {
	@Autowired
	private CommunaRepository repo;

	public List<ZCommuna> findAll() {
		return repo.findAll();
	}
	public List<ZCommuna> findAll(Integer parentId) {
		return repo.findByParent(parentId);
	}
}