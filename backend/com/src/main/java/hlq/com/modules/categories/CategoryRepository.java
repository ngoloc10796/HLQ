package hlq.com.modules.categories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import hlq.com.entitys.Category;

/**
 * @author loc.nt - Siten
 *
 *         Create date: Apr 26, 2019
 */
public interface CategoryRepository extends JpaRepository<Category, Integer> {
	public Category findById(int id);

	@Query("select s from Category s,Type t where  s.typeId = t.id" + " AND (s.code like :code or :code is null)"
			+ " AND (s.name like :name or :name is null)"
			+ " AND  (s.description like :description or :description is null)"
			+ " AND (s.typeId = :typeId or :typeId is null)" + " AND (t.code = :typeCode or :typeCode is null)")
	public Page<Category> getAndPaging(@Param("code") String code, @Param("name") String name,
			@Param("description") String description, @Param("typeId") Integer typeId,
			@Param("typeCode") String typeCode, Pageable pageRequest);

}
