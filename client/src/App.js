import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'; // You need to create or uncomment this component
import Sales from './components/Sales'; // You need to create or uncomment this component
import Inventory from './components/Inventory'; // You need to create or uncomment this component
import Customers from './components/Customers'; // You need to create or uncomment this component
import Settings from './components/Settings'; // You need to create or uncomment this component
import Books from './components/Books';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<h1>Welcome to the Bookshop Landing Page</h1>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/books" element={<Books />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
