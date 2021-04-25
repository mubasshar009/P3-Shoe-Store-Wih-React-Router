import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Our Products</h1>
            <Outlet />

        </div>
    )
}

export default Product;