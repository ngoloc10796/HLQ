package hlq.com.modules.reportDetails;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hlq.com.entitys.ReportDetail;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface ReportDetailRepository extends JpaRepository<ReportDetail, Integer> {
	public ReportDetail findById(int id);

	@Query("select s from ReportDetail s")
	public Page<ReportDetail> getAndPaging(Pageable pageRequest);

	@Query("select s from ReportDetail s where s.reportID = :reportId")
	public ReportDetail findByReportID(@Param("reportId") Integer reportId);
}
