import React, { useState } from 'react';
import profile from '../image/profile.jpg';
import logo2 from '../image/logo2.png';
import { RxDashboard } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { Bell, Mail, Search } from 'lucide-react';
import NotificationPanel from './NotificationPanel';
import { Link } from 'react-router-dom';

const JobDetails = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const [showNotifications, setShowNotifications] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="p-6 border-l-2">
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Product Designer</h1>
                <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-2">✈️</span>
                    <span className="mr-2">Grameenphone</span>
                    <span className="mr-2">Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">Posted on 15 May 20</span>
                    <span>Expire on 30 May 20</span>
                </div>
            </div>

            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
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
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
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
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
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
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
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
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg mr-4"></div>
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
                    <div className={`w-12 h-12 rounded-full ${app.logoColor} mr-4`}></div>
                    <div className="flex-1">
                        <h3 className="font-semibold">{app.title}</h3>
                        <p className="text-sm text-gray-600">
                            {app.company} · {app.location}
                        </p>
                        <div className="mt-1">
                            <span
                                className={`text-xs px-2 py-1 rounded-full ${app.statusColor}`}
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

const Job = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false); // Define showNotifications here


    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        
        <div className="min-h-screen">
            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button onClick={toggleSidebar} className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <div className={` shadow-2xl fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-40`}>
                <div className="p-6">
                    {/* Logo */}
                    <div className="flex items-center mb-4">

                          <img src={logo2} alt="JobJod" className='text-center m-auto' />

                    </div>

                    {/* Profile Section */}
                    <div className="mb-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-gray-300 mx-auto mb-2 overflow-hidden">
                            <img src={profile} alt="profile" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-sm text-black font-bold ">Hello, Anamoul</p>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="space-y-2">
                            <li>
                                <a href="/Jobseeker" className="flex items-center p-3  text-gray-700 rounded-lg hover:bg-gray-100 ">
                                    <RxDashboard /><span className="ml-3">
                                        Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/Job" className="flex items-center p-3 text-white rounded-lg bg-black ">
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
            <div className="flex-1 ml-0 md:ml-64 p-8">
                <div className="mx-auto max-w-7xl p-4">
                    {/* Mobile View */}
                    <div className="lg:hidden p-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                {/* <button onClick={toggleSidebar}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button> */}
                                <span className="font-bold text-xl">JobJod</span>
                            </div>
                            <button className="relative p-2 hover:bg-accent rounded-full">
                                    <FaBell
                                        className="text-xl text-black cursor-pointer"
                                        onClick={() => setShowNotifications(!showNotifications)}
                                    />
                                    <span className="absolute top-0 right-0 bg-purple-500 w-2 h-2 rounded-full"></span>
                                    {showNotifications && (
                                        <div
                                            className="absolute right-0 mt-2 bg-white shadow-md border border-gray-200 rounded-2xl z-50"
                                            style={{ width: "300px", maxWidth: "calc(100vw - 2rem)" }}
                                        >
                                            <NotificationPanel />
                                        </div>
                                    )}
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
                                </button>
                                 <Link to='/Message'>
                                                <button className="relative p-2 hover:bg-gray-100 rounded-full">
                                                    <Mail className="w-6 h-6" />
                                                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
                                                </button>
                                            </Link>
                        </div>

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
                    </div>

                    {/* Desktop View */}
                    <div className="hidden lg:flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            {/* <Link href="/" className="flex items-center gap-2">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EqyNOEjE3dPaguSVaWuf4bDpfjBvJX.png"
                                    alt="JobJod Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <span className="font-bold text-xl">JobJod</span>
                            </Link> */}

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
                        </div>
                        <div className="flex items-center gap-4">
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
                                <Link to="/Message">
                                <button className="relative p-2 hover:bg-accent rounded-full">
                                    <Mail className="w-6 h-6" />
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
                                </button>
                                </Link>
                            </div>

                            <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wmjIBaEyv5HctOPJiIGM8qMW3X03i2.png"
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl w-full mx-auto mt-6 bg-white">
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
                <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30" onClick={toggleSidebar}></div>
            )}

        </div>


    );
};

export default Job;
