"use client"

import { useState } from "react"
import { ChevronLeft, Paperclip } from "lucide-react"
import Header from "./Header"
import { Link } from "react-router-dom"

export default function FormJobseeker5() {
  const [formData, setFormData] = useState({
    resume: null,
    githubLink: "",
    linkedinLink: ""
  })

  const handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files[0] }))
    }
  }

  const handleInputChange = e => {
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
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>

          {/* Form Container - Fixed height to match FormJobseeker */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 h-[450px] md:h-[520px] ">
            {/* Header with back button */}
            <div className="flex items-center mb-4 md:mb-8">
              <button
                type="button"
                className="mr-3 md:mr-4 rounded-full border border-black p-0.5 md:p-1"
                aria-label="Go back"
              >
                <Link to="/FormJobseeker4">
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </button>
              <h2 className="text-xl md:text-2xl font-bold">
                Resume & Portfolio
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
            >
              <div className="flex-1">
                {/* Resume Upload */}
                <div className="mb-4 md:mb-8">
                  <label
                    htmlFor="resume"
                    className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-3 md:px-4 py-2 rounded-lg cursor-pointer text-sm md:text-base"
                  >
                    <Paperclip className="h-4 w-4 md:h-5 md:w-5" />
                    <span>Upload Resume</span>
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                  {formData.resume && (
                    <p className="mt-2 text-xs md:text-sm text-gray-600">
                      Selected file: {formData.resume.name}
                    </p>
                  )}
                </div>

                {/* Portfolio Links */}
                <div>
                  <h3 className="text-base font-medium mb-3 md:mb-4">
                    Portfolio Links
                  </h3>

                  {/* GitHub Link */}
                  <div className="mb-3 md:mb-4 relative">
                    <div className="absolute left-0 bottom-3">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 md:h-5 md:w-5 fill-current"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </div>
                    <input
                      type="url"
                      name="githubLink"
                      value={formData.githubLink}
                      onChange={handleInputChange}
                      placeholder="Enter Github Link"
                      className="w-full border-b border-gray-300 pb-2 pl-6 md:pl-8 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                    />
                  </div>

                  {/* LinkedIn Link */}
                  <div className="mb-3 md:mb-4 relative">
                    <div className="absolute left-0 bottom-3">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 md:h-5 md:w-5 fill-[#0A66C2]"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </div>
                    <input
                      type="url"
                      name="linkedinLink"
                      value={formData.linkedinLink}
                      onChange={handleInputChange}
                      placeholder="Enter LinkedIn Link"
                      className="w-full border-b border-gray-300 pb-2 pl-6 md:pl-8 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                    />
                  </div>

                  {/* Add Other Link */}
                  <div className="flex justify-end mb-4 md:mb-8">
                    <button
                      type="button"
                      className="text-gray-700 font-medium text-sm md:text-base"
                    >
                      Add other +
                    </button>
                  </div>
                </div>
              </div>

              {/* Save & Next Button */}
              <div className="flex justify-end mt-auto">
                <Link to="/FormJobseeker6" className="w-full md:w-auto">
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base w-full md:w-auto"
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
