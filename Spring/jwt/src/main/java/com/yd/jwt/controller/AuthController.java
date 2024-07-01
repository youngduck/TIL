package com.yd.jwt.controller;

import org.springframework.web.bind.annotation.RestController;

import com.yd.jwt.dto.CustomUser;
import com.yd.jwt.dto.KakaoTokenDto;
import com.yd.jwt.dto.TokenWithUser;
import com.yd.jwt.dto.Users;
import com.yd.jwt.security.jwt.provider.JwtTokenProvider;
import com.yd.jwt.service.AuthService;
import com.yd.jwt.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@RestController
public class AuthController {

    @Autowired
    AuthService authService;
    @Autowired
    UserService userService;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @GetMapping("/login/oauth2/callback/kakao")
    public ResponseEntity<?> kakaoLogin(HttpServletRequest request) throws Exception {
        String code = request.getParameter("code");
        if (code == null || code.isEmpty()) {
            return new ResponseEntity<String>("Authorization code is missing",
                    HttpStatus.BAD_REQUEST);
        }
        KakaoTokenDto kakaoTokenDto = authService.getKakaoAccessToken(code);
        if (kakaoTokenDto == null) {
            return new ResponseEntity<String>("Failed to get Kakao access token",
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
        log.info("kakaoTokenDto: " + kakaoTokenDto.getAccess_token());

        Users user = authService.kakaoLogin(kakaoTokenDto.getAccess_token());
        log.info("user: ", user);

        CustomUser customUser = new CustomUser(user);
        log.info("CustomUser: ", customUser);

        String token = jwtTokenProvider.createToken(customUser.getUser().getNo(),
                customUser.getUser().getUserId(),
                null);

        TokenWithUser<String, Users> tokenWithUser = new TokenWithUser<>(token,
                user);
        log.info("tokenWithUser: ", tokenWithUser);

        return ResponseEntity.ok()
                .header("Access-Control-Expose-Headers", "Authorization")
                .header("Authorization", "Bearer " + token)
                .body(tokenWithUser);
        // .body(user);
    }

    @Secured("ROLE_USER")
    @GetMapping("/test")
    public String test() {
        return "testSuccess";
    }

    @GetMapping("/test2/token")
    public String postMethodName() {

        String token = jwtTokenProvider.createToken(99, "99", null);

        return token;
    }

    @GetMapping("/test3")
    public ResponseEntity<?> gg() {

        Users user1 = new Users();
        user1.setNo(999);
        user1.setUserId(null);
        user1.setName("테스트");
        user1.setEmail("nav@naver.com");

        CustomUser cu = new CustomUser(null);
        cu.setUser(user1);
        int userNo = cu.getUser().getNo();
        String userId = cu.getUser().getUserId();

        String token = jwtTokenProvider.createToken(userNo, userId, null);
        TokenWithUser<String, Users> tokenWithUser = new TokenWithUser<>(token, user1);

        log.info("cu: " + cu);
        log.info("tokenuserinfo: " + tokenWithUser);

        return ResponseEntity.ok().body(tokenWithUser);
    }

}
