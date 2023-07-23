package com.project.inventoryApp.repository;

import com.project.inventoryApp.entitiy.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends JpaRepository <User, Long> {
}
