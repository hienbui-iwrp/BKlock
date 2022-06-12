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
    Title,
    Button
} from "@mantine/core";
import { Container, MediaQuery,TextInput,Box, Modal, Stack, Textarea } from '@mantine/core';
import "../../css/news.css";
import { useLocation } from "react-router-dom";
import { useViewportSize } from "@mantine/hooks";
import { Trash } from "tabler-icons-react";
import "../../css/product.css";


import { useForm } from '@mantine/form';

export default function News() {
    const [opened, setOpened] = React.useState(false);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const [activePage, setPage] = React.useState(1);
    const maxItemPerPage = 6;
    const total = Math.ceil(arr.length / maxItemPerPage);
    let location = useLocation();
    const { height, width } = useViewportSize();
    return (
        <>
            {/* <Group position="center" style={{ paddingBottom: "2%", margin: "2% 5%", borderBottom: "1px solid #000" }}>
                <Title order={1} >Quản Lý Tin Tức </Title>
            </Group> */}
            <Stack justify="space-around">
            <Group position="center" style={{ paddingBottom: "2%", margin: "2% 5% 0", borderBottom: "1px solid #000" }}>
                <Title order={1} >Quản lý Tin Tức </Title>
            </Group>
            <Group position="apart" direction="row" style={{ padding: "5px 5%" }}>
                <Button radius="xl" onClick={() => setOpened(true)}>Thêm mới </Button>
            </Group>
        </Stack>
            <div className="news">

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

            <Modal centered
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Thêm tin tức mới"
                    size="lg"
                >
                    <Grid>
                        <Grid.Col>
                            <ProductDetail />
                        </Grid.Col>
                    </Grid>
                </Modal>

        </>
    );
}

function Item() {
    return (
        <div
            className="new-item"
            style={{ width: "auto", marginLeft: 10, marginRight: 10 }}
        >
            <Card shadow="sm" p="lg">
                <Card.Section>
                    <Image
                        src="https://bossluxurywatch.vn/uploads/san-pham/rolex/sky-dweller/rolex-sky-dweller-42mm-326938-0005.png"
                        height={300}
                        alt="watch"
                        className="product-img-zoom"
                    />
                </Card.Section>
                <Group position="apart" spacing="xs">
                    <Text weight={700} size="xl" className="news__title">
                        Sales
                    </Text>
                    <Button leftIcon={<Trash />}
                        variant="outline" color="red"
                        className="product-card-btn admin__delete-btn"
                    >
                        Xóa
                    </Button>
                </Group>

                <Group direction="row" style={{ marginTop: 20 }}>
                    <Text weight={500}>6/1/2022</Text>
                    <Space w="xs" />
                    <Text weight={500}>100 views</Text>
                    <Space w="xs" />
                    <Text weight={500}>100 likes</Text>
                </Group>
                <Spoiler maxHeight={100} showLabel="Show more" hideLabel="Hide">
                    <Text weight={400} className="news__content">
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


function ProductDetail() {
    const { height, width } = useViewportSize();
    const form = useForm({
        initialValues: {
            title: 'ABC',
            content: 'rolex',
        },
        validate: {
            title: (value) => value,
            content: (value) => value
        },
    });
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
                            height="320px"
                            fit="contain"
                        />
                    </Container>
                </MediaQuery>
                <Group position="left" mt="md">
                    <Button variant="outline" color="dark">Chọn ảnh</Button>
                </Group>
            </Grid.Col>
            <Grid.Col xl={6} lg={6} md={6} sm={6} xs={12}>

                <Box >
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput
                            required
                            label="Title"
                            placeholder="Input title"
                            {...form.getInputProps('title')}
                        />
                        <Textarea
                            label="Content"
                            placeholder="Input content"
                            autosize
                            minRows={10}
                            maxRows={10}
                            {...form.getInputProps('content')}
                        />
                        <Group position="right" mt="md">
                            <Button type="submit" color="green">Thêm sản phẩm</Button>
                        </Group>
                    </form>
                </Box>
            </Grid.Col>
        </Grid>
    );
}

