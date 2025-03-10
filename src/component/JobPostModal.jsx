"use client"

import { useState } from "react"
import { X, ChevronDown, ArrowLeft } from "lucide-react"

export default function JobPostModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1)

  if (!isOpen) return null

  const goToNextStep = () => {
    setCurrentStep(2)
  }

  const goToPreviousStep = () => {
    setCurrentStep(1)
  }

  //   const router = useRouter()
  //   const [formData, setFormData] = useState({
  //     responsibility: "",
  //     qualifications: "",
  //     preferredQualifications: ""
  //   })

  //   const handleChange = e => {
  //     const { name, value } = e.target
  //     setFormData(prev => ({
  //       ...prev,
  //       [name]: value
  //     }))
  //   }

  //   const handleSubmit = e => {
  //     e.preventDefault()
  //     // Handle form submission
  //     console.log(formData)
  //   }

  //   const handleCancel = () => {
  //     router.back()
  //   }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center mb-6">
            {currentStep === 2 ? (
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
                <X className="h-6 w-6" />
              </button>
            )}
            <h2 className="text-xl font-bold ml-4">
              {currentStep === 1 ? "Post Job" : "Job Details"}
            </h2>
          </div>

          {/* Step 1 Form */}
          {currentStep === 1 && (
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </label>
                  <div className="relative">
                    <select className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500 appearance-none bg-transparent">
                      <option value="">Select a job title</option>

                      {/* Technology Sector */}
                      <optgroup label="Technology">
                        <option value="software-engineer">
                          Software Engineer
                        </option>
                        <option value="frontend-developer">
                          Frontend Developer
                        </option>
                        <option value="backend-developer">
                          Backend Developer
                        </option>
                        <option value="full-stack-developer">
                          Full Stack Developer
                        </option>
                        <option value="mobile-developer">
                          Mobile Developer
                        </option>
                        <option value="devops-engineer">DevOps Engineer</option>
                        <option value="data-scientist">Data Scientist</option>
                        <option value="product-designer">
                          Product Designer
                        </option>
                        <option value="ui-ux-designer">UI/UX Designer</option>
                        <option value="qa-engineer">QA Engineer</option>
                      </optgroup>
                    </select>
                    <ChevronDown className="absolute right-2 bottom-2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

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
                    <ChevronDown className="absolute right-2 bottom-2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Industry
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                  />
                </div>

                {/* Department */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                  />
                </div>

                {/* Expiry Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Time
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-purple-500"
                    />
                    <ChevronDown className="absolute right-2 bottom-2 h-5 w-5 text-gray-400" />
                  </div>
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salary
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full border-b border-gray-300 pb-2 pl-8 focus:outline-none focus:border-purple-500"
                    />
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

              {/* Save Button */}
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Job Description */}
                <div className="col-span-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Responsibility
                    </label>
                  </div>
                  <textarea
                    name="responsibility"
                    rows={3}
                    className="w-full resize-none outline-none p-0 pb-2 text-gray-900 placeholder:text-gray-400 text-sm border-0 border-b border-gray-200 focus:border-purple-500"
                    placeholder="Enter job responsibilities..."
                  />
                </div>

                {/* Qualification & Skills */}
                <div className="col-span-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Qualification & Skills
                    </label>
                  </div>
                  <textarea
                    name="qualifications"
                    rows={3}
                    className="w-full resize-none outline-none p-0 pb-2 text-gray-900 placeholder:text-gray-400 text-sm border-0 border-b border-gray-200 focus:border-purple-500"
                    placeholder="Enter required qualifications and skills..."
                  />
                </div>

                {/* Preferred Qualification & Skills */}
                <div className="col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Qualification & Skills
                  </label>
                  <textarea
                    name="preferredQualifications"
                    rows={3}
                    className="w-full resize-none outline-none p-0 pb-2 text-gray-900 placeholder:text-gray-400 text-sm border-0 border-b border-gray-200 focus:border-purple-500"
                    placeholder="Enter preferred qualifications and skills..."
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 pt-6">
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-full bg-[#FF9776] text-white transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition-colors text-sm font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
