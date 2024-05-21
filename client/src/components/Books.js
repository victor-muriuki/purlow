// src/components/Books.js
import React, { useState } from 'react';
import BookList from './BookList';
import BookDetails from './BookDetails';
import AddBookForm from './AddBookForm';

const Books = () => {
    const [books, setBooks] = useState([
        { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Fiction', price: 20.99 },
        { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Non-Fiction', price: 15.99 },
    ]);
    const [selectedBookId, setSelectedBookId] = useState(null);

    const handleBookClick = (bookId) => {
        setSelectedBookId(bookId);
    };

    const handleAddBook = (newBook) => {
        const newBooks = [...books, { ...newBook, id: books.length + 1 }];
        setBooks(newBooks);
    };

    return (
        <div>
            <h1>Bookshop</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '1', marginRight: '20px' }}>
                    <BookList books={books} onBookClick={handleBookClick} />
                    <AddBookForm onAddBook={handleAddBook} />
                </div>
                <div style={{ flex: '2' }}>
                    <BookDetails book={books.find((book) => book.id === selectedBookId)} />
                </div>
            </div>
        </div>
    );
};

export default Books;
