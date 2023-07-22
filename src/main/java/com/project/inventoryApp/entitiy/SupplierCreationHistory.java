package com.project.inventoryApp.entitiy;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "supplier_creation_history")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SupplierCreationHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long supplierCreationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "supplier_id", referencedColumnName = "supplier_id")
    private Supplier supplier;

    @Temporal(TemporalType.TIMESTAMP)
    private Date crationDate;
}
