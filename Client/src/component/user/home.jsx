import React from "react";
import "../../css/home.css";
import { Container } from "@mantine/core";

export default function Home() {
    return (
        <>
            <div className="home">
                <Container>Sản phẩm bán chạy nhất</Container>
                <Container>Sản phẩm mới nhất</Container>
            </div>
        </>
    );
}
