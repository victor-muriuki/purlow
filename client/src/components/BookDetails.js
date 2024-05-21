import React from 'react';

const BookDetails = ({ book }) => {
    return (
        <div>
            <h2>Book Details</h2>
            {book ? (
                <div>
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Price: ${book.price}</p>
                </div>
            ) : (
                <p>Please select a book from the list</p>
            )}
        </div>
    );
};

export default BookDetails;
