import { Container, Grid } from '@mantine/core';
import "../../css/detail.css";
import React from 'react';
import ProductDetail from '../general/productDetail';
import CommentSection from '../general/commentSection';

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