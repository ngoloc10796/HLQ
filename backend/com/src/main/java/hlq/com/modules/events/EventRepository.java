package hlq.com.modules.events;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hlq.com.entitys.Event;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface EventRepository extends JpaRepository<Event, Integer> {
	public Event findById(int id);

	@Query("select s from Event s")
	public Page<Event> getAndPaging(Pageable pageRequest);

}
