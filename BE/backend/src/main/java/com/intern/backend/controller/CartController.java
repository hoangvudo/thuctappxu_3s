package com.intern.backend.controller;

import com.intern.backend.dto.AddToCartRequest;
import com.intern.backend.entity.CartItem;
import com.intern.backend.service.CartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public CartItem addToCart(
            @RequestBody AddToCartRequest request
    ) {

        return cartService.addToCart(request);
    }
}