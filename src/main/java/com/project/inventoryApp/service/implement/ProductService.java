package com.project.inventoryApp.service.implement;

import com.project.inventoryApp.entitiy.Product;
import com.project.inventoryApp.entitiy.ProductCreationHistory;
import com.project.inventoryApp.repository.IProductCreationHistoryRepository;
import com.project.inventoryApp.repository.IProductRepository;
import com.project.inventoryApp.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class ProductService implements IProductService {

    private final IProductRepository productRepository;
    private final IProductCreationHistoryRepository productCreationHistoryRepository;

    @Autowired
    public ProductService(IProductRepository productRepository, IProductCreationHistoryRepository productCreationHistoryRepository) {
        this.productRepository = productRepository;
        this.productCreationHistoryRepository = productCreationHistoryRepository;
    }

    @Override
    @Transactional
    public Product createProduct(Product product) {
        if (product == null) {
            throw new IllegalArgumentException("product is null");
        }

        Product savedProduct = productRepository.save(product);

        ProductCreationHistory creationHistory = new ProductCreationHistory();
        creationHistory.setProduct(savedProduct);
        creationHistory.setCreationDate(new Date());
        productCreationHistoryRepository.save(creationHistory);

        return savedProduct;
    }

    @Override
    public void deleteProduct(long productId) {
        if (productId < 1) {
            throw new IllegalArgumentException("productId is null");
        }
        productRepository.deleteById(productId);
    }

    @Override
    public Product updateProduct(Product product) {
        if (product == null) {
            throw new IllegalArgumentException("product is null");
        }
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(long productId) {
        return productRepository.findById(productId).orElse(null);
    }

    @Override
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @Override
    public List<Product> getProductsByCategory(long categoryId) {
        if (categoryId < 1) {
            throw new IllegalArgumentException("categoryId is null");
        }
        return productRepository.findAllProductsByCategory(categoryId).orElse(null);
    }

    @Override
    public List<Product> getProductsBySupplier(long supplierId) {
        if (supplierId < 1) {
            throw new IllegalArgumentException("supplierId is null");
        }
        return productRepository.findAllProductsBySupplier(supplierId);
    }
}
