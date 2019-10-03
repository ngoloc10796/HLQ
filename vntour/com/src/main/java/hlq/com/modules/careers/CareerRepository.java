package hlq.com.modules.careers;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hlq.com.entitys.ZCareer;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface CareerRepository extends JpaRepository<ZCareer, Integer> {

	@Query("select s from ZCareer s")
	public Page<ZCareer> getAndPaging(Pageable pageRequest);
}
