package com.project.inventoryApp.service;

import com.project.inventoryApp.entitiy.User;

public interface IUserService {
    User createUser(User user);
    void deleteUser(long userId);
    User updateUser(User user);
    User getUserById(long userId);
}
