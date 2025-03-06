"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "./Header"

export default function FormCompany4() {
  const [formData, setFormData] = useState({
    companyEnvironment: "",
    employeeBenefits: "",
    careerDevelopment: ""
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

  const handleSkip = () => {
    console.log("Skipped to next step")
    // Handle skip logic here
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
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>

          {/* Form Container - Fixed height for desktop, auto height for mobile */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] flex flex-col">
            {/* Header with back button */}
            <div className="flex items-center mb-4 md:mb-6">
              <Link to="/FormCompany3">
                <button
                  type="button"
                  className="mr-3 md:mr-4 rounded-full border border-gray-300 p-0.5 md:p-1"
                  aria-label="Go back"
                >
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </Link>
              <h2 className="text-xl md:text-2xl font-bold">Company Culture</h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col flex-1">
              <div className="flex-1 overflow-y-auto pr-1 md:pr-2">
                {/* Company Environment */}
                <div className="mb-4 md:mb-5">
                  <label
                    htmlFor="companyEnvironment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Environment
                  </label>
                  <textarea
                    id="companyEnvironment"
                    name="companyEnvironment"
                    value={formData.companyEnvironment}
                    onChange={handleChange}
                    rows={2}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none resize-none"
                  />
                </div>

                {/* Employee Benefits */}
                <div className="mb-4 md:mb-5">
                  <label
                    htmlFor="employeeBenefits"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Employee Benefits
                  </label>
                  <textarea
                    id="employeeBenefits"
                    name="employeeBenefits"
                    value={formData.employeeBenefits}
                    onChange={handleChange}
                    rows={2}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none resize-none"
                  />
                </div>

                {/* Career Development */}
                <div className="mb-4 md:mb-5">
                  <label
                    htmlFor="careerDevelopment"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Career Development
                  </label>
                  <textarea
                    id="careerDevelopment"
                    name="careerDevelopment"
                    value={formData.careerDevelopment}
                    onChange={handleChange}
                    rows={2}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex justify-end items-center gap-2 md:gap-4 pt-3 md:pt-4">
                <Link to="/FormCompany5">
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="text-gray-600 text-sm md:text-base font-medium hover:text-gray-800"
                  >
                    Skip & Next
                  </button>
                </Link>
                <Link to="/FormCompany5">
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium"
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
