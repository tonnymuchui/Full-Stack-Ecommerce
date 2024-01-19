package com.ecommerce.models;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.time.LocalDate;

@Embeddable
public class PaymentInformation {
    @Column(name = "cardholder_name")
    private String cardholderName;
    @Column(name = "card_number")
    private String cardNumber;
    @Column(name = "expiration_date")
    private LocalDate localDate;
    @Column(name = "cvv")
    private String cvv;
}
