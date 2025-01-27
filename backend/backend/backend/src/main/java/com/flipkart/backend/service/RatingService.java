package com.flipkart.backend.service;

import com.flipkart.backend.model.Rating;
import com.flipkart.backend.repository.RatingRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RatingService {

    private final RatingRepo ratingRepo;

    public RatingService(RatingRepo ratingRepo) {
        this.ratingRepo = ratingRepo;
    }

    public Rating saveRating(Rating rating) {
        return ratingRepo.save(rating);
    }

    public List<Rating> getAllRatings() {
        return ratingRepo.findAll();
    }

    public Optional<Rating> getRatingById(long id) {
        return ratingRepo.findById(id);
    }

    public void deleteRating(long id) {
        ratingRepo.deleteById(id);
    }
}
