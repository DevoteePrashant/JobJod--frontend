"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import Header from "./Header"
import { Link } from "react-router-dom"

export default function FormCompany5() {
  const [hasAgreed, setHasAgreed] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Form submitted, agreement status:", hasAgreed)
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

          {/* Form Container - Changed to min-height for mobile and overflow only on desktop */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] md:overflow-y-auto">
            {/* Header with back button */}
            <div className="flex items-center mb-4 md:mb-8">
              <Link to="/FormCompany4">
                <button
                  type="button"
                  className="mr-3 md:mr-4 rounded-full border border-gray-300 p-0.5 md:p-1"
                  aria-label="Go back"
                >
                  <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </Link>
              <h2 className="text-xl md:text-2xl font-bold">
                Legal Information
              </h2>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Legal Content Container - Keeping this scrollable as intended */}
              <div className="mb-6 md:mb-8 max-h-[200px] md:max-h-[300px] overflow-y-auto pr-1 md:pr-2">
                <div className="prose prose-sm md:prose-base prose-gray max-w-none">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                    Terms and Conditions
                  </h3>
                  <p className="text-sm md:text-base">
                    Please read these terms and conditions carefully before
                    proceeding. By submitting this form, you agree to be bound
                    by these terms.
                  </p>
                  {/* Add your legal content here */}
                  <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam auctor, nisl eget ultricies tincidunt, nisl nisl
                    aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam
                    auctor, nisl eget ultricies tincidunt, nisl nisl aliquam
                    nisl, eget ultricies nisl nisl eget nisl.
                  </p>
                  <p className="text-sm md:text-base">
                    Nullam auctor, nisl eget ultricies tincidunt, nisl nisl
                    aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam
                    auctor, nisl eget ultricies tincidunt, nisl nisl aliquam
                    nisl, eget ultricies nisl nisl eget nisl.
                  </p>
                </div>
              </div>

              {/* Agreement Checkbox */}
              <div className="flex items-center mb-6 md:mb-8">
                <input
                  type="checkbox"
                  id="agreement"
                  checked={hasAgreed}
                  onChange={e => setHasAgreed(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                />
                <label
                  htmlFor="agreement"
                  className="ml-2 text-xs md:text-sm text-gray-600"
                >
                  I have read and agree to the terms and conditions
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end items-center">
                <Link to="/CompanyDashboard">
                  <button
                    type="submit"
                    disabled={!hasAgreed}
                    className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium ${
                      hasAgreed
                        ? "bg-purple-500 hover:bg-purple-600 text-white"
                        : "bg-purple-300 text-white cursor-not-allowed"
                    }`}
                  >
                    Submit
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
