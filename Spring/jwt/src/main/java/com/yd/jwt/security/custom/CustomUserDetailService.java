package com.yd.jwt.security.custom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.yd.jwt.dao.UserRepository;
import com.yd.jwt.dto.CustomUser;
import com.yd.jwt.dto.Users;

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
