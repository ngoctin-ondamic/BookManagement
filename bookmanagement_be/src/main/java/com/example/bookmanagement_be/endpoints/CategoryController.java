package com.example.bookmanagement_be.endpoints;

import com.example.bookmanagement_be.entities.Category;
import com.example.bookmanagement_be.services.category.CategoryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/category")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000/")
public class CategoryController {

    private final CategoryServiceImpl categoryService;

    @PostMapping("/save")
    public ResponseEntity<Category> registerCategory(@RequestBody Category category) {
        try {
            return ResponseEntity.ok().body(categoryService.createCategory(category));
        } catch (Exception exception) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAllCategories(){
        List<Category> categories = categoryService.getAllCAtegories();
        if(categories == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }else{
            return ResponseEntity.ok().body(categories);
        }
    }


}
