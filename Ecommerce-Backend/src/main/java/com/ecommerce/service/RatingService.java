package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.models.Rating;
import com.ecommerce.models.User;
import com.ecommerce.request.RatingRequest;

import java.util.List;

public interface RatingService {
    public Rating createRating(RatingRequest req, User user) throws ProductException;

    public List<Rating> getProductsRating(Long productId);
}
