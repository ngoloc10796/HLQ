package hlq.com.modules.countries;

import java.util.List;

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
	public List<ZCountry> findByParent(@Param("parentId") Integer parentId);
}
