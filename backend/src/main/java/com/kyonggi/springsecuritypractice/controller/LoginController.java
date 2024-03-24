package com.kyonggi.springsecuritypractice.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LoginController {

    @PostMapping("/api/login")
    public ResponseEntity<String> login() {
        return ResponseEntity
                .ok()
                .body("login success");
    }
}
