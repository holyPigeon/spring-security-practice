//package com.kyonggi.springsecuritypractice.controller;
//
//import com.kyonggi.springsecuritypractice.service.UserService;
//import com.kyonggi.springsecuritypractice.service.dto.AddUserRequest;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.net.URI;
//
//@RestController
//@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
//public class UserController {
//
//    private UserService userService;
//
//    @PostMapping("/api/join")
//    public ResponseEntity<String> signup(AddUserRequest request) {
//        userService.save(request);
//
//        return ResponseEntity
////                .created(URI.create("/login"))
////                .build();
//                .ok()
//                .body("join success");
//    }
//}
