package com.group3.order.service;

import com.group3.order.dto.request.OrderCreation;
import com.group3.order.entity.Order;
import com.group3.order.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public Order createOrder(OrderCreation request){
        Order order = new Order();

        order.setOrderDate(request.getOrderDate());
        order.setShippedDate(request.getShippedDate());
        order.setOrigin(request.getOrigin());
        order.setDestination(request.getDestination());
        order.setFreight(request.getFreight());
        order.setTotalPrice(request.getTotalPrice());

        return orderRepository.save(order);
    }

}
