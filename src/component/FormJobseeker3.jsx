

"use client"

import { useState } from "react"
import logo2 from "../image/logo2.png"
import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
import Dheader3 from "./Dheader3"

function FormJobseeker3() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    location: "",
    gender: "",
    mobileNumber: "",
    dateOfBirth: "",
    companyName: "",
    jobTitle: "",
    industry: "",
    department: "",
    joiningDate: "",
    leaveDate: "",
    employmentType: "",
    salary: "",
    currentlyRunning: false
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
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            </div>

            {/* Form Container */}
            <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] overflow-y-auto">
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

              <form
                onSubmit={handleSubmit}
                className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
              >
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-6">
                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Job Title */}
                    <div>
                      <label
                        htmlFor="jobTitle"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Industry */}
                    <div>
                      <label
                        htmlFor="industry"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Industry
                      </label>
                      <input
                        type="text"
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Department */}
                    <div>
                      <label
                        htmlFor="department"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Department
                      </label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Joining Date */}
                    <div>
                      <label
                        htmlFor="joiningDate"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Joining Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="joiningDate"
                          name="joiningDate"
                          value={formData.joiningDate}
                          onChange={handleChange}
                          placeholder="DD/MM/YYYY"
                          className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none text-base"
                        />
                      </div>
                    </div>

                    {/* Leave Date */}
                    <div>
                      <label
                        htmlFor="leaveDate"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Leave Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="leaveDate"
                          name="leaveDate"
                          value={formData.leaveDate}
                          onChange={handleChange}
                          placeholder="DD/MM/YYYY"
                          className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none text-base"
                        />
                      </div>
                    </div>

                    {/* Employment Type */}
                    <div>
                      <label
                        htmlFor="employmentType"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Employment Type
                      </label>
                      <input
                        type="text"
                        id="employmentType"
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Salary */}
                    <div>
                      <label
                        htmlFor="salary"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Salary
                      </label>
                      <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>
                  </div>
                </div>
                {/* Currently Running Checkbox */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-auto">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="currentlyRunning"
                      checked={formData.currentlyRunning}
                      onChange={handleChange}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 h-4 w-4"
                    />
                    <span className="ml-2 text-sm font-bold text-black">
                      Currently running
                    </span>
                  </label>
                </div>

                {/* Bottom Buttons */}
              
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

export default FormJobseeker3

