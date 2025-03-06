"use client"

import { useState, useEffect } from "react"
import { FaBell, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"
import NotificationPanel from "./NotificationPanel"
import profile from "../image/profile.jpg"
import logo from "../image/logo2.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Close notifications when mobile menu is opened
  useEffect(() => {
    if (mobileMenuOpen) {
      setShowNotifications(false)
    }
  }, [mobileMenuOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest("nav")) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <nav className="w-[93%] mx-auto p-4 relative">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo || "/placeholder.svg"} alt="JobJod" className="h-8 md:h-10" />
          </Link>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className={`hidden md:flex items-center space-x-6 text-black font-medium`}>
          <Link to="/JobListingPage" className="hover:text-gray-600">
            Find Jobs
          </Link>
          <a href="##" className="hover:text-gray-600">
            Browse Company
          </a>
        </div>

        {/* Icons and Profile - Modified for responsive */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu toggle - Only visible on mobile */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>

          {/* Notifications - Visible on all screens */}
          <div className="relative">
            <FaBell
              className="text-xl text-black cursor-pointer"
              onClick={() => setShowNotifications(!showNotifications)}
            />
            <span className="absolute top-0 right-0 bg-purple-500 w-2 h-2 rounded-full"></span>
            {showNotifications && (
              <div
                className="absolute right-0 mt-2 bg-white shadow-md border border-gray-200 rounded-2xl z-50"
                style={{ width: windowWidth < 768 ? "300px" : "550px" }}
              >
                <NotificationPanel />
              </div>
            )}
          </div>

          {/* Messages - Hidden on smallest screens, visible on medium+ */}
          <div className="relative hidden sm:block">
            <Link to="/Message">
              <FaEnvelope className="text-xl text-black" />
            </Link>
            <span className="absolute top-0 right-0 bg-purple-500 w-2 h-2 rounded-full"></span>
          </div>

          {/* Profile - Hidden on smallest screens, visible on medium+ */}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300 hidden sm:block">
            <img src={profile || "/placeholder.svg"} alt="User Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only visible when toggled */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute left-0 right-0 top-16 z-40 shadow-md py-4 px-6 rounded-b-lg">
          <div className="flex flex-col space-y-4">
            <Link
              to="/JobListingPage"
              className="text-black font-medium hover:text-gray-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Jobs
            </Link>
            <a
              href="##"
              className="text-black font-medium hover:text-gray-600 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Company
            </a>
            <Link
              to="/Message"
              className="text-black font-medium hover:text-gray-600 py-2 flex items-center sm:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaEnvelope className="mr-2" />
              Messages
            </Link>
            <div className="flex items-center space-x-3 py-2 sm:hidden">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                <img src={profile || "/placeholder.svg"} alt="User Profile" className="w-full h-full object-cover" />
              </div>
              <span className="text-black font-medium">Profile</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

