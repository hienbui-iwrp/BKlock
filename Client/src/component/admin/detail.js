import "../../css/detail.css";
import React from 'react';
import CommentSection from '../general/commentSection';
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
    Input,
    Select 
} from "@mantine/core";
import "../../css/detail.css";
import { useViewportSize } from "@mantine/hooks";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { SiCashapp } from "react-icons/si";

export default function Detail() {
    return (
        <Container className="detail-section-container" style={{ marginTop: 60 }}>
            <Grid style={{ marginTop: 60 }}>
                <Grid.Col>
                    <ProductDetail />
                </Grid.Col>
                <Grid.Col>
                    <CommentSection />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

function ProductDetail() {
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
                            src="https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png"
                            alt="watch"
                            height="500px"
                            fit="contain"
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
                        Tên:
                        <Input
                            placeholder="Your email"
                            radius="md"
                            size="md"
                            defaultValue="ABC"
                        />
                    </Text>
                </MediaQuery>
                {width > 900 ? (
                    <Group direction="column">
                        <Badge size={"lg"} style={{ marginLeft: 40 }}>
                            Brand
                        </Badge>
                        <List
                            size="xl"
                            style={{ marginLeft: 40, marginBottom: 20 }}
                        >
                            <List.Item>Sex</List.Item>
                            <List.Item>Type</List.Item>
                            <List.Item>Category</List.Item>
                        </List>
                    </Group>
                ) : (
                    <Group className={"detail-product-name"}>
                        <Badge size={"lg"}>Brand</Badge>
                        <Badge size={"lg"}>Sex</Badge>
                        <Badge size={"lg"}>Type</Badge>
                        <Badge size={"lg"}>Category</Badge>
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
                        Giá: 2.000.000 VND
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
