package com.flipkart.backend.controller;

import com.flipkart.backend.model.Review;
import com.flipkart.backend.service.ReviewService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/add")
    public void addReview(@RequestParam long productId, @RequestParam long userId,
                          @RequestParam String reviewText, @RequestParam double rating) {
        reviewService.addReview(productId, userId, reviewText, rating);
    }

    @GetMapping("/product/{productId}")
    public List<Review> getReviews(@PathVariable long productId) {
        return reviewService.getReviewsByProductId(productId);
    }
}

