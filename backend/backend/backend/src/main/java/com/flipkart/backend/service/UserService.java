package com.flipkart.backend.service;

import com.flipkart.backend.model.Customer;
import com.flipkart.backend.model.LoginRequest;
import com.flipkart.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import java.util.Random;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    EmailOTPService emailOTPService;

    public Customer signup(Customer customer)
    {
       Customer customer_1=userRepo.save(customer);
       return customer_1;
    }
    public Customer login(LoginRequest loginRequest) {
            String email = loginRequest.getEmail().trim().toLowerCase();
            String password = loginRequest.getPassword();

            // Debugging: Log the extracted email
            System.out.println("Attempting login for email: " + email);

            // Fetch user by email
            Optional<Customer> optionalCustomer = userRepo.findByemail(email);
            Customer customer = null;
            if (optionalCustomer.isPresent())
                customer = optionalCustomer.get();

            // Debugging: Log the customer details
            System.out.println("Customer found: " + customer);

            // Validate password
            if (customer.getPassword().equals(password)) {
                return customer;
            }
            throw new RuntimeException();
    }

    public String otpSender(String email){
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        String emailBody = "<html>"
                + "<body>"
                + "<p>Hello User,</p>"
                + "<p>The One Time Password for your Registration: "
                +"<b>"+otp+"</b></p>"
                + "<p>Thank you!</p>"
                +"<p>Team Flipkart-clone"
                + "</body>"
                + "</html>";
        System.out.println(emailBody);
        // Send email
        try {
            emailOTPService.sendEmail(email, "OTP for Verification", emailBody);
        }catch (Exception e){
            System.out.println("Error Ocurred!");
        }
        return otp+"";
    }
}
