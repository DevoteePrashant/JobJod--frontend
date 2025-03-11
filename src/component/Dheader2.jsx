import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBell, faEnvelope, faBars, faXmark, faUser } from "@fortawesome/free-solid-svg-icons"
import profile from "../image/dashboard.png"
// Remove the direct import of the image that's causing the error
// import profile from '../image/dashboard.png';

const Dheader = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  // Use a placeholder or default avatar when the image isn't available
  const profileImageUrl = "/placeholder.svg?height=40&width=40"

  return (
    <header className="bg-white border-b-2 py-2 px-3 sm:px-4 flex flex-wrap items-center justify-between">
      {/* Mobile Menu Toggle */}
      <div className="block lg:hidden">
        <button className="p-2 text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
      </div>

      {/* Search Bar - Desktop */}
      <div className="hidden md:flex flex-grow mr-4">
        {/* <div className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search..."
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div> */}
      </div>

      {/* Icons and Profile */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Mobile Search Toggle */}
        <div className="md:hidden flex items-center">
          {/* <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="p-2 text-gray-700 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={showMobileSearch ? faXmark : faSearch} className="text-xl" />
          </button> */}
        </div>
        <button className="p-2 text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faBell} className="text-lg sm:text-xl" />
        </button>
        <button className="p-2 text-gray-700 hover:text-gray-900">
          <FontAwesomeIcon icon={faEnvelope} className="text-lg sm:text-xl" />
        </button>
        <div className="flex items-center ml-1">
          {/* Replace the image with a more robust implementation */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full cursor-pointer border border-gray-200 bg-gray-100 flex items-center justify-center overflow-hidden">
            {/* Fallback to an icon if image fails to load */}
            <img src={profile} alt="profile" className="text-gray-400" />
            {/* <FontAwesomeIcon icon={faUser} className="text-gray-400" /> */}
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - Expandable */}
      {/* {showMobileSearch && (
        <div className="w-full mt-2 md:hidden">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Search..."
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              autoFocus
            />
          </div>
        </div>
      )} */}
    </header>
  )
}

export default Dheader
