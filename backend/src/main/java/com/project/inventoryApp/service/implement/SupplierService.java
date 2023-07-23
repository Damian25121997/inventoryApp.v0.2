package com.project.inventoryApp.service.implement;

import com.project.inventoryApp.entitiy.Supplier;
import com.project.inventoryApp.entitiy.SupplierCreationHistory;
import com.project.inventoryApp.repository.ISupplierCreationHistoryRepository;
import com.project.inventoryApp.repository.ISupplierRepository;
import com.project.inventoryApp.service.ISupplierServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class SupplierService implements ISupplierServices {

    private final ISupplierRepository supplierRepository;
    private final ISupplierCreationHistoryRepository supplierCreationHistoryRepository;

    @Autowired
    public SupplierService(ISupplierRepository supplierRepository, ISupplierCreationHistoryRepository supplierCreationHistoryRepository) {
        this.supplierRepository = supplierRepository;
        this.supplierCreationHistoryRepository = supplierCreationHistoryRepository;
    }

    @Override
    public Supplier createSupplier(Supplier supplier) {
        if (supplier == null) {
            throw new IllegalArgumentException("supplier is null");
        }

        Supplier savedSupplier = supplierRepository.save(supplier);

        SupplierCreationHistory creationHistory = new SupplierCreationHistory();
        creationHistory.setSupplier(savedSupplier);
        creationHistory.setCrationDate(new Date());
        supplierCreationHistoryRepository.save(creationHistory);
        return savedSupplier;
    }

    @Override
    public void deleteSupplier(long supplierId) {
        if (supplierId < 1) {
            throw new IllegalArgumentException("supplierId is null");
        }
        supplierRepository.deleteById(supplierId);
    }

    @Override
    public Supplier updateSupplier(Supplier supplier) {
        if (supplier == null) {
            throw new IllegalArgumentException("supplier is null");
        }
        return supplierRepository.save(supplier);
    }

    @Override
    public Supplier getSupplierById(long supplierId){
        return supplierRepository.findById(supplierId).orElse(null);
    }

    @Override
    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }
}
