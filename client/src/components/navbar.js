import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul style={styles.navbar}>
                <li style={styles.navItem}><Link to="/dashboard">Dashboard</Link></li>
                <li style={styles.navItem}><Link to="/sales">Sales</Link></li>
                <li style={styles.navItem}><Link to="/inventory">Inventory</Link></li>
                <li style={styles.navItem}><Link to="/customers">Customers</Link></li>
                <li style={styles.navItem}><Link to="/settings">Settings</Link></li>
                <li style={styles.navItem}><Link to="/AddBookForm">AddBookForm</Link></li>
                <li style={styles.navItem}><Link to="/BookList">BookList</Link></li>
                <li style={styles.navItem}><Link to="/BookDetails">BookDetails</Link></li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    navItem: {
        marginRight: '10px', // Adjust spacing between list items
    },
};

export default Navbar;
