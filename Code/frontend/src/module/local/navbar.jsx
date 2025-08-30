import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="hidden lg:block fixed top-0 left-0 right-0 bg-white border-b-4 border-black z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🌱</span>
            <span className="text-2xl font-black text-gray-800">MangroveGuard</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/home"
              className="flex items-center space-x-2 px-4 py-2 bg-green-200 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-green-300 transition-colors"
            >
              <span className="text-xl">🏠</span>
              <span className="font-black text-gray-800">Home</span>
            </Link>

            <Link
              to="/report-incident"
              className="flex items-center space-x-2 px-4 py-2 bg-red-200 border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-red-300 transition-colors"
            >
              <span className="text-xl">📢</span>
              <span className="font-black text-gray-800">Report</span>
            </Link>

            <Link
              to="/profile"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl">👤</span>
              <span className="font-bold text-gray-600">Profile</span>
            </Link>

            <Link
              to="/reward"
              className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl">📊</span>
              <span className="font-bold text-gray-600">Rankings</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black z-50">
        <div className="flex justify-around py-3">
          <Link
            to="/report-incident"
            className="flex flex-col items-center p-2 bg-red-200 border-2 border-black shadow-[3px_3px_0px_0px_#000]"
          >
            <span className="text-2xl mb-1">📢</span>
            <span className="text-sm font-black text-gray-800">Report</span>
          </Link>

          <Link
            to="/home"
            className="flex flex-col items-center p-2 bg-green-200 border-2 border-black shadow-[3px_3px_0px_0px_#000]"
          >
            <span className="text-2xl mb-1">🏠</span>
            <span className="text-sm font-black text-gray-800">Home</span>
          </Link>

          <Link
            to="/profile"
            className="flex flex-col items-center p-2 hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl mb-1">👤</span>
            <span className="text-sm font-bold text-gray-600">Profile</span>
          </Link>

          <Link
            to="/reward"
            className="flex flex-col items-center p-2 hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl mb-1">📊</span>
            <span className="text-sm font-bold text-gray-600">Rankings</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
