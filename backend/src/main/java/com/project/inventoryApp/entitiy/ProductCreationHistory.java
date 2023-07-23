package com.project.inventoryApp.entitiy;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "product_creation_history")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductCreationHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productCreationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Product product;

    @Temporal(TemporalType.TIMESTAMP)
    private Date creationDate;
}
