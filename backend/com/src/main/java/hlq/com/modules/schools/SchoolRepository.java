package hlq.com.modules.schools;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hlq.com.entitys.School;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface SchoolRepository extends JpaRepository<School, Integer> {
	public School findById(int id);

	@Query("select s from School s")
	public Page<School> getAndPaging(Pageable pageRequest);

}
