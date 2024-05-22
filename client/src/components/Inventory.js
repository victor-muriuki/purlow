// src/components/Inventory.js
import React, { useState } from 'react';

const Inventory = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const books = [
        { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Fiction', price: 20.99 },
        { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Non-Fiction', price: 15.99 },
    ];

    const stationery = [
        { id: 1, name: 'Pen', brand: 'Brand A', price: 2.99 },
        { id: 2, name: 'Notebook', brand: 'Brand B', price: 5.99 },
    ];

    const others = [
        { id: 1, name: 'Bookmark', price: 1.99 },
        { id: 2, name: 'Gift Card', price: 10.00 },
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const renderItems = () => {
        if (selectedCategory === 'Books') {
            return books.map(book => (
                <div key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <p>{book.genre}</p>
                    <p>${book.price.toFixed(2)}</p>
                </div>
            ));
        } else if (selectedCategory === 'Stationery') {
            return stationery.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.brand}</p>
                    <p>${item.price.toFixed(2)}</p>
                </div>
            ));
        } else if (selectedCategory === 'Others') {
            return others.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                </div>
            ));
        } else {
            return <p>Please select a category</p>;
        }
    };

    return (
        <div>
            <h1>Inventory</h1>
            <div>
                <button onClick={() => handleCategoryClick('Books')}>Books</button>
                <button onClick={() => handleCategoryClick('Stationery')}>Stationery</button>
                <button onClick={() => handleCategoryClick('Others')}>Others</button>
            </div>
            <div>
                {renderItems()}
            </div>
        </div>
    );
};

export default Inventory;
