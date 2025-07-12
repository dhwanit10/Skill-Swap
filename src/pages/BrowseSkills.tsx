import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockUsers = [
  {
    id: 1,
    name: 'Marc Demo',
    offered: ['Java Script', 'Python'],
    wanted: ['Photoshop', 'Graphic designer'],
    rating: 3.9,
    avatar: '',
  },
  {
    id: 2,
    name: 'Michell',
    offered: ['Java Script', 'Python'],
    wanted: ['Photoshop', 'Graphic designer'],
    rating: 2.5,
    avatar: '',
  },
  {
    id: 3,
    name: 'Joe wills',
    offered: ['Java Script', 'Python'],
    wanted: ['Photoshop', 'Graphic designer'],
    rating: 4.0,
    avatar: '',
  },
];

const BrowseSkills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [availability, setAvailability] = useState('');

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.offered.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
    user.wanted.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-dark-900 p-4 md:p-8">
      {/* Header */}
      <div className="sketchy-outline p-4 flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="font-sketch text-3xl md:text-4xl text-white">Skill Swap Platform</div>
        <div className="flex items-center mt-4 md:mt-0">
          <div className="font-sketch text-2xl text-white mr-8 underline underline-offset-4">Swap request</div>
          <img src="https://i.imgur.com/0y0y0y0.png" alt="Profile" className="sketchy-avatar" style={{width: 60, height: 60}} />
        </div>
      </div>

      {/* Search & Filter */}
      <div className="sketchy-outline p-4 flex flex-col md:flex-row items-center gap-4 mb-6">
        <div className="flex items-center w-full md:w-auto">
          <select className="sketchy-input font-sketch w-full md:w-auto" value={availability} onChange={e => setAvailability(e.target.value)}>
            <option value="">Availability</option>
            <option value="available">Available</option>
            <option value="busy">Busy</option>
          </select>
        </div>
        <input
          className="sketchy-input font-sketch flex-1 w-full md:w-96"
          placeholder=""
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="sketchy-btn font-sketch w-full md:w-auto">search</button>
      </div>

      {/* User Cards */}
      <div className="">
        {filteredUsers.map(user => (
          <div key={user.id} className="sketchy-card flex flex-col md:flex-row items-center md:items-start mb-8">
            <div className="sketchy-avatar flex-shrink-0 mb-4 md:mb-0 md:mr-8" style={{width: 110, height: 110, fontSize: '1.2rem'}}>
              Profile Photo
            </div>
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
                <div className="font-sketch text-2xl text-white mb-2 md:mb-0">{user.name}</div>
                <div className="flex items-center md:justify-end mt-2 md:mt-0">
                  <button className="sketchy-btn font-sketch">Request</button>
                </div>
              </div>
              <div className="mt-2 mb-2">
                <span className="sketchy-label">Skills Offered =&gt;</span>
                {user.offered.map(skill => (
                  <span key={skill} className="sketchy-pill">{skill}</span>
                ))}
              </div>
              <div className="mb-2">
                <span className="sketchy-label-wanted">Skill wanted =&gt;</span>
                {user.wanted.map(skill => (
                  <span key={skill} className="sketchy-pill">{skill}</span>
                ))}
              </div>
              <div className="flex items-center justify-end mt-2">
                <span className="font-sketch text-white mr-2">rating</span>
                <span className="font-sketch text-white">{user.rating}/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseSkills; 