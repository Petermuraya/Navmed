import React from 'react';
import ProductCard from '../../components/ProductCard';

// Define the Product interface
interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: 'Stethoscope',
    price: '$45',
    imageUrl: '/images/stethoscope.jpg',
  },
  {
    id: 2,
    name: 'Blood Pressure Monitor',
    price: '$60',
    imageUrl: '/images/bp-monitor.jpg',
  },
  {
    id: 3,
    name: 'Thermometer',
    price: '$15',
    imageUrl: '/images/thermometer.jpg',
  },
  // Add more products as needed
];

const ProductsPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
