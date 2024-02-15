package com.ecommerce.repository;

import com.ecommerce.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {

    @Query("SELECT o FROM Order o where o.user.id=:userId and (o.orderStatus = 'PLACED' or o.orderStatus = 'CONFIRMED' or o.orderStatus = 'SHIPPED' or o.orderStatus = 'DELIVERED')")
    public List<Order> getUsersOrders(@Param("userId") Long userId);
}
