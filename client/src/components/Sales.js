// src/components/Sales.js
import React, { useState } from 'react';

const Sales = () => {
    const [sales, setSales] = useState([]);

    const items = [
        { id: 1, name: 'Book 1', price: 20.99 },
        { id: 2, name: 'Book 2', price: 15.99 },
        { id: 3, name: 'Pen', price: 2.99 },
        { id: 4, name: 'Notebook', price: 5.99 },
        { id: 5, name: 'Bookmark', price: 1.99 },
        { id: 6, name: 'Gift Card', price: 10.00 },
    ];

    const handleBuyItem = (item) => {
        const newSale = { ...item, date: new Date().toLocaleString() };
        setSales([...sales, newSale]);
    };

    return (
        <div>
            <h1>Sales</h1>
            <h2>Available Items</h2>
            <div>
                {items.map(item => (
                    <div key={item.id} style={{ marginBottom: '10px' }}>
                        <span>{item.name}</span> - <span>${item.price.toFixed(2)}</span>
                        <button onClick={() => handleBuyItem(item)} style={{ marginLeft: '10px' }}>Buy</button>
                    </div>
                ))}
            </div>
            <h2>Sales List</h2>
            <div>
                {sales.length === 0 ? (
                    <p>No sales made yet.</p>
                ) : (
                    <ul>
                        {sales.map((sale, index) => (
                            <li key={index}>
                                {sale.name} - ${sale.price.toFixed(2)} - {sale.date}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Sales;
