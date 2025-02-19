import React, { useState } from 'react';
import { Bell, Mail, Menu, Search, X, Home, Briefcase, User2, Settings } from "lucide-react"
import image from "../image/logo2.png"
import image2 from "../image/profile.jpg"
import { LineChart as ReChartsLine, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { FaEllipsisH } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import NotificationPanel from './NotificationPanel';

// Utility function for conditional classNames
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ")
// Mock data
const profileData = {
  name: "Anamoul",
  avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4iC8u1BUhUOYk2lPj0D1DOnqwCm4K3.png",
}

const jobData = [
  {
    title: "Product Designer",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
    appliedDate: "23 May 20",
    logoUrl: "https://example.com/logo1.png",
  },
  {
    title: "Product Designer",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
    appliedDate: "23 May 20",
    logoUrl: "https://example.com/logo2.png",
  },
  {
    title: "Product Designer",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
    appliedDate: "23 May 20",
    logoUrl: "https://example.com/logo3.png",
  },
];


const chartData = {
  labels: ["04/05", "04/10", "04/15", "04/20", "04/25", "04/30"],
  data: [400, 380, 320, 350, 280, 500],
}

// Components
const DashboardSidebar = ({ profile, isOpen, onClose }) => (
  <div
  className={cn(
      "fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-white transition-transform duration-300 ease-in-out lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full",
    )}
    >
    <div className="p-6">

<div className="flex items-center mb-4 ">

<Link to="/"><img src={image} alt="JobJod" className="text-center items-center mx-10" /></Link>

                    </div>

{/* Profile Section */}
<div className="mb-8 text-center">
<div className="w-16 h-16 rounded-full bg-gray-300 mx-auto mb-2 overflow-hidden">
    <img src={image2} alt="profile" className="w-full h-full object-cover" />
</div>
<p className="text-sm text-black font-bold ">Hello, Anamoul</p>
</div>
</div>

    <div className="flex flex-1 flex-col gap-4 p-6">
       <nav>
                           <ul className="space-y-2">
                        <li>
                                <a href="/Job" className="flex items-center p-3 text-white rounded-lg bg-black ">
                                <RxDashboard /><span className="ml-3">
                                Dashboard</span>
                                </a>
                            </li>
                        
                            <li>
                                <a href="/Job" className="flex items-center p-3  text-gray-700 rounded-lg hover:bg-gray-100 ">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="ml-3">Jobs</span>  
                                </a>
                            </li>
                            <li>
                                <a href="/Profile" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="ml-3">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="##" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="ml-3">Settings</span>
                                </a>
                            </li>
                        </ul>
                        </nav>
    </div>
  </div>
)

const LineChart = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index],
  }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReChartsLine data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis hide />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2563eb"
          strokeWidth={2}
          dot={{ fill: "#2563eb", strokeWidth: 2 }}
        />
      </ReChartsLine>
    </ResponsiveContainer>
  )
}

const DashboardStats = ({ title, subtext, value }) => (
  <div className="rounded-xl border bg-white p-6">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{subtext}</p>
      </div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  </div>
)

