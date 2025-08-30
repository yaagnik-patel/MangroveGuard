import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./module/local/home";
import ReportIncident from "./module/local/report";
import Profile from "./module/local/profile"; // ✅ Corrected
import Rewards from "./module/local/rewards";

const Landing = () => {
  return (
    <div className="text-center p-8 min-h-screen bg-amber-50">
      <h1 className="text-3xl font-bold text-green-700">MangroveGuard 🚀</h1>
      <p className="mt-4 text-gray-600">React + Tailwind setup ready!</p>

      <Link
        to="/home"
        className="mt-8 inline-block bg-green-200 border-4 border-black rounded-xl px-8 py-4 shadow-[6px_6px_0px_0px_#000] active:shadow-[3px_3px_0px_0px_#000] active:translate-x-1 active:translate-y-1 transition-all"
      >
        <div className="flex items-center justify-center space-x-2">
          <span className="text-2xl">🏠</span>
          <span className="text-xl font-black text-gray-800">Go to Home</span>
        </div>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/report-incident" element={<ReportIncident />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reward" element={<Rewards/>} />
      </Routes>
    </Router>
  );
};

export default App;
