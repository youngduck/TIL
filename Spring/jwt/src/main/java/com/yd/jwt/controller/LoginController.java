package com.yd.jwt.controller;

import org.springframework.web.bind.annotation.RestController;

import com.yd.jwt.constants.SecurityConstants;
import com.yd.jwt.dto.AuthenticationRequest;
import com.yd.jwt.prop.JwtProp;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Slf4j
@RestController
public class LoginController {

    @Autowired
    private JwtProp jwtProp;

    // ANCHOR - 로그인
    @PostMapping("login")
    public ResponseEntity<?> Login(@RequestBody AuthenticationRequest request) {

        String username = request.getUsername();
        String password = request.getPassword();

        log.info("username: " + username);
        log.info("password: " + password);

        // ANCHOR - 사용자 권한
        List<String> roles = new ArrayList<>();
        roles.add("ROLE_USER");
        roles.add("ROLE_ADMIN");

        // ANCHOR - 시크릿키는 바이트로 설정 하는편이라고한다.
        byte[] signinKey = jwtProp.getSecretKey().getBytes();

        // ANCHOR - 토큰 생성
        String jwt = Jwts.builder()
                .signWith(Keys.hmacShaKeyFor(signinKey), Jwts.SIG.HS512)
                .header()
                .add("typ", SecurityConstants.TOKEN_TYPE)
                .and()
                .expiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)) // 만료시간 1일
                .claim("uid", username) // payload에 등록
                .claim("rol", roles) // payload에 등록
                .compact(); // 최종 토큰 생성

        log.info("jwt: " + jwt);

        return new ResponseEntity<String>(jwt, HttpStatus.OK);
    }

    // ANCHOR - 토큰 해석
    @GetMapping("/user/info")
    public ResponseEntity<?> userInfo(@RequestHeader(name = "Authorization") String header) {

        log.info("---header---");
        log.info("Authorization: " + header);

        // ANCHOR - 헤더에 담겨있는 Bearer값 공백으로 제거
        String jwt = header.replace(SecurityConstants.TOKEN_PREFIX, "");

        byte[] signingKey = jwtProp.getSecretKey().getBytes();

        Jws<Claims> parsedToken = Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(signingKey))
                .build()
                .parseSignedClaims(jwt);

        String username = parsedToken.getPayload().get("uid").toString();
        Object roles = parsedToken.getPayload().get("role");

        log.info("username: " + username);
        log.info("parsedToken: " + parsedToken);
        log.info("roles: " + roles);

        return new ResponseEntity<String>(parsedToken.toString(), HttpStatus.OK);
    }

}
