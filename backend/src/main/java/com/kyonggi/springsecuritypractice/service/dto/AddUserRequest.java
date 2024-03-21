package com.kyonggi.springsecuritypractice.service.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AddUserRequest {

    private String loginId;
    private String password;
}
