import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  category: string;
  isNew?: boolean;
}

interface ProductListProps {
  products: Product[];
  addToCart: (product: { id: string; name: string; price: string; imageUrl: string; category: string }) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <ProductCard key={product.id} {...product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
