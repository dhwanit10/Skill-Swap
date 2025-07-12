import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 p-4 md:p-8">
      {/* Hero Section */}
      <section className="sketchy-outline p-8 mb-8 text-center">
        <h1 className="font-sketch text-5xl text-white mb-4">Swap Skills, <span className="text-secondary-400">Grow Together</span></h1>
        <p className="font-sketch text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">Connect with people who have the skills you need and share your expertise with others. Build meaningful relationships while learning and growing together.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/browse-skills" className="sketchy-btn font-sketch text-xl">Start Swapping Skills</Link>
          <Link to="/how-it-works" className="sketchy-btn font-sketch text-xl">Learn How It Works</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="sketchy-outline p-8 mb-8">
        <h2 className="font-sketch text-4xl text-white text-center mb-6">Why Choose SkillLoop?</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="sketchy-outline p-6 flex-1 text-center">
            <div className="sketchy-pill mb-4 inline-block">Offer & Request Skills</div>
            <p className="font-sketch text-lg text-gray-200">Easily post what you can teach and find people who can help you learn. From coding to cooking, anything goes!</p>
          </div>
          <div className="sketchy-outline p-6 flex-1 text-center">
            <div className="sketchy-pill mb-4 inline-block">Swap & Collaborate</div>
            <p className="font-sketch text-lg text-gray-200">Connect directly with other users, schedule sessions, and collaborate on projects together in real-time.</p>
          </div>
          <div className="sketchy-outline p-6 flex-1 text-center">
            <div className="sketchy-pill mb-4 inline-block">Ratings & Feedback</div>
            <p className="font-sketch text-lg text-gray-200">Build your reputation with honest reviews and ratings. Trust is everything in our community.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="sketchy-outline p-8 mb-8">
        <h2 className="font-sketch text-4xl text-white text-center mb-6">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {[1,2,3,4].map((step) => (
            <div key={step} className="sketchy-outline p-6 flex-1 text-center">
              <div className="sketchy-pill mb-4 inline-block">Step {step}</div>
              <p className="font-sketch text-lg text-gray-200">Step {step} description goes here.</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/how-it-works" className="sketchy-btn font-sketch text-xl">Learn More</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="sketchy-outline p-8 mb-8">
        <h2 className="font-sketch text-4xl text-white text-center mb-6">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="sketchy-outline p-6 flex-1">
            <div className="sketchy-avatar mb-4 mx-auto" style={{width: 70, height: 70}}>S</div>
            <div className="font-sketch text-xl text-white mb-2">Sarah Chen</div>
            <p className="font-sketch text-gray-200">"SkillLoop helped me find a cooking mentor while I taught them web development. It's amazing how much you can learn when you share your expertise!"</p>
          </div>
          <div className="sketchy-outline p-6 flex-1">
            <div className="sketchy-avatar mb-4 mx-auto" style={{width: 70, height: 70}}>M</div>
            <div className="font-sketch text-xl text-white mb-2">Mike Rodriguez</div>
            <p className="font-sketch text-gray-200">"I've been using SkillLoop for 6 months now. The community is incredible and I've learned so much from people who are passionate about sharing knowledge."</p>
          </div>
          <div className="sketchy-outline p-6 flex-1">
            <div className="sketchy-avatar mb-4 mx-auto" style={{width: 70, height: 70}}>A</div>
            <div className="font-sketch text-xl text-white mb-2">Alex Thompson</div>
            <p className="font-sketch text-gray-200">"The rating system gives me confidence in choosing the right people to learn from. It's like having a trusted network of experts at your fingertips."</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sketchy-outline p-8 text-center">
        <h2 className="font-sketch text-4xl text-white mb-4">Ready to Start Your Skill Swap Journey?</h2>
        <p className="font-sketch text-2xl text-secondary-100 mb-8 max-w-2xl mx-auto">Join thousands of learners and teachers who are already swapping skills and growing together.</p>
        <Link to="/login" className="sketchy-btn font-sketch text-xl">Get Started Today</Link>
      </section>
    </div>
  );
};

export default Home; 