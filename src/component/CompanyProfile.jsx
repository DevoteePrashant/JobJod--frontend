import React, { useState } from "react";
import dashboard from "../image/dashboard.png";
import { RxDashboard } from "react-icons/rx";
import { PiBagSimpleFill } from "react-icons/pi";
import { PiMonitorFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaTrophy } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import img2 from "../image/education.png";
import logo2 from "../image/logo2.png";
import Dheader from "./Dheader";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Trash2, Eye } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import img from "../image/dashboard.png";
import img3 from "../image/education.png";
import { BsLink45Deg } from "react-icons/bs";
import DashSidebar from "./DashSidebar";

function CompanyProfile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation()
  const substrLocation=location.pathname.substring(1);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const NavItem = ({ icon, text, active = false }) => (
    <li
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
        active ? "bg-purple-50 text-purple-600" : "hover:bg-gray-50"
      }`}
    >
      {React.cloneElement(icon, {
        className: `w-5 h-5 ${active ? "text-purple-600" : "text-gray-500"}`,
      })}
      <span className={active ? "font-medium" : ""}>{text}</span>
    </li>
  );
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
    uploadFileToServer(e.target.files[0]);
  };

  const uploadFileToServer = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  const InfoItem = ({ label, value }) => (
    <div className="break-words">
      <label className="block text-sm text-gray-500 mb-1">{label}</label>
      <p className="font-medium text-base md:text-lg">{value}</p>
    </div>
  );
  const industryData = {
    title: "Company Industry",
    industries: ["Information Technology", "Digital Marketing"],
  };

  const UserIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const BriefcaseIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
    </svg>
  );

  const AwardIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
      <circle cx="12" cy="8" r="6"></circle>
    </svg>
  );

  const CrownIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
      <path d="M5 21h14"></path>
    </svg>
  );

  const FileTextIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
      <path d="M10 9H8"></path>
      <path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
    </svg>
  );
  const sections = [
    {
      title: "Overview",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    },
    {
      title: "Vision",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    },
    {
      title: "Mission",
      content:
        "ShareTrip is the country's first and pioneer online travel aggregator (OTA). My goal was to craft a functional and delightful experience through web and mobile apps currently consisting of 1.2M+ & future billion users...",
    },
  ];
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu Button */}
     <DashSidebar substrLocation={substrLocation}/>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <Dheader/>
        {/* Main Content */}
        <div className="min-h-[24rem] sm:min-h-[32rem] md:min-h-[56rem] lg:w-[80%]  md:w-[80%] w-full mx-auto">
          <div className="relative bg-white overflow-hidden">
            <img
              alt="Profile Background"
              className="w-full h-auto object-cover object-center min-h-[12rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] xl:min-h-[28rem] max-w-screen-lg mx-auto"
              src="/static/media/g.af47b1fe0a2396978832.png"
            />
          </div>
          <div className="relative">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="relative order-1 sm:order-none">
                  <img
                    alt="AnamoulRouf'sprofilepicture"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg object-cover"
                    src={img}
                  />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                </div>

                <div className="text-center sm:text-left mt-auto mb-auto">
                  <h1 className="text-2xl font-semibold">Nihar Gami</h1>
                  <p className="text-gray-600">Godhani Technology</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2"></div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 sticky">
              <div className="w-full lg:w-[280px] lg:flex-shrink-0 ">
                <div className="bg-white rounded-2xl shadow-sm border p-4">
                  <nav >
                    <ul className="space-y-2 font-semibold">
                      <NavItem
                        icon={<PiBagSimpleFill />}
                        text="Information"
                        active
                      />
                      <NavItem icon={<FaTrophy />} text="Recognition" />
                      <NavItem icon={<FaCrown />} text="Culture" />
                      <NavItem
                        icon={<IoDocumentTextOutline />}
                        text="Legal Information"
                      />
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="flex-1 rounded-lg max-w-screen-lg mx-auto w-full sm:w-[70px] sticky top-20">
                <div className="flex justify-between items-start mb-6 p-1">
                  <div className="mx-5">
                    <h1 className="text-2xl font-semibold">
                      Basic Information
                    </h1>
                    <p className="text-gray-500">Update profile information</p>
                  </div>
                  <button className="px-6 py-2 font-semibold text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-100 rounded-xl">
                    Edit
                  </button>
                </div>
                <div className="p-4 md:p-6 w-full max-w-screen-xl mx-auto overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <InfoItem
                      label="Email Address"
                      value="nihargami@gmail.com"
                    />
                    <InfoItem label="Phone Number" value="+919876543210" />
                    <InfoItem label="Location" value="New York, USA" />
                    <InfoItem label="Year Established" value="22/02/2025" />
                    <InfoItem
                      label="Website"
                      value="www.godhanitechnology.com"
                    />
                    <InfoItem label="Pincode" value="123456" />
                    <InfoItem
                      label="Interview Person"
                      value="John Smith,John Doe"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Overview,mission,vision code  */}
            <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80 justify-center">
              <div className="mb-8 ">
                <div className="flex flex-row justify-between items-center mb-4 ">
                  <h2 className="text-2xl font-medium text-gray-900 ">
                    {industryData.title}
                  </h2>
                  <div className="flex gap-4">
                    <button className="text-base text-gray-500 hover:text-gray-700 font-semibold">
                      Delete
                    </button>
                    <button className="text-base text-purple-500 hover:text-purple-700 font-semibold">
                      Edit
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {industryData.industries.map((industry, index) => (
                    <div
                      key={index}
                      className="bg-purple-100 px-4 py-2 rounded-md text-gray-800"
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80 justify-center">
              {sections.map((section, index) => (
                <div key={section.title} className="mb-4 sm:mb-6 md:mb-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2 sm:mb-0">
                      {section.title}
                    </h2>
                    <div className="flex gap-4 mt-2 sm:mt-0">
                      <button className="text-sm sm:text-base text-gray-500 hover:text-gray-700 font-semibold">
                        Delete
                      </button>
                      <button className="text-sm sm:text-base text-purple-500 hover:text-purple-700 font-semibold">
                        Edit
                      </button>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-2 text-justify">
                    {section.content}
                  </p>
                  <button className="text-sm sm:text-base text-purple-500 hover:text-purple-700">
                    See More
                  </button>
                  {index < sections.length - 1 && (
                    <div className="border-b border-gray-200 mt-6 sm:mt-8"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Recognition Section */}
            <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80 ">
              <div className="flex items-center justify-between mb-8 ">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <img
                      src={img2}
                      alt="Recognition icon"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Recognition</h2>
                    <p className="text-gray-600 text-sm ">
                      Add recognition to provide more information
                    </p>
                  </div>
                </div>
                <button className="px-6 py-2 font-semibold text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-100 rounded-xl">
                  Add
                </button>
              </div>
              {/* Education Entries */}
              <div className="space-y-6">
                {/* California Institute of the Arts */}
                <div className="border-b pb-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500 text-white p-2 rounded-md w-16 h-16 flex items-center justify-center text-center text-xs leading-tight">
                      <span>
                        cal
                        <br />
                        ARTS
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold">
                            California Institute of the Arts
                          </h3>
                          <div className="flex flex-wrap gap-x-4 text-sm mt-1">
                            <span>UX Design Fundamentals</span>
                            <span>UX Design</span>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            <span>Grade: A+</span>
                            <span className="mx-2">•</span>
                            <span>2020 - 2021</span>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <button className="text-gray-500 hover:text-gray-700 font-semibold ">
                            Delete
                          </button>
                          <button className="text-purple-500 hover:text-purple-700 font-semibold">
                            Edit
                          </button>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-700 text-justify">
                        This hands-on course examines how content is organized
                        and structured to create an experience for a user, and
                        what role the designer plays in creating and shaping
                        user experience. You will be led through a condensed...{" "}
                        <span className="text-purple-500 cursor-pointer">
                          See More
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* University of Pennsylvania */}
                <div className="border-b pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <div className="bg-navy-800 text-white p-1 rounded-md w-14 h-14 flex items-center justify-center">
                        <img
                          src={img3}
                          alt="UPenn logo"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold">
                            University of Pennsylvania
                          </h3>
                          <div className="flex flex-wrap gap-x-4 text-sm mt-1">
                            <span>Gamification</span>
                            <span>Game and Interactive Media Design</span>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            <span>Grade: A+</span>
                            <span className="mx-2">•</span>
                            <span>2019 - 2020</span>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <button className="text-gray-500 hover:text-gray-700 font-semibold">
                            Delete
                          </button>
                          <button className="text-purple-500 hover:text-purple-700 font-semibold ">
                            Edit
                          </button>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-700 text-justify">
                        Gamification is the application of game elements and
                        digital game design techniques to non-game problems,
                        such as business and social impact challenges. This
                        course will teach you the mechanisms of gamification...
                        <span className="text-purple-500 cursor-pointer">
                          See More
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Show More Button */}
                <div className="text-left mt-6">
                  <button className="text-purple-500 hover:text-purple-700">
                    Show 2 More Education
                  </button>
                </div>
              </div>
            </div>

            {/* Culture section */}
            <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80 ">
              <div className="flex justify-between items-center mb-8 mt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-md flex items-center justify-center relative">
                    <div className="absolute top-0 left-0 w-full h-2 bg-orange-400 rounded-t-md"></div>
                    <div className="text-yellow-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">Culture</h1>
                    <p className="text-gray-600">
                      Add company culture information
                    </p>
                  </div>
                </div>
                {/* <button className="px-6 py-2 font-semibold text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-100 rounded-xl">
                  Add
                </button> */}
              </div>

              {/* Company Environment Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Company Environment</h2>
                  <div className="flex gap-4">
                    <button className="text-gray-500 hover:text-gray-600 font-semibold">
                      Delete
                    </button>
                    <button className="text-purple-500 hover:text-purple-700 font-semibold">
                      Edit
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-2 text-justify">
                  ShareTrip is the country's first and pioneer online travel
                  aggregator (OTA). My goal was to craft a functional and
                  delightful experience through web and mobile apps currently
                  consisting of 1.2M+ & future billion users...
                </p>
                <button className="text-purple-500 hover:text-purple-700">
                  See More
                </button>
                <div className="border-b border-gray-200 mt-6"></div>
              </div>
              {/* Employee Benefits Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Employee Benefits</h2>
                  <div className="flex gap-4">
                    <button className="text-gray-500 hover:text-gray-700 font-semibold">
                      Delete
                    </button>
                    <button className="text-purple-500 hover:text-purple-700 font-semibold">
                      Edit
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-2 text-justify">
                  ShareTrip is the country's first and pioneer online travel
                  aggregator (OTA). My goal was to craft a functional and
                  delightful experience through web and mobile apps currently
                  consisting of 1.2M+ & future billion users...
                </p>
                <button className="text-purple-500 hover:text-purple-700">
                  See More
                </button>
                <div className="border-b border-gray-200 mt-6"></div>
              </div>
              {/* Career Development Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Career Development</h2>
                  <div className="flex gap-4">
                    <button className="text-gray-500 hover:text-gray-700 font-semibold">
                      Delete
                    </button>
                    <button className="text-purple-500 hover:text-purple-700 font-semibold">
                      Edit
                    </button>
                  </div>
                </div>
                <p className="text-gray-700 mb-2 text-justify">
                  ShareTrip is the country's first and pioneer online travel
                  aggregator (OTA). My goal was to craft a functional and
                  delightful experience through web and mobile apps currently
                  consisting of 1.2M+ & future billion users...
                </p>
                <button className="text-purple-500 hover:text-purple-700">
                  See More
                </button>
                <div className="border-b border-gray-200 mt-6"></div>
              </div>
            </div>
            {/* Legal information */}
            <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                  Legal Information
                </h1>
                {/* <button className="px-2 py-2 font-semibold text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-100 rounded-xl">
                  Add File
                </button> */}
              </div>

              <div className="space-y-4">
                {/* Company GST Certificate */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-emerald-400 rounded-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M7 18h10v-2H7v2zM7 14h10v-2H7v2zM7 10h10V8H7v2zM7 6h7V4H7v2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-medium text-gray-900">
                        Company GST Certificate
                      </h2>
                      <p className="text-sm text-gray-500">Not Uploaded</p>
                    </div>
                    <div className="flex space-x-4">
                      {/* <button className="px-2 py-2 font-semibold text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-100 rounded-xl">Upload</button> */}
                      <button
                        className="px-6 py-2 font-semibold text-purple-600 bg-white border-2 border-purple-600 hover:bg-purple-100 rounded-xl"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      >
                        Upload
                      </button>
                      <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e)}
                      />
                    </div>
                  </div>
                </div>
                {/* Registration Information */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-emerald-400 rounded-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M7 18h10v-2H7v2zM7 14h10v-2H7v2zM7 10h10V8H7v2zM7 6h7V4H7v2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-medium text-gray-900">
                        Company PAN Card
                      </h2>
                      <p className="text-sm text-gray-500">PDF 1.21 MB</p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <FaEdit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Legal Info 1 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-emerald-400 rounded-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M7 18h10v-2H7v2zM7 14h10v-2H7v2zM7 10h10V8H7v2zM7 6h7V4H7v2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-medium text-gray-900">
                        FSSAI Licence
                      </h2>
                      <p className="text-sm text-gray-500">PDF 1.21 MB</p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <FaEdit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Legal Info2 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-emerald-400 rounded-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M7 18h10v-2H7v2zM7 14h10v-2H7v2zM7 10h10V8H7v2zM7 6h7V4H7v2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-medium text-gray-900">
                        FSSAI Licance
                      </h2>
                      <p className="text-sm text-gray-500">PDF 1.21 MB</p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <FaEdit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Legal Info3 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-emerald-400 rounded-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M7 18h10v-2H7v2zM7 14h10v-2H7v2zM7 10h10V8H7v2zM7 6h7V4H7v2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-medium text-gray-900">
                        Company Incorporation Certificate
                      </h2>
                      <p className="text-sm text-gray-500">PDF 1.21 MB</p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <FaEdit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Legal Info4 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-emerald-400 rounded-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M7 18h10v-2H7v2zM7 14h10v-2H7v2zM7 10h10V8H7v2zM7 6h7V4H7v2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-medium text-gray-900">
                        Shop & Establishment Certificate
                      </h2>
                      <p className="text-sm text-gray-500">PDF 1.21 MB</p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <FaEdit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Legal Info5 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-emerald-400 rounded-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M7 18h10v-2H7v2zM7 14h10v-2H7v2zM7 10h10V8H7v2zM7 6h7V4H7v2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-medium text-gray-900">
                        MSME or Udhyam
                      </h2>
                      <p className="text-sm text-gray-500">PDF 1.21 MB</p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <FaEdit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {/*  Legal Info6 */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-emerald-400 rounded-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M7 18h10v-2H7v2zM7 14h10v-2H7v2zM7 10h10V8H7v2zM7 6h7V4H7v2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-medium text-gray-900">
                        ID Card
                      </h2>
                      <p className="text-sm text-gray-500">PDF 1.21 MB</p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <FaEdit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Other */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-emerald-400 rounded-sm flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-4 h-4"
                        >
                          <path d="M7 18h10v-2H7v2zM7 14h10v-2H7v2zM7 10h10V8H7v2zM7 6h7V4H7v2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-base font-medium text-gray-900">
                        Other
                      </h2>
                      <p className="text-sm text-gray-500">PDF 1.21 MB</p>
                    </div>
                    <div className="flex space-x-4">
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center rounded-full text-purple-500 hover:bg-purple-100">
                        <FaEdit className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
