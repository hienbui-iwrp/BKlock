import React from 'react';
import { Button, Container, Grid, Group, Text, Title } from '@mantine/core';
import '../../css/cart.css';
import { useState, useContext, useEffect } from 'react';
import CartCard from '../general/cartCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Cart() {
    const [total, setTotal] = useState(0);
    const [cartList, setCartList] = useState([])

    const handlePayment = async () => {
        const products = cartList.map((cartItem) => {
            return {
                id: cartItem.id,
                quantity: cartItem.quantity,
            };
        });

        const newCart = {
            product: products,
            userId: sessionStorage.getItem("id"),
        };

        console.log(JSON.stringify(newCart));
        await axios.put('http://localhost/Server/Controllers/cart/update.php', JSON.stringify(newCart))
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    React.useEffect(() => {
        const id = sessionStorage.getItem('id');
        axios.get(`http://localhost/Server/controllers/cart/get.php?id=${id}`)
            .then((response) => {
                console.log(response.data);
                setCartList(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    React.useEffect(() => {
        console.log(cartList);
    }, [cartList])

    return (
        <Container style={{ marginTop: 80 }} className="cart-container">
            <Grid >
                <Grid.Col>
                    <Title order={1} style={{ textAlign: "center" }}>
                        Giỏ hàng
                    </Title>
                </Grid.Col>
                {cartList.map(item => <Grid.Col>
                    <CartCard id={item.id} img={item.image} name={item.name} price={item.price} quantity={item.quantity} brand={item.brand} setTotal={setTotal} cartList={cartList} setCartList={setCartList} />
                </Grid.Col>)}
                <Grid.Col>
                    <Group direction="row" position="right">
                        <Text style={{ fontSize: 30, fontWeight: '500' }}>Tổng tiền: {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(total)}</Text>
                        <Link to="/payment">
                            <Button variant='outline' color="#339af0" size='lg' onClick={() => handlePayment()}>Thanh toán</Button>
                        </Link>
                    </Group>
                </Grid.Col>
            </Grid>
        </Container >
    );
}