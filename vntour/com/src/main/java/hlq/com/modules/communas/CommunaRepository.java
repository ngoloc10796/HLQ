package hlq.com.modules.communas;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hlq.com.entitys.ZCommuna;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface CommunaRepository extends JpaRepository<ZCommuna, Integer> {

	@Query("select s from ZCommuna s where s.districtID = :parentId or :parentId is null")
	public List<ZCommuna> findByParent(@Param("parentId") Integer parentId);
}
