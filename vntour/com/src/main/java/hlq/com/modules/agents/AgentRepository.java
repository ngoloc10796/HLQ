package hlq.com.modules.agents;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hlq.com.entitys.Agent;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface AgentRepository extends JpaRepository<Agent, Integer> {
	public Agent findById(int id);

	@Query("select s from Agent s")
	public Page<Agent> getAndPaging(Pageable pageRequest);

}
