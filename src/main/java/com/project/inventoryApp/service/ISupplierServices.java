package com.project.inventoryApp.service;

import com.project.inventoryApp.entitiy.Supplier;

import java.util.List;

public interface ISupplierServices {
    Supplier createSupplier(Supplier supplier);
    void deleteSupplier(long supplierId);
    Supplier updateSupplier(Supplier supplier);
    Supplier getSupplierById(long supplierId);
    List<Supplier> getAllSuppliers();
}
