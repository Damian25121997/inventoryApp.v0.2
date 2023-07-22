package com.project.inventoryApp.service.implement;

import com.project.inventoryApp.entitiy.Category;
import com.project.inventoryApp.repository.ICategoryRepository;
import com.project.inventoryApp.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {

    private final ICategoryRepository categoryRepository;

    @Autowired
    public CategoryService(ICategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category createCategory(Category category) {
        if (category == null) {
            throw new IllegalArgumentException("Category is null");
        }
        return categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(long categoryId){
        if (categoryId < 1) {
            throw new IllegalArgumentException("categoryId is null");
        }
        categoryRepository.deleteById(categoryId);
    }

    @Override
    public Category updateCategory(Category category) {
        if (category == null) {
            throw new IllegalArgumentException("Category is null");
        }
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryById(long categoryId) {
        return categoryRepository.findById(categoryId).orElse(null);
    }

    @Override
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }
}
