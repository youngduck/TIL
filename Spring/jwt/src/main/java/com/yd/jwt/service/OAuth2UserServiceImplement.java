package com.yd.jwt.service;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yd.jwt.dao.UserRepository;
import com.yd.jwt.dto.Users;
import com.yd.jwt.entity.CustomOAuth2User;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class OAuth2UserServiceImplement extends DefaultOAuth2UserService {
    UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest request) throws OAuth2AuthenticationException {

        log.info("Oauth2User 실행이좀되냐");

        OAuth2User oAuth2User = super.loadUser(request);
        String oauthClientName = request.getClientRegistration().getClientName();

        String userId = null;

        if (oauthClientName.equals("kakao")) {
            userId = "kakao_" + oAuth2User.getAttributes().get("id");
            Users user = new Users();
            user.setUserId(userId);
            user.setUserPw("카카오비밀번호");
            user.setName("김카카오");
            user.setEmail("kakao@Email.com");
            user.setProvider("kakao");
            userRepository.insert(user);
        }
        if (oauthClientName.equals("naver")) {

            Map<String, String> responseMap = (Map<String, String>) oAuth2User.getAttributes().get("response");
            userId = "naver_" + responseMap.get("id").substring(0, 14);
            Users user = new Users();
            user.setUserId("naver_" + responseMap.get("id").substring(0, 14));
            user.setUserPw("네이버비밀번호");
            user.setName("김네이버");
            user.setEmail("naver@Email.com");
            user.setProvider("naver");
            userRepository.insert(user);
        }

        try {
            log.info("실행");
            System.out.println(new ObjectMapper().writeValueAsString(oAuth2User.getAttributes()));
        } catch (Exception exception) {

            log.info("실행x");
            exception.printStackTrace();
        }

        return new CustomOAuth2User(userId);
    }

}
