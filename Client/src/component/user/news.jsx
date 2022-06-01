import React from "react";
import {
    Card,
    Image,
    Text,
    Group,
    Grid,
    Pagination,
    Space,
    Spoiler,
    Container,
} from "@mantine/core";
import "../../css/news.css";

export default function News() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const [activePage, setPage] = React.useState(1);
    const maxItemPerPage = 6;
    const total = Math.ceil(arr.length / maxItemPerPage);
    return (
        <>
            <div className="news">
                <Space h="xl" />
                <Container className="news-head">
                    <Text>
                        orem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </Container>
                <Space h="xl" />
                <Grid style={{ margin: 0 }}>
                    {arr
                        .slice(
                            (activePage - 1) * maxItemPerPage,
                            activePage * maxItemPerPage
                        )
                        .map((x) => {
                            return (
                                <Grid.Col
                                    xl={4}
                                    lg={4}
                                    md={6}
                                    sm={6}
                                    xs={12}
                                    key={x}
                                >
                                    <Item />
                                </Grid.Col>
                            );
                        })}
                </Grid>
                <Pagination
                    onChange={(page) => {
                        setPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    total={total}
                    position="right"
                    withEdges
                    className="product-pagination"
                />
                ;
            </div>
        </>
    );
}

function Item() {
    return (
        <div className="new-item">
            <Card shadow="sm" p="lg">
                <Card.Section>
                    <Image
                        src="https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png"
                        height={350}
                        alt="watch"
                        className="product-img-zoom"
                    />
                </Card.Section>
                <Group direction="row" style={{ marginTop: 20 }}>
                    <Text weight={500}>6/1/2022</Text>
                    <Space w="xl" />
                    <Text weight={500}>100 views</Text>
                    <Space w="xl" />
                    <Text weight={500}>100 likes</Text>
                </Group>
                <Text weight={600} size="lg">
                    Sales
                </Text>
                <Spoiler maxHeight={100} showLabel="Show more" hideLabel="Hide">
                    <Text weight={500}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </Spoiler>
            </Card>
        </div>
    );
}
