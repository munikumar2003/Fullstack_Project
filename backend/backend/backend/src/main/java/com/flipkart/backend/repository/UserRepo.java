package com.flipkart.backend.repository;

import com.flipkart.backend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepo extends JpaRepository<Customer, Long> {

    Optional<Customer> findByemail(String email);
}
