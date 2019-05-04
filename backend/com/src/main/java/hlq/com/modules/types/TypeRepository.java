package hlq.com.modules.types;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hlq.com.entitys.Type;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface TypeRepository extends JpaRepository<Type, Integer> {
	public Type findById(int id);

	@Query("select s from Type s where (s.code like :code or :code is null)"
			+ " AND (s.name like :name or :name is null)"
			+ " AND  (s.description like :description or :description is null)")
	public Page<Type> getAndPaging(@Param("code") String code, @Param("name") String name,
			@Param("description") String description, Pageable pageRequest);

}
