package hlq.com.modules.specializes;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hlq.com.entitys.Specialize;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface SpecializeRepository extends JpaRepository<Specialize, Integer> {
	public Specialize findById(int id);

	@Query("select s from Specialize s")
	public Page<Specialize> getAndPaging(Pageable pageRequest);

}
