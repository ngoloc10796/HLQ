package hlq.com.modules.districts;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hlq.com.entitys.ZDistrict;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface DistrictRepository extends JpaRepository<ZDistrict, Integer> {

	@Query("select s from ZDistrict s where s.provinceID = :parentId or :parentId is null")
	public Page<ZDistrict> getAndPaging(@Param("parentId") Integer parentId, Pageable pageRequest);
}
