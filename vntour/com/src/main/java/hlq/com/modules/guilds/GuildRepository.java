package hlq.com.modules.guilds;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hlq.com.entitys.ZGuild;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface GuildRepository extends JpaRepository<ZGuild, Integer> {
	public ZGuild findById(int id);

	@Query("select s from ZGuild s")
	public Page<ZGuild> getAndPaging(Pageable pageRequest);

//	@Query("select count(*) from Tour s")
//	public Long totalTour();
//
//	@Query("select count(*) from Tour s where s.type = 3")
//	public Long countInteriorTour();

}
