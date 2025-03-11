// import { Calendar, ChevronLeft } from "lucide-react"

// export default function CertificationForm() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-3xl bg-white rounded-3xl shadow-sm p-6 md:p-8">
//         {/* Progress Steps */}
//         <div className="flex gap-2 mb-8">
//           <div className="h-2 rounded-full bg-green-400 flex-1"></div>
//           <div className="h-2 rounded-full bg-green-400 flex-1"></div>
//           <div className="h-2 rounded-full bg-green-400 flex-1"></div>
//           <div className="h-2 rounded-full bg-gray-300 flex-1"></div>
//           <div className="h-2 rounded-full bg-gray-300 flex-1"></div>
//           <div className="h-2 rounded-full bg-gray-300 flex-1"></div>
//         </div>

//         {/* Header */}
//         <div className="flex items-center gap-4 mb-10">
//           <button className="rounded-full p-2 border border-gray-200 flex items-center justify-center">
//             <ChevronLeft className="h-5 w-5" />
//           </button>
//           <h1 className="text-xl font-medium">Certification & Other Course</h1>
//         </div>

//         {/* Form */}
//         <form className="space-y-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Certificate Title */}
//             <div className="space-y-1">
//               <label
//                 htmlFor="certificate-title"
//                 className="text-gray-600 text-sm"
//               >
//                 Certificate title
//               </label>
//               <div className="border-b border-gray-300 pb-1">
//                 <input
//                   id="certificate-title"
//                   type="text"
//                   className="w-full focus:outline-none"
//                 />
//               </div>
//             </div>

//             {/* Organization */}
//             <div className="space-y-1">
//               <label htmlFor="organization" className="text-gray-600 text-sm">
//                 Organization
//               </label>
//               <div className="border-b border-gray-300 pb-1">
//                 <input
//                   id="organization"
//                   type="text"
//                   className="w-full focus:outline-none"
//                 />
//               </div>
//             </div>

//             {/* Date */}
//             <div className="space-y-1">
//               <label htmlFor="date" className="text-gray-600 text-sm">
//                 Date
//               </label>
//               <div className="border-b border-gray-300 pb-1 flex items-center">
//                 <input
//                   id="date"
//                   type="date"
//                   className="w-full focus:outline-none"
//                 />
//                 {/* <Calendar className="h-5 w-5 text-gray-500 flex-shrink-0" /> */}
//               </div>
//             </div>

//             {/* Valid Till */}
//             <div className="space-y-1">
//               <label htmlFor="valid-till" className="text-gray-600 text-sm">
//                 Valid till
//               </label>
//               <div className="border-b border-gray-300 pb-1 flex items-center">
//                 <input
//                   id="valid-till"
//                   type="date"
//                   className="w-full focus:outline-none"
//                 />
//                 {/* <Calendar className="h-5 w-5 text-gray-500 flex-shrink-0" /> */}
//               </div>
//             </div>
//           </div>

//           {/* Link/Credentials */}
//           <div className="space-y-1">
//             <label htmlFor="link-credentials" className="text-gray-600 text-sm">
//               Link / Credentials
//             </label>
//             <div className="border-b border-gray-300 pb-1">
//               <input
//                 id="link-credentials"
//                 type="text"
//                 className="w-full focus:outline-none"
//               />
//             </div>
//           </div>

//           {/* Never Expire Checkbox */}
//           <div className="flex items-center space-x-2 pt-2">
//             <div className="h-5 w-5 border border-gray-300 rounded flex items-center justify-center">
//               <input
//                 type="checkbox"
//                 id="never-expire"
//                 className="opacity-0 absolute h-5 w-5 cursor-pointer"
//               />
//             </div>
//             <label htmlFor="never-expire" className="text-sm">
//               Never Expire
//             </label>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-between items-center pt-8">
//             <div className="text-gray-500 text-sm">Skip & Next</div>
//             <div className="flex gap-4">
//               <button
//                 type="button"
//                 className="bg-orange-200 hover:bg-orange-300 text-orange-600 rounded-full px-6 py-2.5 text-sm"
//               >
//                 Add More
//               </button>
//               <button
//                 type="button"
//                 className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 py-2.5 text-sm"
//               >
//                 Save & Next
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }






"use client"

