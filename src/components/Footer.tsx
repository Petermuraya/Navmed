import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primaryPink text-white text-center p-4 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="font-bold text-lg">NavMed Solutions</h2>
            <p>Healing Every Heart</p>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold">Contact Us</h3>
            <p>Dagoreti, Nairobi</p>
            <p>Phone: 0769619952</p>
            <p>Email: NavMedsolutions@gmail.com</p>
          </div>

          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/icons/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="/icons/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/icons/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <p className="mt-4">&copy; 2023 NavMed Solutions - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
