"use client"

import { useState } from "react"
import { Bell, Mail, Menu, Search, X } from "lucide-react"
import { RxDashboard } from "react-icons/rx"
import { Link } from "react-router-dom"
import NotificationPanel from "../component/NotificationPanel"
import image from "../image/logo2.png"
import image2 from "../image/profile.jpg"
import t4 from "../image/t4.png"

// Utility function for conditional classNames
const cn = (...classes) => classes.filter(Boolean).join(" ")

// Mock data
const profileData = {
  name: "Anamoul",
  avatar: "/placeholder.svg?height=100&width=100",
}

const jobData = [
  {
    title: "Product Designer",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
    appliedDate: "23 May 20",
    logoUrl: t4,
  },
  {
    title: "UX Designer",
    company: " Alpha",
    location: "Dhaka, Bangladesh",
    appliedDate: "10 June 20",
    logoUrl: t4,
  },
  {
    title: "Product Designer",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
    appliedDate: "23 May 20",
    logoUrl: t4,
  },
  {
    title: "UX Designer",
    company: " Alpha",
    location: "Dhaka, Bangladesh",
    appliedDate: "10 June 20",
    logoUrl: t4,
  },
  {
    title: "Frontend Developer",
    company: "Zudio",
    location: "Dhaka, Bangladesh",
    appliedDate: "15 July 20",
    logoUrl: t4,
  },
]

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
        <Link to="/">
          <img src={image || "/placeholder.svg"} alt="JobJod" className="text-center items-center mx-10" />
        </Link>
      </div>

      {/* Profile Section */}
      <div className="mb-8 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-300 mx-auto mb-2 overflow-hidden">
          <img src={image2 || "/placeholder.svg"} alt="profile" className="w-full h-full object-cover" />
        </div>
        <p className="text-sm text-black font-bold ">Hello, Anamoul</p>
      </div>
    </div>

    <div className="flex flex-1 flex-col gap-4 p-6">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="/Job" className="flex items-center p-3 text-white rounded-lg bg-black ">
              <RxDashboard />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>

          <li>
            <a href="/Job" className="flex items-center p-3  text-gray-700 rounded-lg hover:bg-gray-100 ">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-3">Jobs</span>
            </a>
          </li>
          <li>
            <a href="/Profile" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="ml-3">Profile</span>
            </a>
          </li>
          <li>
            <a href="##" className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="ml-3">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

const DashboardStats = ({ title, subtext, value }) => (
  <div className="rounded-xl border bg-white p-6">
    <div className="flex flex-col items-start justify-between">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{subtext}</p>
      </div>
      <div className="text-2xl font-bold mt-2">{value}</div>
    </div>
  </div>
)

const JobList = ({ jobs }) => (
  <div className="space-y-4">
    {jobs.map((job, index) => (
      <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
        <img
          src={job.logoUrl || "/placeholder.svg"}
          alt={`${job.company} logo`}
          className="h-12 w-12 rounded-lg object-contain"
        />
        <div>
          <h3 className="font-medium text-base">{job.title}</h3>
          <p className="text-sm text-gray-500">
            {job.company} · {job.location}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
              ✓
            </span>
            <span className="text-sm text-gray-500">Applied on {job.appliedDate}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
)

const Jobseeker = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      <DashboardSidebar profile={profileData} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="lg:pl-64">
        <header className="sticky top-0 z-40 w-full border-b bg-white">
          <div className="flex h-16 items-center px-4">
            {/* Mobile sidebar toggle */}
            <button
              className="mr-2 rounded-lg p-2 hover:bg-gray-100 lg:hidden"
              aria-label="Open sidebar"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open sidebar</span>
            </button>

            {/* Desktop search */}
            <div className="hidden flex-1 md:block">
              <div className="flex max-w-md gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <input
                    type="search"
                    placeholder="Search job title or skill"
                    className="h-9 w-full rounded-full border border-gray-200 bg-white pl-8 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <input
                    type="search"
                    placeholder="Search location"
                    className="h-9 w-full rounded-full border border-gray-200 bg-white pl-8 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Mobile search toggle */}
            <div className="flex flex-1 justify-end md:hidden">
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="rounded-full p-2 hover:bg-gray-100"
                aria-label={showMobileSearch ? "Close search" : "Open search"}
              >
                {showMobileSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </button>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-2  md:gap-4">
              <div className="relative pt-2">
                <button
                  className="relative rounded-full  hover:bg-gray-100"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full"></span>
                </button>

                <NotificationPanel isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
              </div>

              <a href="/messages" className="relative rounded-full p-2 hover:bg-gray-100">
                <Mail className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-500" />
              </a>

              <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-primary md:h-10 md:w-10">
                <img src={image2 || "/placeholder.svg"} alt="Profile" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* Mobile search expanded */}
          {showMobileSearch && (
            <div className="px-4 pb-4 md:hidden">
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <input
                    type="search"
                    placeholder="Search job title or skill"
                    className="h-9 w-full rounded-full border border-gray-200 bg-white pl-8 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    autoFocus
                  />
                </div>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <input
                    type="search"
                    placeholder="Search location"
                    className="h-9 w-full rounded-full border border-gray-200 bg-white pl-8 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="p-4 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 md:gap-6">
        <DashboardStats title="Potential Jobs" subtext="(This Month)" value="13" />
        <DashboardStats title="Area" subtext="Jobs in your preferred area" value="13" />
        <DashboardStats title="Salary" subtext="Your expectation based" value="13" />
        <DashboardStats title="Experience" subtext="Your experience" value="13" />
      </div>
              {/* Notifications Section */}
              <div className="rounded-xl border bg-white p-6">
                <h2 className="font-bold text-xl mb-4">Recent Notifications</h2>
                <div className="space-y-3">
                  <div className="rounded-lg p-3 hover:bg-gray-50 border border-gray-100">
                    <p className="text-sm">Your application was viewed by Grameenphone</p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                  <div className="rounded-lg p-3 hover:bg-gray-50 border border-gray-100">
                    <p className="text-sm">New job matching your profile: UX Designer at Alpha</p>
                    <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Applied Jobs Section */}
            <div className="rounded-xl border bg-white p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-2xl">Applied Jobs</h2>
                <a href="/jobs" className="text-sm text-blue-500 hover:underline">
                  <span className="font-semibold text-lg">All Jobs</span>
                </a>
              </div>
              <JobList jobs={jobData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Jobseeker

