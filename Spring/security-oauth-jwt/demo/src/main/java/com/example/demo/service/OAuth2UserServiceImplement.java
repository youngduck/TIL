package com.example.demo.service;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.example.demo.dao.UserRepository;
import com.example.demo.dto.Users;
import com.fasterxml.jackson.databind.ObjectMapper;

// import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
// @RequiredArgsConstructor
public class OAuth2UserServiceImplement extends DefaultOAuth2UserService {

    // private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        // log.info("이거왜 실행이안돼?");
        OAuth2User oAuth2User = super.loadUser(userRequest);
        String oauthClientName = userRequest.getClientRegistration().getClientName();

        log.info("oAuth2User출력여부: {}", oAuth2User);

        try {
            log.info("실행");
            System.out.println(new ObjectMapper().writeValueAsString(oAuth2User.getAttributes()));
        } catch (Exception exception) {
            log.info("오류실행");
            exception.printStackTrace();
        }

        if (oauthClientName.equals("kakao")) {

            Users socialUser = new Users();
            socialUser.setUserId("kakao" + oAuth2User.getAttributes().get("id"));

        }
        if (oauthClientName.equals("naver")) {

        }

        return oAuth2User;
    }

}