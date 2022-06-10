import React, { useEffect, useState } from "react";
import { Space, Button, Text, Popover, Modal } from "@mantine/core";
import {
    Elements,
    CardElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "../../css/payment.css";
import Logo from "./logo";
import { Link } from "react-router-dom";

const stripePromise = loadStripe(
    "pk_test_51L5VsBHihNXOYuTY3oM7Tf3knsg5gaElFMpmJ83reKHkYVU8EVZF7Na9VlfuL45nm7aJX1qEVjfHgc6zX1SftPe700qT0FsdZd"
);

const handleSubmit =
    (stripe, elements, setFailed, setMessage, setSuccess) => async () => {
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.log("[error]", error);
            setMessage(error.message);
            setFailed(true);
        } else {
            console.log("[PaymentMethod]", paymentMethod);
            setSuccess(true);
            setMessage("Thanh toán thành công");
            // ... SEND to your API server to process payment intent
        }
    };

const PaymentForm = ({ total }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [failed, setFailed] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
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
            <Space h="md" />
            <Text style={{ fontSize: 30, fontWeight: "500" }}>
                Tổng tiền: ${total}
            </Text>
            <Popover
                opened={failed}
                onClose={() => setFailed(false)}
                target={<div></div>}
                width={260}
                position="top"
                withArrow
            >
                <Text size="sm">{message}</Text>
            </Popover>
            <Modal
                opened={success}
                onClose={() => setSuccess(false)}
                size={300}
                withCloseButton={false}
                centered
            >
                <Text size="xl" style={{ textAlign: "center" }}>
                    {message}
                </Text>
                <Space h="md" />
                <Link to="/">
                    <Button color="dark" className="form-signin-submit-btn">
                        Trở về trang chủ
                    </Button>
                </Link>
            </Modal>
            <CardElement />
            <Space h="md" />
            <Button
                onClick={handleSubmit(
                    stripe,
                    elements,
                    setFailed,
                    setMessage,
                    setSuccess
                )}
                color="dark"
                className="form-signin-submit-btn"
            >
                MUA
            </Button>
        </form>
    );
};

export default function CheckoutForm({ total }) {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm total={total} />
        </Elements>
    );
}
