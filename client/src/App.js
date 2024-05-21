import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Dashboard from './components/dashboard';
// import Sales from './components/sales';
// import Inventory from './components/inventory';
// import Customers from './components/customers'; // Assuming Customers is the correct component for "/customers"
// import Settings from './components/settings';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import AddBookForm from './components/AddBookForm';

function App() {
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
            <h1>Welcome to the Bookshop</h1>
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
//     return (
//         <Router>
//             <div>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/" element={<Dashboard />} />
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/sales" element={<Sales />} />
//                     <Route path="/inventory" element={<Inventory />} />
//                     <Route path="/customers" element={<Customers />} />
//                     <Route path="/settings" element={<Settings />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

export default App;
