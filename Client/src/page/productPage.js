import React from 'react';
import Navbar from '../component/general/navbar';
import Footer from '../component/general/footer';
import ProductCard from '../component/general/productCard';
import { Grid, Pagination } from '@mantine/core';

export default function NewsPage() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [activePage, setPage] = React.useState(1);

    return <>
        <Navbar />
        <Grid>
            <Grid.Col lg={3}></Grid.Col>
            <Grid.Col lg={9}>
                <Grid>
                    {arr.slice((activePage - 1) * 8, activePage * 8).map(x => {
                        return (
                            <Grid.Col xl={4} lg={4} md={6} sm={6} xs={12} key={x}>
                                <ProductCard />
                            </Grid.Col>
                        );
                    })}
                </Grid>
            </Grid.Col>

        </Grid>
        <Pagination page={activePage} onChange={() => { setPage(activePage + 1); console.log(activePage); }} total={Math.ceil(arr.length / 8)} position="right" />;
        <Footer />
    </>
}