import React, { useState } from "react";
import Layout from "./Layout";

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [editMode, setEditMode] = useState(false);
  
  const [userData, setUserData] = useState({
    name: 'Alex Rivera',
    email: 'alex.rivera@gmail.com',
    bio: '🌱 Environmental activist passionate about protecting our mangrove ecosystems. Marine biology student at Green University. Let\'s save our planet together! 🌊',
    location: 'Miami, Florida, USA',
    role: 'Student',
    profilePicture: '👨‍🎓',
    joinDate: '2024-01-15'
  });

  const stats = {
    reportsSubmitted: 47,
    resolvedIssues: 23,
    communityPosts: 156,
    followers: 342,
    following: 89,
    ecoPoints: 2847,
    rank: 12,
    impactScore: 94
  };

  const badges = [
    { name: 'Eco-Warrior', emoji: '⚔️', level: 'Gold', earned: '2024-08-15' },
    { name: 'Mangrove Protector', emoji: '🌱', level: 'Platinum', earned: '2024-07-20' },
    { name: 'Report Master', emoji: '📢', level: 'Silver', earned: '2024-06-10' },
    { name: 'Community Builder', emoji: '👥', level: 'Bronze', earned: '2024-05-05' },
    { name: 'Photo Evidence Pro', emoji: '📸', level: 'Gold', earned: '2024-08-01' },
    { name: 'Clean-up Champion', emoji: '🧹', level: 'Silver', earned: '2024-07-15' }
  ];

  const recentActivity = [
    { type: 'report', action: 'Reported illegal logging at Coral Bay Marina', time: '2 hours ago', icon: '🪓', points: '+50' },
    { type: 'evidence', action: 'Uploaded photo evidence for water pollution case', time: '1 day ago', icon: '📸', points: '+25' },
    { type: 'event', action: 'Joined beach cleanup drive at Sunset Park', time: '3 days ago', icon: '🧹', points: '+75' },
    { type: 'community', action: 'Commented on mangrove restoration discussion', time: '5 days ago', icon: '💬', points: '+10' },
    { type: 'follow', action: 'Started following Dr. Marine Biology', time: '1 week ago', icon: '👥', points: '+5' },
    { type: 'badge', action: 'Earned "Photo Evidence Pro" badge', time: '2 weeks ago', icon: '🏆', points: '+100' }
  ];

  const myReports = [
    { id: 'MG847291', type: 'Illegal Logging', location: 'Coral Bay Marina', status: 'Under Review', date: '2024-08-30', severity: 'High' },
    { id: 'MG823456', type: 'Water Pollution', location: 'River Delta Park', status: 'Verified', date: '2024-08-28', severity: 'Medium' },
    { id: 'MG812789', type: 'Fire Damage', location: 'Mangrove Reserve', status: 'Resolved', date: '2024-08-25', severity: 'High' },
    { id: 'MG798234', type: 'Habitat Loss', location: 'Coastal Highway', status: 'Resolved', date: '2024-08-20', severity: 'Low' },
    { id: 'MG789012', type: 'Waste Dumping', location: 'Fisherman\'s Wharf', status: 'Verified', date: '2024-08-18', severity: 'Medium' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Verified': return 'bg-blue-100 text-blue-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBadgeColor = (level) => {
    switch(level) {
      case 'Platinum': return 'bg-purple-200 border-purple-600';
      case 'Gold': return 'bg-yellow-200 border-yellow-600';
      case 'Silver': return 'bg-gray-200 border-gray-600';
      case 'Bronze': return 'bg-orange-200 border-orange-600';
      default: return 'bg-blue-200 border-blue-600';
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-amber-50 pb-20 lg:pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Profile Header */}
          <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_#000] mb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              
              {/* Profile Picture & Basic Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="text-8xl mb-4 lg:mb-2">{userData.profilePicture}</div>
                <button 
                  onClick={() => setEditMode(!editMode)}
                  className="bg-blue-200 border-2 border-black px-4 py-2 shadow-[3px_3px_0px_0px_#000] hover:bg-blue-300 transition-colors"
                >
                  <span className="text-sm font-black text-gray-800">
                    {editMode ? '💾 Save' : '✏️ Edit Profile'}
                  </span>
                </button>
              </div>

              {/* User Details */}
              <div className="flex-1">
                <h1 className="text-4xl font-black text-gray-800 mb-2">{userData.name}</h1>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-green-200 border-2 border-black px-3 py-1 text-sm font-bold">
                    🎓 {userData.role}
                  </span>
                  <span className="bg-blue-200 border-2 border-black px-3 py-1 text-sm font-bold">
                    📍 {userData.location}
                  </span>
                  <span className="bg-purple-200 border-2 border-black px-3 py-1 text-sm font-bold">
                    📅 Joined {new Date(userData.joinDate).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 text-lg mb-4 max-w-2xl">{userData.bio}</p>
                <div className="text-sm text-gray-600">
                  📧 {userData.email}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:w-48">
                <div className="bg-yellow-100 border-2 border-black p-3 text-center">
                  <div className="text-2xl font-black text-gray-800">{stats.ecoPoints}</div>
                  <div className="text-sm font-bold text-gray-600">🏆 Eco Points</div>
                </div>
                <div className="bg-green-100 border-2 border-black p-3 text-center">
                  <div className="text-2xl font-black text-gray-800">#{stats.rank}</div>
                  <div className="text-sm font-bold text-gray-600">🥇 Global Rank</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs and content here (same as your original code) */}
          {/* ...keep all your existing tab content logic here... */}

        </div>
      </div>
    </Layout>
  );
};

export default Profile;
