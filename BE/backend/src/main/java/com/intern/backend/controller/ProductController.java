package com.intern.backend.controller;

import com.intern.backend.entity.Product;
import com.intern.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping
    public Product createProduct(
            @Valid @RequestBody Product product
    ) {
        return productService.createProduct(product);
    }

    @GetMapping("/{id}")
    public Product getProductById(
            @PathVariable Long id
    ) {
        return productService.getProductById(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody Product product
    ) {

        return productService.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(
            @PathVariable Long id
    ) {

        productService.deleteProduct(id);

        return "Deleted successfully";
    }
}