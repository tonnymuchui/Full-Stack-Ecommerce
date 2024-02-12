package com.ecommerce.controller;

import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.UserException;
import com.ecommerce.models.Address;
import com.ecommerce.models.Order;
import com.ecommerce.models.User;
import com.ecommerce.service.OrderService;
import com.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;

    public OrderController(OrderService orderService, UserService userService) {
        this.orderService = orderService;
        this.userService = userService;
    }

    @PostMapping("/")
    public ResponseEntity<Order> createOrder(@RequestBody Address shippingAddress,
                                             @RequestHeader("Authorization") String jwt) throws UserException {
        User user = userService.findUserProfileByJwt(jwt);
        Order order = orderService.createOrder(user,shippingAddress);
        return new ResponseEntity<Order>(order, HttpStatus.CREATED);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>> userOrderHistory(@RequestHeader("Authorization") String jwt) throws UserException, OrderException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Order> order = orderService.usersOrdersHistory(user.getId());
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @GetMapping("/{Id}")
    public ResponseEntity<Order> findOrderById(
            @PathVariable("Id") Long id,
            @RequestHeader("Authorization") String jwt
    ) throws UserException, OrderException {
        User user = userService.findUserProfileByJwt(jwt);
        Order order = orderService.findOrderById(id);
        return new ResponseEntity<Order>(order,HttpStatus.ACCEPTED);
    }
}
