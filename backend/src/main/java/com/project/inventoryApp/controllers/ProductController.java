package com.project.inventoryApp.controllers;

import com.project.inventoryApp.entitiy.Product;
import com.project.inventoryApp.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/product")
public class ProductController {

    private final IProductService productService;

    @Autowired
    public ProductController(IProductService productService) {
        this.productService = productService;
    }

    @PostMapping(path = "/create")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.createProduct(product), HttpStatus.CREATED);
    }

    @GetMapping(path = "/get/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable long productId) {
        return new ResponseEntity<>(productService.getProductById(productId), HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/{productId}")
    public ResponseEntity<Boolean> deleteProduct(@PathVariable long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>(true, HttpStatus.ACCEPTED);
    }

    @PutMapping(path = "/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.updateProduct(product), HttpStatus.ACCEPTED);
    }

    @GetMapping(path = "/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping(path = "/get/by-category/{categoryId}")
    public ResponseEntity<List<Product>> getAllProductsByCategory(@PathVariable long categoryId) {
        return new ResponseEntity<>(productService.getProductsByCategory(categoryId), HttpStatus.OK);
    }

    @GetMapping(path = "/get/by-supplier/{supplierId}")
    public ResponseEntity<List<Product>> getAllProductsBySupplier(@PathVariable long supplierId) {
        return new ResponseEntity<>(productService.getProductsBySupplier(supplierId),
                HttpStatus.OK);
    }
}
