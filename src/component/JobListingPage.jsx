import { useState } from "react";
import Filters from "./Filters";
import JobList from "./JobList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faEnvelope,
  faBars,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../image/dashboard.png";
import { Bell, Mail, Search, X } from "lucide-react";
import NotificationPanel from "./NotificationPanel";
import image2 from "../image/profile.jpg";
import RightSidebar from "./RightSidebar";
import Navbar from "./Navbar";
import logo2 from "../image/logo2.png";
import Group from "../image/Group.svg";
import Footer from "./Footer";
import Dheader from "./Dheader";
import { Link } from "react-router-dom";
import logo from "../image/logo2.png"
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
      description:
        "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more job listings as needed
  ];

  // Filters state
  const [filters, setFilters] = useState({
    location: "",
    salary: "",
    salaryType: "Yearly",
    datePosted: "",
    experience: "",
    employmentType: [],
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
    const [showMobileSearch, setShowMobileSearch] = useState(false)
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    


const handleImageError = (event) => {
  event.target.src = "/placeholder.svg"; // Fallback image
}

  return (
    <>
     <Navbar />

      <div className=" min-h-screen ">
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center sm:text-left relative">
            <div className="absolute inset-0 w-full h-full">
              <img
                src={Group}
                alt="Background Pattern"
                className="w-full h-full object-cover opacity-30"
                width={1440}
                height={1024}
                priority
              />
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Find your <span className="text-purple-600">new job</span> today
              </h1>
              <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-3xl">
                Thousands of jobs in the computer, engineering, and technology
                sectors are waiting for you.
              </p>

              {/* Search Bar - Fixed styling */}
              <div className="flex flex-col sm:flex-row items-center max-w-8xl space-y-4 sm:space-y-0 sm:space-x-0">
                {/* Job Type Input */}
                <div className="flex items-center w-full sm:w-auto flex-1 bg-white p-3 sm:rounded-l-full border border-gray-200 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 30 30"
                    className="text-gray-400"
                  >
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Information Technology"
                    className="w-full bg-white focus:outline-none text-gray-700 mx-3"
                  />
                </div>

                {/* Location Input */}
                <div className="flex items-center w-full sm:w-auto flex-1 bg-white p-3 border border-gray-200 shadow-sm sm:border-l-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="21"
                    fill="none"
                    viewBox="0 0 26 26"
                    stroke="currentColor"
                    className="text-gray-400"
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

                {/* Find Jobs Button */}
                <button className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 sm:rounded-r-full font-medium transition-colors duration-200 shadow-sm">
                  Find Jobs
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <Filters filters={filters} setFilters={setFilters} />
            <JobList jobs={jobs} />
            <RightSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
