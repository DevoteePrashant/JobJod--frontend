"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "./Header"

export default function FormJobseeker2() {
  const [formData, setFormData] = useState({
    highestEducation: "",
    degree: "",
    specialization: "",
    collegeName: "",
    completionYear: "",
    currentlyRunning: false
  })

  const handleChange = e => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value
    }))
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
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>

          {/* Form Container - Fixed height to match other forms */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 h-[450px] md:h-[520px] overflow-y-auto">
            {/* Header with back button */}
            <div className="flex items-center mb-4 md:mb-8">
              <button
                type="button"
                className="mr-3 md:mr-4 rounded-full border border-black p-0.5 md:p-1"
                aria-label="Go back"
              >
                <Link to="/FormJobseeker">
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </button>
              <h2 className="text-xl md:text-2xl font-bold">Education</h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
            >
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6">
                  {/* Highest Education */}
                  <div className="col-span-1 md:col-span-2">
                    <label
                      htmlFor="highestEducation"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your highest education
                    </label>
                    <div className="relative">
                      <select
                        id="highestEducation"
                        name="highestEducation"
                        value={formData.highestEducation}
                        onChange={handleChange}
                        className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-sm md:text-base"
                      >
                        <option value="" disabled>
                          Select Education
                        </option>
                        <option value="high-school">High School</option>
                        <option value="bachelors">Bachelor's Degree</option>
                        <option value="masters">Master's Degree</option>
                        <option value="phd">PhD</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
                    </div>
                  </div>

                  {/* Degree */}
                  <div>
                    <label
                      htmlFor="degree"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Degree
                    </label>
                    <input
                      type="text"
                      id="degree"
                      name="degree"
                      value={formData.degree}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                    />
                  </div>

                  {/* Specialization */}
                  <div>
                    <label
                      htmlFor="specialization"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Specialization
                    </label>
                    <input
                      type="text"
                      id="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                    />
                  </div>

                  {/* College Name */}
                  <div>
                    <label
                      htmlFor="collegeName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      College Name
                    </label>
                    <input
                      type="text"
                      id="collegeName"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                    />
                  </div>

                  {/* Completion Year */}
                  <div>
                    <label
                      htmlFor="completionYear"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Completion Year
                    </label>
                    <input
                      type="text"
                      id="completionYear"
                      name="completionYear"
                      value={formData.completionYear}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                    />
                  </div>

                  {/* Currently Running Checkbox */}
                  <div className="mt-2 col-span-1 md:col-span-2">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="currentlyRunning"
                        checked={formData.currentlyRunning}
                        onChange={handleChange}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 h-4 w-4"
                      />
                      <span className="ml-2 text-sm font-bold text-gray-700">
                        Currently running
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-col md:flex-row justify-between items-center mt-auto">
                <button
                  type="button"
                  className="text-black px-3 py-2 rounded-full font-medium w-full md:w-auto mb-3 md:mb-0 text-sm md:text-base"
                >
                  Add more +
                </button>
                <Link to="/FormJobseeker3">
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium w-full md:w-auto text-sm md:text-base"
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
