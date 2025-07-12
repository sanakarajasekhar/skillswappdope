import React from 'react';
import { Users, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Users className="h-8 w-8 text-teal-400" />
          <h1 className="text-2xl font-bold">Skill Swap Platform</h1>
        </div>
        <button className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-lg transition-colors">
          <LogIn className="h-4 w-4" />
          <span>Login</span>
        </button>
      </div>
    </header>
  );
};

export default Header;