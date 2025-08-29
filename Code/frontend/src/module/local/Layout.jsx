import React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar is always visible */}
      <Navbar />

      {/* Page content with padding to avoid overlap */}
      <div className="pt-24 lg:pt-24 pb-24">
        {children}
      </div>
    </div>
  );
};

export default Layout;
