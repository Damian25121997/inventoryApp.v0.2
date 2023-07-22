package com.project.inventoryApp.repository;

import com.project.inventoryApp.entitiy.ProductCreationHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductCreationHistoryRepository extends JpaRepository<ProductCreationHistory, Long> {
}
