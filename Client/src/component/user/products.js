import React from 'react';
import ProductCard from '../../component/general/productCard';
import { Grid, Pagination, Text, Image, MediaQuery, Breadcrumbs, Anchor } from '@mantine/core';
import Slider from '../general/slider';
import FilterForm from '../../component/general/filterForm';
import { useLocation } from 'react-router-dom';
import { useWindowScroll } from '@mantine/hooks';
import "../../css/product.css";


const anchorUtil = (location) => {
    let locations = "Home" + location.pathname;
    locations = locations.split("/");
    return locations.map((item, index) => (
        <Anchor href={item === "Home" ? "/" : item} key={index}>
            {item}
        </Anchor>
    ));
}

export default function Products() {
    let location = useLocation();
    let anchors = anchorUtil(location);
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
        <Grid style={{ marginTop: 60 }}>
            <Grid.Col lg={12} className="product-ad-container">
                <Image src={"https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"} height="30vh" className="product-ad-image" />
                <Text className="product-ads-text">
                    Products
                </Text>
            </Grid.Col>
            {size[0] > 768 ? <Grid.Col><Breadcrumbs style={{ marginLeft: "8%" }}>{anchors}</Breadcrumbs></Grid.Col> : null}
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
            scrollTo({ y: 0 })
        }} total={total} position="right" withEdges className='product-pagination'
        />;
    </>
}