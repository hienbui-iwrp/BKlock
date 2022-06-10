import { Grid } from "@mantine/core";
import React from "react";
import CheckoutForm from "../general/checkoutForm";
import CartCard from "../general/cartCard";
import "../../css/payment.css";
import { PaymentItemsContext } from "../general/paymentItemsContext";

export default function Payment() {
    const [total, setTotal] = React.useState(0);
    const [paymentItems, setPaymentItems] =
        React.useContext(PaymentItemsContext);

    console.log(paymentItems);
    return (
        <Grid>
            <Grid.Col xl={4} className="payment-col-wrapper">
                <CheckoutForm />
            </Grid.Col>
            <Grid.Col xl={8}>
                {paymentItems.map((item) => (
                    <Grid.Col>
                        <CartCard
                            img={item.image}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            brand={item.brand}
                            setTotal={setTotal}
                        />
                    </Grid.Col>
                ))}
            </Grid.Col>
        </Grid>
    );
}
