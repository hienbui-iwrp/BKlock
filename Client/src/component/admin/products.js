import React from 'react';
import Product from '../../component/admin/product';
import { Container, MediaQuery, Grid, Image, Pagination, Text, Input, Button, Modal, Group, Select } from '@mantine/core';
import { TextInput, NumberInput, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useViewportSize } from "@mantine/hooks";
import { useLocation } from 'react-router-dom';
import { useWindowScroll } from '@mantine/hooks';
import { Search } from "tabler-icons-react";

export default function Products() {
    let location = useLocation();
    const [scroll, scrollTo] = useWindowScroll();
    const [size, setSize] = React.useState([0, 0]);
    const [opened, setOpened] = React.useState(false);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const [activePage, setPage] = React.useState(1);
    const maxItemPerPage = 6;
    const total = Math.ceil(arr.length / maxItemPerPage);
    const items = [
        "https://cdn.watchstore.vn/uploads/brands/orient-logo.jpg",
        "https://cdn.watchstore.vn/uploads/brands/tissot-logo.jpg",
        "https://cdn.watchstore.vn/uploads/brands/casio-logo.jpg",
        "https://cdn.watchstore.vn/uploads/brands/seiko-logo.jpg",
        "https://cdn.watchstore.vn/uploads/brands/citizen-logo.jpg",
    ];

    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return <>
        <Stack justify="space-around">
            <Group position="center" style={{ paddingBottom: "2%", margin: "2% 5% 0", borderBottom: "1px solid #000" }}>
                <Title order={1} >Quản lý Sản Phẩm </Title>
            </Group>
            <Group position="apart" direction="row" style={{ padding: "5px 5%" }}>
                <Button radius="xl" onClick={() => setOpened(true)}>Thêm sản phẩm </Button>
                <Group direction="row" style={{ width: 300 }}>
                    <Input
                        placeholder="Tìm kiếm"
                        radius="xl"
                        style={{ marginRight: '3%', width: '30%', minWidth: '200px' }}
                    />
                    <Button radius="xl"><Search /></Button>
                </Group>
            </Group>
        </Stack>
        <Grid style={{ marginTop: 30 }}>
            <Grid.Col>
                <Grid>
                    {arr.slice((activePage - 1) * maxItemPerPage, activePage * maxItemPerPage).map(x => {
                        return (
                            <Grid.Col xl={4} lg={4} md={6} sm={6} xs={12} key={x}>
                                <Product />
                            </Grid.Col>
                        );
                    })}
                </Grid>
            </Grid.Col>
            <Grid.Col>
                <Modal centered 
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Thêm sản phẩm mới"
                    size="lg"
                >
                    <Grid>
                        <Grid.Col>
                            <ProductDetail />
                        </Grid.Col>
                    </Grid>
                </Modal>

                <Group position="center">
                    <Button onClick={() => setOpened(true)}>Open Modal</Button>
                </Group>
            </Grid.Col>
        </Grid>
        <Pagination onChange={(page) => {
            setPage(page);
            scrollTo({ y: 0 })
        }} total={total} position="right" withEdges className='product-pagination'
        />;
    </>

}

function ProductDetail() {
    const { height, width } = useViewportSize();
    const form = useForm({
        initialValues: {
            name: 'ABC',
            branch: 'rolex',
            type: 'đồng hồ nam',
            category: 'cơ-automatic',
            price: 2000000
        },
        validate: {
            name: (value) => value,
            branch: (value) => value,
            type: (value) => value,
            category: (value) => value,
            price: (value) => value,
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
                            label="Name"
                            placeholder="Input Name"
                            {...form.getInputProps('name')}
                        />
                        <Select
                            label="Branch"
                            data={[
                                { value: 'rolex', label: 'Rolex' },
                                { value: 'seiko', label: 'Seiko' },
                                { value: 'casio', label: 'Casio' },
                                { value: 'citizen', label: 'Citizen' },
                                { value: 'fossil', label: 'Fossil' },

                            ]}
                            {...form.getInputProps('branch')}
                        />

                        <Select
                            label="Type"
                            data={[
                                { value: 'đồng hồ nam', label: 'Đồng hồ nam' },
                                { value: 'đồng hồ nữ', label: 'Đồng hồ nữ' },
                                { value: 'đồng hồ trẻ em', label: 'Đồng hồ trẻ em' },

                            ]}
                            {...form.getInputProps('type')}
                        />

                        <Select
                            label="Category"
                            data={[
                                { value: 'cơ-automatic', label: 'Cơ-automatic' },
                                { value: 'điện tử', label: 'Điện tử' },
                                { value: 'treo tường', label: 'Treo tường' },
                                { value: 'năng lượng mặt trời', label: 'Năng lượng mặt trời' },

                            ]}
                            {...form.getInputProps('category')}
                        />

                        <NumberInput
                            required
                            label="Price"
                            placeholder="Input Price"
                            {...form.getInputProps('price')}
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