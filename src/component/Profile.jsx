import React, { useState } from 'react';
import profile from '../image/profile.jpg';
import logo2 from '../image/logo2.png';
import ProfileContent from './ProfileContent';
import profilebg from '../image/g.png';
import NotificationPanel from './NotificationPanel';
import { FaBell } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { ProfileHeader } from "../component/ProfileHeader"
import { ProfileSidebar } from "../component/ProfileSidebar"
import { ProfileInfo } from "../component/ProfileInfo"
import { Link } from 'react-router-dom';
import { Bell, Mail, Search } from 'lucide-react';

const profileData = {
    name: "Anamoul Rouf",
    role: "Product Designer",
    email: "anamoulrouf.bd@gmail.com",
    gender: "Male",
    phone: "+919988776655",
    location: "New York, USA",
    website: "www.jobjod.com",
    avatarUrl: "/placeholder.svg?height=96&width=96",
}

const Profile = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const [showNotifications, setShowNotifications] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };
    const experiences = [
        {
            company: "ShortFin",
            role: "Sr. Product Designer",
            location: "Dhaka, Bangladesh",
            period: "January 2022 to Present",
            description:
                "ShortFin is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 12M+ & 6.5m+ billon users...",
        },
        {
            company: "Grameenphone",
            role: "Product Designer",
            location: "Dhaka, Bangladesh",
            period: "January 2022 to Present",
            description:
                "ShortFin is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps...",
        },
    ]

    const education = [
        {
            school: "California Institute of the Arts",
            course: "UX Design Fundamentals · UX Design",
            grade: "A+",
            period: "2020 - 2021",
            description:
                "This hands-on course examines how content is organized and structured to create an experience for a user, and what role the designer plays in creating and shaping user experience. You will be led through a...",
        },
        {
            school: "University of Pennsylvania",
            course: "Gamification · Game and Interactive Media Design",
            grade: "A+",
            period: "2019 - 2020",
            description:
                "Gamification is the application of game elements and digital game design techniques to non-game problems, such as business and social impact challenges. This course will teach you the mechanisms of gamification...",
        },
    ]

    const skills = [
        { name: "UX Design", level: "Expert" },
        { name: "UI Design", level: "Expert" },
        { name: "User Research", level: "Expert" },
        { name: "Design System", level: "Expert" },
    ]

    const attachments = [
        { name: "Resume-AnamoulRouf.pdf", size: "1.2 MB" },
        { name: "CaseStudy-01.pdf", size: "1.7 MB" },
    ];

    return (
        <>
            <div className="">
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
                                    <a href="/Job" className="flex items-center p-3  text-gray-700 rounded-lg hover:bg-gray-100 ">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="ml-3">Jobs</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/Profile" className="flex items-center p-3 text-white  rounded-lg  bg-black">
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
                <div className=" ml-0 md:ml-64 p-8">
                    <div className="mx-auto max-w-7xl pt-4">
                        {/* Mobile View */}

                        <div className="lg:hidden md:hidden p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    {/* <button onClick={toggleSidebar}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button> */}
                                    <span className="font-bold text-xl">JobJod</span>
                                </div>
                                <button className="relative p-2 hover:bg-accent rounded-full z-50">
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
                        {/* Desktop View */}
                        <div className="hidden md:flex items-center justify-between">
                            <div className="flex items-center gap-8">
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
                                    <button className="relative p-2 hover:bg-gray-100 rounded-full z-50">
                                        <div className="relative">
                                            <Bell
                                                className="text-xl text-black cursor-pointer"
                                                onClick={() => setShowNotifications(!showNotifications)}
                                            />
                                            <span className="absolute top-0 right-0 bg-purple-500 w-2 h-2 rounded-full"></span>
                                            {showNotifications && (
                                                <div
                                                    className="absolute right-0 mt-2 bg-white shadow-md border border-gray-200 rounded-2xl z-50"
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
                </div>
                <div className="flex  w-full  bg-gray-50">
                    <div className="flex-1 w-full p-2 md:ml-64">
                        {/* Header Illustration */}
                        <div className="relative bg-white overflow-hidden">

                        <img src={profilebg} alt="Profile Background" className='h-24 sm:h-32 md:h-56 lg:w-[80%]  md:w-[80%] w-100 mx-auto' />

                        </div>

                        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                            <div className="relative">
                                <ProfileHeader name={profileData.name} role={profileData.role} avatarUrl={profileData.avatarUrl} />

                                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
                                    <ProfileSidebar name={profileData.name} role={profileData.role} avatarUrl={profileData.avatarUrl} />
                                    <ProfileInfo profile={profileData} onEdit={() => console.log("Edit profile")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="md:ml-64 p-4">
                    <ProfileContent experiences={experiences} education={education} skills={skills} attachments={attachments} />
                </div>

            </div>

        </>
    );
};

export default Profile;
