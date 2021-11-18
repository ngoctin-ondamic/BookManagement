package com.example.bookmanagement_be.services.category;

import com.example.bookmanagement_be.entities.Category;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryService {

    boolean existsByName(String name);
    Category createCategory(Category category);
    List<Category> getAllCAtegories();

}
