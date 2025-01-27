package com.flipkart.backend.service;

import com.flipkart.backend.model.Order;
import com.flipkart.backend.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepo orderRepo;

    public Order createOrder(Order order) {
        return orderRepo.save(order);
    }

    public Order getOrderById(long id) {
        Optional<Order> order = orderRepo.findById(id);
        return order.orElseThrow(() -> new RuntimeException("Order not found with id: " + id));
    }

    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    public Order updateOrder(long id, Order updatedOrder) {
        Order existingOrder = getOrderById(id);
        existingOrder.setStatus(updatedOrder.getStatus());
        existingOrder.setTotal(updatedOrder.getTotal());
        existingOrder.setCustomer(updatedOrder.getCustomer());
        existingOrder.setOrderedProducts(updatedOrder.getOrderedProducts());
        existingOrder.setLocalDate(updatedOrder.getLocalDate());
        return orderRepo.save(existingOrder);
    }

    public void deleteOrder(long id) {
        Order order = getOrderById(id);
        orderRepo.delete(order);
    }
}

