import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="sketchy-outline bg-dark-900 p-6 mt-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-10 h-10 sketchy-outline bg-dark-800 flex items-center justify-center mr-2">
            <span className="font-sketch text-white text-2xl">S</span>
          </div>
          <span className="font-sketch text-xl text-white">SkillLoop</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
          <Link to="/" className="font-sketch text-white text-lg hover:underline mb-2 md:mb-0">Home</Link>
          <Link to="/how-it-works" className="font-sketch text-white text-lg hover:underline mb-2 md:mb-0">How it Works</Link>
          <Link to="/browse-skills" className="font-sketch text-white text-lg hover:underline mb-2 md:mb-0">Browse Skills</Link>
          <Link to="/login" className="font-sketch text-white text-lg hover:underline">Login/SignUp</Link>
        </div>
      </div>
      <div className="mt-4 text-center font-sketch text-gray-400 text-base">
        © 2024 SkillLoop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 