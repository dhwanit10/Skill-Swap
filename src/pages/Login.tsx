import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="sketchy-outline p-8 max-w-md w-full mx-auto">
        <div className="text-center mb-8">
          <div className="sketchy-avatar mx-auto mb-4" style={{width: 70, height: 70}}>S</div>
          <h2 className="font-sketch text-4xl text-white mb-2">{isLogin ? 'Welcome Back' : 'Join SkillLoop'}</h2>
          <p className="font-sketch text-lg text-gray-200 mb-2">
            {isLogin 
              ? 'Sign in to your account to continue learning and teaching'
              : 'Create your account and start your skill swap journey'
            }
          </p>
        </div>
        <div className="flex bg-dark-800 rounded-lg p-1 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-4 rounded-md font-sketch text-lg transition-colors ${isLogin ? 'bg-dark-600 text-secondary-400 shadow-sm' : 'text-gray-400 hover:text-gray-300'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-4 rounded-md font-sketch text-lg transition-colors ${!isLogin ? 'bg-dark-600 text-secondary-400 shadow-sm' : 'text-gray-400 hover:text-gray-300'}`}
          >
            Sign Up
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block font-sketch text-lg text-gray-300 mb-2">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required={!isLogin}
                value={formData.name}
                onChange={handleInputChange}
                className="sketchy-input w-full"
                placeholder="Enter your full name"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block font-sketch text-lg text-gray-300 mb-2">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="sketchy-input w-full"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-sketch text-lg text-gray-300 mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="sketchy-input w-full"
              placeholder="Enter your password"
            />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block font-sketch text-lg text-gray-300 mb-2">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required={!isLogin}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="sketchy-input w-full"
                placeholder="Confirm your password"
              />
            </div>
          )}
          <button type="submit" className="sketchy-btn font-sketch w-full text-xl">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="font-sketch text-base text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-secondary-400 hover:text-secondary-300 font-sketch"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="font-sketch text-sm text-gray-400">
            By continuing, you agree to our{' '}
            <a href="#" className="text-secondary-400 hover:text-secondary-300 font-sketch">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-secondary-400 hover:text-secondary-300 font-sketch">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 