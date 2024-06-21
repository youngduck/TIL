package com.yd.jwt.controller;

import org.springframework.web.bind.annotation.RestController;

import com.yd.jwt.dto.CustomUser;
import com.yd.jwt.dto.Users;
import com.yd.jwt.service.UserService;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

/*
 * [GET]       /users/info       - 회원정보 조회       (ROLE_USER)  -> /users/10 같이 수정해줘야 best
 * [POST]      /users            - 회원가입            (ALL)
 * [PUT]       /users            - 회원수정            (ROLE_USER)
 * [DELETE]    /users            - 회원탈퇴            (ROLE_ADMIN)
 */

@Slf4j
@RestController
@RequestMapping("/users")

public class UserController {
    @Autowired
    private UserService userService;

    // ANCHOR - 회원정보 조회
    @Secured("ROLE_USER")
    @GetMapping("/info")
    public ResponseEntity<?> userinfo(@AuthenticationPrincipal CustomUser customUser) {

        log.info("----customUser----");
        log.info("customUser:" + customUser);

        Users user = customUser.getUser();
        log.info("user: " + user);

        // 인증성공 회원정보 반환
        if (user != null)
            return new ResponseEntity<>(user, HttpStatus.OK);

        // 인증 되지 않음
        return new ResponseEntity<String>("UNAUTHORIZED", HttpStatus.UNAUTHORIZED);
    }

    // ANCHOR - 회원가입
    @PostMapping("")
    public ResponseEntity<?> join(@RequestBody Users user) throws Exception {

        log.info("[POST] - /users");
        int result = userService.insert(user);

        if (result > 0) {
            log.info("회원가입 성공! - SUCCESS");
            return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
        } else {
            log.info("회원가입 실패! - FAIL");
            return new ResponseEntity<String>("FAIL", HttpStatus.BAD_REQUEST);
        }

    }

    // ANCHOR - 회원수정
    @Secured("ROLE_USER")
    @PutMapping("")
    public ResponseEntity<?> update(@RequestBody Users user) throws Exception {

        log.info("[PUT] - /users");
        int result = userService.update(user);

        if (result > 0) {
            log.info("회원수정 성공! - SUCCESS");
            return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
        } else {
            log.info("회원수정 실패! - FAIL");
            return new ResponseEntity<String>("FAIL", HttpStatus.BAD_REQUEST);
        }

    }

    // ANCHOR - 회원삭제
    @Secured("ROLE_ADMIN")
    @DeleteMapping("/{userId}")
    public ResponseEntity<?> delete(@PathVariable("userId") String userId) throws Exception {

        log.info("[DELETE] - /users");
        int result = userService.delete(userId);

        if (result > 0) {
            log.info("회원삭제 성공! - SUCCESS");
            return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
        } else {
            log.info("회원삭제 실패! - FAIL");
            return new ResponseEntity<String>("FAIL", HttpStatus.BAD_REQUEST);
        }

    }

}
