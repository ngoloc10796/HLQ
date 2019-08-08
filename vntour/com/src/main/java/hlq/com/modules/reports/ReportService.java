package hlq.com.modules.reports;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import hlq.com.bean.ResponseBean;
import hlq.com.bean.Top10NationBean;
import hlq.com.commons.Contants;
import hlq.com.entitys.Report;
import hlq.com.entitys.ReportDetail;
import hlq.com.modules.clients.ClientRepository;
import hlq.com.modules.reportDetails.ReportDetailRepository;
import hlq.com.modules.tours.TourRepository;
import net.minidev.json.JSONArray;;

@Service
public class ReportService {
	@Autowired
	private ReportRepository repo;
	@Autowired
	private TourRepository tourRepo;
	@Autowired
	private ClientRepository clientRepo;
	@Autowired
	private ReportDetailRepository reportDetailrepo;

	public List<Report> findAll() {
		return repo.findAll();
	}

	public void findById(int id, ResponseBean response) {
		Report data = repo.findById(id);
		if (data == null) {
			response.setCode(HttpStatus.NO_CONTENT);
		} else {
			response.setData(repo.findById(id));
		}
	}

	public void getReportDetail(int id, ResponseBean response) {
		ReportDetail data = reportDetailrepo.findByReportID(id);
		if (data == null) {
			response.setCode(HttpStatus.NO_CONTENT);
		} else {
			response.setData(data);
		}
	}

	public void save(Report data, ResponseBean response) {
		Report dataSave = null;
		ReportDetail reportDetailSave = null;
		try {

			dataSave = repo.save(data);
			Integer vietNamId = 1;
			ReportDetail reportDetail = new ReportDetail();
			reportDetail.setTotalTour(tourRepo.totalTour().intValue());
			reportDetail.setTotalClient(clientRepo.totalClient().intValue());
			reportDetail.setFromVietNam(clientRepo.countToCountry(vietNamId).intValue());
			reportDetail.setToVietNam(clientRepo.countFromCountry(vietNamId).intValue());
			reportDetail.setInteriorTour(tourRepo.countInteriorTour().intValue());
			List<Top10NationBean> top10 = clientRepo.top10Nation();
			if (top10.size() > 10) {
				top10.subList(0, 10);
			}
			ObjectMapper objectMapper = new ObjectMapper();
			try {
				String json = objectMapper.writeValueAsString(top10);
				reportDetail.setTop10byNation(json);
				System.out.println("json = " + json);
			} catch (JsonProcessingException e) {
				e.printStackTrace();
//		        fail();
			}
//			reportDetail.setTop10byNation(b.);
			reportDetail.setReportID(dataSave.getId());
			reportDetailSave = reportDetailrepo.save(reportDetail);
			response.setData(dataSave);
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			if (dataSave != null) {
				repo.delete(dataSave);
			}
			if (reportDetailSave != null) {
				reportDetailrepo.delete(reportDetailSave);
			}
		}
	}

	public void update(Report data, ResponseBean response) {
		response.setData(repo.save(data));
	}

	public Page<Report> getPage(int page, int size, String sortBy, String sortType) {
		Sort.Order order = new Sort.Order(
				Contants.ORDER_ASC.equalsIgnoreCase(sortType) ? Direction.ASC : Direction.DESC, sortBy).ignoreCase();

		return repo.getAndPaging(new PageRequest(page, size, new Sort(order)));
	}

	public void delete(int id, ResponseBean response) {
		Report data = repo.findById(id);
		if (data == null) {
			response.setCode(HttpStatus.NO_CONTENT);
			response.setMessage("Không tìm thấy dữ liệu muốn xóa!");
		} else {
			repo.delete(data);
			response.setData(data);
		}
	}
}