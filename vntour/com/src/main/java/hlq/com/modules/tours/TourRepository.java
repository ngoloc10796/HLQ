package hlq.com.modules.tours;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hlq.com.entitys.Tour;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface TourRepository extends JpaRepository<Tour, Integer> {
	public Tour findById(int id);

	@Query("select s from Tour s where (:agentID is null OR s.agentID = :agentID)")
	public Page<Tour> getAndPaging(Integer agentID, Pageable pageRequest);

	@Query("select count(*) from Tour s")
	public Long totalTour();

	@Query("select count(*) from Tour s where s.type = 3")
	public Long countInteriorTour();

}
