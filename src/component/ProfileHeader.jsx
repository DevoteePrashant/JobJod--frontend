"use client"

import { Share2, MoreHorizontal, MessageSquare, Briefcase } from "lucide-react"
import { useRef, useEffect, useState } from "react"

import logo2 from "../image/profile.jpg";

export function ProfileHeader({ name, role, avatarUrl }) {
  const dropdownRef = useRef(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="relative order-1 sm:order-none">
          <img
            src={logo2}
            alt={`${name}'s profile`}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-purple-500 rounded-full" />
          </div>
        </div>
        <div className="text-center sm:text-left order-last">
          <h1 className="text-2xl font-semibold">{profileData.name}</h1>
          <p className="text-gray-600">{profileData.role}</p>
        </div>
      </div>

      <div className="flex items-center justify-center sm:justify-start gap-2">
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <Share2 className="h-5 w-5" />
          </button>
          <div className="relative inline-block" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(prev => !prev)}
              className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
            >
              <MoreHorizontal className="h-5 w-5" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <button
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => {
                    console.log("Message clicked")
                    setIsDropdownOpen(false)
                  }}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Message
                </button>
                <button
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                  onClick={() => {
                    console.log("Offer Job clicked")
                    setIsDropdownOpen(false)
                  }}
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  Offer Job
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
