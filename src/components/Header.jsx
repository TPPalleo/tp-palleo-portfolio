import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      {/* Navigation */}
      <nav className="flex justify-between items-center container mx-auto">
        <div className="text-xl font-bold">My Portfolio</div>
        <div>
          <Link to="/" className="mx-2 hover:underline">Home</Link>
          <Link to="/about" className="mx-2 hover:underline">About</Link>
          <Link to="/skills" className="mx-2 hover:underline">Skills</Link>
          <Link to="/contact" className="mx-2 hover:underline">Contact</Link>
        </div>
      </nav>

      {/* Grid Layout for Photo and Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 container mx-auto">
        {/* Replace the src with your actual photo URL */}
        <img 
          src="your-photo-url.jpg" 
          alt="Your Name" 
          className="w-full h-auto rounded-full"
        />
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">TP Palleo</h1>
          <p className="text-lg">A passionate web developer focused on building engaging user experiences.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
