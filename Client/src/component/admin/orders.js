import React from 'react';
import CartCard from "../general/cartCard";
import { Grid } from "@mantine/core";

const paymentItems = [{
    id: 1,
    name: "Rolex-1AB",
    img: "https://cdn3.dhht.vn/wp-content/uploads/2021/01/dong-ho-rolex-nam-nu-chinh-hang-gia-bao-nhieu-danh-gia-chi-tiet.jpg",
    price: "3000000",
    quantity: 1,
    brand: "Rolex"
}]

export default function Orders() {
    const [total, setTotal] = React.useState(0);
    return <div>
        {paymentItems.map((item) => (
            <Grid.Col>
                <CartCard
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    quantity={
                        item.quantity ? item.quantity : item.count
                    }
                    setTotal={setTotal}
                    brand={item.brand}
                    payment={true}
                    order={true}
                />
            </Grid.Col>
        ))}
    </div>
}