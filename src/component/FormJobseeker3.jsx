import React, { useState } from "react"
import { Calendar, ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "./Header"

export default function FormJobseeker3() {
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    industry: "",
    department: "",
    joiningDate: "",
    leaveDate: "",
    employmentType: "",
    noticePeriod: ""
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
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>

          {/* Form Container */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 overflow-y-auto">
            {/* Header with back button */}
            <div className="flex items-center mb-4 md:mb-8">
              <button
                type="button"
                className="mr-3 md:mr-4 rounded-full border border-black p-0.5 md:p-1"
                aria-label="Go back"
              >
                <Link to="/FormJobseeker2">
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </button>
              <h2 className="text-xl md:text-2xl font-bold">Experience</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6">
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

                {/* Job Title */}
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Industry
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                {/* Department */}
                <div>
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                {/* Joining Date */}
                <div>
                  <label
                    htmlFor="joiningDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Joining Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="joiningDate"
                      name="joiningDate"
                      value={formData.joiningDate}
                      onChange={handleChange}
                      placeholder="DD/MM/YYYY"
                      className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none"
                    />
                    <Calendar className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
                  </div>
                </div>

                {/* Leave Date */}
                <div>
                  <label
                    htmlFor="leaveDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Leave Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="leaveDate"
                      name="leaveDate"
                      value={formData.leaveDate}
                      onChange={handleChange}
                      placeholder="DD/MM/YYYY"
                      className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none"
                    />
                    <Calendar className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
                  </div>
                </div>

                {/* Employment Type */}
                <div>
                  <label
                    htmlFor="employmentType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Employment Type
                  </label>
                  <input
                    type="text"
                    id="employmentType"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                {/* Notice Period */}
                <div>
                  <label
                    htmlFor="noticePeriod"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Notice Period
                  </label>
                  <input
                    type="text"
                    id="noticePeriod"
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-col md:flex-row justify-end items-center gap-2 md:gap-4 mt-6 md:mt-12">
                <Link
                  to="/FormJobseeker4"
                  className="mb-2 md:mb-0 w-full md:w-auto"
                >
                  <button
                    type="button"
                    className="text-gray-600 font-medium text-sm md:text-base w-full md:w-auto"
                  >
                    Skip & Next
                  </button>
                </Link>
                <button
                  type="button"
                  className="bg-orange-400 hover:bg-orange-500 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium w-full md:w-auto mb-2 md:mb-0 text-sm md:text-base"
                >
                  Add More +
                </button>
                <Link to="/FormJobseeker4" className="w-full md:w-auto">
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium w-full md:w-auto text-sm md:text-base"
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
