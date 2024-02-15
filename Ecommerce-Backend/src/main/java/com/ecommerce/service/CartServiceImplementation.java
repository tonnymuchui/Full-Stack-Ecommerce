package com.ecommerce.service;

import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.ProductException;
import com.ecommerce.models.Cart;
import com.ecommerce.models.CartItem;
import com.ecommerce.models.Product;
import com.ecommerce.models.User;
import com.ecommerce.repository.CartRepository;
import com.ecommerce.request.AddItemRequest;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImplementation implements CartService{

    private CartRepository cartRepository;
    private CartItemService cartItemService;
    private ProductService productService;

    public CartServiceImplementation(CartRepository cartRepository, CartItemService cartItemService, ProductService productService){
        this.cartItemService = cartItemService;
        this.cartRepository = cartRepository;
        this.productService = productService;
    }
    @Override
    public Cart createCart(User user) {
        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest addItemRequest) throws OrderException, ProductException {
        Cart cart = cartRepository.findCartByUserId(userId);
        Product product = productService.findProductById(addItemRequest.getProductId());
        CartItem isCartItemPresent = cartItemService.isCartItemExist(cart,product,addItemRequest.getSize(),userId);
        if (isCartItemPresent == null){
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setCart(cart);
            cartItem.setQuantity(addItemRequest.getQuantity());
            cartItem.setUserId(userId);
            int price = addItemRequest.getQuantity() * product.getDiscountedPrice();
            cartItem.setPrice(price);
            cartItem.setSize(addItemRequest.getSize());

            CartItem createdCartItem = cartItemService.createCartItem(cartItem);
            cart.getCartItems().add(createdCartItem);
        }
        return "Item Added to cart";
    }

    @Override
    public Cart findUserCart(Long userId) {
        Cart cart = cartRepository.findCartByUserId(userId);
        int totalPrice = 0;
        int totalDiscountedPrice = 0;
        int totalItem = 0;

        for (CartItem cartItem: cart.getCartItems()){
            totalPrice = totalPrice + cartItem.getPrice();
            totalDiscountedPrice = totalDiscountedPrice + cartItem.getDiscountedPrice();
            totalItem = totalItem + cartItem.getQuantity();
        }
        cart.setTotalDiscountedPrice(totalDiscountedPrice);
        cart.setTotalPrice(totalPrice);
        cart.setTotalItem(totalItem);
        return cartRepository.save(cart);
    }
}
