package com.project.inventoryApp.controllers;

import com.project.inventoryApp.entitiy.Category;
import com.project.inventoryApp.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/category")
public class CategoryController {

    private final ICategoryService categoryService;

    @Autowired
    public CategoryController(ICategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @PostMapping(path = "/create")
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        return new ResponseEntity<>(categoryService.createCategory(category), HttpStatus.CREATED);
    }

    @GetMapping(path = "/get/{categoryId}")
    public ResponseEntity<Category> getCategoryById(@PathVariable long categoryId) {
        return new ResponseEntity<>(categoryService.getCategoryById(categoryId), HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/{categoryId}")
    public ResponseEntity<Boolean> deleteCategory(@PathVariable long categoryId) {
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>(true, HttpStatus.ACCEPTED);
    }

    @PutMapping(path = "/update")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category) {
        return new ResponseEntity<>(categoryService.updateCategory(category), HttpStatus.OK);
    }

    @GetMapping(path = "/categories")
    public ResponseEntity<List<Category>> getAllCategories(){
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }

}
