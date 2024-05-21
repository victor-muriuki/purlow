import React from 'react';

const BookList = ({ books, onBookClick }) => {
    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id} onClick={() => onBookClick(book.id)}>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
