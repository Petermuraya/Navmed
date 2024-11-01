import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-primaryPink text-3xl font-bold">Welcome to NavMed Solutions</h2>
      <p className="mt-4 text-lg">
        Your trusted provider for quality medical supplies.
      </p>
      <button className="bg-primaryBlue text-white p-3 rounded mt-6">
        Shop Now
      </button>
    </div>
  );
};

export default HomePage;
