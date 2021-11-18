package com.example.bookmanagement_be.services.category;

import com.example.bookmanagement_be.entities.Category;
import com.example.bookmanagement_be.repos.category.CategoryRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepo categoryRepo;

    @Override
    public boolean existsByName(String name) {
        return categoryRepo.existByname(name);
    }

    @Override
    public Category createCategory(Category category) {
        if(existsByName(category.getName())){
            try {
                log.info("Create Successfully !");
                categoryRepo.save(category);
                return category;
            }catch (Exception exception){
                log.info("Create Failed !");
            }
        }
        return null;
    }

    @Override
    public List<Category> getAllCAtegories() {
       List<Category> categories = categoryRepo.findAll();
       if(categories.isEmpty() || categories == null){
           return null;
       }
        return categories;
    }
}
