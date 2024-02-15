package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.models.Product;
import com.ecommerce.models.Review;
import com.ecommerce.models.User;
import com.ecommerce.repository.ProductRepository;
import com.ecommerce.repository.ReviewRepository;
import com.ecommerce.request.ReviewRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewServiceImplementation implements ReviewService{

    private ReviewRepository reviewRepository;
    private ProductService productService;
    private ProductRepository productRepository;
    @Override
    public Review createReview(ReviewRequest reviewRequest, User user) throws ProductException {
        Product product = productService.findProductById(reviewRequest.getProductId());
        Review review = new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReview(review.getReview());
        review.setCreatedAt(LocalDateTime.now());
        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {
        return reviewRepository.getAllProductsReview(productId);
    }
}
