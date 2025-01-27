package com.flipkart.backend.service;

import com.flipkart.backend.model.Customer;
import com.flipkart.backend.model.Product;
import com.flipkart.backend.model.Review;
import com.flipkart.backend.repository.ProductRepo;
import com.flipkart.backend.repository.ReviewRepo;
import com.flipkart.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReviewService {
    private final ReviewRepo reviewRepository;
    @Autowired
    ProductRepo productRepo;
    @Autowired
    UserRepo userRepo;
    public ReviewService(ReviewRepo reviewRepo) {
        this.reviewRepository = reviewRepo;
    }

    public void addReview(long productId, long userId, String reviewText, double rating) {
        Product product = productRepo.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        Customer user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Review review = new Review(reviewText, rating, product, user);
        reviewRepository.save(review);
    }

    public List<Review> getReviewsByProductId(long productId) {
        return reviewRepository.findByProductId(productId);
    }
}

