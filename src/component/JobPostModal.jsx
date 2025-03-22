"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ArrowLeft, X } from "lucide-react"
import TimePicker  from "./timePicker"
import PropTypes from "prop-types";
import SearchableDropdown from "./searchabledropdownupdated"

export default function JobPostModal({ isOpen, onClose }) {
  const [industry, setIndustry] = useState("Software Development")
  const [department, setDepartment] = useState("")
  const [joiningDate, setJoiningDate] = useState("")
  const [noticePeriod, setNoticePeriod] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [expiryTime, setExpiryTime] = useState("")

  const jobTitleOptions = [
    { value: "software-engineer", label: "Software Engineer", group: "Technology" },
    { value: "frontend-developer", label: "Frontend Developer", group: "Technology" },
    { value: "backend-developer", label: "Backend Developer", group: "Technology" },
    { value: "full-stack-developer", label: "Full Stack Developer", group: "Technology" },
    { value: "mobile-developer", label: "Mobile Developer", group: "Technology" },
    { value: "devops-engineer", label: "DevOps Engineer", group: "Technology" },
    { value: "data-scientist", label: "Data Scientist", group: "Technology" },
    { value: "product-designer", label: "Product Designer", group: "Technology" },
    { value: "ui-ux-designer", label: "UI/UX Designer", group: "Technology" },
    { value: "qa-engineer", label: "QA Engineer", group: "Technology" },
  ]

  const expiryTimeOptions = [
    { value: "30", label: "30 days" },
    { value: "60", label: "60 days" },
    { value: "90", label: "90 days" },
  ]
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

  const departments = [
    "Engineering",
    "Product",
    "Design",
    "Marketing",
    "Sales",
    "Customer Support",
    "Human Resources",
    "Finance",
    "Operations",
    "Research",
  ]
  const availableSkills = [
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "CSS",
    "HTML",
    "Python",
    "Java",
    "C#",
    "PHP"
  ]
  
  

// State to track selected skills
const [jobStartTime, setJobStartTime] = useState("09:00AM")
const [jobEndTime, setJobEndTime] = useState("05:00PM")
const [interviewStartTime, setInterviewStartTime] = useState("09:00AM")
const [interviewEndTime, setInterviewEndTime] = useState("05:00PM")
const [minExperience, setMinExperience] = useState("")
const [maxExperience, setMaxExperience] = useState("")
const [candidateLocations, setCandidateLocations] = useState("")
const [minSalary, setMinSalary] = useState("")
const [maxSalary, setMaxSalary] = useState("")
const [currentStep, setCurrentStep] = useState(1)
const [totalExperience, setTotalExperience] = useState("")
const [qualification, setQualification] = useState("")
const [englishLevel, setEnglishLevel] = useState("")
const [gender, setGender] = useState("")
const [showTotalExpDropdown, setShowTotalExpDropdown] = useState(false)
const [showQualificationDropdown, setShowQualificationDropdown] = useState(
  false
)
const [showEnglishDropdown, setShowEnglishDropdown] = useState(false)
const [showGenderDropdown, setShowGenderDropdown] = useState(false)
const [minimumAgeOpen, setMinimumAgeOpen] = useState(false)
const [minimumAge, setMinimumAge] = useState("")
const [showConfirmation, setShowConfirmation] = useState(false)
const [industrySearchQuery, setIndustrySearchQuery] = useState("")
const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const dropdownRef = useRef(null);

const [formData, setFormData] = useState({
  jobTiming: "",
  interviewTiming: "",
  interviewLocation: "",
  interviewInstructions: ""
})

const [skills, setSkills] = useState([
  "Adobe Photoshop",
  "Adobe Illustrator",
  "UI/UX Design",
]);
const [newSkill, setNewSkill] = useState("");
const [isDropdownOpen, setIsDropdownOpen] = useState(false);



// Common skills for the dropdown
const skillOptions = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "HTML/CSS",
  "SQL",
  "TypeScript",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "UI/UX Design",
  "Project Management",
  "Data Analysis",
  "Marketing",
  "Content Writing",
];

// Filter options based on input
const filteredOptions = skillOptions.filter(
  (skill) =>
    !skills.includes(skill) &&
    skill.toLowerCase().includes(newSkill.toLowerCase())
);

