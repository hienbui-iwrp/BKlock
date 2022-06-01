import React from 'react';
import { Card, Image, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import "../../css/product.css";

export default function ProductCard() {
    const [variant, setVariant] = React.useState("outline");
    const [variant1, setVariant1] = React.useState("outline");

    return (
        <div style={{ width: 340, margin: 'auto' }}>
            <Card shadow="sm" p="lg">
                <Card.Section>
                    <Link to="/detail">
                        <Image src="https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png" height={350} alt="watch" className='product-img-zoom' />
                    </Link>
                </Card.Section>

                <Text weight={700} color="red">Rolex</Text>
                <Link to="/detail" style={{ textDecoration: 'none' }}>
                    <Text weight={500} className="product-name">Rolex abc xyz</Text>
                </Link>
                <Text weight={500} color="red" align='right' size="xl">$2,000</Text>
                <Group direction='row' grow style={{ marginTop: 10 }}>

                    <Button fullWidth
                        onMouseEnter={() => setVariant("filled")}
                        onMouseLeave={() => setVariant("outline")}
                        variant={variant}
                    >
                        <Text weight={500} size="lg">Buy now</Text>
                    </Button>

                    <Button fullWidth
                        onMouseEnter={() => setVariant1("filled")}
                        onMouseLeave={() => setVariant1("outline")}
                        variant={variant1}
                    >
                        <Text weight={500} size="lg">Add to cart</Text>
                    </Button>

                </Group>

            </Card>
        </div>
    );
}