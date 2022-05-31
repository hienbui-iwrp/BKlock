import React from 'react';
import Navbar from '../component/general/navbar';
import Footer from '../component/general/footer';
import Products from '../component/user/products';

export default function ProductPage() {
    return <>
        <Navbar />
        <div style={{ marginTop: 60 }}>
            <Products />
        </div>
        <Footer />
    </>
}