const handleAddSkill = (e) => {
  if (e.key === "Enter" && newSkill.trim()) {
    if (!skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
    }
    setNewSkill("");
    e.preventDefault();
  }
};

const handleSelectSkill = (skill) => {
  if (!skills.includes(skill)) {
    setSkills([...skills, skill]);
  }
  setNewSkill("");
  setIsDropdownOpen(false);
};

const handleRemoveSkill = (indexToRemove) => {
  setSkills(skills.filter((_, index) => index !== indexToRemove));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Skills submitted:", skills);
  // Handle form submission logic here
};

// Close dropdown when clicking outside
useEffect(() => {
  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

const [isMenuOpen, setIsMenuOpen] = useState(false);


const toggleMinimumAge = () => {
  setMinimumAgeOpen(!minimumAgeOpen)
}

const handleSelectAge = age => {
  setMinimumAge(age)
  setMinimumAgeOpen(false)
}

const addSkill = skill => {
  if (!skills.includes(skill)) {
    setSkills([...skills, skill])
  }
}

const removeSkill = index => {
  setSkills(skills.filter((_, i) => i !== index))
}

// Toggle dropdown visibility
const toggleDropdown = dropdown => {
  switch (dropdown) {
    case "experience":
      setShowTotalExpDropdown(!showTotalExpDropdown)
      setShowQualificationDropdown(false)
      setShowEnglishDropdown(false)
      setShowGenderDropdown(false)
      break
    case "qualification":
      setShowQualificationDropdown(!showQualificationDropdown)
      setShowTotalExpDropdown(false)
      setShowEnglishDropdown(false)
      setShowGenderDropdown(false)
      break
    case "english":
      setShowEnglishDropdown(!showEnglishDropdown)
      setShowTotalExpDropdown(false)
      setShowQualificationDropdown(false)
      setShowGenderDropdown(false)
      break
    case "gender":
      setShowGenderDropdown(!showGenderDropdown)
      setShowTotalExpDropdown(false)
      setShowQualificationDropdown(false)
      setShowEnglishDropdown(false)
      break
    default:
      setShowTotalExpDropdown(false)
      setShowQualificationDropdown(false)
      setShowEnglishDropdown(false)
      setShowGenderDropdown(false)
  }
}

// Handle selection
const handleSelect = (dropdown, value) => {
  switch (dropdown) {
    case "experience":
      setTotalExperience(value)
      setShowTotalExpDropdown(false)
      break
    case "qualification":
      setQualification(value)
      setShowQualificationDropdown(false)
      break
    case "english":
      setEnglishLevel(value)
      setShowEnglishDropdown(false)
      break
    case "gender":
      setGender(value)
      setShowGenderDropdown(false)
      break
  }
}

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowIndustryDropdown(false);
      }
    };

  document.addEventListener("mousedown", handleClickOutside)
  return () => {
    document.removeEventListener("mousedown", handleClickOutside)
  }
}, [showIndustryDropdown])

if (!isOpen) return null

const goToNextStep = () => {
  setCurrentStep(currentStep + 1)
}

const goToPreviousStep = () => {
  setCurrentStep(currentStep - 1)
}

const handleSalaryChange = (type, value) => {
  if (type === "min") {
    setMinSalary(value)
  } else {
    setMaxSalary(value)
  }
}

const handleChange = e => {
  const { name, value } = e.target
  setFormData({ ...formData, [name]: value })
}


// Function to add or remove a skill
const handleSkillSelect = skill => {
  if (skills.includes(skill)) {
    setSkills(skills.filter(s => s !== skill))
  } else {
    setSkills([...skills, skill])
  }
}


const filteredIndustries = industrySearchQuery
  ? industries.filter(industry =>
      industry.toLowerCase().includes(industrySearchQuery.toLowerCase())
    )
  : industries

const handleCancel = () => {
  setShowConfirmation(true)
}

const handleConfirmClose = () => {
  setShowConfirmation(false)
  onClose()
}

