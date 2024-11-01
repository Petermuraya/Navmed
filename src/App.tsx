import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/Home/HomePage';
import ProductsPage from './pages/Products/ProductsPage';
import ContactPage from './pages/Contact/ContactPage';
import CartPage from './pages/Cart/CartPage';
import ProductDetailsPage from './pages/ProductDetails/ProductDetailsPage'; // Import ProductDetailsPage

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} /> {/* New Route for Product Details */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Add other routes here if needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
