import React, { useEffect, useRef, useState } from "react";
import profile from "../image/profile.jpg";
import logo2 from "../image/logo2.png";
import image from "../image/logo2.png";
import { Link } from "react-router-dom";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Mail,
  Menu,
  Search,
  X,
} from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import NotificationPanel from "../component/NotificationPanel";
import image2 from "../image/profile.jpg";
import t4 from "../image/t4.png";

// Utility function for conditional classNames
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Mock data
const profileData = {
  name: "Anamoul",
  avatar: "/placeholder.svg?height=100&width=100",
};

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
];

const JobDetails = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState("Job Description");

  const tabs = ["Application Status", "Job Description"];
  const tabsContainerRef = useRef(null);
  const activeTabRef = useRef(null);

  // Scroll active tab into view when it changes
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const activeTabElement = activeTabRef.current;

      // Calculate position to center the active tab
      const scrollLeft =
        activeTabElement.offsetLeft -
        container.clientWidth / 2 +
        activeTabElement.clientWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  // Scroll tabs left/right
  const scroll = (direction) => {
    if (tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const scrollAmount = container.clientWidth / 2;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="relative w-50 md:w-50 max-w-50 md:max-w-50">
        {/* Scroll buttons for mobile */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-sm md:hidden"
          aria-label="Scroll tabs left"
        >
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        </button>

        <div
          className="flex items-center rounded-full p-1 w-50 md:w-50 overflow-x-auto scrollbar-hide"
          ref={tabsContainerRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex items-center px-6  bg-gray-100 p-1 rounded-full  md:px-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                ref={activeTab === tab ? activeTabRef : null}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 md:px-4 rounded-full ms-2 me-2 text-xs md:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab
                    ? "bg-white text-purple-500 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-sm md:hidden"
          aria-label="Scroll tabs right"
        >
          <ChevronRight className="h-4 w-4 text-gray-600" />
        </button>

        {/* CSS to hide scrollbar */}
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-bold mb-2">Product Designer</h1>
        <div className="flex flex-wrap items-center text-gray-600 mb-4">
          <span className="mr-2">✈️</span>
          <span className="mr-2">Grameenphone</span>
          <span className="mr-2">Dhaka, Bangladesh</span>
        </div>
        <div className="flex flex-wrap items-center text-sm text-gray-500">
          <span className="mr-4">Posted on 15 May 20</span>
          <span>Expire on 30 May 20</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={t4}
            className="w-12 h-12 rounded-full bg-gray-200 mr-4"
            alt=""
            srcset=""
          />
          <div>
            <h3 className="font-medium">Hannah Marsh</h3>
            <p className="text-sm text-gray-600">HR Manager · Grameenphone</p>
          </div>
        </div>
        <button className="text-blue-500">Send Message</button>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="font-bold mb-3">Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-justify">
            <li>
              Work on and execute design projects from start to finish while
              meeting creative and technical requirements.
            </li>
            <li>
              Collaborate closely with engineers, researchers, clinicians, and
              product managers to iterate rapidly.
            </li>
            <li>
              Work on the entire project lifecycle, from wireframes to detailed
              specs across multiple UX platforms.
            </li>
            <li>
              Participate in regular design reviews and other team-wide design
              efforts; create and contribute to a great design team culture.
            </li>
            <li>
              Participate in user experience research and usability studies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold mb-3">Qualifications and Skills</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-justify">
            <li>
              BA/BS degree in Design, HCI, CS, or related field, or equivalent
              practical experience.
            </li>
            <li>
              3+ years of relevant UX Design experience in consumer products,
              medical devices or other relevant areas.
            </li>
            <li>Portfolio of UX design work.</li>
            <li>
              Proven ability to work across the design process, from developing
              strong conceptual foundations to refining the smallest details
              with high quality and attention to detail.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold mb-3">
            Preferred Qualifications and Skills
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-justify">
            <li>
              Experience designing for health-related products (software and/or
              hardware).
            </li>
            <li>Experience designing for wearable devices.</li>
            <li>Experience with prototyping.</li>
            <li>
              Self-motivated and able to prioritize and manage workload and meet
              critical project milestones and deadlines.
            </li>
            <li>
              Excellent interpersonal, communication, negotiation, and
              collaboration skills.
            </li>
          </ul>
        </section>

        <div className="mt-8 border-t pt-6">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src={t4}
                className="w-12 h-12 bg-blue-100 rounded-lg mr-4"
                alt=""
                srcset=""
              />
              <div>
                <h3 className="font-medium">Grameenphone Ltd.</h3>
                <p className="text-sm text-gray-600">
                  Telecommunications · 6,525 employees · Actively Hiring
                </p>
              </div>
            </div>
            <button className="text-blue-500">View Page</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const ApplicationsList = () => {
  const applications = [
    {
      id: 1,
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      status: "Applied",
      date: "23 May 20",
      logoColor: "bg-blue-400",
      statusColor: "text-green-500",
      statusIcon: "✓",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      status: "Short Listed",
      date: "23 May 20",
      logoColor: "bg-orange-400",
      statusColor: "text-blue-500",
      statusIcon: "✓",
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      status: "Hired",
      logoColor: "bg-blue-500",
      statusColor: "text-blue-600",
      statusIcon: "👑",
    },
    {
      id: 4,
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      status: "Interview",
      logoColor: "bg-pink-500",
      statusColor: "text-purple-500",
      statusIcon: "👤",
    },
    {
      id: 5,
      title: "Product Designer",
      company: "Grameenphone",
      location: "Dhaka, Bangladesh",
      status: "Rejected",
      logoColor: "bg-blue-400",
      statusColor: "text-red-500",
      statusIcon: "✕",
    },
  ];

  return (
    <div className="space-y-4">
      {applications.map((app) => (
        <div
          key={app.id}
          className="flex items-center p-2 rounded-lg bg-purple-50"
        >
          <div
            className={`w-12 h-12 rounded-full ${app.logoColor} mr-4 flex-shrink-0`}
          ></div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold truncate">{app.title}</h3>
            <p className="text-sm text-gray-600 truncate">
              {app.company} · {app.location}
            </p>
            <div className="mt-1">
              <span
                className={`text-xs px-2 py-1 rounded-full inline-flex items-center ${app.statusColor}`}
              >
                {app.status} {app.statusIcon}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const DashboardSidebar = ({ profile, isOpen, onClose }) => (
  <div
    className={cn(
      "fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-white transition-transform duration-300 ease-in-out lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}
  >
    <div className="p-6">
      <div className="flex items-center mb-4 ">
        <Link to="/">
          <img
            src={image || "/placeholder.svg"}
            alt="JobJod"
            className="text-center items-center mx-10"
          />
        </Link>
      </div>

      {/* Profile Section */}
      <div className="mb-8 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-300 mx-auto mb-2 overflow-hidden">
          <img
            src={image2 || "/placeholder.svg"}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-black font-bold ">Hello, Anamoul</p>
      </div>
    </div>

    <div className="flex flex-1 flex-col gap-4 p-6">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/Jobseeker"
              className="flex items-center p-3  text-gray-700 rounded-lg hover:bg-gray-100 "
            >
              <RxDashboard />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/Job"
              className="flex items-center p-3 text-white rounded-lg bg-black "
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-3">Jobs</span>
            </Link>
          </li>
          <li>
            <Link
              to="/Profile"
              className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="ml-3">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="##"
              className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

const Job = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const tabs = [
    "All Jobs",
    "Applied",
    "Short Listed",
    "Interview",
    "Hired",
    "Rejected",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const tabsContainerRef = useRef(null);
  const activeTabRef = useRef(null);

  // Scroll active tab into view when it changes
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const activeTabElement = activeTabRef.current;

      // Calculate position to center the active tab
      const scrollLeft =
        activeTabElement.offsetLeft -
        container.clientWidth / 2 +
        activeTabElement.clientWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  // Scroll tabs left/right
  const scroll = (direction) => {
    if (tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const scrollAmount = container.clientWidth / 2;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Mobile Menu Button */}

      {/* Sidebar */}
      <div
        className={` shadow-2xl fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center mb-4">
            <img src={logo2} alt="JobJod" className="text-center m-auto" />
          </div>

          {/* Profile Section */}
          <div className="mb-8 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-300 mx-auto mb-2 overflow-hidden">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-black font-bold ">Hello, Anamoul</p>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/Jobseeker"
                  className="flex items-center p-3  text-gray-700 rounded-lg hover:bg-gray-100 "
                >
                  <RxDashboard />
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Job"
                  className="flex items-center p-3 text-white rounded-lg bg-black "
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="ml-3">Jobs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Profile"
                  className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="ml-3">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to="##"
                  className="flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex-1 ml-0 md:ml-64">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <DashboardSidebar
          profile={profileData}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

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
                {showMobileSearch ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
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

                <NotificationPanel
                  isOpen={isNotificationsOpen}
                  onClose={() => setIsNotificationsOpen(false)}
                />
              </div>

              <Link
                to="/Message"
                className="relative rounded-full p-2 hover:bg-gray-100"
              >
                <Mail className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-500" />
              </Link>

              <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-primary md:h-10 md:w-10">
                <img
                  src={image2 || "/placeholder.svg"}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
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
        <div className="max-w-6xl w-full mx-auto mt-6 bg-white">
          <div className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="overflow-x-auto pb-2 sm:pb-0">
              <div className="relative w-full max-w-full">
                {/* Scroll buttons for mobile */}
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-sm md:hidden"
                  aria-label="Scroll tabs left"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-600" />
                </button>

                <div
                  className="flex items-center bg-gray-100 rounded-full p-1 w-full overflow-x-auto scrollbar-hide"
                  ref={tabsContainerRef}
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  <div className="flex items-center px-6 md:px-0">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        ref={activeTab === tab ? activeTabRef : null}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                          activeTab === tab
                            ? "bg-white text-purple-500 shadow-sm"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 shadow-sm md:hidden"
                  aria-label="Scroll tabs right"
                >
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </button>

                {/* CSS to hide scrollbar */}
                <style jsx global>{`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
              </div>
            </div>
            <button className="px-6 py-2 mt-2 sm:mt-0 rounded-full border border-gray-200 text-purple-500 hover:bg-gray-50 w-full sm:w-auto">
              Save
            </button>
          </div>
          <div className="flex flex-col lg:flex-row md:float-col">
            {/* Left Sidebar - Applications List */}
            <div className="w-full lg:w-[30%]  p-4">
              <ApplicationsList />
            </div>
            {/* Main Content - Job Details */}
            <div className="w-full lg:w-[70%] p-4">
              <JobDetails />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Job;
