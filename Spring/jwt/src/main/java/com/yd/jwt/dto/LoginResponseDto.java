package com.yd.jwt.dto;

import lombok.Data;

@Data
public class LoginResponseDto {
    public boolean loginSuccess;
    public Users account;
}
