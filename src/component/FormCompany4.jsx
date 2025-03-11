

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import logo2 from "../image/logo2.png";

// import Header from "./Header"

export default function FormCompany4() {
  const [formData, setFormData] = useState({
    companyEnvironment: "",
    employeeBenefits: "",
    careerDevelopment: ""
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* <Header /> */}
      <header className=" p-8 py-4 w-full relative overflow-hidden bg-gradient-to-r from-purple-100 via-white to-purple-50">
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

        {/* SVG Patterns */}
        <div className="absolute inset-0 w-full h-full">
          {/* First SVG Pattern */}
          <svg
            width="804"
            height="636"
            className="absolute left-0 top-0"
            viewBox="0 0 804 636"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-192.5 -238C-192.5 -238 -76.5 -191 -76.5 -95.5C-76.5 0 -192.5 47 -192.5 142.5C-192.5 238 -76.5 285 -76.5 380.5C-76.5 476 -192.5 523 -192.5 618.5C-192.5 714 -76.5 761 -76.5 856.5"
              stroke="#E4E2FF"
              strokeWidth="3"
            />
            {/* Other paths remain the same */}
          </svg>

          {/* Second SVG Pattern (mirrored on the right) */}
          <svg
            width="804"
            height="636"
            className="absolute right-0 top-0 transform scale-x-[-1]"
            viewBox="0 0 804 636"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-192.5 -238C-192.5 -238 -76.5 -191 -76.5 -95.5C-76.5 0 -192.5 47 -192.5 142.5C-192.5 238 -76.5 285 -76.5 380.5C-76.5 476 -192.5 523 -192.5 618.5C-192.5 714 -76.5 761 -76.5 856.5"
              stroke="#E4E2FF"
              strokeWidth="3"
            />
            {/* Other paths remain the same */}
          </svg>
        </div>
      <div className="container relative mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold space-x-16"><></><Link to="/"><img src={logo2} alt="JobJod" /></Link></div>
          <nav className="hidden md:flex ml-10 space-x-6">
            <Link to="/JobListingPage" className="text-black-800 font-semibold">
              Find Jobs
            </Link>
            <a href="##" className=" text-black-800 font-semibold ">
              Browse Company
            </a>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">
        <Link to="/JobListingPage" className="text-black font-semibold">
            Hire Now <span className="text-gray-400">|</span>
            </Link>
          {/* <button className="bg-black text-white px-4 py-2 rounded-full"> */}
          <button className="bg-black text-white font-bold py-2 px-6 items-center text-center rounded-full  focus:outline-none focus:shadow-outline">
          <Link to="/LoginPage" className="text-sm text-black-500 ">Login / Signup</Link>
          </button>
          
          {/* </button> */}
        </div>
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            width="30"
            height="25"
            viewBox="0 0 30 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="5" rx="2" fill="#000" />
            <rect y="10" width="30" height="5" rx="2" fill="#000" />
            <rect y="20" width="30" height="5" rx="2" fill="#000" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link to="/JobListingPage" > Find Jobs</Link>
            <Link to="/" > Browse Company</Link>
            <Link to="/">Hire Now</Link>
            <Link to="/LoginPage"><button className="bg-black text-white px-4 py-2 rounded-full">Login/Signup </button></Link>
          </nav>
        </div>
      )}
    </header>
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
