import React from 'react';
import logo from '../../Images/logo (2).png';

const Footer = () => {
  return (
    <footer className="bg-black py-10 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src={logo} alt="Pamper Me Organic Hair Oil" className="w-[160px] md:w-[200px] mb-4" />
        </div>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:underline">Organic Hair Oil</a></li>
              <li><a href="/" className="text-white hover:underline">Ingredients</a></li>
              <li><a href="/" className="text-white hover:underline">How to Use</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Learn More</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:underline">Hair Care Tips</a></li>
              <li><a href="/" className="text-white hover:underline">Why Organic?</a></li>
              <li><a href="/" className="text-white hover:underline">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white hover:underline">Our Story</a></li>
              <li><a href="/" className="text-white hover:underline">Sustainability</a></li>
              <li><a href="/" className="text-white hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white">Biravo, Narayanganj, Dhaka.</p>
          <p className="text-white">contact@pampermeorganichair.com</p>
          <p className="text-white">+88 01404-403396</p>
        </div>
      </div>

      <div className="mt-8 border-t border-[#ffffff] pt-4 text-center">
        <p className="text-gray-500">© All rights reserved by pamper me org.</p>
      </div>
    </footer>
  );
};

export default Footer;
