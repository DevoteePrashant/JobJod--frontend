import { useState, useEffect, useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import NotificationPanel from "./NotificationPanel"
import logo from "../image/logo2.png"

import { Link } from "react-router-dom"
import { Bell, Mail, MessageSquare, Search, X } from "lucide-react"
import { FaEnvelope } from "react-icons/fa6"
import image2 from "../image/profile.jpg";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const notificationRef = useRef(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
const [showNotifications, setShowNotifications] = useState(false)

  const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
  };
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      setIsNotificationsOpen(false)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        mobileMenuOpen &&
        event.target instanceof Node &&
        !event.target.closest("nav")
      ) {
        setMobileMenuOpen(false)
      }

      if (
        isNotificationsOpen &&
        notificationRef.current &&
        event.target instanceof Node &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen, isNotificationsOpen])

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen)
  }

  const handleImageError = (event) => {
    event.target.src = "/placeholder.svg"; // Fallback image
  }

  return (
    <nav className="w-[93%] mx-auto p-4 relative">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="JobJod" className="h-8 md:h-10" onError={handleImageError} />
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
         {/* Mobile search toggle */}
         <div className="flex flex-1 justify-end md:hidden">
                             <button
                               onClick={() => setShowMobileSearch(!showMobileSearch)}
                               className="rounded-full p-2 hover:bg-gray-100"
                               aria-label={showMobileSearch ? "Close search" : "Open search"}
                             >
                               {showMobileSearch ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
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
               
                               <NotificationPanel isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
                             </div>
               
                             <a href="/Message" className="relative rounded-full p-2 hover:bg-gray-100">
                               <Mail className="h-5 w-5" />
                               <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-blue-500" />
                             </a>
               
                             <div className="h-8 w-8 overflow-hidden rounded-full border-2 border-primary md:h-10 md:w-10">
                               <img src={image2 || "/placeholder.svg"} alt="Profile" className="h-full w-full object-cover" />
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
                {/* <img src={profile} alt="User Profile" className="w-full h-full object-cover" onError={handleImageError} /> */}
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
