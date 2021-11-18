package com.example.bookmanagement_be.repos.category;

import com.example.bookmanagement_be.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository<Category,Long>,CustomCategoryRepository {
}
