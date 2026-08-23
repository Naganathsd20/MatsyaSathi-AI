import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MobileNavigation from '../components/MobileNavigation';

export const AppLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#03111F] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#082238] via-[#03111F] to-[#010A14] text-slate-100 flex flex-col lg:flex-row antialiased selection:bg-cyan-500 selection:text-white">
      {/* Desktop Left Sidebar */}
      <Sidebar className="hidden lg:flex" />

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <Navbar onMobileMenuOpen={() => setMobileMenuOpen(true)} />

        {/* Dynamic Page Outlet */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1480px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
