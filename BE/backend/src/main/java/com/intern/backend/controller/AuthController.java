package com.intern.backend.controller;

import com.intern.backend.dto.LoginRequest;
import com.intern.backend.entity.User;
import com.intern.backend.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User register(
            @RequestBody User user
    ) {
        return authService.register(user);
    }

    @PostMapping("/login")
    public String login(
            @RequestBody LoginRequest request
    ) {
        return authService.login(request);
    }
}