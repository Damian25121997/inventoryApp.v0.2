package com.project.inventoryApp.repository;

import com.project.inventoryApp.entitiy.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT p FROM Product p WHERE p.category.categoryId = :categoryId")
    Optional<List<Product>> findAllProductsByCategory(@Param("categoryId") long categoryId);

    @Query(value = "SELECT p FROM Product p WHERE p.supplier.supplierId = :supplierId")
    List<Product> findAllProductsBySupplier(@Param("supplierId") long supplierId);
}
