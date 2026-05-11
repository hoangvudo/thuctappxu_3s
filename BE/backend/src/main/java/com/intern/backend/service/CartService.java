package com.intern.backend.service;

import com.intern.backend.dto.AddToCartRequest;
import com.intern.backend.entity.Cart;
import com.intern.backend.entity.CartItem;
import com.intern.backend.entity.Product;
import com.intern.backend.repository.CartItemRepository;
import com.intern.backend.repository.CartRepository;
import com.intern.backend.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    public CartItem addToCart(
            AddToCartRequest request
    ) {

        Cart cart =
                cartRepository.findById(
                        request.getCartId()
                ).orElse(null);

        Product product =
                productRepository.findById(
                        request.getProductId()
                ).orElse(null);

        if (cart == null || product == null) {
            return null;
        }

        CartItem cartItem = new CartItem();

        cartItem.setCart(cart);

        cartItem.setProduct(product);

        cartItem.setQuantity(
                request.getQuantity()
        );

        return cartItemRepository.save(cartItem);
    }
}