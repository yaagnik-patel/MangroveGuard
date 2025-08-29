import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

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
    <>
      <Navbar />
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

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] text-center">
              <div className="text-3xl mb-2">📢</div>
              <div className="text-2xl font-black text-gray-800">{stats.reportsSubmitted}</div>
              <div className="text-sm font-bold text-gray-600">Reports Submitted</div>
            </div>
            
            <div className="bg-green-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] text-center">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-2xl font-black text-gray-800">{stats.resolvedIssues}</div>
              <div className="text-sm font-bold text-gray-600">Issues Resolved</div>
            </div>
            
            <div className="bg-purple-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] text-center">
              <div className="text-3xl mb-2">💬</div>
              <div className="text-2xl font-black text-gray-800">{stats.communityPosts}</div>
              <div className="text-sm font-bold text-gray-600">Community Posts</div>
            </div>
            
            <div className="bg-pink-100 border-4 border-black p-6 shadow-[6px_6px_0px_0px_#000] text-center">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-2xl font-black text-gray-800">{stats.followers}</div>
              <div className="text-sm font-bold text-gray-600">Followers</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white border-4 border-black mb-8 overflow-x-auto">
            <div className="flex min-w-max">
              {[
                { id: 'overview', label: '📊 Overview', emoji: '📊' },
                { id: 'activity', label: '📅 Activity', emoji: '📅' },
                { id: 'reports', label: '🔍 My Reports', emoji: '🔍' },
                { id: 'badges', label: '🏆 Badges', emoji: '🏆' },
                { id: 'community', label: '👥 Community', emoji: '👥' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-black border-r-4 border-black last:border-r-0 transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-green-200 text-gray-800' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <span className="text-xl mr-2">{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label.split(' ')[1]}</span>
                  <span className="sm:hidden">{tab.emoji}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Impact Score */}
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                    <h3 className="text-2xl font-black text-gray-800 mb-4">🌟 Impact Score</h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 bg-white border-2 border-black h-8">
                        <div 
                          className="h-full bg-green-400 border-r-2 border-black flex items-center justify-end pr-2"
                          style={{ width: `${stats.impactScore}%` }}
                        >
                          <span className="text-sm font-black text-gray-800">{stats.impactScore}%</span>
                        </div>
                      </div>
                      <span className="text-xl font-black text-gray-800">Eco Hero Level!</span>
                    </div>
                  </div>

                  {/* Recent Achievements */}
                  <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                    <h3 className="text-2xl font-black text-gray-800 mb-4">🎉 Recent Achievements</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-yellow-100 border-2 border-black p-4">
                        <div className="text-2xl mb-2">📸</div>
                        <h4 className="font-black text-gray-800">Photo Evidence Pro</h4>
                        <p className="text-sm text-gray-600">Uploaded 50+ evidence photos</p>
                        <span className="text-xs bg-gold-200 px-2 py-1 font-bold">+100 points</span>
                      </div>
                      <div className="bg-green-100 border-2 border-black p-4">
                        <div className="text-2xl mb-2">🌱</div>
                        <h4 className="font-black text-gray-800">Mangrove Guardian</h4>
                        <p className="text-sm text-gray-600">Protected 10+ mangrove sites</p>
                        <span className="text-xs bg-green-200 px-2 py-1 font-bold">+200 points</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Activity Tab */}
              {activeTab === 'activity' && (
                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                  <h3 className="text-2xl font-black text-gray-800 mb-6">📅 Activity Timeline</h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 border-2 border-black">
                        <div className="text-2xl">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-800">{activity.action}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-sm text-gray-600">{activity.time}</span>
                            <span className="bg-green-200 border border-black px-2 py-1 text-xs font-bold">
                              {activity.points}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* My Reports Tab */}
              {activeTab === 'reports' && (
                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                  <h3 className="text-2xl font-black text-gray-800 mb-6">🔍 My Reports</h3>
                  <div className="space-y-4">
                    {myReports.map((report) => (
                      <div key={report.id} className="border-2 border-black p-4 bg-gray-50">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h4 className="font-black text-gray-800">#{report.id} - {report.type}</h4>
                          <div className="flex space-x-2 mt-2 md:mt-0">
                            <span className={`px-2 py-1 text-xs font-bold border border-black ${getStatusColor(report.status)}`}>
                              {report.status}
                            </span>
                            <span className={`px-2 py-1 text-xs font-bold border border-black ${getSeverityColor(report.severity)}`}>
                              {report.severity}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          📍 {report.location} • 📅 {report.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Badges Tab */}
              {activeTab === 'badges' && (
                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                  <h3 className="text-2xl font-black text-gray-800 mb-6">🏆 Badges & Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {badges.map((badge, index) => (
                      <div key={index} className={`border-4 p-4 shadow-[4px_4px_0px_0px_#000] ${getBadgeColor(badge.level)}`}>
                        <div className="text-3xl mb-2">{badge.emoji}</div>
                        <h4 className="font-black text-gray-800">{badge.name}</h4>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="bg-white border border-black px-2 py-1 text-xs font-bold">
                            {badge.level}
                          </span>
                          <span className="text-xs text-gray-600">
                            Earned {badge.earned}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Community Tab */}
              {activeTab === 'community' && (
                <div className="space-y-6">
                  <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                    <h3 className="text-2xl font-black text-gray-800 mb-6">👥 Community Stats</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-black text-blue-600 mb-2">{stats.followers}</div>
                        <div className="text-lg font-bold text-gray-700">👥 Followers</div>
                        <button className="mt-2 bg-blue-200 border-2 border-black px-4 py-2 text-sm font-bold hover:bg-blue-300">
                          View Followers
                        </button>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-black text-green-600 mb-2">{stats.following}</div>
                        <div className="text-lg font-bold text-gray-700">🔄 Following</div>
                        <button className="mt-2 bg-green-200 border-2 border-black px-4 py-2 text-sm font-bold hover:bg-green-300">
                          View Following
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                    <h3 className="text-2xl font-black text-gray-800 mb-4">🌟 Top Contributors</h3>
                    <div className="space-y-3">
                      {['Dr. Marina Ocean', 'Eco Warrior Sam', 'Green Guardian Lee'].map((name, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 border-2 border-black">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">👨‍🔬</div>
                            <div>
                              <div className="font-bold text-gray-800">{name}</div>
                              <div className="text-sm text-gray-600">Environmental Researcher</div>
                            </div>
                          </div>
                          <button className="bg-blue-200 border-2 border-black px-3 py-1 text-sm font-bold hover:bg-blue-300">
                            Follow
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Actions */}
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                <h3 className="text-xl font-black text-gray-800 mb-4">⚡ Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-red-200 border-2 border-black p-3 shadow-[3px_3px_0px_0px_#000] hover:bg-red-300 transition-colors">
                    <span className="text-lg mr-2">📢</span>
                    <span className="font-bold">Report Incident</span>
                  </button>
                  <button className="w-full bg-green-200 border-2 border-black p-3 shadow-[3px_3px_0px_0px_#000] hover:bg-green-300 transition-colors">
                    <span className="text-lg mr-2">📸</span>
                    <span className="font-bold">Upload Evidence</span>
                  </button>
                  <button className="w-full bg-purple-200 border-2 border-black p-3 shadow-[3px_3px_0px_0px_#000] hover:bg-purple-300 transition-colors">
                    <span className="text-lg mr-2">🎯</span>
                    <span className="font-bold">Join Event</span>
                  </button>
                </div>
              </div>

              {/* Leaderboard Position */}
              <div className="bg-yellow-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                <h3 className="text-xl font-black text-gray-800 mb-4">🏆 Leaderboard</h3>
                <div className="text-center mb-4">
                  <div className="text-3xl font-black text-yellow-600">#{stats.rank}</div>
                  <div className="text-sm font-bold text-gray-700">Global Ranking</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>🥇 #11: Marina Expert</span>
                    <span className="font-bold">2,891 pts</span>
                  </div>
                  <div className="flex justify-between bg-green-200 border border-black px-2 py-1">
                    <span>🥈 #12: Alex Rivera (You!)</span>
                    <span className="font-bold">{stats.ecoPoints} pts</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🥉 #13: Sam Wilson</span>
                    <span className="font-bold">2,798 pts</span>
                  </div>
                </div>
              </div>

              {/* Next Badge Progress */}
              <div className="bg-blue-100 border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000]">
                <h3 className="text-xl font-black text-gray-800 mb-4">🎯 Next Badge</h3>
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🌊</div>
                  <div className="font-bold text-gray-800">Ocean Guardian</div>
                  <div className="text-sm text-gray-600 mb-3">Report 25 water pollution cases</div>
                  
                  <div className="bg-white border-2 border-black h-6 mb-2">
                    <div className="h-full bg-blue-400 flex items-center justify-center text-xs font-bold" style={{width: '76%'}}>
                      19/25
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">6 more reports to unlock!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;