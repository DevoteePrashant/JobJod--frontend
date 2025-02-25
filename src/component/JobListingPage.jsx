import { useState } from "react"
import Filters from "./Filters"
import JobList from "./JobList"
import RightSidebar from "./RightSidebar"
import Navbar from "./Navbar"
import Footer from "./Footer"
export default function JobListingPage() {
  // Job data
  const jobs = [
    {
      id: 1,
      company: {
        name: "Linear Company",
        logo: "/placeholder.svg?height=40&width=40",
      },
      title: "Software Engineer",
      location: "Brussels",
      type: "Full time",
      salary: "50-55k",
      postedAt: "29 min ago",
      isNew: true,
      description: "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt."
    },
    {
      id: 2,
      company: {
        name: "Notion",
        logo: "/placeholder.svg?height=40&width=40",
      },
      title: "Junior UI Designer",
      location: "Madrid",
      type: "Part time",
      salary: "30-32k",
      postedAt: "1 day ago",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    // Add more job listings as needed
  ]

  // Filters state
  const [filters, setFilters] = useState({
    location: "",
    salary: "",
    salaryType: "Yearly",
    datePosted: "",
    experience: "",
    employmentType: [],
  })

  return (
    <>
    <Navbar/>
    <div className=" min-h-screen">
      
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center sm:text-left">
        <h1 className="text-3xl   sm:text-4xl md:text-5xl font-bold mb-4">
          Find your <span className="text-purple-600">new job</span> today
        </h1>
        <p className="text-gray-600  text-base sm:text-lg mb-8">
          Thousands of jobs in the computer, engineering, and technology sectors
          are waiting for you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center max-w-7xl mx-auto space-y-4 sm:space-y-0 ml-2">
          <div className="flex items-center w-full sm:w-auto flex-1 bg-white p-3 sm:rounded-l-3xl border border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
            <input
              type="text"
              placeholder="Information Technology"
              className="w-full bg-white focus:outline-none text-gray-700 mx-3"
            />
          </div>
          <div className="flex items-center w-full sm:w-auto flex-1 bg-white p-3 border border-gray-200 rounded-lg sm:rounded-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              fill="none"
              viewBox="0 0 26 26"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11c0 3.866-7 9-7 9s-7-5.134-7-9a7 7 0 1114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="City, state or zip"
              className="w-full bg-white focus:outline-none text-gray-700 mx-3"
            />
          </div>
          <button className="w-full sm:w-auto bg-purple-400 text-white px-6 py-3 sm:rounded-r-3xl font-semibold hover:bg-purple-700 focus:outline-none">
            Find Jobs
          </button>
        </div>
      </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <Filters filters={filters} setFilters={setFilters} />
          <JobList jobs={jobs} />
          <RightSidebar />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}