const handleCancelClose = () => {
  setShowConfirmation(false)
}

  return (
    <div className="  fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] py-4 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center mb-6">
            {currentStep > 1 ? (
              <button
                onClick={goToPreviousStep}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            )}
            <h2 className="text-xl font-bold ml-4">Post Job</h2>
          </div>

          {/* Step 1 Form */}
          {currentStep === 1 && (
            <form className="space-y-6">
              <h3 className="block text-sm font-medium text-lg font-bold text-dark-700 mb-1">
                Basic Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <StyledDropdown
              label="Job Title"
              placeholder="Select a job title"
              options={jobTitleOptions}
              value={jobTitle}
              onChange={setJobTitle}
            />


                {/* Interview Person Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Interview Person Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                    />
               
                  </div>
                </div>

                {/* Industry */}
                <SearchableDropdown
          label="Industry"
          placeholder="Search industry..."
          options={industries}
          value={industry}
          onChange={setIndustry}
        />

                {/* Department */}
                <div>
                 
        <SearchableDropdown
          label="Department"
          placeholder="Search department..."
          options={departments}
          value={department}
          onChange={setDepartment}
        />
                </div>

                {/* Expiry Time */}
                <div>
                <StyledDropdown
              label="Expiry Time"
              placeholder="Select expiry time"
              options={expiryTimeOptions}
              value={expiryTime}
              onChange={setExpiryTime}
            />
                </div>

                {/* Joining Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Joining Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                {/* Salary */}
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <input
                        id="min-salary"
                        type="number"
                        value={minSalary}
                        onChange={e =>
                          handleSalaryChange("min", e.target.value)
                        }
                        className="w-full border-0 border-b border-gray-300 rounded-none pb-2 focus:ring-0 focus:border-blue-500"
                        placeholder="Min Salary"
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        id="max-salary"
                        type="number"
                        value={maxSalary}
                        onChange={e =>
                          handleSalaryChange("max", e.target.value)
                        }
                        className="w-full border-0 border-b border-gray-300 rounded-none pb-2 focus:ring-0 focus:border-blue-500"
                        placeholder="Max Salary"
                      />
                    </div>
                  </div>
                </div>

                {/* Notice Period */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notice Period
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Save button */}
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
                >
                  Save & Next
                </button>
              </div>
            </form>
          )}

          {/* Step 2 Form */}
          {currentStep === 2 && (
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <form className="space-y-6">
                  <h3 className="text-sm font-medium text-gray-700">
                    Candidate Requirement
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Total Experience */}
                      <div className="relative">
                        <div
                          className="flex justify-between items-center border-b border-input pb-2 cursor-pointer"
                          onClick={() => toggleDropdown("experience")}
                        >
                          <span className="text-sm">
                            {totalExperience || "Total Experience of Candidate"}
                          </span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </div>
                        {showTotalExpDropdown && (
                          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                            <ul className="py-1 max-h-60 overflow-auto">
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect("experience", "0-2 years")
                                }
                              >
                                0-2 years
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect("experience", "2-5 years")
                                }
                              >
                                2-5 years
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect("experience", "5-10 years")
                                }
                              >
                                5-10 years
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect("experience", "10+ years")
                                }
                              >
                                10+ years
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Minimum Qualification */}
                      <div className="relative">
                        <div
                          className="flex justify-between items-center border-b border-input pb-2 cursor-pointer"
                          onClick={() => toggleDropdown("qualification")}
                        >
                          <span className="text-sm">
                            {qualification || "Minimum Qualification"}
                          </span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </div>
                        {showQualificationDropdown && (
                          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                            <ul className="py-1 max-h-60 overflow-auto">
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect("qualification", "High School")
                                }
                              >
                                High School
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect(
                                    "qualification",
                                    "Bachelor's Degree"
                                  )
                                }
                              >
                                Bachelor's Degree
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect(
                                    "qualification",
                                    "Master's Degree"
                                  )
                                }
                              >
                                Master's Degree
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect("qualification", "PhD")
                                }
                              >
                                PhD
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* English Requirement */}
                      <div className="relative">
                        <div
                          className="flex justify-between items-center border-b border-input pb-2 cursor-pointer"
                          onClick={() => toggleDropdown("english")}
                        >
                          <span className="text-sm">
                            {englishLevel || "English Requirement"}
                          </span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </div>
                        {showEnglishDropdown && (
                          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                            <ul className="py-1 max-h-60 overflow-auto">
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect("english", "Basic")}
                              >
                                Basic
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect("english", "Intermediate")
                                }
                              >
                                Intermediate
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect("english", "Advanced")
                                }
                              >
                                Advanced
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                  handleSelect("english", "Fluent")
                                }
                              >
                                Fluent
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Relocation Question */}
                      <div>
                        <p className="text-sm mb-3">
                          Would you like to receive applications from nearby
                          cities if they are willing to relocate?
                        </p>
                        <div className="flex gap-6">
                          <div className="flex items-center">
                            <input
                              id="relocate-yes"
                              type="radio"
                              name="relocate"
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <label
                              htmlFor="relocate-yes"
                              className="ml-2 text-sm text-gray-900"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="relocate-no"
                              type="radio"
                              name="relocate"
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <label
                              htmlFor="relocate-no"
                              className="ml-2 text-sm text-gray-900"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Experience Range */}
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Min Experience"
                            value={minExperience}
                            onChange={e => setMinExperience(e.target.value)}
                            className="w-full border-0 border-b border-gray-300 pb-2 focus:ring-0 focus:border-purple-500"
                          />
                        </div>
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Max Experience"
                            value={maxExperience}
                            onChange={e => setMaxExperience(e.target.value)}
                            className="w-full border-0 border-b border-gray-300 pb-2 focus:ring-0 focus:border-purple-500"
                          />
                        </div>
                      </div>

                      {/* Gender */}
                      <div className="relative">
                        <div
                          className="flex justify-between items-center border-b border-input pb-2 cursor-pointer"
                          onClick={() => toggleDropdown("gender")}
                        >
                          <span className="text-sm">{gender || "Gender"}</span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        </div>
                        {showGenderDropdown && (
                          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                            <ul className="py-1 max-h-60 overflow-auto">
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect("gender", "Male")}
                              >
                                Male
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect("gender", "Female")}
                              >
                                Female
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect("gender", "Any")}
                              >
                                Prefer not to say
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Candidate Locations */}
                      <div>
                        <input
                          type="text"
                          placeholder="Candidate Locations"
                          value={candidateLocations}
                          onChange={e => setCandidateLocations(e.target.value)}
                          className="w-full border-0 border-b border-gray-300 pb-2 focus:ring-0 focus:border-purple-500"
                        />
                      </div>

                      {/* Bonus Question */}
                      <div>
                        <p className="text-sm mb-3">
                          Do you offer bonus in addition to monthly salary?
                        </p>
                        <div className="flex gap-6">
                          <div className="flex items-center">
                            <input
                              id="bonus-yes"
                              type="radio"
                              name="bonus"
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <label
                              htmlFor="bonus-yes"
                              className="ml-2 text-sm text-gray-900"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="bonus-no"
                              type="radio"
                              name="bonus"
                              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <label
                              htmlFor="bonus-no"
                              className="ml-2 text-sm text-gray-900"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* Action buttons */}
                      <div className="flex justify-end gap-4 pt-6">
                        <button
                          type="button"
                          className="px-8 py-2.5 rounded-full bg-[#FF9776] text-white transition-colors text-sm font-medium"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="px-8 py-2.5 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors text-sm font-medium"
                          onClick={goToNextStep}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Step 3 Form */}
          {currentStep === 3 && (
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <form className="space-y-6">
                  <h3 className="text-sm font-medium text-gray-700">
                    Personal Details, Education, Additional Info (Optional)
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Minimum Age Required */}
                      <div className="relative">
                        <label
                          htmlFor="minimum-age"
                          className="text-sm font-medium"
                        >
                          Minimum Age Required
                        </label>
                        <div
                          className="flex justify-between items-center border-b border-gray-200 py-2 cursor-pointer"
                          onClick={toggleMinimumAge}
                        >
                          <span className="text-sm text-gray-600">
                            {minimumAge || "Select age"}
                          </span>
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        </div>
                        {minimumAgeOpen && (
                          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                            <ul className="py-1 max-h-60 overflow-auto">
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelectAge("18+")}
                              >
                                18+
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelectAge("21+")}
                              >
                                21+
                              </li>
                              <li
                                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelectAge("25+")}
                              >
                                25+
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Assets */}
                      <div>
                        {/* <label htmlFor="assets" className="text-sm font-medium">
                Assets
              </label> */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Assets
                          </label>
                          <input
                            type="text"
                            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                          />
                        </div>
                      </div>

                      {/* Certification */}
                      <div>
                        {/* <label htmlFor="certification" className="text-sm font-medium">
               
              </label> */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Certification
                          </label>
                          <input
                            type="text"
                            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                          />
                        </div>
                      </div>

                      {/* Security Deposit */}
                      <div>
                        <div>
                          <p className="text-sm mb-3">
                            Is this a work from home position?
                          </p>
                          <div className="flex gap-6">
                            <div className="flex items-center">
                              <input
                                id="wfh-yes"
                                type="radio"
                                name="wfh"
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <label
                                htmlFor="wfh-yes"
                                className="ml-2 text-sm text-gray-900"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="wfh-no"
                                type="radio"
                                name="wfh"
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <label
                                htmlFor="wfh-no"
                                className="ml-2 text-sm text-gray-900"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* Action buttons */}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 pt-1">
                      {/* Preferred Language */}
                      <div>
                        {/* <label htmlFor="preferred-language" className="text-sm font-medium">
              
              </label> */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Language
                          </label>
                          <input
                            type="text"
                            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                          />
                        </div>
                      </div>

                      {/* Degree and Specialisation */}
                      <div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Degree and Specialisation
                          </label>
                          <input
                            type="text"
                            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                          />
                        </div>
                      </div>

                      {/* Preferred Industry */}
                      <div>
                        {/* <label htmlFor="preferred-industry" className="text-sm font-medium">
               
              </label> */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Industry
                          </label>
                          <input
                            type="text"
                            className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                          />
                        </div>

                        <div className="flex justify-end gap-4 pt-6">
                          <button
                            type="button"
                            className="px-8 py-2.5 rounded-full bg-[#FF9776] text-white transition-colors text-sm font-medium"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="px-8 py-2.5 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors text-sm font-medium"
                            onClick={goToNextStep}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Step 4 Form */}
          {currentStep === 4 && (
            <div className="flex-1 overflow-y-auto">
              {/* Back button and title */}
              <div className="flex items-center mb-8">
                <button
                  variant="ghost"
                  size="icon"
                  className="rounded-full mr-2"
                ></button>
              </div>

              {/* Description & Skills Section */}
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-6">
                  Description & Skills
                </h2>

                {/* Skills Dropdown */}
                <div className="border-b border-gray-200 mb-4">
                  <label className="text-sm font-medium block mb-2">
                    Add skills which require in candidate
                  </label>
                      <form
                               onSubmit={handleSubmit}
                               className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
                             >
                               <div className="flex-1">
                                 {/* Skills Input with Dropdown */}
                                 <div className="relative mb-4 md:mb-6" ref={dropdownRef}>
                                   <input
                                     type="text"
                                     value={newSkill}
                                     onChange={(e) => setNewSkill(e.target.value)}
                                     onKeyDown={handleAddSkill}
                                     onFocus={() => setIsDropdownOpen(true)}
                                     placeholder="Add skills (Get noticed for the right job by adding your skills)"
                                     className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none text-sm md:text-base"
                                   />
                                   <button
                                     type="button"
                                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                     className="absolute right-2 bottom-3 h-4 w-4 text-gray-500"
                                   >
                                     <ChevronDown className="h-4 w-4" />
                                   </button>
               
                                   {/* Dropdown Menu */}
                                   {isDropdownOpen && (
                                     <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                                       {filteredOptions.length > 0 ? (
                                         filteredOptions.map((skill, index) => (
                                           <div
                                             key={index}
                                             className="px-4 py-2 hover:bg-purple-50 cursor-pointer flex items-center justify-between text-sm"
                                             onClick={() => handleSelectSkill(skill)}
                                           >
                                             <span>{skill}</span>
                                             <button
                                               type="button"
                                               className="text-purple-500 hover:text-purple-700"
                                             >
                                               {/* <Check className="h-4 w-4" /> */}
                                             </button>
                                           </div>
                                         ))
                                       ) : (
                                         <div className="px-4 py-2 text-gray-500 text-sm">
                                           {newSkill
                                             ? "No matching skills found"
                                             : "Type to search or select a skill"}
                                         </div>
                                       )}
                                     </div>
                                   )}
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
               
                              
                             </form>
                </div>

                {/* Responsibility Section */}
                <div className="mb-4">
                  <h3 className="text-gray-600 mb-4">Responsibility</h3>
                  <textarea
                    placeholder="Enter responsibilities here..."
                    className="w-full border-b border-gray-300  focus:outline-none focus:border-purple-500"
                    rows={4}
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end gap-4 pt-6">
                <button
                  type="button"
                  className="px-8 py-2.5 rounded-full bg-[#FF9776] text-white transition-colors text-sm font-medium"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-8 py-2.5 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors text-sm font-medium"
                  onClick={goToNextStep}
                >
                  Save & Next
                </button>
              </div>
            </div>
          )}

          {/* Step 5 Form */}
          {currentStep === 5 && (
            <div className="flex-1 overflow-y-hidden">
              <div className="p-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Job Timing */}
                  <div>
                   
                    <TimePicker
          label="Job Timing"
          startTime={jobStartTime}
          endTime={jobEndTime}
          onStartTimeChange={setJobStartTime}
          onEndTimeChange={setJobEndTime}
        />

                  </div>

                  {/* Interview Details */}
                  <div>
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                      {/* Interview Timing */}
                      <div>
                       
                        <TimePicker
            label="Interview Details"
            startTime={interviewStartTime}
            endTime={interviewEndTime}
            onStartTimeChange={setInterviewStartTime}
            onEndTimeChange={setInterviewEndTime}
          />
                      </div>

                      {/* Interview Location */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Interview Location
                        </label>
                        <input
                          type="text"
                          name="interviewLocation"
                          value={formData.interviewLocation}
                          onChange={handleChange}
                          placeholder="Enter location"
                          className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                        />
                      </div>
                    </div>

                    {/* Instructions for Interview */}
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instructions for Interview
                      </label>
                      <textarea
                        name="interviewInstructions"
                        value={formData.interviewInstructions}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Enter instructions for the interview"
                        className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                      ></textarea>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {/* Action buttons */}
                  <div className="flex justify-end gap-4 pt-6">
                    <button
                      type="button"
                      className="px-6 py-2.5 rounded-full bg-[#FF9776] text-white transition-colors text-sm font-medium"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors text-sm font-medium"
                      // onClick={goToNextStep}
                      onClick={onClose}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-medium mb-4">
              Are you sure you want to close?
            </h3>
            <p className="text-gray-500 mb-6">
              Any unsaved changes will be lost.
            </p>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 transition-colors text-sm font-medium"
                onClick={handleCancelClose}
              >
                No, continue editing
              </button>
              <button
                type="button"
                className="px-6 py-2 rounded-full bg-[#FF9776] text-white transition-colors text-sm font-medium"
                onClick={handleConfirmClose}
              >
                Yes, close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


 const StyledDropdown = ({
  label,
  placeholder = "Select an option",
  options = [],
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Get the selected option label
  const selectedOption = options.find((option) => option.value === value);
  const selectedLabel = selectedOption ? selectedOption.label : "";

  // Group options by group
  const groupedOptions = options.reduce((groups, option) => {
    const group = option.group || "default";
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(option);
    return groups;
  }, {});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Dropdown Label */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      {/* Dropdown Wrapper */}
      <div className="relative" ref={dropdownRef}>
        {/* Dropdown Button */}
        <div
          className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500 appearance-none bg-transparent cursor-pointer flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${
              value ? "text-gray-900 font-medium" : "text-gray-500"
            }`}
          >
            {selectedLabel || placeholder}
          </div>
          <ChevronDown className="h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {Object.keys(groupedOptions).map((group) => (
              <div key={group}>
                {/* Group Header */}
                {group !== "default" && (
                  <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
                    {group}
                  </div>
                )}
                {/* Group Options */}
                <ul className="py-1">
                  {groupedOptions[group].map((option, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 text-sm cursor-pointer ${
                        option.value === value
                          ? " text-black font-medium"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => {
                        onChange(option.value);
                        setIsOpen(false);
                      }}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// PropTypes for validation
StyledDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      group: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
