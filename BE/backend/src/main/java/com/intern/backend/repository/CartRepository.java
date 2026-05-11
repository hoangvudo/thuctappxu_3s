package com.intern.backend.repository;

import com.intern.backend.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository
        extends JpaRepository<Cart, Long> {
}