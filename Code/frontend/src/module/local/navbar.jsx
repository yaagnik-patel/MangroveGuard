import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* Desktop/Laptop - Top Navbar (hidden on mobile/tablet) */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 bg-white border-b-4 border-black z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🌱</span>
            <span className="text-2xl font-black text-gray-800">MangroveGuard</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-200 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-green-300 transition-colors">
              <span className="text-xl">🏠</span>
              <span className="font-black text-gray-800">Home</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-colors">
              <span className="text-xl">🔍</span>
              <span className="font-bold text-gray-600">Reports</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-colors">
              <span className="text-xl">📊</span>
              <span className="font-bold text-gray-600">Rankings</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-colors">
              <span className="text-xl">👤</span>
              <span className="font-bold text-gray-600">Profile</span>
            </button>
          </div>

          {/* Quick Action Button */}
          <button className="bg-red-200 border-2 border-black px-4 py-2 shadow-[3px_3px_0px_0px_#000] hover:bg-red-300 transition-colors">
            <span className="text-xl">📢</span>
            <span className="font-black text-gray-800 ml-2">Report</span>
          </button>
        </div>
      </nav>

      {/* Desktop/Laptop - Sidebar Alternative (uncomment to use instead of top nav) */}
      {/* 
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-white border-r-4 border-black z-50">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-3xl">🌱</span>
            <span className="text-xl font-black text-gray-800">MangroveGuard</span>
          </div>
          
          <nav className="space-y-4">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-green-200 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-green-300 transition-colors">
              <span className="text-2xl">🏠</span>
              <span className="font-black text-gray-800">Home</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 transition-colors">
              <span className="text-2xl">🔍</span>
              <span className="font-bold text-gray-600">Reports</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 transition-colors">
              <span className="text-2xl">📊</span>
              <span className="font-bold text-gray-600">Rankings</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-100 transition-colors">
              <span className="text-2xl">👤</span>
              <span className="font-bold text-gray-600">Profile</span>
            </button>
          </nav>

          <div className="mt-8">
            <button className="w-full bg-red-200 border-2 border-black p-3 shadow-[3px_3px_0px_0px_#000] hover:bg-red-300 transition-colors">
              <span className="text-xl">📢</span>
              <span className="font-black text-gray-800 ml-2">Quick Report</span>
            </button>
          </div>
        </div>
      </aside>
      */}

      {/* Mobile/Tablet - Bottom Navbar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black z-50">
        <div className="flex justify-around py-3">
          {/* My Reports */}
          <button className="flex flex-col items-center p-2 hover:bg-gray-100 transition-colors">
            <span className="text-2xl mb-1">🔍</span>
            <span className="text-sm font-bold text-gray-600">Reports</span>
          </button>

          {/* Home - Active */}
          <button className="flex flex-col items-center p-2 bg-green-200 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
            <span className="text-2xl mb-1">🏠</span>
            <span className="text-sm font-black text-gray-800">Home</span>
          </button>

          {/* Profile */}
          <button className="flex flex-col items-center p-2 hover:bg-gray-100 transition-colors">
            <span className="text-2xl mb-1">👤</span>
            <span className="text-sm font-bold text-gray-600">Profile</span>
          </button>

          {/* Leaderboard */}
          <button className="flex flex-col items-center p-2 hover:bg-gray-100 transition-colors">
            <span className="text-2xl mb-1">📊</span>
            <span className="text-sm font-bold text-gray-600">Rankings</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;