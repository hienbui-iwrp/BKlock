import React from 'react';
import Product from '../../component/admin/product';
import { Grid, Pagination, Text, Input, Button } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { useWindowScroll } from '@mantine/hooks';
import { Search } from "tabler-icons-react";



export default function Products() {
    let location = useLocation();
    const [scroll, scrollTo] = useWindowScroll();
    const [size, setSize] = React.useState([0, 0]);
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
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: ' 19px 5%', backgroundColor: '#eee' }}>
            <Input
                placeholder="Tìm kiếm"
                radius="xl"
                style={{ marginRight: '3%', width: '30%', minWidth: '200px' }}
            />
            <Button radius="xl"><Search /></Button>
        </div>
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
        </Grid>
        <Pagination onChange={(page) => {
            setPage(page);
            scrollTo({ y: 0 })
        }} total={total} position="right" withEdges className='product-pagination'
        />;
    </>

}