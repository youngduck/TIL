package com.yd.jwt.dto;

import lombok.Data;

@Data
public class KakaoAccountDto {

    private Long id;
    private String email;
    private String nickname;

    private Boolean has_signed_up;
    private KakaoAccount kakao_account;
    private String connected_at;

    @Data
    public static class KakaoAccount {
        private Boolean profile_nickname_needs_agreement;
        private Profile profile;

        @Data
        public static class Profile {
            private String nickname;
            private Boolean is_default_nickname;
        }
    }
}
