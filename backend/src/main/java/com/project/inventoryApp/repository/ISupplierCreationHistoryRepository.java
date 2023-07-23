package com.project.inventoryApp.repository;


import com.project.inventoryApp.entitiy.SupplierCreationHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISupplierCreationHistoryRepository extends JpaRepository<SupplierCreationHistory, Long> {
}
