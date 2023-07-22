package com.project.inventoryApp.service;

import com.project.inventoryApp.entitiy.Category;

import java.util.List;

public interface ICategoryService {
    Category createCategory(Category category);
    void deleteCategory(long categoryId);
    Category updateCategory(Category category);
    Category getCategoryById(long categoryId);
    List<Category> getAllCategories();
}
