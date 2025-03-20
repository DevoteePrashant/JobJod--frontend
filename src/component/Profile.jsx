import React, { useState } from "react";
import profile from "../image/profile.jpg";
import logo2 from "../image/logo2.png";
import ProfileContent from "./ProfileContent";
import profilebg from "../image/g.png";
import NotificationPanel from "./NotificationPanel";
import { FaBell } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { ProfileHeader } from "../component/ProfileHeader";
import { ProfileSidebar } from "../component/ProfileSidebar";
import { ProfileInfo } from "../component/ProfileInfo";
import { Link } from "react-router-dom";
import { Bell, Mail, Menu, Search, X } from "lucide-react";
import image2 from "../image/profile.jpg";
import image from "../image/logo2.png"
import Jobseekerheader from "./Jobseekerheader";

const profileData = {
  name: "Anamoul Rouf",
  role: "Product Designer",
  email: "anamoulrouf.bd@gmail.com",
  gender: "Male",
  phone: "+919988776655",
  location: "New York, USA",
  website: "www.jobjod.com",
  avatarUrl: "/placeholder.svg?height=96&width=96",
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Information")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

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
  ];

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
  ];

  const skills = [
    { name: "UX Design", level: "Expert" },
    { name: "UI Design", level: "Expert" },
    { name: "User Research", level: "Expert" },
    { name: "Design System", level: "Expert" },
  ];

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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> */}
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <Jobseekerheader isSidebarVisible={isSidebarVisible}/>

        <div className="flex  w-full  ">
          <div className="flex-1 w-full p-3 lg:ml-64">
            {/* Header Illustration */}
            <div className="relative bg-white overflow-hidden">
              <img
                src={profilebg}
                alt="Profile Background"
                className="h-24 sm:h-32 md:h-56 lg:w-[80%]  md:w-[80%] w-100 mx-auto"
              />
            </div>



            <div className="min-h-screen  p-0 md:p-8">
              <div className="max-w-7xl mx-auto">
                <ProfileHeader name={profile.name} role={profile.role} avatarUrl="/placeholder.svg?height=96&width=96" />

                <div className="flex flex-col lg:flex-row gap-6">
                  <ProfileSidebar name={profile.name} role={profile.role} avatarUrl="/placeholder.svg?height=96&width=96" />

                  <div className="flex-1">
                    {activeTab === "Information" && (
                      <ProfileInfo profile={profile} onEdit={() => console.log("Edit clicked")} />
                    )}
                    {activeTab === "Experiences" && (
                      <ProfileContent experiences={experiences} education={[]} skills={[]} attachments={[]} />
                    )}
                    {activeTab === "Education" && (
                      <ProfileContent experiences={[]} education={education} skills={[]} attachments={[]} />
                    )}
                    {activeTab === "Skills" && (
                      <ProfileContent experiences={[]} education={[]} skills={skills} attachments={[]} />
                    )}
                    {activeTab === "Attachments" && (
                      <ProfileContent experiences={[]} education={[]} skills={[]} attachments={attachments} />
                    )}
                  </div>

                </div>
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-5  ">
                  <ProfileContent
                    experiences={experiences}
                    education={education}
                    skills={skills}
                    attachments={attachments}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
