package hlq.com.modules.registers;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import hlq.com.entitys.Register;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface RegisterRepository extends JpaRepository<Register, Integer> {
	public Register findById(int id);

	@Query("select s from Register s")
	public Page<Register> getAndPaging(Pageable pageRequest);

}
