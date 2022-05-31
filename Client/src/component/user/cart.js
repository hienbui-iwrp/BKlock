import React from 'react';
import { MantineProvider, Table, Container, Checkbox, Text, Image, Button, Grid } from '@mantine/core';
import '../../css/cart.css';
import { useState } from 'react';


export default function Cart() {
    const [cartList, setCartList] = useState([
        {
            "image": "https://trinhvantuyen.com/wp-content/uploads/2022/05/2d6407e36c8911b02b4c1f0e31b8696a.jpg",
            "name": "Meo",
            "price": 200,
            "quantity": 1,
        },
        {
            "image": "https://trinhvantuyen.com/wp-content/uploads/2022/05/2d6407e36c8911b02b4c1f0e31b8696a.jpg",
            "name": "Meo",
            "price": 300,
            "quantity": 2,
        }, {
            "image": "https://trinhvantuyen.com/wp-content/uploads/2022/05/2d6407e36c8911b02b4c1f0e31b8696a.jpg",
            "name": "Meo",
            "price": 500,
            "quantity": 4,
        }
        , {
            "image": "https://trinhvantuyen.com/wp-content/uploads/2022/05/2d6407e36c8911b02b4c1f0e31b8696a.jpg",
            "name": "Meo",
            "price": 20,
            "quantity": 1,
        }
    ])


    return (
        <MantineProvider theme={{ colorScheme: 'light' }}
            defaultProps={{
                Container: {
                    sizes: {
                        xs: 540,
                        sm: 720,
                        md: 960,
                        lg: 1140,
                        xl: 1320,
                    },
                },
            }}>
            <Container size="85%" >
                <Table horizontalSpacing="lg" verticalSpacing="sm" className="cart">
                    <thead>
                        <tr className="cart__item">
                            <th>
                                <Checkbox
                                    label=""
                                    color="green"
                                />
                            </th>
                            <th><Text size='lg' className="cart__element">Sản phẩm</Text></th>
                            <th className="cart__element"></th>
                            <th><Text size='lg' className="cart__element">Đơn giá</Text></th>
                            <th><Text size='lg' className="cart__element">Số lượng</Text></th>
                            <th><Text size='lg' className="cart__element">Số tiền</Text></th>
                            <th><Text size='lg' className="cart__element">Thao tác</Text></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList.map((item) => {
                                return (
                                    <tr className="cart__item">
                                        <td>
                                            <Checkbox
                                                label=""
                                                color="green"
                                            />
                                        </td>
                                        <td>
                                            <Image
                                                width={80}
                                                height={80}
                                                fit="contain"
                                                src={item.image}
                                            />
                                        </td>
                                        <td>
                                            <Text size='lg'>{item.name}</Text>
                                        </td>
                                        <td>
                                            <Text size='lg' className='cart__price'>{item.price}$</Text>
                                        </td>
                                        <td>
                                            <Button color="green" radius="md" size="xs"><Text size='lg'>-</Text></Button>
                                            <Text size='lg' className="cart__quantity">{item.quantity} </Text>
                                            <Button color="green" radius="md" size="xs"><Text size='lg'>+</Text></Button>
                                        </td>
                                        <td>
                                            <Text size='lg' className='cart__price'>{item.price * item.quantity}$</Text>
                                        </td>
                                        <td>
                                            <Button color="red" size="xs"><Text size='md'>Xóa</Text></Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            <div style={{ display: 'flex', justifyContent: 'right' }}>
                <div className="cart__payment">
                    <Grid column={12}>
                        <Grid.Col xs={6} sm={4}><Text size='lg'>Tổng sản phẩm: 1</Text></Grid.Col>
                        <Grid.Col xs={6} sm={4}><Text size='xl' className='cart__price' weight={700}>200$</Text></Grid.Col>
                        <Grid.Col xs={12} sm={4}><Text size='lg'>
                            <Button fullWidth variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Thanh toán</Button>
                        </Text></Grid.Col>
                    </Grid>
                </div>

            </div>
        </MantineProvider >
    )
}