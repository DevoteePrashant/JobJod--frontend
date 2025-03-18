






"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import logo2 from "../image/logo2.png"
import Dheader3 from "./Dheader3"

function FormJobseeker7() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [formData, setFormData] = useState({
    certificateTitle: "",
    organization: "",
    date: "",
    validTill: "",
    linkCredentials: "",
    neverExpire: false
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <>
         <Dheader3/>

      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-100 via-white to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-y8VIQbQhSCi7xcFqUiFvxXXwZtkvps.svg"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-30"
            width={1440}
            height={1024}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative w-full container mx-auto px-6 py-20 text-center z-10">
          <div className="mx-auto w-full max-w-4xl">
            {/* Progress Steps */}
            <div className="flex justify-between mb-4 md:mb-6 px-2 md:px-8">
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%]"></div>
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            </div>

            {/* Form Container */}
            <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 md:mb-10">
                <Link to="/Formjobseeker3">
                  <button className=" rounded-full border border-black p-0.5 md:p-1">
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </Link>
                <h1 className="text-xl md:text-2xl font-bold">
                  Certification & Other Course
                </h1>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {/* Certificate Title */}
                  <div className="space-y-1">
                    <label
                      htmlFor="certificateTitle"
                      className="text-gray-600 text-sm block text-left"
                    >
                      Certificate title
                    </label>
                    <div className="border-b border-gray-300 pb-1">
                      <input
                        id="certificateTitle"
                        name="certificateTitle"
                        type="text"
                        value={formData.certificateTitle}
                        onChange={handleChange}
                        className="w-full focus:outline-none text-base"
                      />
                    </div>
                  </div>

                  {/* Organization */}
                  <div className="space-y-1">
                    <label
                      htmlFor="organization"
                      className="text-gray-600 text-sm block text-left"
                    >
                      Organization
                    </label>
                    <div className="border-b border-gray-300 pb-1">
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full focus:outline-none text-base"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-1">
                    <label
                      htmlFor="date"
                      className="text-gray-600 text-sm block text-left"
                    >
                      Date
                    </label>
                    <div className="border-b border-gray-300 pb-1 flex items-center">
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full focus:outline-none text-base"
                      />
                    </div>
                  </div>

                  {/* Valid Till */}
                  <div className="space-y-1">
                    <label
                      htmlFor="validTill"
                      className="text-gray-600 text-sm block text-left"
                    >
                      Valid till
                    </label>
                    <div className="border-b border-gray-300 pb-1 flex items-center">
                      <input
                        id="validTill"
                        name="validTill"
                        type="date"
                        value={formData.validTill}
                        onChange={handleChange}
                        className="w-full focus:outline-none text-base"
                      />
                    </div>
                  </div>
                </div>

                {/* Link/Credentials */}
                <div className="space-y-1">
                  <label
                    htmlFor="linkCredentials"
                    className="text-gray-600 text-sm block text-left"
                  >
                    Link / Credentials
                  </label>
                  <div className="border-b border-gray-300 pb-1">
                    <input
                      id="linkCredentials"
                      name="linkCredentials"
                      type="text"
                      value={formData.linkCredentials}
                      onChange={handleChange}
                      className="w-full focus:outline-none text-base"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-2">
                  <div className="h-5 w-5 border border-gray-300 rounded flex items-center justify-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="neverExpire"
                      name="neverExpire"
                      checked={formData.neverExpire}
                      onChange={handleChange}
                      className="h-4 w-4 cursor-pointer"
                    />
                  </div>

                  <label
                    htmlFor="neverExpire"
                    className="text-sm cursor-pointer font-semibold"
                  >
                    Never Expire
                  </label>
                </div>
                {/* Bottom Buttons  */}
                <div className="flex flex-wrap md:flex-row flex-col justify-end items-center gap-2 md:gap-4">
                <Link to="/Formjobseeker4">
                  <button
                    type="button"
                    // onClick={handleSkip}
                    className="text-gray-600 text-sm md:text-base font-medium hover:text-gray-800 mr-1"
                  >
                    Skip & Next
                  </button>
                </Link>
                <button
                  type="button"
                  // onClick={handleAddMore}
                  className="text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium"
                  // Coral color
                  style={{ backgroundColor: "#FF9F7B" }}
                >
                  Add More +
                </button>
                <Link to="/Formjobseeker4">
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium"
                  >
                    Save & Next
                  </button>
                </Link>
              </div>
              </form>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
      </section>
    </>
  )
}

export default FormJobseeker7



