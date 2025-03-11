// "use client"

// import { useState } from "react"
// import { ChevronDown } from "lucide-react"
// import Header from "./Header"
// import { Link } from "react-router-dom"

// export default function FormJobseeker() {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   emailAddress: "",
  //   location: "",
  //   gender: "",
  //   mobileNumber: "",
  //   dateOfBirth: ""
  // })

  // const handleChange = e => {
  //   const { name, value } = e.target
  //   setFormData(prev => ({ ...prev, [name]: value }))
  // }

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   console.log("Form submitted:", formData)
  //   // Handle form submission logic here
  // }

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
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//           </div>

//           {/* Form Container - Fixed height to match other forms */}
//           <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 h-[450px] md:h-[520px] overflow-y-auto">
//             <div className="mb-4 md:mb-8">
//               <h2 className="text-xl md:text-2xl font-bold">
//                 Basic Information
//               </h2>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
//             >
//               <div className="flex-1">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
//                   {/* Full Name */}
//                   <div>
//                     <llabel
//                       htmlFor="fullName"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Full Name
//                     </llabel>
//                     <input
//                       type="text"
//                       id="fullName"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
//                     />
//                   </div>

//                   {/* Gender */}
//                   <div>
//                     <llabel
//                       htmlFor="gender"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Gender
//                     </llabel>
//                     <div className="relative">
//                       <select
//                         id="gender"
//                         name="gender"
//                         value={formData.gender}
//                         onChange={handleChange}
//                         className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent"
//                       >
//                         <option value="" disabled></option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                         <option value="prefer-not-to-say">
//                           Prefer not to say
//                         </option>
//                       </select>
//                       <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
//                     </div>
//                   </div>

//                   {/* Email Address */}
//                   <div>
//                     <llabel
//                       htmlFor="emailAddress"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Email Address
//                     </llabel>
//                     <input
//                       type="email"
//                       id="emailAddress"
//                       name="emailAddress"
//                       value={formData.emailAddress}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
//                     />
//                   </div>

//                   {/* Mobile Number */}
//                   <div>
//                     <llabel
//                       htmlFor="mobileNumber"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Mobile Number
//                     </llabel>
//                     <input
//                       type="tel"
//                       id="mobileNumber"
//                       name="mobileNumber"
//                       value={formData.mobileNumber}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
//                     />
//                   </div>

//                   {/* Location */}
//                   <div>
//                     <llabel
//                       htmlFor="location"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Location
//                     </llabel>
//                     <input
//                       type="text"
//                       id="location"
//                       name="location"
//                       value={formData.location}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
//                     />
//                   </div>

//                   {/* Date of Birth */}
//                   <div>
//                     <llabel
//                       htmlFor="dateOfBirth"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Date of Birth
//                     </llabel>
//                     <div className="relative">
//                       <input
//                         type="date"
//                         id="dateOfBirth"
//                         name="dateOfBirth"
//                         value={formData.dateOfBirth}
//                         onChange={handleChange}
//                         placeholder="DD/MM/YYYY"
//                         className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none"
//                       />
//                     </div>
//                   </div>
//                   {/* Pincode */}
                         
//                     <div>
//                     <llabel
//                       htmlFor="pincode"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Pincode
//                     </llabel>
//                     <input
//                       type="text"
//                       id="pincode"
//                       name="pincode"
//                       pattern="\d{6}" maxlength="6" required
//                       value={formData.pincode}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Save & Next Button */}
//               <div className="flex justify-end mt-auto">
//                 <Link to="/FormJobseeker2">
//                   <button
//                     type="submit"
//                     className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium w-full md:w-auto"
//                   >
//                     Save & Next
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




import React, { useState } from 'react'
import logo2 from "../image/logo2.png";
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { label } from 'recharts';

function FormJobseeker() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    location: "",
    gender: "",
    mobileNumber: "",
    dateOfBirth: ""
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
        <div className="relative w-full container mx-auto px-6 py-20 text-center z-10">
        <div className="mx-auto w-full max-w-4xl">
          {/* Progress Steps */}
          
          <div className="flex justify-between mb-4 md:mb-6 px-2 md:px-8">
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%]"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>

          {/* Form Container - Fixed height to match other forms */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 h-[450px] md:h-[520px] overflow-y-auto">
              <div className="mb-4 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-left">Basic Information</h2>
              </div>

              <form onSubmit={handleSubmit} className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col">
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-left   text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label htmlFor="gender" className="block  text-left  text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <div className="relative">
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent"
                    >
                      <option value="" disabled></option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="emailAddress" className=" text-left  block text-sm text-left font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobileNumber" className=" text-left  block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                {/* Location */}
                <div>
                  <label htmlFor="location" className="block text-left   text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="dateOfBirth" className="block text-left   text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none"
                    />
                   
                  </div>
                </div>

                {/* Pincode */}
                <div>
                  <label htmlFor="pincode" className="block text-left   text-sm font-medium text-gray-700 mb-1">
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    pattern="\d{6}"
                    maxLength={6}
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Save & Next Button */}
            <div className="flex justify-end mt-auto">
                <Link to="/FormJobseeker2">                   <button
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium w-full md:w-auto"
                  >
                    Save & Next
                  </button>
                </Link>
              </div>
          </form>
            </div>
        </div> </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
      </section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[4rem] left-0 right-0 bg-white py-4 shadow-md z-50 animate-slideDown">
          <nav className="flex flex-col space-y-4 px-4">
            <Link to="/JobListingPage" className="text-gray-800 hover:text-black py-2">
              Find Jobs
            </Link>
            <Link to="/companies" className="text-gray-800 hover:text-black py-2">
              Browse Company
            </Link>
            <Link to="/hire" className="text-gray-800 hover:text-black py-2">
              Hire Now
            </Link>
            <Link to="/LoginPage" className="bg-black text-white font-medium py-2 px-6 rounded-full text-center">
              Login / Signup
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}

export default FormJobseeker