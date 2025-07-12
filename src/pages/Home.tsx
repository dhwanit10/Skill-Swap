import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-800 to-dark-900 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
              Swap Skills, 
              <span className="text-secondary-400"> Grow Together</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with people who have the skills you need and share your expertise with others. 
              Build meaningful relationships while learning and growing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/browse-skills" className="btn-primary text-lg px-8 py-4">
                Start Swapping Skills
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-lg px-8 py-4">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              Why Choose SkillLoop?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform makes skill sharing simple, secure, and rewarding for everyone involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Offer & Request Skills
              </h3>
              <p className="text-gray-300">
                Easily post what you can teach and find people who can help you learn. 
                From coding to cooking, anything goes!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Swap & Collaborate
              </h3>
              <p className="text-gray-300">
                Connect directly with other users, schedule sessions, and collaborate 
                on projects together in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-dark-700 to-dark-800 border border-dark-600">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Ratings & Feedback
              </h3>
              <p className="text-gray-300">
                Build your reputation with honest reviews and ratings. 
                Trust is everything in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get started in just 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Create Your Profile
              </h3>
              <p className="text-gray-300">
                Sign up and tell us about your skills and what you'd like to learn.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Browse & Connect
              </h3>
              <p className="text-gray-300">
                Find people with the skills you need and reach out to start a conversation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Schedule Sessions
              </h3>
              <p className="text-gray-300">
                Arrange skill swap sessions that work for both of you.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Learn & Grow
              </h3>
              <p className="text-gray-300">
                Share knowledge, build relationships, and grow your skills together.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-primary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied users who have found their perfect skill swap partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-dark-700 p-6 rounded-xl border border-dark-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">Sarah Chen</h4>
                  <p className="text-gray-400 text-sm">Web Developer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "SkillLoop helped me find a cooking mentor while I taught them web development. 
                It's amazing how much you can learn when you share your expertise!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-dark-700 p-6 rounded-xl border border-dark-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">Mike Rodriguez</h4>
                  <p className="text-gray-400 text-sm">Graphic Designer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I've been using SkillLoop for 6 months now. The community is incredible 
                and I've learned so much from people who are passionate about sharing knowledge."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-dark-700 p-6 rounded-xl border border-dark-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">Alex Thompson</h4>
                  <p className="text-gray-400 text-sm">Marketing Specialist</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The rating system gives me confidence in choosing the right people to learn from. 
                It's like having a trusted network of experts at your fingertips."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Skill Swap Journey?
          </h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners and teachers who are already swapping skills and growing together.
          </p>
          <Link to="/login" className="bg-white text-secondary-500 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-50 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 