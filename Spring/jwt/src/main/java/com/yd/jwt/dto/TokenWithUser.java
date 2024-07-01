package com.yd.jwt.dto;

import lombok.Data;

@Data

public class TokenWithUser<T1, T2> {
    private final T1 token;
    private final T2 user;

    public TokenWithUser(T1 token, T2 user) {

        this.token = token;
        this.user = user;
    }

}
