import React from 'react';
import { Card, Image, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import "../../css/product.css";

export default function ProductCard() {
    const [variant, setVariant] = React.useState("outline");
    const [variant1, setVariant1] = React.useState("outline");

    return (
        <div style={{ width: "auto", marginLeft: 10, marginRight: 10 }}>
            <Card shadow="md" p="lg">
                <Card.Section>
                    <Link to="/detail">
                        <Image src="https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png" height="50vh" alt="watch" className='product-img-zoom' />
                    </Link>
                </Card.Section>

                <Text weight={700} color="red">Rolex</Text>
                <Link to="/detail" style={{ textDecoration: 'none' }}>
                    <Text weight={500} className="product-name">Rolex abc xyz</Text>
                </Link>
                <Text weight={500} color="red" align='right' size="xl">$2,000</Text>
                <Group direction='row' grow style={{ marginTop: 10 }}>

                    <Button fullWidth leftIcon={<SiCashapp />}
                        onMouseEnter={() => setVariant("filled")}
                        onMouseLeave={() => setVariant("outline")}
                        variant={variant}
                    >
                        Buy now
                    </Button>

                    <Button fullWidth leftIcon={<MdOutlineAddShoppingCart />}
                        onMouseEnter={() => setVariant1("filled")}
                        onMouseLeave={() => setVariant1("outline")}
                        variant={variant1}
                    >
                        Add to cart
                    </Button>

                </Group>

            </Card>
        </div>
    );
}