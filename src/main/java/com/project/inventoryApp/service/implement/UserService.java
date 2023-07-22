package com.project.inventoryApp.service.implement;

import com.project.inventoryApp.entitiy.User;
import com.project.inventoryApp.repository.IUserRepository;
import com.project.inventoryApp.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService  implements IUserService {
    private final IUserRepository userRepository;

    @Autowired
    public UserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User user) {
        if (user == null) {
            throw new IllegalArgumentException("User is null");
        }
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(long userId) {
        if (userId < 1) {
            throw new IllegalArgumentException(("userId is null"));
        }
        userRepository.deleteById(userId);
    }

    @Override
    public User updateUser(User user) {
        if (user == null) {
            throw new IllegalArgumentException("User is null");
        }
        return userRepository.save(user);
    }

    @Override
    public User getUserById(long userId){
        return userRepository.findById(userId).orElse(null);
    }
}
