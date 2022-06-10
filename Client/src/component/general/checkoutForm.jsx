import React, { useEffect, useState } from "react";
import { Space, Button, Text, Group } from "@mantine/core";
import {
    Elements,
    CardElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "../../css/payment.css";
import Logo from "./logo";

const stripePromise = loadStripe(
    "pk_test_51L5VsBHihNXOYuTY3oM7Tf3knsg5gaElFMpmJ83reKHkYVU8EVZF7Na9VlfuL45nm7aJX1qEVjfHgc6zX1SftPe700qT0FsdZd"
);

const handleSubmit = (stripe, elements) => async () => {
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
    });

    if (error) {
        console.log("[error]", error);
    } else {
        console.log("[PaymentMethod]", paymentMethod);
        // ... SEND to your API server to process payment intent
    }
};

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    return (
        <form className="payment-form-wrapper">
            <Logo classname="form-company-logo" />
            <Space h="md" />
            <Text weight={600} style={{ fontSize: 36, textAlign: "center" }}>
                Thanh toán
            </Text>
            <Space h="md" />
            <Text style={{ textAlign: "left" }}>
                Vui lòng điền đầy đủ thông tin thẻ
            </Text>
            <Space h="md" />
            <Text style={{ textAlign: "left" }}>
                * Chúng tôi chấp nhận các phương thức thanh toán khác nhau như
                visa, mastercard, ...
            </Text>
            <Space h="xl" />
            <CardElement />
            <Space h="md" />
            <Button
                onClick={handleSubmit(stripe, elements)}
                color="dark"
                className="form-signin-submit-btn"
            >
                MUA
            </Button>
        </form>
    );
};

export default function CheckoutForm() {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    );
}
