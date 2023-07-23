package com.project.inventoryApp.controllers;

import com.project.inventoryApp.entitiy.Supplier;
import com.project.inventoryApp.service.ISupplierServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/supplier")
public class SupplierController {

    private final ISupplierServices supplierServices;

    @Autowired
    public SupplierController(ISupplierServices supplierServices) {
        this.supplierServices = supplierServices;
    }

    @PostMapping(path = "/create")
    public ResponseEntity<Supplier> createSupplier(@RequestBody Supplier supplier) {
        return new ResponseEntity<>(supplierServices.createSupplier(supplier), HttpStatus.CREATED);
    }

    @GetMapping(path = "/get/{supplierId}")
    public ResponseEntity<Supplier> getSupplierById(@PathVariable long supplierId){
        return new ResponseEntity<>(supplierServices.getSupplierById(supplierId), HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/{supplierId}")
    public ResponseEntity<Boolean> deleteSupplier(@PathVariable long supplierId) {
        supplierServices.deleteSupplier(supplierId);
        return new ResponseEntity<>(true, HttpStatus.ACCEPTED);
    }

    @PutMapping(path = "/update")
    public ResponseEntity<Supplier> updateSupplier(@RequestBody Supplier supplier) {
        return new ResponseEntity<>(supplierServices.updateSupplier(supplier), HttpStatus.ACCEPTED);
    }

    @GetMapping(path = "/suppliers")
    public ResponseEntity<List<Supplier>> getAllSuppliers() {
        return new ResponseEntity<>(supplierServices.getAllSuppliers(), HttpStatus.OK);
    }
}
