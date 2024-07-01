package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.dao.UserRepository;
import com.example.demo.dto.Users;

public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Users select(int userNo) throws Exception {
        return userRepository.select(userNo);
    }

}
