package hlq.com.modules.schedules;

import java.math.BigInteger;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hlq.com.entitys.ZSchedule;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface ScheduleRepository extends JpaRepository<ZSchedule, Integer> {
	public ZSchedule findById(int id);

	@Query("select s from ZSchedule s where s.tourId = :tourId or :tourId is null")
	public Page<ZSchedule> getAndPaging(@Param("tourId") BigInteger tourId, Pageable pageRequest);

	@Query("select count(*) from ZSchedule s")
	public Long totalClient();

}
