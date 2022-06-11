import {
    Container,
    Grid,
    Image,
    Text,
    MediaQuery,
    Badge,
    Group,
    List,
    Button,
} from "@mantine/core";
import "../../css/detail.css";
import React from "react";
import { useViewportSize } from "@mantine/hooks";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { SiCashapp } from "react-icons/si";

export default function ProductDetail({
    id,
    name,
    img,
    brand,
    sex,
    category,
    price,
    description,
}) {
    const { height, width } = useViewportSize();

    return (
        <Grid>
            <Grid.Col xl={6} lg={6} md={6} sm={6} xs={12}>
                <MediaQuery
                    query="(max-width: 1800px) and (min-width: 900px)"
                    styles={{
                        border: "1px solid #f1f1f1",
                    }}
                >
                    <Container className="detail-image-container">
                        <Image
                            src={img}
                            alt="watch"
                            height="500px"
                            fit="cover"
                        />
                    </Container>
                </MediaQuery>
            </Grid.Col>
            <Grid.Col xl={6} lg={6} md={6} sm={6} xs={12}>
                <MediaQuery
                    query="(max-width: 1800px) and (min-width: 900px)"
                    styles={{
                        fontSize: 36,
                        marginLeft: 40,
                        fontWeight: 600,
                        marginBottom: 20,
                    }}
                >
                    <Text className={width < 900 ? "detail-product-name" : ""}>
                        {name}
                    </Text>
                </MediaQuery>
                {width > 900 ? (
                    <Group direction="column">
                        <Group
                            direction="row"
                            style={{ marginLeft: 40, marginBottom: 20 }}
                        >
                            <Badge size={"lg"}>{brand}</Badge>
                            <Badge size={"lg"}>{sex}</Badge>
                            <Badge size={"lg"}>{category}</Badge>
                        </Group>
                        <Text style={{ marginLeft: 40, marginBottom: 20 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Natus architecto accusantium doloremque esse
                            ipsum maxime amet odit quibusdam nulla libero
                            debitis nesciunt aperiam eveniet, quos dolorum
                            itaque sunt quisquam adipisci!
                        </Text>
                    </Group>
                ) : (
                    <Group className={"detail-product-name"}>
                        <Badge size={"lg"}>{brand}</Badge>
                        <Badge size={"lg"}>{sex}</Badge>
                        <Badge size={"lg"}>{category}</Badge>
                    </Group>
                )}

                <MediaQuery
                    query="(max-width: 1800px) and (min-width: 900px)"
                    styles={{
                        fontSize: 34,
                        marginLeft: 40,
                        fontWeight: 500,
                        marginBottom: 20,
                    }}
                >
                    <Text
                        className={width < 900 ? "detail-product-name" : ""}
                        color="red"
                    >
                        Giá:{" "}
                        {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(price)}
                    </Text>
                </MediaQuery>

                <Group direction="row" style={{ marginLeft: 40 }}>
                    <Button
                        leftIcon={<SiCashapp />}
                        variant="outline"
                        className="product-card-btn"
                    >
                        Mua ngay
                    </Button>

                    <Button
                        leftIcon={<MdOutlineAddShoppingCart />}
                        variant="outline"
                        className="product-card-btn"
                    >
                        Thêm vào giỏ hàng
                    </Button>
                </Group>
            </Grid.Col>
        </Grid>
    );
}
