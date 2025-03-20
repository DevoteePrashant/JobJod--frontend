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
import { Bell, Mail, MapPin, Search, X } from "lucide-react";
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
const JobListingPage = () => {
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
    
    const [jobType, setJobType] = useState("")
    const [location, setLocation] = useState("")
    
    const handleSubmit = e => {
      e.preventDefault()
      // Handle form submission logic here
      console.log("Searching for:", { jobType, location })
    }
    

const handleImageError = (event) => {
  event.target.src = "/placeholder.svg"; // Fallback image
}

  return (
    <>

<div className="min-h-screen relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={Group}
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <Navbar />
        <div className="w-full max-w-[1800px] mx-auto py-6 px-4 sm:px-6 lg:px-8">
       
        <div className=" mx-auto py-12 ">
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        Find your <span className="text-purple-500">new job</span> today
      </h1>
      <p className="text-gray-700 mb-8">
        Thousands of jobs in the computer, engineering, and technology sectors are waiting for you.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row overflow-hidden">
          {/* Job Type Input */}
          <div className="flex items-center flex-1 bg-white p-4 border border-gray-200 rounded-md mb-3 sm:mb-0 sm:rounded-l-full sm:border-r-0">
            <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
            <input
              type="text"
              placeholder="Information Technology"
              className="w-full bg-white focus:outline-none text-gray-700 ml-3"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            />
          </div>

          {/* Location Input */}
          <div className="flex items-center flex-1 bg-white border border-gray-200 rounded-md mb-3 sm:mb-0 sm:rounded-none p-4">
            <MapPin className="text-gray-400 w-5 h-5 flex-shrink-0" />
            <input
              type="text"
              placeholder="City, state or zip"
              className="w-full bg-white focus:outline-none text-gray-700 ml-3"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Find Jobs Button */}
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-4 px-6 transition-colors duration-200 rounded-md w-full sm:w-auto sm:rounded-r-full"
          >
            Find Jobs
          </button>
        </div>
      </form>
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
  
  
export default JobListingPage;
  
  
  
  