// "use client"

// import { useState } from "react"
// import { ChevronDown, ChevronLeft } from "lucide-react"
// import { Link } from "react-router-dom"
// import Header from "./Header"

// export default function FormJobseeker2() {
//   const [formData, setFormData] = useState({
//     highestEducation: "",
//     degree: "",
//     specialization: "",
//     collegeName: "",
//     completionYear: "",
//     currentlyRunning: false
//   })

//   const handleChange = e => {
//     const { name, value, type } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === "checkbox" ? e.target.checked : value
//     }))
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
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
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
//                 <Link to="/FormJobseeker">
//                   <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
//                 </Link>
//               </button>
//               <h2 className="text-xl md:text-2xl font-bold">Education</h2>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
//             >
//               <div className="flex-1">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-6">
//                   {/* Highest Education */}
//                   <div className="col-span-1 md:col-span-2">
//                     <label
//                       htmlFor="highestEducation"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Your highest education
//                     </label>
//                     <div className="relative">
//                       <select
//                         id="highestEducation"
//                         name="highestEducation"
//                         value={formData.highestEducation}
//                         onChange={handleChange}
//                         className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-sm md:text-base"
//                       >
//                         <option value="" disabled>
//                           Select Education
//                         </option>
//                         <option value="high-school">High School</option>
//                         <option value="bachelors">Bachelor's Degree</option>
//                         <option value="masters">Master's Degree</option>
//                         <option value="phd">PhD</option>
//                         <option value="other">Other</option>
//                       </select>
//                       <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
//                     </div>
//                   </div>

//                   {/* Degree */}
//                   <div>
//                     <label
//                       htmlFor="degree"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Degree
//                     </label>
//                     <input
//                       type="text"
//                       id="degree"
//                       name="degree"
//                       value={formData.degree}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-sm md:text-base"
//                     />
//                   </div>

//                   {/* Specialization */}
//                   <div>
//                     <label
//                       htmlFor="specialization"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Specialization
//                     </label>
//                     <input
//                       type="text"
//                       id="specialization"
//                       name="specialization"
//                       value={formData.specialization}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-sm md:text-base"
//                     />
//                   </div>

//                   {/* College Name */}
//                   <div>
//                     <label
//                       htmlFor="collegeName"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       College Name
//                     </label>
//                     <input
//                       type="text"
//                       id="collegeName"
//                       name="collegeName"
//                       value={formData.collegeName}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-sm md:text-base"
//                     />
//                   </div>

//                   {/* Completion Year */}
//                   <div>
//                     <label
//                       htmlFor="completionYear"
//                       className="block text-sm font-medium text-gray-700 mb-1"
//                     >
//                       Completion Year
//                     </label>
//                     <input
//                       type="text"
//                       id="completionYear"
//                       name="completionYear"
//                       value={formData.completionYear}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-sm md:text-base"
//                     />
//                   </div>

//                   {/* Currently Running Checkbox */}
//                   <div className="mt-2 col-span-1 md:col-span-2">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         name="currentlyRunning"
//                         checked={formData.currentlyRunning}
//                         onChange={handleChange}
//                         className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 h-4 w-4"
//                       />
//                       <span className="ml-2 text-sm font-bold text-gray-700">
//                         Currently running
//                       </span>
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Buttons */}
//               <div className="flex flex-col md:flex-row justify-between items-center mt-auto">
//                 <button
//                   type="button"
//                   className="text-black px-3 py-2 rounded-full font-medium w-full md:w-auto mb-3 md:mb-0 text-sm md:text-base"
//                 >
//                   Add more +
//                 </button>
//                 <Link to="/FormJobseeker3">
//                   <button
//                     type="submit"
//                     className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full font-medium w-full md:w-auto text-sm md:text-base"
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




import { useState } from "react"
import logo2 from "../image/logo2.png"
import { Link } from "react-router-dom"
import { ChevronDown, ChevronLeft } from "lucide-react"

function FormJobseeker2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    location: "",
    gender: "",
    mobileNumber: "",
    dateOfBirth: "",
    highestEducation: "",
    degree: "",
    specialization: "",
    collegeName: "",
    completionYear: "",
    currentlyRunning: false
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
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
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
              <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
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
                  <Link to="/FormJobseeker">
                    <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                  </Link>
                </button>
                <h2 className="text-xl md:text-2xl font-bold">Education</h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="h-[calc(100%-60px)] md:h-[calc(100%-80px)] flex flex-col"
              >
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-6">
                    {/* Highest Education */}
                    <div className="col-span-1 md:col-span-2">
                      <label
                        htmlFor="highestEducation"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Your highest education
                      </label>
                      <div className="relative">
                        <select
                          id="highestEducation"
                          name="highestEducation"
                          value={formData.highestEducation}
                          onChange={handleChange}
                          className="w-full appearance-none border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none bg-transparent text-base"
                        >
                          <option value="" disabled>
                            Select Education
                          </option>

                          <option value="high-school">High School</option>
                          <option value="bachelors">Bachelor's Degree</option>
                          <option value="masters">Master's Degree</option>
                          <option value="phd">PhD</option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" />
                      </div>
                    </div>

                    {/* Degree */}
                    <div>
                      <label
                        htmlFor="degree"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Degree
                      </label>
                      <input
                        type="text"
                        id="degree"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Specialization */}
                    <div>
                      <label
                        htmlFor="specialization"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Specialization
                      </label>
                      <input
                        type="text"
                        id="specialization"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* College Name */}
                    <div>
                      <label
                        htmlFor="collegeName"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        College Name
                      </label>
                      <input
                        type="text"
                        id="collegeName"
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Completion Year */}
                    <div>
                      <label
                        htmlFor="completionYear"
                        className="block text-left text-sm font-medium text-gray-700 mb-1"
                      >
                        Completion Year
                      </label>
                      <input
                        type="text"
                        id="completionYear"
                        name="completionYear"
                        value={formData.completionYear}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none text-base"
                      />
                    </div>

                    {/* Currently Running Checkbox */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-auto ">
                      <label className="inline-flex">
                        <input
                          type="checkbox"
                          name="currentlyRunning"
                          checked={formData.currentlyRunning}
                          onChange={handleChange}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 h-4 w-4"
                        />
                        <span className="ml-2 text-sm font-bold text-black">
                          Currently running
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Bottom Buttons */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-auto">
                  <button
                    type="button"
                    className="text-black px-3 py-2 rounded-full font-medium  md:w-auto mb-3 md:mb-0 text-sm md:text-base  "
                  >
                    Add more +
                  </button>
                  <Link to="/FormJobseeker3">
                    <button
                      type="submit"
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium w-full md:w-auto min-w-[120px]"
                    >
                      Save & Next
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

export default FormJobseeker2
