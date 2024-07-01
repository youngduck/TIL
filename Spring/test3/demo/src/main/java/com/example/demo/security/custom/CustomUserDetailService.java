package com.example.demo.security.custom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.Dao.UserRepository;
import com.example.demo.Dto.Users;
import com.example.demo.Dto.CustomUser;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired

    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {

        log.info("login- loadUserByUsername : " + username);

        Users user = userRepository.login(username);

        log.info("username값 :" + username);

        if (user == null) {
            log.info("사용자, 일치하는 아이디가 없음");
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다. : " + username);
        }

        log.info("user:" + user.toString());

        // ANCHOR - Users -> CustomUser로 변환작업
        CustomUser customUser = new CustomUser(user);

        return customUser;
    }

}