"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft } from "lucide-react"
// import Header from "./Header"
import { Link } from "react-router-dom"
import logo2 from "../image/logo2.png"
function FormJobseeker7() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [formData, setFormData] = useState({
    employmentType: "",
    workplace: "",
    location: "",
    shift: "",
    neverExpire: false // Add this new state
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
            <div className="text-2xl font-bold space-x-16">
              <></>
              <Link to="/">
                <img src={logo2 || "/placeholder.svg"} alt="JobJod" />
              </Link>
            </div>
            <nav className="hidden md:flex ml-10 space-x-6">
              <Link
                to="/JobListingPage"
                className="text-black-800 font-semibold"
              >
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
              <Link to="/LoginPage" className="text-sm text-black-500 ">
                Login / Signup
              </Link>
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
              <Link to="/JobListingPage"> Find Jobs</Link>
              <Link to="/"> Browse Company</Link>
              <Link to="/">Hire Now</Link>
              <Link to="/LoginPage">
                <button className="bg-black text-white px-4 py-2 rounded-full">
                  Login/Signup{" "}
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <section className="relative w-full min-h-[900px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-100 via-white to-purple-50">
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
        <div className="relative w-full max-w-4xl">
          {/* Progress Steps */}

          {/* Progress Steps */}

          {/* Header */}

          {/* Form */}

          {/* Form Container - Fixed height to match other forms */}
          <div className="flex justify-between mb-4 md:mb-6 px-2 md:px-8">
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%]"></div>
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 h-[450px] md:h-[520px] ">
            {/* Header */}
            <div className="flex items-center gap-4 mb-10">
              <Link to="/Formjobseeker3">
                <button className="rounded-full p-2 border border-gray-200 flex items-center justify-center">
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </Link>
              <h1 className="text-xl md:text-2xl font-bold">
                Certification & Other Course
              </h1>
            </div>

            {/* Form */}
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Certificate Title */}
                <div className="space-y-1">
                  <label
                    htmlFor="certificate-title"
                    className="text-gray-600 text-sm"
                  >
                    Certificate title
                  </label>
                  <div className="border-b border-gray-300 pb-1">
                    <input
                      id="certificate-title"
                      type="text"
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div className="space-y-1">
                  <label
                    htmlFor="organization"
                    className="text-gray-600 text-sm"
                  >
                    Organization
                  </label>
                  <div className="border-b border-gray-300 pb-1">
                    <input
                      id="organization"
                      type="text"
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-1">
                  <label htmlFor="date" className="text-gray-600 text-sm">
                    Date
                  </label>
                  <div className="border-b border-gray-300 pb-1 flex items-center">
                    <input
                      id="date"
                      type="date"
                      className="w-full focus:outline-none"
                    />
                    {/* <Calendar className="h-5 w-5 text-gray-500 flex-shrink-0" /> */}
                  </div>
                </div>

                {/* Valid Till */}
                <div className="space-y-1">
                  <label htmlFor="valid-till" className="text-gray-600 text-sm">
                    Valid till
                  </label>
                  <div className="border-b border-gray-300 pb-1 flex items-center">
                    <input
                      id="valid-till"
                      type="date"
                      className="w-full focus:outline-none"
                    />
                    {/* <Calendar className="h-5 w-5 text-gray-500 flex-shrink-0" /> */}
                  </div>
                </div>
              </div>

              {/* Link/Credentials */}
              <div className="space-y-1">
                <label
                  htmlFor="link-credentials"
                  className="text-gray-600 text-sm"
                >
                  Link / Credentials
                </label>
                <div className="border-b border-gray-300 pb-1">
                  <input
                    id="link-credentials"
                    type="text"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <div className="h-5 w-5 border border-gray-300 rounded flex items-center justify-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="neverExpire"
                    name="neverExpire"
                    className="h-4 w-4 cursor-pointer"
                  />
                </div>

                <label htmlFor="neverExpire" className="text-sm cursor-pointer">
                  Never Expire
                </label>
              </div>

              {/* Action Buttons */}
              {/* Bottom Buttons */}
              <div className="flex flex-col md:flex-row justify-between ml-96 items-center mt-auto">
                <Link
                  to="/Formjobseeker4"
                  className="mb-2 md:mb-0 w-full md:w-auto"
                >
                  <button
                    type="button"
                    className="text-gray-600 font-medium text-sm md:text-base w-full md:w-auto"
                  >
                    Skip & Next
                  </button>
                </Link>
                <button
                  type="button"
                  className="bg-orange-400 hover:bg-orange-500 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium w-full md:w-auto mb-2 md:mb-0 text-sm md:text-base"
                >
                  Add More +
                </button>
                <Link to="/Formjobseeker4" className="w-full md:w-auto">
                  <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium w-full md:w-auto text-sm md:text-base"
                  >
                    Save & Next
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
      </section>

      {/* Mobile Menu */}
      {/* {isMenuOpen && ( */}
      <div className="md:hidden fixed top-[4rem] left-0 right-0 bg-white py-4 shadow-md z-50 animate-slideDown">
        <nav className="flex flex-col space-y-4 px-4">
          <Link
            to="/JobListingPage"
            className="text-gray-800 hover:text-black py-2"
          >
            Find Jobs
          </Link>
          <Link to="/companies" className="text-gray-800 hover:text-black py-2">
            Browse Company
          </Link>
          <Link to="/hire" className="text-gray-800 hover:text-black py-2">
            Hire Now
          </Link>
          <Link
            to="/LoginPage"
            className="bg-black text-white font-medium py-2 px-6 rounded-full text-center"
          >
            Login / Signup
          </Link>
        </nav>
      </div>
      {/* )} */}
    </>
  )
}

export default FormJobseeker7


