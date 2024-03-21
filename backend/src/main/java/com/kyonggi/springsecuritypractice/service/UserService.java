package com.kyonggi.springsecuritypractice.service;

import com.kyonggi.springsecuritypractice.domain.User;
import com.kyonggi.springsecuritypractice.repository.UserRepository;
import com.kyonggi.springsecuritypractice.service.dto.AddUserRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService{

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Long save(AddUserRequest dto) {
        return userRepository.save(
                User.builder()
                .email(dto.getLoginId())
                .password(bCryptPasswordEncoder.encode(dto.getPassword()))
                .build()
        ).getId();
    }
}
