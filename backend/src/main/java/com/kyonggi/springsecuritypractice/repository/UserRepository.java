package com.kyonggi.springsecuritypractice.repository;

import com.kyonggi.springsecuritypractice.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
