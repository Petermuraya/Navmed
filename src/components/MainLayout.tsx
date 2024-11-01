import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.svg'; 

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const TypingEffect: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState<string>('');

  useEffect(() => {
    // Reset displayed text if text is empty or undefined
    if (!text) {
      setDisplayedText('Healing Every Heart');
      return;
    }

    // Reset displayed text to empty for a new typing effect
    setDisplayedText('');
    let index = 0;

    // Typing interval
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval); // Stop interval when done
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, [text]);

  return <p className="text-sm italic">{displayedText}</p>;
};

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-primaryBlue to-secondaryBlue text-white p-4 shadow-lg flex items-center justify-between space-x-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="NavMed Solutions Logo" className="h-14 w-14 rounded-full" />
          <div>
            <h1 className="text-xl font-bold">{title || 'NavMed Solutions'}</h1>
            <TypingEffect text="Healing Every Heart" />
          </div>
        </div>
        {/* Search Bar */}
        <div className="flex-grow max-w-lg mx-4">
          <div className="flex items-center border border-blue-500 rounded-lg overflow-hidden">
            <select className="bg-white text-gray-700 px-3 py-2 outline-none border-r border-blue-500">
              <option>Product</option>
              <option>Category</option>
            </select>
            <input
              type="text"
              placeholder="What are you looking for..."
              className="flex-grow px-4 py-2 outline-none text-gray-700"
            />
            <button className="bg-blue-500 p-2">
              <FontAwesomeIcon icon={faSearch} className="text-white" />
            </button>
          </div>
        </div>
        {/* User Action Buttons */}
        <div className="flex space-x-3">
          <button className="bg-blue-500 px-4 py-2 rounded text-white font-semibold">Sign In</button>
          <button className="bg-blue-500 px-4 py-2 rounded text-white font-semibold">Join Free</button>
        </div>
      </header>
      {/* Navbar and Main Content */}
      <Navbar />
      <main className="flex-grow p-6 md:p-8 bg-white shadow-lg rounded-lg">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
