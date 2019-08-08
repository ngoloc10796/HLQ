package hlq.com.modules.provinces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hlq.com.entitys.ZProvince;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface ProvinceRepository extends JpaRepository<ZProvince, Integer> {
	@Query("select s from ZProvince s where s.countryID = :parentId or :parentId is null")
	public List<ZProvince> findByParent(@Param("parentId") Integer parentId);

}
