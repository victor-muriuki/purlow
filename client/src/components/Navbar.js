// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#eee' }}>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/sales">Sales</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/books">Books</Link>
        </nav>
    );
};

export default Navbar;
