// "use client";

// import { useState } from "react";
// import { ChevronLeft } from "lucide-react";
// import Header from "./Header";
// import { Link } from "react-router-dom";

// export default function FormCompany5() {
//   const [hasAgreed, setHasAgreed] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted, agreement status:", hasAgreed);
//     // Handle form submission logic here
//   };

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen relative flex items-center justify-center p-4  bg-gradient-to-r from-purple-100 via-white to-purple-50">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 w-full h-full">
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
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//           </div>

//           {/* Form Container - Changed to min-height for mobile and overflow only on desktop */}
//           <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] md:overflow-y-auto">
//             {/* Header with back button */}
//             <div className="flex items-center mb-4 md:mb-8">
//               <Link to="/FormCompany4">
//                 <button
//                   type="button"
//                   className="mr-3 md:mr-4 rounded-full border border-gray-300 p-0.5 md:p-1"
//                   aria-label="Go back"
//                 >
//                   <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
//                 </button>
//               </Link>
//               <h2 className="text-xl md:text-2xl font-bold">
//                 Legal Information
//               </h2>
//             </div>

//             <form onSubmit={handleSubmit}>
//               {/* Legal Content Container - Keeping this scrollable as intended */}
//               <div className="mb-6 md:mb-8 max-h-[200px] md:max-h-[300px] overflow-y-auto pr-1 md:pr-2">
//                 <div className="prose prose-sm md:prose-base prose-gray max-w-none">
//                   <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
//                     Terms and Conditions
//                   </h3>
//                   <p className="text-sm md:text-base">
//                     Please read these terms and conditions carefully before
//                     proceeding. By submitting this form, you agree to be bound
//                     by these terms.
//                   </p>
//                   {/* Add your legal content here */}
//                   <p className="text-sm md:text-base">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Nullam auctor, nisl eget ultricies tincidunt, nisl nisl
//                     aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam
//                     auctor, nisl eget ultricies tincidunt, nisl nisl aliquam
//                     nisl, eget ultricies nisl nisl eget nisl.
//                   </p>
//                   <p className="text-sm md:text-base">
//                     Nullam auctor, nisl eget ultricies tincidunt, nisl nisl
//                     aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam
//                     auctor, nisl eget ultricies tincidunt, nisl nisl aliquam
//                     nisl, eget ultricies nisl nisl eget nisl.
//                   </p>
//                 </div>
//               </div>

//               {/* Agreement Checkbox */}
//               <div className="flex items-center mb-6 md:mb-8">
//                 <input
//                   type="checkbox"
//                   id="agreement"
//                   checked={hasAgreed}
//                   onChange={(e) => setHasAgreed(e.target.checked)}
//                   className="h-4 w-4 rounded border-gray-300 text-purple-500 focus:ring-purple-500"
//                 />
//                 <label
//                   htmlFor="agreement"
//                   className="ml-2 text-xs md:text-sm text-gray-600"
//                 >
//                   I have read and agree to the terms and conditions
//                 </label>
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-end items-center">
//                 <Link to="/CompanyDashboard">
//                   <button
//                     type="submit"
//                     disabled={!hasAgreed}
//                     className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium ${
//                       hasAgreed
//                         ? "bg-purple-500 hover:bg-purple-600 text-white"
//                         : "bg-purple-300 text-white cursor-not-allowed"
//                     }`}
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
//   );
// }





"use client"

"use client"

import { useState } from "react"
import logo2 from "../image/logo2.png";

import {
  ArrowLeft,
  FileText,
  CreditCard,
  FileCheck,
  Building2,
  Store,
  BarChart3,
  UserSquare,
  File,
  ChevronLeft
} from "lucide-react"
import Header from "./Header"
import { Link } from "react-router-dom"

