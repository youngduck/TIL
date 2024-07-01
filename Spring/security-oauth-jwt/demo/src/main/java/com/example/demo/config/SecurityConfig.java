package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.web.SecurityFilterChain;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity // 시큐리티 활성화 -> 기본 스프링 필터 체인에 등록
// @preAuthorize, @postAuthorize, @Secured 활성화
// @RequiredArgsConstructor
@AllArgsConstructor
@EnableMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig {

    private final DefaultOAuth2UserService oAuth2UserService;

    // 생성자
    // public SecurityConfig(DefaultOAuth2UserService oAuth2UserService) {
    // this.oAuth2UserService = oAuth2UserService;
    // }

    // public SecurityConfig(DefaultOAuth2UserService oAuth2UserService) {
    // this.oAuth2UserService = oAuth2UserService;
    // }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        // http.oauth2Login(login -> login.loginPage("/login"));

        // ANCHOR - 폼 기반 로그인 비활성화
        http.formLogin(login -> login.disable());

        // ANCHOR - http 기본 인증 비활성화
        http.httpBasic((basic) -> basic.disable());

        // ANCHOR - CSRF 공격 방어 기능 비활성화
        http.csrf((csrf) -> csrf.disable());

        // ANCHOR - 세션 인증 사용 X, JWT사용 인증설정
        http.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        // ANCHOR - 필터 설정

        // ANCHOR - OAUTH2새방식
        http.oauth2Login(oauth2 -> oauth2
                .redirectionEndpoint(endpoint -> endpoint.baseUri("/oauth2/callback/*"))
                .userInfoEndpoint(endpoint -> endpoint.userService(oAuth2UserService)));

        // ANCHOR - 인가설정, 모두,user,admin에 따른 접근권한부여
        http.authorizeHttpRequests(authorizeRequests -> authorizeRequests
                .requestMatchers("/**").permitAll()

                .anyRequest().authenticated());

        // ANCHOR - 인증방식설정, 인메모리,JDBC, *채택* 커스텀 방식(userDetailService사용)
        // http.userDetailsService(customUserDetailService);

        return http.build();
    }

}
