package com.intern.backend.service;

import com.intern.backend.entity.Product;
import com.intern.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElse(null);
    }

    public Product updateProduct(
            Long id,
            Product product
    ) {

        Product oldProduct =
                productRepository.findById(id)
                        .orElse(null);

        if (oldProduct != null) {

            oldProduct.setName(product.getName());
            oldProduct.setPrice(product.getPrice());
            oldProduct.setQuantity(product.getQuantity());

            return productRepository.save(oldProduct);
        }

        return null;
    }
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}