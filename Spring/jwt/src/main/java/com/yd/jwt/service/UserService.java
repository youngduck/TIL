package com.yd.jwt.service;

import com.yd.jwt.dto.Users;

import jakarta.servlet.http.HttpServletRequest;

public interface UserService {
    // 회원가입
    public int insert(Users user) throws Exception;

    // 회원조회
    public Users select(int userNo) throws Exception;

    // 로그인
    public void login(Users user, HttpServletRequest requset) throws Exception;

    // 회원수정
    public int update(Users user) throws Exception;

    // 회원삭제
    public int delete(String userId) throws Exception;
}
