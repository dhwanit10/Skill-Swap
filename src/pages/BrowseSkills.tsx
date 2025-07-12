import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BrowseSkills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: '🔍' },
    { id: 'tech', name: 'Technology', icon: '💻' },
    { id: 'creative', name: 'Creative Arts', icon: '🎨' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'languages', name: 'Languages', icon: '🌍' },
    { id: 'fitness', name: 'Health & Fitness', icon: '💪' },
    { id: 'cooking', name: 'Cooking', icon: '👨‍🍳' },
    { id: 'music', name: 'Music', icon: '🎵' },
  ];

  const mockSkills = [
    {
      id: 1,
      title: 'React.js Development',
      category: 'tech',
      user: 'Sarah Chen',
      rating: 4.8,
      reviews: 24,
      description: 'Learn React.js from basics to advanced concepts including hooks, context, and state management.',
      tags: ['JavaScript', 'Frontend', 'Web Development']
    },
    {
      id: 2,
      title: 'Digital Art & Illustration',
      category: 'creative',
      user: 'Mike Rodriguez',
      rating: 4.9,
      reviews: 31,
      description: 'Master digital art techniques using Procreate and Adobe Creative Suite.',
      tags: ['Digital Art', 'Illustration', 'Design']
    },
    {
      id: 3,
      title: 'Spanish Conversation',
      category: 'languages',
      user: 'Alex Thompson',
      rating: 4.7,
      reviews: 18,
      description: 'Practice Spanish conversation skills for beginners and intermediate learners.',
      tags: ['Spanish', 'Conversation', 'Language Learning']
    },
    {
      id: 4,
      title: 'Python Data Analysis',
      category: 'tech',
      user: 'David Kim',
      rating: 4.6,
      reviews: 22,
      description: 'Learn Python for data analysis, pandas, numpy, and visualization techniques.',
      tags: ['Python', 'Data Analysis', 'Programming']
    },
    {
      id: 5,
      title: 'Guitar for Beginners',
      category: 'music',
      user: 'Emma Wilson',
      rating: 4.8,
      reviews: 15,
      description: 'Learn guitar fundamentals, chords, and your first songs.',
      tags: ['Guitar', 'Music', 'Beginners']
    },
    {
      id: 6,
      title: 'Italian Cooking',
      category: 'cooking',
      user: 'Marco Rossi',
      rating: 4.9,
      reviews: 28,
      description: 'Master authentic Italian recipes and cooking techniques.',
      tags: ['Italian', 'Cooking', 'Cuisine']
    }
  ];

  const filteredSkills = mockSkills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         skill.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Header Section */}
      <section className="bg-dark-800 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              Browse Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover amazing skills from our community. Find the perfect match for your learning journey.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-700 rounded-xl p-6 shadow-sm mb-8 border border-dark-600">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search for skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-gray-100"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-secondary-500 text-white'
                        : 'bg-dark-600 text-gray-300 hover:bg-dark-500'
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {filteredSkills.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map(skill => (
                  <div key={skill.id} className="bg-dark-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-dark-700">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-100">{skill.title}</h3>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-sm text-gray-300">{skill.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{skill.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skill.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-secondary-900 text-secondary-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                          {skill.user.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-100">{skill.user}</p>
                          <p className="text-xs text-gray-400">{skill.reviews} reviews</p>
                        </div>
                      </div>
                      <Link 
                        to={`/skill/${skill.id}`}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">No skills found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-500 to-secondary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
            Join our community and offer your own skills. You might be exactly what someone else is looking for!
          </p>
          <Link to="/login" className="bg-white text-secondary-500 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-50 transition-colors">
            Offer Your Skills
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BrowseSkills; 