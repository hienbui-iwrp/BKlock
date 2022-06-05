import React from 'react';
import ProductCard from '../../component/general/productCard';
import { Grid, Pagination, Text, Image, MediaQuery, Box } from '@mantine/core';
import Slider from '../general/slider';
import FilterForm from '../../component/general/filterForm';
import "../../css/product.css";

export default function Products() {
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
    ]
    return <>
        <Grid style={{ marginTop: 60 }}>
            <Grid.Col lg={12} className="product-ad-container">
                <Image src={"https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"} height="30vh" className="product-ad-image" />
                <Text className="product-ads-text">
                    Products
                </Text>
            </Grid.Col>
            <Grid.Col>
                <MediaQuery
                    query="(max-width: 1800px) and (min-width: 1200px)"
                    styles={{ marginLeft: 50, marginRight: 50 }}
                >
                    <Grid>
                        <Grid.Col lg={2}>
                            <FilterForm />
                        </Grid.Col>
                        <Grid.Col lg={10}>
                            <Slider type="image" items={items} />
                            <Grid>
                                {arr.slice((activePage - 1) * maxItemPerPage, activePage * maxItemPerPage).map(x => {
                                    return (
                                        <Grid.Col xl={4} lg={4} md={6} sm={6} xs={12} key={x}>
                                            <ProductCard />
                                        </Grid.Col>
                                    );
                                })}
                            </Grid>
                        </Grid.Col>
                    </Grid>
                </MediaQuery>
            </Grid.Col>
        </Grid>
        <Pagination onChange={(page) => {
            setPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }} total={total} position="right" withEdges className='product-pagination'
        />;
    </>
}