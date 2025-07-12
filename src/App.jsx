import React, { useState } from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import ProfileCard from './components/ProfileCard';
import Pagination from './components/Pagination';
import { mockProfiles } from './data/mockProfiles';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 3;
  const totalPages = Math.ceil(mockProfiles.length / profilesPerPage);

  const getCurrentProfiles = () => {
    const startIndex = (currentPage - 1) * profilesPerPage;
    const endIndex = startIndex + profilesPerPage;
    return mockProfiles.slice(startIndex, endIndex);
  };

  const handleRequest = (profileId) => {
    // In a real app, this would check authentication status
    alert('Please login to request a skill exchange!');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Smooth scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <SearchSection />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Available Skill Exchangers</h2>
          <p className="text-slate-400">Connect with people to share and learn new skills</p>
        </div>
        
        <div className="space-y-6">
          {getCurrentProfiles().map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onRequest={handleRequest}
            />
          ))}
        </div>
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}

export default App;