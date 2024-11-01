import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 500, quantity: 1, imageUrl: '/path/to/imageA.jpg' },
    { id: 2, name: 'Product B', price: 700, quantity: 2, imageUrl: '/path/to/imageB.jpg' },
    { id: 3, name: 'Product C', price: 300, quantity: 1, imageUrl: '/path/to/imageC.jpg' },
  ]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10);
    } else {
      alert('Invalid coupon code');
    }
  };

  const itemsTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (itemsTotal * discount) / 100;
  const total = itemsTotal - discountAmount;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {/* Cart Items List */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="w-full lg:w-2/3">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4 border-b">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex flex-col flex-grow mx-4">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">KES {item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="p-2 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="p-2 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>KES {itemsTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Discount</span>
              <span>- KES {discountAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Shipping</span>
              <span>KES 0.00</span>
            </div>
            <div className="flex justify-between text-sm font-bold mb-4">
              <span>Total</span>
              <span>KES {total.toFixed(2)}</span>
            </div>

            {/* Coupon Code */}
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="w-full px-3 py-2 border rounded-l-md focus:outline-none"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Apply
              </button>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
