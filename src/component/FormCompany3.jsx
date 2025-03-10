// "use client"
// import { useState } from "react"
// import { ChevronLeft } from "lucide-react"
// import { Link } from "react-router-dom"
// import Header from "./Header"

// export default function FormCompany3() {
//   const [formData, setFormData] = useState({
//     title: "",
//     achievementDate: "",
//     from: "",
//     description: ""
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

//   const handleSkip = () => {
//     console.log("Skipped to next step")
//     // Handle skip logic here
//   }

//   const handleAddMore = () => {
//     console.log("Add more clicked")
//     // Handle add more logic here
//   }

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-4">
//         <div className="w-full max-w-4xl">
//           {/* Progress Steps */}
//           <div className="flex justify-between mb-4 md:mb-6 px-2 md:px-8">
//             <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%]"></div>
//             <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-green-400 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//             <div className="h-1.5 md:h-2 bg-gray-300 rounded-full w-[14%] ml-1 md:ml-2"></div>
//           </div>

//           {/* Form Container - Fixed height for desktop, auto height for mobile */}
//           <div className="w-full bg-white rounded-xl md:rounded-3xl shadow-sm p-4 md:p-8 border border-gray-100 min-h-[450px] md:h-[520px] md:overflow-y-auto">
//             {/* Header with back button */}
//             <div className="flex items-center mb-4 md:mb-8">
//               <Link to="/FormCompany2">
//                 <button
//                   type="button"
//                   className="mr-3 md:mr-4 rounded-full border border-gray-300 p-0.5 md:p-1"
//                   aria-label="Go back"
//                 >
//                   <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
//                 </button>
//               </Link>
//               <h2 className="text-xl md:text-2xl font-bold">Recognition</h2>
//             </div>

//             <form onSubmit={handleSubmit}>
//               {/* Title */}
//               <div className="mb-4 md:mb-6">
//                 <label
//                   htmlFor="title"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6 mb-4 md:mb-6">
//                 {/* Achievement Date */}
//                 <div>
//                   <label
//                     htmlFor="achievementDate"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Achievement Date
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="date"
//                       id="achievementDate"
//                       name="achievementDate"
//                       value={formData.achievementDate}
//                       onChange={handleChange}
//                       className="w-full border-b border-gray-300 pb-2 pr-8 focus:border-purple-500 focus:outline-none"
//                     />
//                     {/* <Calendar className="absolute right-2 bottom-3 h-4 w-4 text-gray-500" /> */}
//                   </div>
//                 </div>

//                 {/* From */}
//                 <div>
//                   <label
//                     htmlFor="from"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     From
//                   </label>
//                   <input
//                     type="text"
//                     id="from"
//                     name="from"
//                     value={formData.from}
//                     onChange={handleChange}
//                     className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none"
//                   />
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="mb-6 md:mb-8">
//                 <label
//                   htmlFor="description"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   rows={3}
//                   className="w-full border-b border-gray-300 pb-2 focus:border-purple-500 focus:outline-none resize-none"
//                 />
//               </div>

//               {/* Bottom Buttons */}
//               <div className="flex flex-wrap justify-end items-center gap-2 md:gap-4">
//                 <Link to="/FormCompany4">
//                   <button
//                     type="button"
//                     onClick={handleSkip}
//                     className="text-gray-600 text-sm md:text-base font-medium hover:text-gray-800 mr-1"
//                   >
//                     Skip & Next
//                   </button>
//                 </Link>
//                 <button
//                   type="button"
//                   onClick={handleAddMore}
//                   className="text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium"
//                   // Coral color
//                   style={{ backgroundColor: "#FF9F7B" }}
//                 >
//                   Add More +
//                 </button>
//                 <Link to="/FormCompany4">
//                   <button
//                     type="submit"
//                     className="bg-purple-500 hover:bg-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium"
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



import React from 'react'

function FormCompany3() {
  return (
    <div>
      from company 3
    </div>
  )
}

export default FormCompany3
