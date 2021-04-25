import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav style={{
            textAlign: 'center', backgroundColor: 'white',

        }}>
            <Link to='/'>
                <h1>Home</h1>
            </Link>{"  "}
            <Link to="products">
                <h1>Product</h1>
            </Link>{"  "}

        </nav>
    );
}

export default Header;