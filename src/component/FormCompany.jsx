"use client"
import { useState } from "react"
import Header from "./Header"
import { Link } from "react-router-dom"

export default function FormCompany() {
  const [formData, setFormData] = useState({
    companyName: "",
    interviewPersonName: "",
    emailAddress: "",
    mobileNumber: "",
    location: "",
    yearEstablished: "",
    website: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Progress Steps */}
          <div className="flex justify-between mb-4 md:mb-6 px-2 md:px-8">
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%]"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>

          {/* Form Container - Fixed height for desktop, auto height for mobile */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] md:overflow-y-auto">
            <div className="mb-4 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold">
                Basic Information
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
            >
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Interview Person's Name */}
                  <div>
                    <label
                      htmlFor="interviewPersonName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Interview Persons Name
                    </label>
                    <input
                      type="text"
                      id="interviewPersonName"
                      name="interviewPersonName"
                      value={formData.interviewPersonName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="emailAddress"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>

                  {/* Year Established */}
                  <div>
                    <label
                      htmlFor="yearEstablished"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Year Established
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="yearEstablished"
                        name="yearEstablished"
                        value={formData.yearEstablished}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Save & Next Button */}
              <div className="flex justify-end mt-auto">
                <Link to="/FormCompany2">
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white mt-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base"
                  >
                    Save & Next
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
