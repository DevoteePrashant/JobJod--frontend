// "use client"

// import { useState } from "react"
// import { ChevronDown, ChevronLeft } from "lucide-react"
// import Header from "./Header"
// import { Link } from "react-router-dom"

// export default function FormJobseeker6() {
//   const [formData, setFormData] = useState({
//     employmentType: "",
//     workplace: "",
//     location: "",
//     shift: ""
//   })

//   const handleChange = e => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Handle form submission logic here
//   }

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen relative flex items-center justify-center p-4  bg-gradient-to-r from-purple-100 via-white to-purple-50">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 w-full h-full">
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-y8VIQbQhSCi7xcFqUiFvxXXwZtkvps.svg"
//             alt="Background Pattern"
//             className="w-full h-full object-cover opacity-30"
//             width={1440}
//             height={1024}
//             priority
//           />
//         </div>
//         <div className="relative w-full max-w-4xl">
//           {/* Progress Steps */}
//           <div className="flex justify-between mb-4 md:mb-6 px-2 md:px-8">
//             <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%]"></div>
//             <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
//           </div>

//           {/* Form Container - Fixed height to match other forms */}
//           <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 h-[450px] md:h-[520px] overflow-y-auto">
//             {/* Header with back button */}
//             <div className="flex items-center mb-4 md:mb-8">
//               <button
//                 type="button"
//                 className="mr-3 md:mr-4 rounded-full border border-black p-0.5 md:p-1"
//                 aria-label="Go back"
//               >
//                 <Link to="/FormJobseeker5">
//                   <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
//                 </Link>
//               </button>
//               <h2 className="text-xl md:text-2xl font-bold">Job Preferences</h2>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
//             >
//               <div className="flex-1">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6">
//                   {/* Preferred Employment Type */}
//                   <div>
//                     <label
//                       htmlFor="employmentType"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Preferred employment type
//                     </label>
//                     <div className="relative">
//                       <select
//                         id="employmentType"
//                         name="employmentType"
//                         value={formData.employmentType}
//                         onChange={handleChange}
//                         className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-sm md:text-base"
//                       >
//                         <option value="" disabled></option>
//                         <option value="full-time">Full Time</option>
//                         <option value="part-time">Part Time</option>
//                         <option value="contract">Contract</option>
//                         <option value="freelance">Freelance</option>
//                       </select>
//                       <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
//                     </div>
//                   </div>

//                   {/* Preferred Workplace */}
//                   <div>
//                     <label
//                       htmlFor="workplace"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Preferred workplace
//                     </label>
//                     <div className="relative">
//                       <select
//                         id="workplace"
//                         name="workplace"
//                         value={formData.workplace}
//                         onChange={handleChange}
//                         className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-sm md:text-base"
//                       >
//                         <option value="" disabled></option>
//                         <option value="on-site">On Site</option>
//                         <option value="remote">Remote</option>
//                         <option value="hybrid">Hybrid</option>
//                       </select>
//                       <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
//                     </div>
//                   </div>

//                   {/* Preferred Location */}
//                   <div>
//                     <label
//                       htmlFor="location"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Preferred Location
//                     </label>
//                     <div className="relative">
//                       <select
//                         id="location"
//                         name="location"
//                         value={formData.location}
//                         onChange={handleChange}
//                         className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-sm md:text-base"
//                       >
//                         <option value="" disabled></option>
//                         <option value="new-york">New York</option>
//                         <option value="london">London</option>
//                         <option value="singapore">Singapore</option>
//                         <option value="tokyo">Tokyo</option>
//                       </select>
//                       <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
//                     </div>
//                   </div>

//                   {/* Preferred Shift */}
//                   <div>
//                     <label
//                       htmlFor="shift"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Preferred shift
//                     </label>
//                     <div className="relative">
//                       <select
//                         id="shift"
//                         name="shift"
//                         value={formData.shift}
//                         onChange={handleChange}
//                         className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-sm md:text-base"
//                       >
//                         <option value="" disabled></option>
//                         <option value="day">Day Shift</option>
//                         <option value="night">Night Shift</option>
//                         <option value="flexible">Flexible</option>
//                       </select>
//                       <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-end mt-auto">
//                 <Link to="/Jobseeker" className="w-full md:w-auto">
//                   <button
//                     type="submit"
//                     className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base w-full md:w-auto"
//                   >
//                     Submit
//                   </button>
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import logo2 from "../image/logo2.png"

function FormJobseeker6() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [formData, setFormData] = useState({
    employmentType: "",
    workplace: "",
    location: "",
    shift: ""
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

  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
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
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            </div>

            {/* Form Container - Fixed height to match other forms */}
            <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] overflow-y-auto">
              {/* Header with back button */}
              <div className="flex items-center mb-4 md:mb-8">
                <button
                  type="button"
                  className="mr-3 md:mr-4 rounded-full border border-black p-0.5 md:p-1"
                  aria-label="Go back"
                >
                  <Link to="/FormJobseeker5">
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </button>
                <h2 className="text-xl md:text-2xl font-bold">
                  Job Preferences
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
              >
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-6">
                    {/* Preferred Employment Type */}
                    <div>
                      <label
                        htmlFor="employmentType"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Preferred employment type
                      </label>
                      <div className="relative">
                        <select
                          id="employmentType"
                          name="employmentType"
                          value={formData.employmentType}
                          onChange={handleChange}
                          className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-base"
                        >
                          <option value="" disabled></option>
                          <option value="full-time">Full Time</option>
                          <option value="part-time">Part Time</option>
                          <option value="contract">Contract</option>
                          <option value="freelance">Freelance</option>
                        </select>
                        <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
                      </div>
                    </div>

                    {/* Preferred Workplace */}
                    <div>
                      <label
                        htmlFor="workplace"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Preferred workplace
                      </label>
                      <div className="relative">
                        <select
                          id="workplace"
                          name="workplace"
                          value={formData.workplace}
                          onChange={handleChange}
                          className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-base"
                        >
                          <option value="" disabled></option>
                          <option value="on-site">On Site</option>
                          <option value="remote">Remote</option>
                          <option value="hybrid">Hybrid</option>
                        </select>
                        <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
                      </div>
                    </div>

                    {/* Preferred Location */}
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Preferred Location
                      </label>
                      <div className="relative">
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-base"
                        >
                          <option value="" disabled></option>
                          <option value="new-york">New York</option>
                          <option value="london">London</option>
                          <option value="singapore">Singapore</option>
                          <option value="tokyo">Tokyo</option>
                        </select>
                        <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
                      </div>
                    </div>

                    {/* Preferred Shift */}
                    <div>
                      <label
                        htmlFor="shift"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Preferred shift
                      </label>
                      <div className="relative">
                        <select
                          id="shift"
                          name="shift"
                          value={formData.shift}
                          onChange={handleChange}
                          className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-base"
                        >
                          <option value="" disabled></option>
                          <option value="day">Day Shift</option>
                          <option value="night">Night Shift</option>
                          <option value="flexible">Flexible</option>
                        </select>
                        <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-6 md:mt-auto">
                  <Link to="/Jobseeker" className="w-full md:w-auto">
                    <button
                      type="submit"
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base w-full md:w-auto min-w-[120px]"
                    >
                      Submit
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

export default FormJobseeker6
