package com.intern.backend.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtService {

    private final String SECRET_KEY =
            "thisIsMyVeryStrongSecretKeyForJwtAuthentication2026SpringBoot";

    public String generateToken(String username) {

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 1000 * 60 * 60
                        )
                )
                .signWith(
                        Keys.hmacShaKeyFor(
                                SECRET_KEY.getBytes()
                        ),
                        SignatureAlgorithm.HS256
                )
                .compact();
    }
    public String extractUsername(String token) {

        return Jwts.parser()
                .setSigningKey(
                        SECRET_KEY.getBytes()
                )
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}