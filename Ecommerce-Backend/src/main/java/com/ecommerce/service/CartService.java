package com.ecommerce.service;

import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.ProductException;
import com.ecommerce.models.Cart;
import com.ecommerce.models.User;
import com.ecommerce.request.AddItemRequest;

public interface CartService {
    public Cart createCart(User user);
    public String addCartItem(Long userId, AddItemRequest addItemRequest) throws OrderException, ProductException;
    public Cart findUserCart(Long userId);
}
