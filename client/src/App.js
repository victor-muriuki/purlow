import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Sales from './components/sales';
import Inventory from './components/inventory';
import Customers from './components/customers'; // Assuming Customers is the correct component for "/customers"
import Settings from './components/settings';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