const JobList = ({ jobs }) => (
  <div className="space-y-4">
    {jobs.map((job, index) => (
      <div key={index} className="flex items-center justify-between rounded-xl border bg-white p-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-blue-500" />
          <div>
            <h3 className="font-medium">{job.title}</h3>
            <p className="text-sm text-gray-500">
              {job.company} · {job.location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span className="text-sm text-gray-500">Applied on {job.appliedDate}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
)

const Jobseeker = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false);
  
  return (
    <>   
      <div className="min-h-screen bg-gray-50">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      <DashboardSidebar profile={profileData} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="lg:pl-64">
        <header className="sticky top-0 z-40 border-b bg-white">
          <div className="flex h-16 items-center gap-4 px-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden -ml-1 p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open sidebar</span>
            </button>
            <div className="flex-1">
  <div className="flex max-w-md gap-4">
    {/* Search job title or skill input */}
    <div className="relative flex-1">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <input
        type="search"
        placeholder="Search job title or skill"
        className="h-9 w-full rounded-full border border-gray-200 bg-white pl-8 pr-4 text-sm outline-none focus:border-blue-500"
      />
    </div>

    {/* Search location input */}
    <div className="relative flex-1">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <input
        type="search"
        placeholder="Search location"
        className="h-9 w-full rounded-full border border-gray-200 bg-white pl-8 pr-4 text-sm outline-none focus:border-blue-500"
      />
    </div>
  </div>
</div>

            <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <div className="relative">
          <Bell
            className="text-xl text-black cursor-pointer"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          <span className="absolute top-0 right-0 bg-purple-500 w-2 h-2 rounded-full"></span>
          {showNotifications && (
            <div
              className="absolute right-0 mt-2 bg-white shadow-md border border-gray-200 rounded-2xl"
              style={{ width: "550px" }}
            >
              <NotificationPanel />
            </div>
          )}
        </div>
              </button>
              <Link to="/Message"><button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Mail className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-500" />
              </button>
              </Link>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Chart */}
            <div className="rounded-xl border bg-white p-6">
            <div className="flex items-center justify-between   bg-white p-6">
            <div className="flex flex-col">
    <h2 className="font-semibold text-gray-900">Profile View</h2>
    <p className="text-sm text-gray-500">(This Month)</p>
  </div>
  <div className="flex items-center gap-x-4">
    <h3 className="font-semibold text-3xl text-gray-900 ">4020</h3>
    <FaEllipsisH className="text-gray-500 cursor-pointer text-[23px] text-blue-600/100 " />
  </div>
</div>

              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} />
                    <YAxis hide />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#2563eb"
                      strokeWidth={2}
                      dot={{ fill: "#2563eb", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
               
              </div>
            </div>

            {/* Applied Jobs */}
            <div className=" items-start gap-4 rounded-xl border bg-white p-4 shadow-sm">
  {/* Header Section */}
  <div className="flex items-center justify-between ">
    <h2 className="font-semibold text-lg">Applied Jobs</h2>
    <a href="/jobs" className="text-sm text-blue-500 hover:underline">
      All Jobs
    </a>
  </div>

  {/* Job Cards Section */}
  <div className="space-y-4">
    {jobData.map((job, index) => (
      <div
        key={index}
        className="flex items-start gap-4  bg-white p-4 "
      >
        {/* Logo */}
        <img
          src={job.logoUrl}
          alt={`${job.company} logo`}
          className="h-12 w-12 rounded-lg object-cover"
        />

        {/* Job Details */}
        <div>
          <h3 className="font-medium text-base">{job.title}</h3>
          <p className="text-sm text-gray-500">
            {job.company} · {job.location}
          </p>
          {/* Applied Date */}
          <div className="flex items-center gap-2 mt-2">
            <span className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
              ✓
            </span>
            <span className="text-sm text-gray-500">
              Applied on {job.appliedDate}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


          </div>

        {/* Stats */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
 <div className="mt-6 grid gap-6 sm:grid-cols-2">
  <div className="rounded-xl border bg-white p-6">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Applied Jobs</h3>
        <p className="text-sm text-gray-500">(This Month)</p>
      </div>
      <div className="text-2xl font-bold">13</div>
    </div>
  </div>
  <div className="rounded-xl border bg-white p-6">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Potential Jobs</h3>
        <p className="text-sm text-gray-500">(This Month)</p>
      </div>
      <div className="text-2xl font-bold">532</div>
    </div>
  </div>
</div>
</div>


<div className="mt-6 grid gap-6 sm:grid-cols-2">
 <div className="mt-6 grid gap-6 sm:grid-cols-2">
  <div className="rounded-xl border bg-white p-6">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Applied Jobs</h3>
        <p className="text-sm text-gray-500">(This Month)</p>
      </div>
      <div className="text-2xl font-bold">13</div>
    </div>
  </div>
  <div className="rounded-xl border bg-white p-6">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Potential Jobs</h3>
        <p className="text-sm text-gray-500">(This Month)</p>
      </div>
      <div className="text-2xl font-bold">532</div>
    </div>
  </div>
</div>
</div>

        </main>
      </div>
    </div>
  </>

    );
};

export default Jobseeker;
