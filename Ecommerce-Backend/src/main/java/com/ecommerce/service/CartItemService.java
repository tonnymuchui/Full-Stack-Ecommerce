package com.ecommerce.service;

import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.UserException;
import com.ecommerce.models.Cart;
import com.ecommerce.models.CartItem;
import com.ecommerce.models.Product;

public interface CartItemService {
    public CartItem createCartItem(CartItem cartItem);
    public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws OrderException, UserException;
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);
    public void removeCartItem(Long userId, Long cartItemId) throws OrderException, UserException;
    public CartItem findCartItemById(Long cartItemId) throws OrderException;
}
