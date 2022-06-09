import React from 'react';
import { Button, Container, Grid, Group, Text, Title } from '@mantine/core';
import '../../css/cart.css';
import { useState } from 'react';
import CartCard from '../general/cartCard';


export default function Cart() {
    const [total, setTotal] = useState(0);
    let [cartList, setCartList] = useState([
        {
            "image": "https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png",
            "name": "Rolex abc xyz",
            "price": 200,
            "quantity": 1,
            "brand": "Rolex"
        },
        {
            "image": "https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png",
            "name": "Rolex abc xyz",
            "price": 300,
            "quantity": 2,
            "brand": "Rolex"
        }, {
            "image": "https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png",
            "name": "Rolex abc xyz",
            "price": 500,
            "quantity": 4,
            "brand": "Rolex"
        }
        , {
            "image": "https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png",
            "name": "Rolex abc xyz",
            "price": 20,
            "quantity": 1,
            "brand": "Rolex"
        }
    ])

    return (
        <Container style={{ marginTop: 80 }} className="cart-container">
            <Grid >
                <Grid.Col>
                    <Title order={1} style={{ textAlign: "center" }}>
                        Giỏ hàng
                    </Title>
                </Grid.Col>
                {cartList.map(item => <Grid.Col>
                    <CartCard img={item.image} name={item.name} price={item.price} quantity={item.quantity} brand={item.brand} setTotal={setTotal} />
                </Grid.Col>)}
                <Grid.Col>
                    <Group direction="row" position="right">
                        <Text style={{ fontSize: 30, fontWeight: '500' }}>Tổng tiền: ${total}</Text>
                        <Button variant='outline' color="#339af0" size='lg'>Thanh toán</Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </Container>
    );
}