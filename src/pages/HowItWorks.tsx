import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 p-4 md:p-8">
      {/* Header Section */}
      <section className="sketchy-outline p-8 mb-8 text-center">
        <h1 className="font-sketch text-5xl text-white mb-4">How SkillLoop Works</h1>
        <p className="font-sketch text-2xl text-gray-200 mb-8">Our platform makes skill sharing simple and rewarding. Here's everything you need to know to get started.</p>
        <Link to="/login" className="sketchy-btn font-sketch text-xl">Get Started Now</Link>
      </section>

      {/* Steps Section */}
      <section className="sketchy-outline p-8 mb-8">
        <h2 className="font-sketch text-4xl text-white text-center mb-6">Get started in just 4 simple steps</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {[1,2,3,4].map((step) => (
            <div key={step} className="sketchy-outline p-6 flex-1 text-center">
              <div className="sketchy-pill mb-4 inline-block">Step {step}</div>
              <p className="font-sketch text-lg text-gray-200">Step {step} description goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="sketchy-outline p-8 mb-8">
        <h2 className="font-sketch text-4xl text-white text-center mb-6">Pro Tips for Success</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="sketchy-outline p-6 flex-1 text-center">
            <div className="sketchy-pill mb-4 inline-block">Be Specific</div>
            <p className="font-sketch text-lg text-gray-200">Instead of "I can teach programming," try "I can teach React.js for beginners" or "I can help with Python data analysis projects."</p>
          </div>
          <div className="sketchy-outline p-6 flex-1 text-center">
            <div className="sketchy-pill mb-4 inline-block">Set Clear Expectations</div>
            <p className="font-sketch text-lg text-gray-200">Discuss what you want to learn or teach, your experience level, and how much time you can commit before starting sessions.</p>
          </div>
          <div className="sketchy-outline p-6 flex-1 text-center">
            <div className="sketchy-pill mb-4 inline-block">Be Patient</div>
            <p className="font-sketch text-lg text-gray-200">Learning takes time. Be patient with yourself and your learning partner. Celebrate small wins and progress.</p>
          </div>
          <div className="sketchy-outline p-6 flex-1 text-center">
            <div className="sketchy-pill mb-4 inline-block">Give Back</div>
            <p className="font-sketch text-lg text-gray-200">Leave honest reviews and ratings after sessions. This helps build trust and improves the experience for everyone.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sketchy-outline p-8 text-center">
        <h2 className="font-sketch text-4xl text-white mb-4">Ready to Start Learning?</h2>
        <p className="font-sketch text-2xl text-secondary-100 mb-8 max-w-2xl mx-auto">Join our community today and start your skill swap journey.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login" className="sketchy-btn font-sketch text-xl">Create Your Profile</Link>
          <Link to="/browse-skills" className="sketchy-btn font-sketch text-xl">Browse Skills</Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks; 