package com.intern.backend.service;

import com.intern.backend.dto.LoginRequest;
import com.intern.backend.entity.User;
import com.intern.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public User register(User user) {

        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

        user.setRole("USER");

        return userRepository.save(user);
    }

    public String login(LoginRequest request) {

        User user = userRepository
                .findByUsername(request.getUsername());

        if (user == null) {
            return "User not found";
        }

        boolean checkPassword =
                passwordEncoder.matches(
                        request.getPassword(),
                        user.getPassword()
                );

        if (!checkPassword) {
            return "Wrong password";
        }

        return jwtService.generateToken(
                user.getUsername()
        );
    }
}