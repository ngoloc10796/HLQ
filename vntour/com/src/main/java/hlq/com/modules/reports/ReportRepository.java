package hlq.com.modules.reports;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hlq.com.entitys.Report;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface ReportRepository extends JpaRepository<Report, Integer> {
	public Report findById(int id);

	@Query("select s from Report s")
	public Page<Report> getAndPaging(Pageable pageRequest);

}
