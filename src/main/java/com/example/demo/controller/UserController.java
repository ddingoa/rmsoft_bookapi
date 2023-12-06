package com.example.demo.controller;

import com.example.demo.domain.user.User;
import com.example.demo.dto.user.UserDto;
import com.example.demo.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class UserController {
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(
            @Valid @RequestBody UserDto userDto
    ) {
        return ResponseEntity.ok(userService.signup(userDto));
    }

    @GetMapping("/user")
    public ResponseEntity<User> getMyUserInfo() {
        return ResponseEntity.ok(userService.getMyUserWithAuthorities().get());
    }


    @GetMapping("/userinfo")
    public ResponseEntity<User> getMyUserInfoAdmin() {
        return ResponseEntity.ok(new User(
        ));
    }

    @GetMapping("/admin/user/{username}")
    public ResponseEntity<User> getUserInfo(@PathVariable String username) {
        return ResponseEntity.ok(userService.getUserWithAuthorities(username).get());
    }
}