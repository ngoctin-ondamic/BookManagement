package com.example.bookmanagement_be.repos.category;

import com.example.bookmanagement_be.entities.Category;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class CustomCategoryRepositoryImpl implements CustomCategoryRepository {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public boolean existByname(String name) {
        String queryStatement = "SELECT * FROM categories WHERE name = ?";
        Query query = entityManager.createNativeQuery(queryStatement, Category.class);
        query.setParameter(1,name);
        List<Category> results = query.getResultList();
        if(results != null || !results.isEmpty()){
            return true;
        }
        return false;
    }
}
