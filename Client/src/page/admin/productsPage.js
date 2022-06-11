import React from 'react';
import Sidebar from '../../component/general/sidebar'
import Products from '../../component/admin/products'

export default function ProductsAdminPage() {
    return <div className="cart-page-container">
        <Sidebar />
        <Products />
    </div>
}