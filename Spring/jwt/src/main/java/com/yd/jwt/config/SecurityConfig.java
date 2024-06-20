package com.yd.jwt.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // ANCHOR - 폼 기반 로그인 비활성화
        http.formLogin(login -> login.disable());

        // ANCHOR - http 기본 인증 비활성화
        http.httpBasic((basic) -> basic.disable());

        // ANCHOR - CSRF 공격 방어 기능 비활성화
        http.csrf((csrf) -> csrf.disable());

        // ANCHOR - 세션 인증 사용 X, JWT사용 인증
        http.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        return http.build();
    }
}
