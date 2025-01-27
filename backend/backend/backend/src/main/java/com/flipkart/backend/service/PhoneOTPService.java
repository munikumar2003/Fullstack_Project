package com.flipkart.backend.service;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class PhoneOTPService {

    @Value("${twilio.account_sid}")
    private String accountSid;

    @Value("${twilio.auth_token}")
    private String authToken;

    @Value("${twilio.phone_number}")
    private String fromPhoneNumber;

    public PhoneOTPService() {
        String accountSid = "";
        String authToken = "";

        if (accountSid == null || authToken == null) {
            throw new IllegalArgumentException("Twilio credentials are not set");
        }
        // Initialize Twilio SDK
        Twilio.init(accountSid, authToken);
    }

    public void sendSms(String toPhoneNumber, String messageBody) {
        System.out.println("hi");
        toPhoneNumber="+"+toPhoneNumber;
        Message message = Message.creator(
                new com.twilio.type.PhoneNumber(toPhoneNumber),
                new com.twilio.type.PhoneNumber(fromPhoneNumber),
                messageBody
        ).create();

        System.out.println("SMS sent with SID: " + message.getSid());
    }
}

