package com.kyonggi.springsecuritypractice.service;

import com.kyonggi.springsecuritypractice.domain.User;
import com.kyonggi.springsecuritypractice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("잘못된 이메일입니다."));
    }
}
