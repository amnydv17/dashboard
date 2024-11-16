// components/Sidebar.js
import React from 'react';
import { useRouter } from 'next/router';

function Sidebar() {
  const router = useRouter();
  
  return (
    <div className="w-60  bg-white p-5 shadow-lg border"> {/* Fixed width, full height */}
      <div
        className={`flex items-center p-3 mb-2 text-black hover:bg-gray-200 rounded-r-3xl cursor-pointer font-bold text-l ${
          router.pathname === '/dashboard' ? 'bg-blue-100 text-blue-600' : ''
        }`}
        onClick={() => router.push('/dashboard')}
      >
        <span className="mr-2">📊</span>
        Dashboard
      </div>
      <div
        className={`flex items-center p-3 mb-2 text-black hover:bg-gray-200 rounded-r-3xl cursor-pointer font-bold text-l ${
          router.pathname === '/' ? 'bg-blue-100 text-blue-600' : ''
        }`}
        onClick={() => router.push('/')}
      >
        <span className="mr-2">🏅</span>
        Skill Test
      </div>
      <div
        className={`flex items-center p-3 text-black hover:bg-gray-200 rounded-r-3xl cursor-pointer font-bold text-l ${
          router.pathname === '/internship' ? 'bg-blue-100 text-blue-600' : ''
        }`}
        onClick={() => router.push('/internship')}
      >
        <span className="mr-2">📄</span>
        Internship
      </div>
    </div>
  );
}

export default Sidebar;
