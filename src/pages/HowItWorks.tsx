import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Header Section */}
      <section className="bg-dark-800 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              How SkillLoop Works
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our platform makes skill sharing simple and rewarding. Here's everything you need to know to get started.
            </p>
            <Link to="/login" className="btn-primary text-lg px-8 py-4">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Steps Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="bg-dark-800 rounded-xl p-8 mb-8 shadow-sm border border-dark-700">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">Create Your Profile</h3>
                  <p className="text-gray-300 mb-4">
                    Start by signing up and creating your profile. Tell us about your skills, experience level, 
                    and what you'd like to learn. The more detailed your profile, the better matches you'll find.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Add your skills and expertise areas
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Specify what you want to learn
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Upload a profile picture
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-dark-800 rounded-xl p-8 mb-8 shadow-sm border border-dark-700">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">Browse & Connect</h3>
                  <p className="text-gray-300 mb-4">
                    Explore our community of learners and teachers. Use our search and filter tools to find 
                    people with the skills you need or who want to learn what you can teach.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Search by skill, location, or availability
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Read reviews and ratings
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Send connection requests
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-dark-800 rounded-xl p-8 mb-8 shadow-sm border border-dark-700">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">Schedule Sessions</h3>
                  <p className="text-gray-300 mb-4">
                    Once you've connected with someone, use our built-in scheduling tools to arrange 
                    your skill swap sessions. Choose the format that works best for both of you.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Video calls for real-time learning
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      In-person meetups
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Project-based collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-dark-800 rounded-xl p-8 mb-8 shadow-sm border border-dark-700">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">Learn & Grow</h3>
                  <p className="text-gray-300 mb-4">
                    Engage in meaningful skill exchanges, build lasting relationships, and watch your 
                    expertise grow. Don't forget to leave reviews and ratings to help the community.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Share knowledge and receive feedback
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Build your reputation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Expand your network
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
              Pro Tips for Success
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Make the most of your SkillLoop experience with these helpful tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark-700 p-6 rounded-xl border border-dark-600">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Be Specific</h3>
              <p className="text-gray-300">
                Instead of "I can teach programming," try "I can teach React.js for beginners" 
                or "I can help with Python data analysis projects."
              </p>
            </div>

            <div className="bg-dark-700 p-6 rounded-xl border border-dark-600">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Set Clear Expectations</h3>
              <p className="text-gray-300">
                Discuss what you want to learn or teach, your experience level, and how much time 
                you can commit before starting sessions.
              </p>
            </div>

            <div className="bg-dark-700 p-6 rounded-xl border border-dark-600">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Be Patient</h3>
              <p className="text-gray-300">
                Learning takes time. Be patient with yourself and your learning partner. 
                Celebrate small wins and progress.
              </p>
            </div>

            <div className="bg-dark-700 p-6 rounded-xl border border-dark-600">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Give Back</h3>
              <p className="text-gray-300">
                Leave honest reviews and ratings after sessions. This helps build trust 
                and improves the experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
            Join our community today and start your skill swap journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login" className="bg-white text-secondary-500 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-50 transition-colors">
              Create Your Profile
            </Link>
            <Link to="/browse-skills" className="btn-secondary text-lg px-8 py-4">
              Browse Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks; 