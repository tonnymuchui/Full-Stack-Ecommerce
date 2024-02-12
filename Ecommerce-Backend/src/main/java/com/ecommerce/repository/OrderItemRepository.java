package com.ecommerce.repository;


import com.ecommerce.models.CartItem;
import com.ecommerce.models.Order;
import com.ecommerce.models.OrderItem;
import com.ecommerce.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long> {

    @Query("SELECT oi FROM OrderItem oi where oi.order = :order and oi.product = :product and oi.size = :size and oi.userId = :userId")
    public CartItem isOrderItemExist(@Param("order") Order order, @Param("product") Product product, @Param("size") String size, @Param("userId") Long userId);
}
