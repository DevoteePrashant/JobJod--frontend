import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiBell, FiSettings, FiUser, FiBriefcase, FiGrid, FiMail } from 'react-icons/fi';
import logo2 from '../image/logo2.png';
import profile from '../image/profile.jpg'



const profileViewData = [
  { date: '04/01', views: 600 },
  { date: '04/05', views: 300 },
  { date: '04/10', views: 700 },
  { date: '04/15', views: 400 },
  { date: '04/20', views: 605 },
  { date: '04/25', views: 300 },
  { date: '04/30', views: 800 }
];

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col text-center items-center">
        <div className="flex items-center mb-2">
          <img src={logo2} alt="JobJod" className="h-8 mr-4" />
          {/* <span className="text-xl font-bold text-purple-600">JobJod</span> */}
        </div>
        <div className="flex items-center mt-8">
          <img src={profile} alt="Anamoul" className="w-10 h-10 rounded-full mb-2" />
          <p className="font-bold ml-4"> Hello, Anamoul</p>
        </div>
        <nav className="flex-1 space-y-4">
          <button className="flex items-center px-6 py-2 text-left bg-black text-white rounded-lg">
            <FiGrid className="mr-3" /> Dashboard
          </button>
          <button className="flex items-center px-4 py-2 text-left hover:bg-gray-200 rounded-lg">
            <FiBriefcase className="mr-3" /> Jobs
          </button>
          <button className="flex items-center px-4 py-2 text-left hover:bg-gray-200 rounded-lg">
            <FiUser className="mr-3" /> Profile
          </button>
          <button className="flex items-center px-4 py-2 text-left hover:bg-gray-200 rounded-lg">
            <FiSettings className="mr-3" /> Settings
          </button>
        </nav>
   
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <input type="text" placeholder="Search job title or skill" className="border px-4 py-2 rounded-lg" />
            <input type="text" placeholder="Search location" className="border px-4 py-2 rounded-lg" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-gray-100 rounded-full">
              <FiBell className="text-gray-600" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full">
              <FiMail className="text-gray-600" />
            </button>
            <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
          </div>
        </header>

        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Profile View (This Month)</h2>
            <span className="text-3xl font-bold">4029</span>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={profileViewData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#2563EB" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[1, 2,3,4].map((item) => (
            <div key={item} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-500">Potential Jobs (This Month)</h3>
              <p className="text-2xl font-bold">13</p>
            </div>
          ))}
        </div>

        <section className="bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-bold">Applied Jobs</h2>
            <a href="##" className="text-blue-600">All Jobs</a>
          </div>
          <div className="p-6 space-y-4">
            {[1, 2,3].map((job) => (
              <div key={job} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">ST</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Product Designer</h3>
                    <p className="text-sm text-gray-500">Grameenphone · Dhaka, Bangladesh</p>
                  </div>
                </div>
                <p className="text-green-500 text-sm">Applied on 23 May 20</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sidebar;