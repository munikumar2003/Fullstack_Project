package com.flipkart.backend.controller;

import com.flipkart.backend.model.Customer;
import com.flipkart.backend.model.EmailOTPRequest;
import com.flipkart.backend.model.LoginRequest;
import com.flipkart.backend.service.PhoneOTPService;
import com.flipkart.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/users")
@CrossOrigin(origins ="http://localhost:5173")
public class CustomerController {
    @Autowired
    UserService userService;
    private final PhoneOTPService phoneOTPService;

    public CustomerController(PhoneOTPService phoneOTPService) {
        this.phoneOTPService = phoneOTPService;
    }

    @PostMapping("/signup")
    public ResponseEntity<Customer> signup(@RequestBody Customer customer)
    {
        System.out.println("hi");
      return new ResponseEntity<>(userService.signup(customer), HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<Customer> login(@RequestBody LoginRequest loginRequest)
    {
        System.out.println("hello");
        return new ResponseEntity<>(userService.login(loginRequest), HttpStatus.OK);
    }

    @PostMapping("/email/otp")
    public ResponseEntity<String> otpSender(@RequestBody EmailOTPRequest email){
        return new ResponseEntity<>(userService.otpSender(email.getEmail()),HttpStatus.OK);
    }

    @PostMapping("/phone/otp")
    public ResponseEntity<String> sendSms(@RequestParam String to, @RequestParam String message) {
        phoneOTPService.sendSms(to, message);
        return ResponseEntity.ok("SMS sent successfully to " + to);
    }
}
