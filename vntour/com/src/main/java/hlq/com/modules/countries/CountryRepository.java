package hlq.com.modules.countries;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hlq.com.entitys.ZCountry;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface CountryRepository extends JpaRepository<ZCountry, Integer> {

	@Query("select s from ZCountry s where s.areaID = :parentId or :parentId is null")
	public Page<ZCountry> getAndPaging(@Param("parentId") Integer parentId, Pageable pageRequest);
}
