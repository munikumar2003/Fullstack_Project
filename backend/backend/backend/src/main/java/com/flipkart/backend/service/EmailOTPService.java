package com.flipkart.backend.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.nio.file.FileSystems;
import java.nio.file.Path;

@Service
public class EmailOTPService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(String to, String subject, String body) throws MessagingException {
        // Create a MimeMessage
        System.out.print(to);
        System.out.println(subject);
        System.out.println(body);
        MimeMessage message = mailSender.createMimeMessage();
        // Use MimeMessageHelper to add HTML content and inline images
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(body, true); // Enable HTML content

        // Send the email
        mailSender.send(message);
    }
}
