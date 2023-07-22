package com.project.inventoryApp.service;

import com.project.inventoryApp.entitiy.Product;

import java.util.List;

public interface IProductService {
    Product createProduct(Product product);
    void deleteProduct(long productId);
    Product updateProduct(Product product);
    Product getProductById(long productId);
    List<Product> getAllProducts();
    List<Product> getProductsByCategory(long categoryId);

    List<Product> getProductsBySupplier(long supplierId);
}
