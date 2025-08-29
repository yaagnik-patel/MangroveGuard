import React from "react";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      {/* Header Section */}
      <header className="py-8 text-center border-b-4 border-black mb-8">
        <div className="text-6xl mb-3">🌱</div>
        <h1 className="text-4xl font-black text-gray-800 mb-2">MangroveGuard</h1>
        <p className="text-xl font-medium text-gray-600">
          "Protect Mangroves. Protect Life."
        </p>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid lg:grid-cols-12 gap-6 mb-8">
        {/* Left Sidebar - Quick Stats */}
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-2xl font-black text-gray-800 mb-4 border-b-2 border-black pb-2">📊 Stats</h2>
          
          <div className="bg-blue-100 border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000]">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-lg font-bold text-gray-800">12</div>
            <div className="text-sm text-gray-600">Reports This Week</div>
          </div>

          <div className="bg-yellow-100 border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000]">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-lg font-bold text-gray-800">20</div>
            <div className="text-sm text-gray-600">Points Earned</div>
          </div>

          <div className="bg-green-100 border-4 border-black p-4 shadow-[6px_6px_0px_0px_#000]">
            <div className="text-3xl mb-2">🌍</div>
            <div className="text-lg font-bold text-gray-800">2,847</div>
            <div className="text-sm text-gray-600">Trees Saved</div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-6 space-y-6">
          <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_#000]">
            <h2 className="text-3xl font-black text-gray-800 mb-6 text-center">🎯 Take Action</h2>
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-green-200 border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] active:shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 transition-all hover:bg-green-300">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-3xl">📢</span>
                  <span className="text-xl font-black text-gray-800">Report Incident</span>
                </div>
              </button>

              <button className="w-full bg-pink-200 border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] active:shadow-[4px_4px_0px_0px_#000] active:translate-x-1 active:translate-y-1 transition-all hover:bg-pink-300">
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-3xl">🏆</span>
                  <span className="text-xl font-black text-gray-800">View Rewards</span>
                </div>
              </button>
            </div>
          </div>

          {/* Map/Location Section */}
          <div className="border-4 border-black bg-purple-100 p-6 shadow-[8px_8px_0px_0px_#000]">
            <h3 className="text-2xl font-black text-gray-800 mb-4">🗺️ Your Area</h3>
            <div className="bg-white border-2 border-black p-8 text-center">
              <div className="text-6xl mb-4">🌊</div>
              <p className="text-lg font-bold text-gray-600">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-500 mt-2">Track incidents in your region</p>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Recent Activity */}
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-2xl font-black text-gray-800 mb-4 border-b-2 border-black pb-2">🔥 Recent</h2>
          
          <div className="bg-red-100 border-4 border-black p-3 shadow-[6px_6px_0px_0px_#000]">
            <div className="text-2xl mb-1">🚨</div>
            <h4 className="font-bold text-gray-800 text-sm">Illegal Logging</h4>
            <p className="text-xs text-gray-600">2 hours ago</p>
          </div>

          <div className="bg-blue-100 border-4 border-black p-3 shadow-[6px_6px_0px_0px_#000]">
            <div className="text-2xl mb-1">💧</div>
            <h4 className="font-bold text-gray-800 text-sm">Water Pollution</h4>
            <p className="text-xs text-gray-600">5 hours ago</p>
          </div>

          <div className="bg-orange-100 border-4 border-black p-3 shadow-[6px_6px_0px_0px_#000]">
            <div className="text-2xl mb-1">🔥</div>
            <h4 className="font-bold text-gray-800 text-sm">Fire Damage</h4>
            <p className="text-xs text-gray-600">1 day ago</p>
          </div>

          <div className="bg-yellow-100 border-4 border-black p-3 shadow-[6px_6px_0px_0px_#000]">
            <div className="text-2xl mb-1">⚠️</div>
            <h4 className="font-bold text-gray-800 text-sm">Habitat Loss</h4>
            <p className="text-xs text-gray-600">2 days ago</p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Community Impact */}
      <div className="border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_#000] mb-8">
        <h2 className="text-3xl font-black text-gray-800 mb-6 text-center">🌱 Community Impact</h2>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 border-2 border-black">
            <div className="text-4xl mb-2">🌳</div>
            <div className="text-2xl font-black text-gray-800">15,429</div>
            <div className="text-sm font-bold text-gray-600">Trees Protected</div>
          </div>
          
          <div className="text-center p-4 bg-blue-50 border-2 border-black">
            <div className="text-4xl mb-2">👥</div>
            <div className="text-2xl font-black text-gray-800">3,847</div>
            <div className="text-sm font-bold text-gray-600">Active Users</div>
          </div>
          
          <div className="text-center p-4 bg-red-50 border-2 border-black">
            <div className="text-4xl mb-2">🚨</div>
            <div className="text-2xl font-black text-gray-800">1,203</div>
            <div className="text-sm font-bold text-gray-600">Reports Filed</div>
          </div>
          
          <div className="text-center p-4 bg-purple-50 border-2 border-black">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-2xl font-black text-gray-800">89,342</div>
            <div className="text-sm font-bold text-gray-600">Points Earned</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
