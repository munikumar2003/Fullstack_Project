package com.flipkart.backend.repository;

import com.flipkart.backend.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ReviewRepo extends JpaRepository<Review, Long> {
    List<Review> findByProductId(long productId);  // Find reviews by product ID
}
