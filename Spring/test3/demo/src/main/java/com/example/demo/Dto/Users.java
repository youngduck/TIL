package com.example.demo.Dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Users {
    private String userId;
    private String userPw;
    private String userPwCheck; // 비밀번호 확인
    private String email;
    private String provider;
    private List<String> role;
    private int enabled; // 휴면여부

}
