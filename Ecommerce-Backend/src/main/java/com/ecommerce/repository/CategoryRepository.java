package com.ecommerce.repository;

import com.ecommerce.exception.CategoryNotFoundException;
import com.ecommerce.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category,Long> {
    public Optional<Category> findByName(String name) throws CategoryNotFoundException;

    @Query("SELECT c FROM Category c WHERE c.name=:name AND c.parentCategory.name=:parentCategoryName")
    public Optional<Category> findByNameAndParent(@Param("name") String name,
                                        @Param("parentCategoryName") String parentCategoryName);
}