export default function FormCompany5() {
  const [selectedDocuments, setSelectedDocuments] = useState([
    "GST Certificate",
    "Company PAN Card",
    "FSSAI Certificate"
  ])
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDocumentToggle = document => {
    if (selectedDocuments.includes(document)) {
      setSelectedDocuments(selectedDocuments.filter(doc => doc !== document))
    } else {
      setSelectedDocuments([...selectedDocuments, document])
    }
  }

  const isSelected = document => selectedDocuments.includes(document)

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
      <div className="min-h-screen relative flex items-center justify-center p-4 bg-gradient-to-r from-purple-100 via-white to-purple-50">
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
            <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
            <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
          </div>

          {/* Form Container - Fixed height for desktop, auto height for mobile */}
          <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] flex flex-col">
            {/* Header with back button */}
            <div className="flex items-center mb-4 md:mb-6">
              <Link to="/FormCompany4"><button
                type="button"
                className="mr-3 md:mr-4 rounded-full border border-gray-300 p-0.5 md:p-1"
                aria-label="Go back"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              </Link>
              <h1 className="text-xl md:text-2xl font-bold">
                Legal Information
              </h1>
            </div>

            <div className="flex-1 overflow-y-auto pr-1 md:pr-2">
              {/* Instruction */}
              <p className="mb-4 md:mb-6 text-gray-800">
                Select at least 1 document which you have available**
              </p>

              {/* Document Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* First Row */}
                <button
                  onClick={() => handleDocumentToggle("GST Certificate")}
                  className={`flex items-center p-4 rounded-xl border ${
                    isSelected("GST Certificate")
                      ? "bg-purple-100 border-purple-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <FileText
                    className={`mr-3 h-5 w-5 ${
                      isSelected("GST Certificate")
                        ? "text-purple-500"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={
                      isSelected("GST Certificate")
                        ? "text-purple-500"
                        : "text-gray-700"
                    }
                  >
                    GST Certificate
                  </span>
                </button>

                <button
                  onClick={() => handleDocumentToggle("Company PAN Card")}
                  className={`flex items-center p-4 rounded-xl border ${
                    isSelected("Company PAN Card")
                      ? "bg-purple-100 border-purple-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <CreditCard
                    className={`mr-3 h-5 w-5 ${
                      isSelected("Company PAN Card")
                        ? "text-purple-500"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={
                      isSelected("Company PAN Card")
                        ? "text-purple-500"
                        : "text-gray-700"
                    }
                  >
                    Company PAN Card
                  </span>
                </button>

                <button
                  onClick={() => handleDocumentToggle("FSSAI Certificate")}
                  className={`flex items-center p-4 rounded-xl border ${
                    isSelected("FSSAI Certificate")
                      ? "bg-purple-100 border-purple-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <FileCheck
                    className={`mr-3 h-5 w-5 ${
                      isSelected("FSSAI Certificate")
                        ? "text-purple-500"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={
                      isSelected("FSSAI Certificate")
                        ? "text-purple-500"
                        : "text-gray-700"
                    }
                  >
                    FSSAI Certificate
                  </span>
                </button>

                {/* Second Row */}
                <button
                  onClick={() => handleDocumentToggle("Company Incorporation")}
                  className={`flex items-center p-4 rounded-xl border ${
                    isSelected("Company Incorporation")
                      ? "bg-purple-100 border-purple-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Building2
                    className={`mr-3 h-5 w-5 ${
                      isSelected("Company Incorporation")
                        ? "text-purple-500"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={
                      isSelected("Company Incorporation")
                        ? "text-purple-500"
                        : "text-gray-700"
                    }
                  >
                    Company Incorporation
                  </span>
                </button>

                <button
                  onClick={() => handleDocumentToggle("Shop & Establishment")}
                  className={`flex items-center p-4 rounded-xl border ${
                    isSelected("Shop & Establishment")
                      ? "bg-purple-100 border-purple-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Store
                    className={`mr-3 h-5 w-5 ${
                      isSelected("Shop & Establishment")
                        ? "text-purple-500"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={
                      isSelected("Shop & Establishment")
                        ? "text-purple-500"
                        : "text-gray-700"
                    }
                  >
                    Shop & Establishment
                  </span>
                </button>

                <button
                  onClick={() => handleDocumentToggle("MSME/Udhyam")}
                  className={`flex items-center p-4 rounded-xl border ${
                    isSelected("MSME/Udhyam")
                      ? "bg-purple-100 border-purple-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <BarChart3
                    className={`mr-3 h-5 w-5 ${
                      isSelected("MSME/Udhyam")
                        ? "text-purple-500"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={
                      isSelected("MSME/Udhyam")
                        ? "text-purple-500"
                        : "text-gray-700"
                    }
                  >
                    MSME/Udhyam
                  </span>
                </button>

                {/* Third Row */}
                <button
                  onClick={() => handleDocumentToggle("ID Card")}
                  className={`flex items-center p-4 rounded-xl border ${
                    isSelected("ID Card")
                      ? "bg-purple-100 border-purple-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <UserSquare
                    className={`mr-3 h-5 w-5 ${
                      isSelected("ID Card")
                        ? "text-purple-500"
                        : "text-gray-500"
                    }`}
                  />
                  <span
                    className={
                      isSelected("ID Card")
                        ? "text-purple-500"
                        : "text-gray-700"
                    }
                  >
                    ID Card
                  </span>
                </button>

                <button
                  onClick={() => handleDocumentToggle("Other")}
                  className={`flex items-center p-4 rounded-xl border ${
                    isSelected("Other")
                      ? "bg-purple-100 border-purple-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <File
                    className={`mr-3 h-5 w-5 ${
                      isSelected("Other") ? "text-purple-500" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={
                      isSelected("Other") ? "text-purple-500" : "text-gray-700"
                    }
                  >
                    Other
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-end items-center gap-2 md:gap-4 pt-3 md:pt-4">
              {/* <button className="text-gray-600 text-sm md:text-base font-medium hover:text-gray-800">
                Skip
              </button> */}
                 <Link to="/FormCompany6">
              <button
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium"
                disabled={selectedDocuments.length === 0}
              >
                Submit
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

