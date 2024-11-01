import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaQuestionCircle, FaPhoneAlt, FaInfoCircle, FaBars, FaTh } from 'react-icons/fa';

const CategoriesDropdown = ({ isDropdownOpen, toggleDropdown }) => (
  <div className="relative">
    <button onClick={toggleDropdown} className="hover:text-primaryBlue transition-colors flex items-center gap-2">
      <FaTh /> All Categories
    </button>
    {isDropdownOpen && (
      <div className="absolute top-full mt-2 bg-white text-black shadow-md rounded-md p-4 space-y-2 z-10">
        <NavLink to="/category1" className="block hover:text-primaryBlue">Category 1</NavLink>
        <NavLink to="/category2" className="block hover:text-primaryBlue">Category 2</NavLink>
        <NavLink to="/category3" className="block hover:text-primaryBlue">Category 3</NavLink>
      </div>
    )}
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/products', label: 'Products', icon: <FaTh /> },
    { path: '/cart', label: 'Cart', icon: <FaShoppingCart /> },
    { path: '/help-center', label: 'Help Center', icon: <FaQuestionCircle /> },
    { path: '/contact', label: 'Contact', icon: <FaPhoneAlt /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
  ];

  return (
    <nav className="bg-primaryPink text-white p-4 flex items-center shadow-md relative">
      {/* All Categories Dropdown on the Left */}
      <div className="mr-auto">
        <CategoriesDropdown isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
      </div>

      {/* Desktop Menu Items Distributed */}
      <div className="hidden md:flex space-x-6 items-center flex-grow justify-center">
        {navLinks.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-primaryBlue transition-colors ${isActive ? 'text-primaryBlue' : ''}`
            }
          >
            {icon} {label}
          </NavLink>
        ))}
      </div>

      {/* Phone Number with Icon */}
      <div className="ml-auto hidden md:flex items-center text-lg">
        <FaPhoneAlt className="mr-1" /> +254 769619952
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none" aria-label="Toggle mobile menu" aria-expanded={isMobileMenuOpen}>
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 right-0 bg-primaryPink w-full md:hidden shadow-lg">
          <div className="flex flex-col space-y-4 p-4">
            <CategoriesDropdown isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
            {navLinks.map(({ path, label, icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-2 hover:text-primaryBlue transition-colors ${isActive ? 'text-primaryBlue' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {icon} {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
