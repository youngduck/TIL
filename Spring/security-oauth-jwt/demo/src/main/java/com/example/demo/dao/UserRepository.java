package com.example.demo.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.Users;

@Repository
@Mapper
public interface UserRepository {
    public Users select(int userNo) throws Exception;
}
