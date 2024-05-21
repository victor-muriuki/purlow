import React, { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [price, setPrice] = useState('');

    const handleAddBook = (e) => {
        e.preventDefault();
        const newBook = {
            title,
            author,
            genre,
            price: parseFloat(price),
        };
        onAddBook(newBook);
        // Reset form fields
        setTitle('');
        setAuthor('');
        setGenre('');
        setPrice('');
    };

    return (
        <div>
            <h2>Add New Book</h2>
            <form onSubmit={handleAddBook}>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBookForm;
