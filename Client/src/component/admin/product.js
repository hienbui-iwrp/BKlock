import React from 'react';
import { Card, Image, Text, Button, Group, Badge } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Trash } from "tabler-icons-react";
import "../../css/product.css";

export default function Product() {
    return (
        <div style={{ width: "auto", marginLeft: 10, marginRight: 10 }}>
            <Card shadow="lg" p="lg">
                <Card.Section>
                    <Link to="/admin/detail">
                        <Image src="https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png" height="50vh" alt="watch" className='product-img-zoom' />
                    </Link>
                </Card.Section>
                <Badge size="lg" color="red">
                    Rolex
                </Badge>
                <Link to="/admin/detail" style={{ textDecoration: 'none' }}>
                    <Text weight={500} className="product-name">Rolex abc xyz</Text>
                </Link>
                <Text weight={500} color="red" align='right' size="xl">$2,000</Text>
                <Group direction='row' grow style={{ marginTop: 10 }}>

                    <Button fullWidth leftIcon={<Trash />}
                        variant="outline"
                        className="product-card-btn"
                    >
                        Xóa
                    </Button>

                </Group>

            </Card>
        </div>
    );
}