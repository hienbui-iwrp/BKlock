import React from "react";
import "../../css/home.css";
import { Title } from "@mantine/core";
import Slider from "../general/slider";
import ProductCard from "../general/productCard";
const items = [
    "https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg",
    "https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg",
    "https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg",
    "https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg",
    "https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg",
    "https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg",
    "https://kenh14cdn.com/2019/9/12/photo-4-15682544730301888465967.jpg",
];

const products = [
    <ProductCard key={1} />,
    <ProductCard key={2} />,
    <ProductCard key={3} />,
    <ProductCard key={4} />,
    <ProductCard key={5} />,
    <ProductCard key={6} />,
    <ProductCard key={7} />,
];
export default function Home() {
    return (
        <>
            <div className="home">
                <Slider type="image" items={items} />
                <Title align="center" order={2} className="home-title">
                    Sản phẩm bán chạy nhất
                </Title>
                <Slider type="product" items={products} />
                <Title align="center" order={2} className="home-title">
                    Sản phẩm mới nhất
                </Title>
                <Slider type="product" items={products} />
            </div>
        </>
    );
}
