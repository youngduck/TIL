package com.yd.jwt.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.yd.jwt.handler.CustomAuthenticationSuccessHandler;
import com.yd.jwt.handler.OAuth2SuccessHandler;
import com.yd.jwt.security.custom.CustomUserDetailService;
import com.yd.jwt.security.jwt.filter.JwtAuthenticationFilter;
import com.yd.jwt.security.jwt.filter.JwtRequestFilter;
import com.yd.jwt.security.jwt.provider.JwtTokenProvider;
import com.yd.jwt.service.CustomOAuth2UserService;
import com.yd.jwt.service.OAuth2UserServiceImplement;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity // 시큐리티 활성화 -> 기본 스프링 필터 체인에 등록
// @preAuthorize, @postAuthorize, @Secured 활성화
@RequiredArgsConstructor
@EnableMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig {

    // private final DefaultOAuth2UserService oAuth2UserService;
    // private final OAuth2SuccessHandler oAuth2SuccessHandler;

    CustomAuthenticationSuccessHandler customSuccessHandler = new CustomAuthenticationSuccessHandler();
    CustomOAuth2UserService customOAuth2UserService = new CustomOAuth2UserService();

    @Autowired
    private CustomUserDetailService customUserDetailService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    private AuthenticationManager authenticationManager;

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        this.authenticationManager = authenticationConfiguration.getAuthenticationManager();
        return authenticationManager;
    }

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
        http.addFilterAt(new JwtAuthenticationFilter(authenticationManager, jwtTokenProvider),
                UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JwtRequestFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);

        // ANCHOR - OAUTH2새방식
        http.oauth2Login(oauth2 -> oauth2
                .authorizationEndpoint(endpoint -> endpoint.baseUri("/api/v1/auth/oauth2"))
                .redirectionEndpoint(endpoint -> endpoint.baseUri("/oauth2/callback/*"))
                .userInfoEndpoint(userInfo -> userInfo.userService(customOAuth2UserService))
                .successHandler(customSuccessHandler));

        // ANCHOR - 인가설정, 모두,user,admin에 따른 접근권한부여
        http.authorizeHttpRequests(authorizeRequests -> authorizeRequests
                .requestMatchers("/").permitAll()
                .requestMatchers("/oauth2/**").permitAll()
                .requestMatchers("/test2/**").permitAll()
                .requestMatchers("/test3/**").permitAll()
                .requestMatchers("/healthcheck").permitAll()
                .requestMatchers("/login/**").permitAll()
                .requestMatchers("/users/**").permitAll()
                // .requestMatchers("/users/**").hasAnyRole("USER", "ADMIN")
                .requestMatchers("/admin/**").hasAnyRole("ADMIN")
                .anyRequest().authenticated());

        // ANCHOR - 인증방식설정, 인메모리,JDBC, *채택* 커스텀 방식(userDetailService사용)
        http.userDetailsService(customUserDetailService);

        return http.build();
    }

    // ANCHOR - 암호화 방식 Bcrypt
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/view/login", "/error", "/error/*", "/img/**", "/favicon.ico");
    }

}
