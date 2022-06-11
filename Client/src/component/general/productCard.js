import React from 'react';
import { Card, Image, Text, Button, Group, Badge } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import "../../css/product.css";

export default function ProductCard({ id, img, brand, name, price }) {
    const [scroll, scrollTo] = useWindowScroll();
    return (
        <div style={{ width: "auto", marginLeft: 10, marginRight: 10 }}>
            <Card shadow="md" p="lg">
                <Card.Section style={{ marginBottom: 20, padding: 5 }}>
                    <Link to={`/detail/${id}`} onClick={() => scrollTo({ y: 0 })}>
                        <Image src={img} height="50vh" alt="watch" className='product-img-zoom' onClick={() => scrollTo({ y: 0 })} />
                    </Link>
                </Card.Section>

                <Badge size="lg" color="red">
                    {brand}
                </Badge>
                <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }} onClick={() => scrollTo({ y: 0 })}>
                    <Text weight={500} className="product-name" onClick={() => scrollTo({ y: 0 })}>{name}</Text>
                </Link>
                <Text weight={500} color="red" align='right' size="xl">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</Text>
                <Group direction='row' grow style={{ marginTop: 10 }}>

                    <Button fullWidth leftIcon={<SiCashapp />}
                        variant="outline"
                        className="product-card-btn"
                        onClick={() => scrollTo({ y: 0 })}
                    >
                        Mua ngay
                    </Button>

                    <Button fullWidth leftIcon={<MdOutlineAddShoppingCart />}
                        variant="outline"
                        className="product-card-btn"
                        onClick={() => scrollTo({ y: 0 })}
                    >
                        Thêm vào giỏ hàng
                    </Button>

                </Group>

            </Card>
        </div>
    );
}