package com.example.demo.Dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.example.demo.Dto.Users;

@Repository
@Mapper
public interface UserRepository {

    // 회원 등록
    public int insert(Users user);

    // 사용자 인증(로그인) - id
    public Users login(String userId);

}
