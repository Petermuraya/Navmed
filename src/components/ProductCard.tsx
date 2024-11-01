import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import defaultImage from '../assets/defaultImage.svg'; // Default image for missing image URLs

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  category: string;
  isNew?: boolean; // Optional prop for new products
  addToCart: (product: { id: string; name: string; price: string; imageUrl: string; category: string }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, imageUrl, category, isNew, addToCart }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Object representing the product
  const product = { id, name, price, imageUrl, category };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-4 m-2 relative max-w-xs mx-auto md:max-w-sm lg:max-w-md transition duration-300 transform hover:scale-105">
      <Link to={`/products/${id}`} aria-label={`View details of ${name}`}>
        {isLoading && <div className="w-full h-32 bg-gray-300 animate-pulse rounded-md mb-4"></div>}
        
        <img 
          src={imageUrl} 
          alt={name} 
          onLoad={() => setIsLoading(false)}
          onError={(e) => { 
            e.currentTarget.src = defaultImage; 
            setIsLoading(false); 
          }} 
          className={`w-full h-32 object-cover rounded-md mb-4 ${isLoading ? 'hidden' : 'block'}`} 
        />
        
        {isNew && <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">New</span>}
        
        <p className="text-xs text-gray-500">{category}</p>
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-xl font-bold text-green-500">KES {price}</p>
      </Link>
      
      <button
        className="absolute bottom-4 right-4 bg-pink-600 text-white rounded-full p-2 hover:bg-pink-700 transition duration-300"
        onClick={() => addToCart(product)}
        aria-label={`Add ${name} to cart`}
      >
        <FaShoppingCart />
      </button>
    </div>
  );
};

export default ProductCard;
