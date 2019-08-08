package hlq.com.modules.clients;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hlq.com.bean.Top10NationBean;
import hlq.com.entitys.Client;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface ClientRepository extends JpaRepository<Client, Integer> {
	public Client findById(int id);

	@Query("select s from Client s")
	public Page<Client> getAndPaging(Pageable pageRequest);

	@Query("select count(*) from Client s")
	public Long totalClient();

	@Query("select count(*) from Client s where s.tour.ZCommuna1.ZDistrict.ZProvince.ZCountry.id = :countryId")
	public Long countToCountry(@Param("countryId") Integer countryId);

	@Query("select count(*) from Client s where s.tour.ZCommuna2.ZDistrict.ZProvince.ZCountry.id = :countryId")
	public Long countFromCountry(@Param("countryId") Integer countryId);
	
	@Query("select new hlq.com.bean.Top10NationBean(s.ZCountry.name,count(*)) from Client s group by s.ZCountry.name,s.nationID order by count(*) DESC")
	public List<Top10NationBean> top10Nation();
	
}
