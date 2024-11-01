import React from 'react';
import { useParams } from 'react-router-dom';

// Sample product data; this would typically come from a database or API.
const productData = [
  {
    id: 1,
    name: 'Stethoscope',
    description: 'High-quality stethoscope for medical professionals.',
    price: '$45',
    imageUrl: '/images/stethoscope.jpg',
  },
  {
    id: 2,
    name: 'Blood Pressure Monitor',
    description: 'Accurate blood pressure monitor with digital display.',
    price: '$60',
    imageUrl: '/images/bp-monitor.jpg',
  },
  {
    id: 3,
    name: 'Thermometer',
    description: 'Digital thermometer with fast and accurate readings.',
    price: '$15',
    imageUrl: '/images/thermometer.jpg',
  },
];

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productData.find((p) => p.id === parseInt(productId || '', 10));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
      <h2 className="text-2xl font-bold text-primaryPink mt-4">{product.name}</h2>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-lg font-semibold text-primaryBlue mt-4">{product.price}</p>
      <button className="bg-primaryPink text-white py-2 px-4 rounded mt-4">Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;
