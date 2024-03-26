package com.kyonggi.springsecuritypractice.service.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginRequest {

    private String loginId;
    private String password;
}
