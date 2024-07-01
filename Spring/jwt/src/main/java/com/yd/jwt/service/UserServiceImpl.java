package com.yd.jwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Service;

import com.yd.jwt.dao.UserRepository;
import com.yd.jwt.dto.UserAuth;
import com.yd.jwt.dto.Users;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public int insert(Users user) throws Exception {
        // 비밀번호 암호화
        String userPw = user.getUserPw();
        String encodedPw = passwordEncoder.encode(userPw);
        user.setUserPw(encodedPw);
        user.setProvider("일반");
        // 회원 등록
        int result = userRepository.insert(user);

        // 권한 등록
        if (result > 0) {
            UserAuth userAuth = new UserAuth();
            userAuth.setUserId(user.getUserId());
            userAuth.setAuth("ROLE_USER"); // 기본 권한 : 사용자 권한 (ROLE_USER)
            result = userRepository.insertAuth(userAuth);
        }

        return result;
    }

    @Override
    public Users select(int userNo) throws Exception {
        return userRepository.select(userNo);
    }

    @Override
    public void login(Users user, HttpServletRequest requset) throws Exception {

        String username = user.getUserId();
        String password = user.getUserPwCheck();
        log.info("username : " + username);
        log.info("password : " + password);

        // ANCHOR -아이디, 패스워드 인증 토큰 생성
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(username, password);

        // ANCHOR - 토큰에 요청정보를 등록
        token.setDetails(new WebAuthenticationDetails(requset));

        // ANCHOR - 토큰을 이용하여 인증(로그인)
        Authentication authentication = authenticationManager.authenticate(token);

        User authUser = (User) authentication.getPrincipal();
        log.info("인증된 사용자 아이디 : " + authUser.getUsername());

        // ANCHOR - 시큐리티 컨텍스트에 인증된 사용자 등록
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

    @Override
    public int update(Users user) throws Exception {
        // 비밀번호 암호화
        String userPw = user.getUserPw();
        String encodedPw = passwordEncoder.encode(userPw);
        user.setUserPw(encodedPw);

        int result = userRepository.update(user);

        return result;
    }

    @Override
    public int delete(String userId) throws Exception {
        int result = userRepository.delete(userId);
        return result;
    }

}