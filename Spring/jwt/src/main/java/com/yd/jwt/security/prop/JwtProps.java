package com.yd.jwt.security.prop;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@ConfigurationProperties("com.yd.jwt") // ANCHOR - com.yd.jwt 경로 하위 속성들을 지정 application.properties값 가져옴
public class JwtProps {

    private String secretKey;

}
