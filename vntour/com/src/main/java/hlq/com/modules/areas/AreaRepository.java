package hlq.com.modules.areas;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hlq.com.entitys.ZArea;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface AreaRepository extends JpaRepository<ZArea, Integer> {

	@Query("select s from ZArea s")
	public Page<ZArea> getAndPaging(Pageable pageRequest);
}
