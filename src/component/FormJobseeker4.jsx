"use client"

import { useState } from "react"
import { ChevronDown, ChevronLeft, X } from "lucide-react"
import Header from "./Header"
import { Link } from "react-router-dom"

export default function FormJobseeker4() {
  const [skills, setSkills] = useState([
    "Adobe Photoshop",
    "Adobe Photoshop",
    "Adobe Photoshop"
  ])
  const [newSkill, setNewSkill] = useState("")

  const handleAddSkill = e => {
    if (e.key === "Enter" && newSkill.trim()) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const handleRemoveSkill = indexToRemove => {
    setSkills(skills.filter((_, index) => index !== indexToRemove))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Skills submitted:", skills)
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
                <Link to="/FormJobseeker3">
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </button>
              <h2 className="text-xl md:text-2xl font-bold">
                Skill & Expertise
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
            >
              <div className="flex-1">
                {/* Skills Input */}
                <div className="relative mb-4 md:mb-6">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={e => setNewSkill(e.target.value)}
                    onKeyDown={handleAddSkill}
                    placeholder="Add skills (Get noticed for the right job by adding your skills)"
                    className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                  />
                  <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 md:gap-2 bg-purple-100 text-black px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(index)}
                        className="hover:bg-purple-200 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Save & Next Button */}
              <div className="flex justify-end mt-auto">
                <Link to="/FormJobseeker5" className="w-full md:w-auto">
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium w-full md:w-auto"
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
