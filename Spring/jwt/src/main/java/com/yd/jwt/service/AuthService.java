
package com.yd.jwt.service;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.yd.jwt.dao.UserRepository;
import com.yd.jwt.dto.KakaoAccountDto;
import com.yd.jwt.dto.KakaoTokenDto;
import com.yd.jwt.dto.UserAuth;
import com.yd.jwt.dto.Users;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public KakaoTokenDto getKakaoAccessToken(String code) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code"); // 카카오 공식문서 기준 authorization_code 로 고정
        params.add("client_id", "027a7428e963b7efc2ef5dcab5dc30e2"); // 카카오 Dev 앱 REST API 키
        params.add("redirect_uri", "http://localhost:3004/login/oauth2/callback/kakao"); // 카카오 Dev redirect uri
        params.add("code", code); // 프론트에서 인가 코드 요청시 받은 인가 코드값
        params.add("client_secret", "CG3e7SEHBUvz1Sd2BRkR9XeY6UXVtpoJ"); // 카카오 Dev 카카오 로그인 Client Secret

        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(params, headers);

        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> accessTokenResponse = rt.exchange("https://kauth.kakao.com/oauth/token", // "https://kauth.kakao.com/oauth/token"
                HttpMethod.POST,
                kakaoTokenRequest,
                String.class);

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        KakaoTokenDto kakaoTokenDto = null;

        try {
            kakaoTokenDto = objectMapper.readValue(accessTokenResponse.getBody(), KakaoTokenDto.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return kakaoTokenDto;

    }

    @SuppressWarnings("null")
    public Users kakaoLogin(String accessToken) throws Exception {

        RestTemplate rt = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        HttpEntity<MultiValueMap<String, String>> accountInfoRequest = new HttpEntity<>(headers);

        HttpEntity<String> accountInfoResponse = rt.exchange("https://kapi.kakao.com/v2/user/me", HttpMethod.POST,
                accountInfoRequest,
                String.class);

        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.registerModule(new JavaTimeModule());
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        KakaoAccountDto kakaoAccountDto = null;
        try {
            kakaoAccountDto = objectMapper.readValue(accountInfoResponse.getBody(), KakaoAccountDto.class);
            log.info("kakaoAccountDtoServiceID: " + kakaoAccountDto.getId());
            log.info("kakaoAccountDtoServiceAccount: " + kakaoAccountDto.getKakao_account());
            log.info("kakaoAccountDtoServiceEmail: " + kakaoAccountDto.getKakao_account().getProfile().getNickname());

            // log.info("kakaoAccountDtoServiceNickname: " +
            // kakaoAccountDto.getKakao_account().getNickname());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        log.info("한번더!: " + kakaoAccountDto.getKakao_account().getProfile().getNickname());
        Optional<Users> existUser = Optional.ofNullable(userRepository.findById(kakaoAccountDto.getId()).orElse(null));
        log.info("existUser의 값!: " + existUser);

        if (existUser.isEmpty()) {
            log.info("처음 로그인 -> 회원가입");
            Users newKakaoUser = new Users();
            newKakaoUser.setUserId(kakaoAccountDto.getId().toString());
            newKakaoUser.setUserPw("kakao비밀번호");
            newKakaoUser.setName(kakaoAccountDto.getKakao_account().getProfile().getNickname());
            newKakaoUser.setEmail("kakao@Email.com");
            newKakaoUser.setEmail("기존카카오");
            int result = userRepository.insert(newKakaoUser);

            if (result > 0) {
                UserAuth userAuth = new UserAuth();
                userAuth.setUserId(newKakaoUser.getUserId());
                userAuth.setAuth("ROLE_USER"); // 기본 권한 : 사용자 권한 (ROLE_USER)
                result = userRepository.insertAuth(userAuth);
            }

            return newKakaoUser;
        } else {
            log.info("로그인 이력 있음");
            existUser.ifPresent(user -> {
                log.info(user.toString());
                log.info(user.getName());
                log.info(user.getUserPw());
                log.info(user.getUserId());
                log.info(user.getEmail());

            });

            log.info("반환할값임: " + existUser.get());
            return existUser.get();

        }

    }

}
