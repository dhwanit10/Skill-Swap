import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sketchy-outline bg-dark-900 p-4 flex flex-col md:flex-row items-center justify-between mb-4">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-10 h-10 sketchy-outline bg-dark-800 flex items-center justify-center">
          <span className="font-sketch text-white text-2xl">S</span>
        </div>
        <span className="font-sketch text-2xl text-white">SkillLoop</span>
      </Link>
      <div className="flex-1" />
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="font-sketch text-white text-lg hover:underline">Home</Link>
        <Link to="/how-it-works" className="font-sketch text-white text-lg hover:underline">How it Works</Link>
        <Link to="/browse-skills" className="font-sketch text-white text-lg hover:underline">Browse Skills</Link>
        <Link to="/login" className="sketchy-btn font-sketch">Login/SignUp</Link>
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden sketchy-btn font-sketch ml-4"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      {isMenuOpen && (
        <div className="md:hidden w-full mt-4 flex flex-col items-center space-y-2">
          <Link to="/" className="font-sketch text-white text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/how-it-works" className="font-sketch text-white text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
          <Link to="/browse-skills" className="font-sketch text-white text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>Browse Skills</Link>
          <Link to="/login" className="sketchy-btn font-sketch" onClick={() => setIsMenuOpen(false)}>Login/SignUp</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 