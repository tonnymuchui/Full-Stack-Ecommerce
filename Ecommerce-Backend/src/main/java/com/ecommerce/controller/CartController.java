package com.ecommerce.controller;

import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.ProductException;
import com.ecommerce.exception.UserException;
import com.ecommerce.models.Cart;
import com.ecommerce.models.User;
import com.ecommerce.request.AddItemRequest;
import com.ecommerce.response.ApiResponse;
import com.ecommerce.service.CartService;
import com.ecommerce.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@Tag(name="Cart management", description="find user cart, add item to cart")
public class CartController {

    @Autowired
    private UserService userService;
    @Autowired
    private CartService cartService;

    @GetMapping("/")
    @Operation(description = "find cart by user id")
    public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        Cart cart = cartService.findUserCart(user.getId());
        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }
    @PutMapping("/add")
    @Operation(description = "add item to cart")
    public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,
                                                     @RequestHeader("Authorization") String jwt) throws UserException, OrderException, ProductException {
        User user = userService.findUserProfileByJwt(jwt);
        cartService.addCartItem(user.getId(),req);
        ApiResponse res = new ApiResponse();
        res.setMessage("cart added");
        res.setStatus(true);
        return new ResponseEntity<ApiResponse>(res,HttpStatus.OK);
    }

}
