import { useState } from "react";
import { FaBell, FaEnvelope } from "react-icons/fa";
import NotificationPanel from "./NotificationPanel";
import profile from "../image/profile.jpg"
import logo from "../image/logo2.png"
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="w-[93%] mx-auto flex justify-between items-center p-4 relative">
      {/* Left Section: Logo and Navigation */}
      <div className="flex items-center space-x-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className=" p-2 ">
          
          </div>
          <Link to="/"><img src={logo} alt="JobJod" /></Link>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-6 text-black font-medium">
          <Link to="/JobListingPage"  className="hover:text-gray-600">
                Find Jobs
              </Link>
          <a href="##" className="hover:text-gray-600">
            Browse Company
          </a>
        </div>
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaBell
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
        <div className="relative">
          <Link to="/Message"><FaEnvelope className="text-xl text-black" /></Link>
          <span className="absolute top-0 right-0 bg-purple-500 w-2 h-2 rounded-full"></span>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
          <img
            src={profile}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
