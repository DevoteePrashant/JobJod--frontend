import { useState } from "react"
import { ChevronDown, ChevronLeft, X } from "lucide-react"
import { Link } from "react-router-dom"
import React, { useEffect, useRef } from 'react'
import logo2 from "../image/logo2.png";
import Dheader3 from "./Dheader3"
import SearchableDropdown from "./searchabledropdownupdated"

// import Header from "./Header"

export default function FormCompany2() {
  const [formData, setFormData] = useState({
    industries: [],
    overview: "",
    vision: "",
    mission: "",
  })
  const [skills, setSkills] = useState([])
  const [newIndustry, setNewIndustry] = useState("")
  const [newSkill, setNewSkill] = useState("")
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false)
  const [isSkillDropdownOpen, setIsSkillDropdownOpen] = useState(false)
  const industryDropdownRef = useRef(null)
  const skillDropdownRef = useRef(null)

  const industries = [
    "Software Development",
    "Data Science",
    "Product Design",
    "Digital Marketing",
    "Customer Service",
    "Sales & Business",
    "Healthcare & Medical",
    "Finance & Accounting",
    "Education & Training",
    "Engineering",
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const submissionData = {
      ...formData,
      skills: skills,
    }
    console.log("Form submitted:", submissionData)
    // Handle form submission logic here
  }

  const handleSkip = () => {
    console.log("Skipped to next step")
    // Handle skip logic here
  }

  const handleSelectIndustry = (industry) => {
    if (!formData.industries.includes(industry)) {
      setFormData((prev) => ({ ...prev, industries: [...prev.industries, industry] }))
    }
    setNewIndustry("")
    setIsIndustryDropdownOpen(false)
  }

  const handleRemoveIndustry = (industry) => {
    setFormData((prev) => ({
      ...prev,
      industries: prev.industries.filter((ind) => ind !== industry),
    }))
  }

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills((prev) => [...prev, newSkill])
      setNewSkill("")
    }
    setIsSkillDropdownOpen(false)
  }

  const handleSelectSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills((prev) => [...prev, skill])
    }
    setNewSkill("")
    setIsSkillDropdownOpen(false)
  }

  const handleRemoveSkill = (skill) => {
    setSkills((prev) => prev.filter((s) => s !== skill))
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (industryDropdownRef.current && !industryDropdownRef.current.contains(event.target)) {
        setIsIndustryDropdownOpen(false)
      }
      if (skillDropdownRef.current && !skillDropdownRef.current.contains(event.target)) {
        setIsSkillDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  return (
    <>
      {/* <Header /> */}
      <Dheader3/>
      <div className="min-h-screen relative flex items-center justify-center p-4  bg-gradient-to-r from-purple-100 via-white to-purple-50">
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
        <div className="relative w-full max-w-4xl">
          {/* Progress Steps */}
          <div className="flex justify-between mb-4 md:mb-6 px-2 md:px-8">
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%]"></div>
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>

          {/* Form Container - Fixed height for desktop, auto height for mobile */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] md:overflow-y-auto">
            {/* Header with back button */}
            <div className="flex items-center mb-4 md:mb-8">
              <button
                type="button"
                className="mr-3 md:mr-4 rounded-full border border-gray-300 p-0.5 md:p-1"
                aria-label="Go back"
              >
                <Link to="/FormCompany">
                  <div>
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </Link>
              </button>

              <h2 className="text-xl md:text-2xl font-bold">Overview</h2>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Company Industry */}
            <div className="mb-6 md:mb-8">
                    {/* <SearchableDropdown
                           label="Company Industry"
                           placeholder="Search industry..."
                           options={industries}
                           value={industry}
                           onChange={setIndustry}
                           allowAddNew={true}
                           allowDirectEdit={true}
                         /> */}
                  <div>


        {/* Skills Input and Dropdown */}
        <div className="mb-6 md:mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Industries</label>

            <div className="relative" ref={industryDropdownRef}>
              <div className="flex items-center border-b border-gray-300">
                <input
                  type="text"
                  value={newIndustry}
                  onChange={(e) => {
                    setNewIndustry(e.target.value)
                    setIsIndustryDropdownOpen(true)
                  }}
                  onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
                  className="w-full pb-2 focus:outline-none focus:border-purple-500"
                  placeholder="Type to select industry..."
                />
                <ChevronDown
                  className="h-5 w-5 text-gray-400 cursor-pointer"
                  onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
                />
              </div>

              {isIndustryDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                  {industries
                    .filter((ind) => ind.toLowerCase().includes(newIndustry.toLowerCase()))
                    .map((industry, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSelectIndustry(industry)}
                      >
                        {industry}
                      </div>
                    ))}
                </div>
              )}
            </div>

            {formData.industries.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.industries.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-[#e3dafb] text-gray-700 px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {industry}
                    <button
                      type="button"
                      onClick={() => handleRemoveIndustry(industry)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
              </div>
              {/* Overview */}
              <div className="mb-6 md:mb-8">
                   <label htmlFor="degree"className="block text-sm font-medium text-gray-700 mb-1">Overview</label>
                  <input type="text" id="overview"name="overview" className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-sm md:text-base"/>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
                {/* Vision */}
                <div>
                  <label
                    htmlFor="vision"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Vision
                  </label>
                  <textarea
                    id="vision"
                    name="vision"
                    value={formData.vision}
                    onChange={handleChange}
                    rows={2}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none resize-none"
                  />
                </div>

                {/* Mission */}
                <div>
                  <label
                    htmlFor="mission"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mission
                  </label>
                  <textarea
                    id="mission"
                    name="mission"
                    value={formData.mission}
                    onChange={handleChange}
                    rows={2}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex flex-col md:flex-row justify-end items-center gap-2 md:gap-4 mt-8 md:mt-12">
                <Link to="/FormCompany3">
                  <button
                    type="button"
                    onClick={handleSkip}
                    className="text-gray-600 text-sm md:text-base font-medium hover:text-gray-800"
                  >
                    Skip & Next
                  </button>
                </Link>
                <Link to="/FormCompany3">
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
