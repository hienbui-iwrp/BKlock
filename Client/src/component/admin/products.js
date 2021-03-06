import React from 'react';
import Product from '../../component/admin/product';

import { Container, MediaQuery, Image, Modal, Select, Textarea } from '@mantine/core';
import { Grid, Pagination, Group, Input, Button, Title, Stack } from '@mantine/core';
import { TextInput, NumberInput, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useViewportSize } from "@mantine/hooks";
import { useLocation } from 'react-router-dom';
import { useWindowScroll } from '@mantine/hooks';
import { Search } from "tabler-icons-react";
import axios from 'axios';


export default function Products() {
    let location = useLocation();
    const [data, setData] = React.useState([]);
    const [scroll, scrollTo] = useWindowScroll();
    const [size, setSize] = React.useState([0, 0]);
    const [render, setRender] = React.useState(true);
    const [opened, setOpened] = React.useState(false);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const [activePage, setPage] = React.useState(1);
    const maxItemPerPage = 6;
    const total = Math.ceil(arr.length / maxItemPerPage);


    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    React.useEffect(() => {
        axios.get("http://localhost/Server/Controllers/product/getIndex.php?index=1")
            .then((response) => {
                console.log(response);
                setData(response.data);
                setOpened(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [render])
    const form = useForm({
        initialValues: {
            search: '',
        }
    });

    const handleSearch = (values) => {
        axios.get(`http://localhost/Server/controllers/product/search.php?search=${values.search}`)
            .then((response) => {
                console.log(response);
                setData(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    return <>
        <Stack justify="space-around">
            <Group position="center" style={{ paddingBottom: "2%", margin: "2% 5% 0", borderBottom: "1px solid #000" }}>
                <Title order={1} >Qu???n l?? S???n Ph???m </Title>
            </Group>
            <Group position="apart" direction="row" style={{ padding: "5px 5%" }}>
                <Button radius="xl" onClick={() => setOpened(true)}>Th??m m???i </Button>
                <form onSubmit={form.onSubmit((values) => handleSearch(values))} style={{ width: 300 }}>
                    <Group direction="row" >
                        <Input
                            placeholder="T??m ki???m"
                            radius="xl"
                            style={{ marginRight: '3%', width: '30%', minWidth: '200px' }}
                            {...form.getInputProps('search')}
                        />
                        <Button radius="xl" type="submit" ><Search /></Button>
                    </Group>
                </form>
            </Group>
        </Stack>
        <Grid style={{ marginTop: 30 }}>
            <Grid.Col>
                <Grid>
                    {data.slice((activePage - 1) * maxItemPerPage, activePage * maxItemPerPage).map(product => {
                        return (
                            <Grid.Col xl={4} lg={4} md={6} sm={6} xs={12} key={product.id}>
                                <Product id={product.id} img={product.image} brand={product.brand} name={product.name} price={product.price} setRender={setRender} render={render} />
                            </Grid.Col>
                        );
                    })}
                </Grid>
            </Grid.Col>
            <Grid.Col>
                <Modal centered
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Th??m s???n ph???m m???i"
                    size="lg"
                >
                    <Grid>
                        <Grid.Col>
                            <ProductAdd render={render} setRender={setRender} />
                        </Grid.Col>
                    </Grid>
                </Modal>

            </Grid.Col>
        </Grid>
        <Pagination onChange={(page) => {
            setPage(page);
            scrollTo({ y: 0 })
        }} total={total} position="right" withEdges className='product-pagination'
        />;
    </>

}

function ProductAdd(param) {
    const { height, width } = useViewportSize();
    const form = useForm({
        initialValues: {
            name: '',
            image: '',
            brand: 'Rolex',
            sex: '?????ng h??? nam',
            category: 'C?? - automatic',
            price: 0,
            descript: '',
        }
    });

    function Add(values) {
        const data = {
            name: values.name,
            image: values.image,
            brand: values.brand,
            sex: values.sex,
            category: values.category,
            price: values.price,
            descript: values.descript
        }
        console.log(JSON.stringify(data));
        axios.post("http://localhost/Server/Controllers/product/add.php", JSON.stringify(data))
            .then((response) => {
                console.log(response);
                param.setRender(!param.render);
            })
            .catch((error) => {
                console.log(error);
            })
    }

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
                    <Button variant="outline" color="dark">Ch???n ???nh</Button>
                </Group>
            </Grid.Col>
            <Grid.Col xl={6} lg={6} md={6} sm={6} xs={12}>

                <Box >
                    <form onSubmit={form.onSubmit((values) => Add(values))}>
                        <TextInput
                            required
                            label="T??n"
                            placeholder="Input Name"
                            {...form.getInputProps('name')}
                        />

                        <TextInput
                            required
                            label="Link ???nh"
                            placeholder="Input Link"
                            {...form.getInputProps('image')}
                        />

                        <Select
                            label="Th????ng hi???u"
                            data={[
                                { value: 'Rolex', label: 'Rolex' },
                                { value: 'Seiko', label: 'Seiko' },
                                { value: 'Casio', label: 'Casio' },
                                { value: 'Citizen', label: 'Citizen' },
                                { value: 'Fossil', label: 'Fossil' },

                            ]}
                            {...form.getInputProps('brand')}
                        />

                        <Select
                            label="Lo???i"
                            data={[
                                { value: '?????ng h??? nam', label: '?????ng h??? nam' },
                                { value: '?????ng h??? n???', label: '?????ng h??? n???' },
                                { value: '?????ng h??? tr??? em', label: '?????ng h??? tr??? em' },

                            ]}
                            {...form.getInputProps('type')}
                        />

                        <Select
                            label="?????ng c??"
                            data={[
                                { value: 'C?? - automatic', label: 'C??-automatic' },
                                { value: '??i???n t???', label: '??i???n t???' },
                                { value: 'Treo t?????ng', label: 'Treo t?????ng' },
                                { value: 'N??ng l?????ng m???t tr???i', label: 'N??ng l?????ng m???t tr???i' },

                            ]}
                            {...form.getInputProps('category')}
                        />

                        <NumberInput
                            required
                            label="Price"
                            placeholder="Input Price"
                            {...form.getInputProps('price')}
                        />

                        <Textarea
                            label="M?? t???"
                            placeholder="Input content"
                            autosize
                            minRows={3}
                            maxRows={6}
                            {...form.getInputProps('descript')}
                        />


                        <Group position="right" mt="md">
                            <Button color="green" type="submit">Th??m s???n ph???m</Button>
                        </Group>
                    </form>
                </Box>
            </Grid.Col>
        </Grid>
    );
}