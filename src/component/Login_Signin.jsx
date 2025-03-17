// import { useState } from "react"

// import { ArrowLeft, Phone } from "lucide-react"
// import { Link } from "react-router-dom"
// import logo2 from '../image/login.png'
// import jobseeker from "../image/jobseeker.png"
// import jobgiver from "../image/jobgiver.png"


// export default function Login_Signin() {
//   const [selectedRole, setSelectedRole] = useState(null)

//   const handleRoleSelect = (role) => {
//     setSelectedRole(role)
//     // You can redirect or perform other actions based on selection
//     console.log("Selected role:", role)
//   }
//   const [otp, setOtp] = useState(Array(7).fill(""))
//   const [mobileNumber, setMobileNumber] = useState("")

//   const handleOtpChange = (index, value) => {
//     if (value.length <= 1) {
//       const newOtp = [...otp]
//       // newOtp[index] = value
//       setOtp(newOtp)

//       // Auto-focus next input after entering a digit
//       if (value !== "" && index < 6) {
//         const nextInput = document.getElementById(`otp-${index + 1}`)
//         if (nextInput) {
//           nextInput.focus()
//         }
//       }
//     }
//   }

//   const handleMobileNumberChange = e => {
//     setMobileNumber(e.target.value)
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     // Handle form submission logic here
//     console.log("Mobile Number:", mobileNumber)
//     console.log("OTP:", otp.join(""))
//   }

//   return (
//     <div className="relative w-full h-screen bg-gray-900 ">
//       {/* Background img */}
//       <div className="absolute inset-0 w-full h-full">
//         <img
//           src={logo2}
//           alt="Office space background"
//        className="opacity-60 body w-full h-full"
//             priority
//         />
//       </div>

//       {/* Modal Overlay */}
//       <div className="absolute inset-0 flex items-center justify-center p-4 ">
//         <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 relative">
//           {/* Back Button */}
//           <button className="absolute left-6 top-16 rounded-full p-1 hover:bg-gray-100">
//             <ArrowLeft size={20} />

//           </button>

//           {/* Header */}
//           <div className="text-center mb-8 mt-4">
//             <h1 className="text-2xl font-bold mb-1">Who are you ? </h1>
          
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {/* Job Seeker Option */}
//             <div
//               className={`border rounded-xl p-4 flex flex-col items-center cursor-pointer transition-all ${
//                 selectedRole === "seeker" ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
//               }`}
//               onClick={() => handleRoleSelect("seeker")}
//             >
//               <div className="w-24 h-24 mb-2">
//                 <img
//                   src={jobseeker}
//                   alt="Job Seeker"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//               <span className="font-medium text-center">Job Seeker</span>
//             </div>

//             {/* Job Giver Option */}
//             <div
//               className={`border rounded-xl p-4 flex flex-col items-center cursor-pointer transition-all relative ${
//                 selectedRole === "giver" ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-gray-300"
//               }`}
//               onClick={() => handleRoleSelect("giver")}
//             >
//               <div className="w-24 h-24 mb-2 relative">
//                 <img
//                   src={jobgiver}
//                   alt="Job Giver"
//                   className="w-full h-full object-contain"
//                 />
                
//               </div>
//               <span className="font-medium text-center">Job Giver</span>
//             </div>
//           </div>

         
//         </div>
//       </div>
//     </div>
//   )
// }




import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from '../image/login.png'
import jobseeker from "../image/jobseeker.png"
import jobgiver from "../image/jobgiver.png"

const UserSelection = () => {
  const navigate = useNavigate();

  // Function to handle navigation and pass the user type
  const handleNavigate = (userType) => {
    navigate("/LoginPage", {
      state: { title: userType }, // Passing the user type as 'title' in state
    });
  };

  return (
    

<div className="relative   flex justify-center items-center  min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4">
  {/* Background img */}
  <div className="absolute  bg-gray-900 inset-0 w-full h-full">
    <img
      src={logo2}
      alt="Office space background"
      className="w-full h-full object-cover opacity-75"
    />
  </div>
  <div className="relative p-8 rounded-2xl max-w-[600px] border border-gray-100 bg-white">
    <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
      Who are you?
    </h2>

    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      {/* Job Seeker Option */}
    <div
      className="cursor-pointer border-2 border-gray-200 rounded-xl p-6 flex flex-col items-center w-full sm:w-48 
                hover:border-purple-500 hover:shadow-md transition-all duration-300 transform "
      onClick={() => handleNavigate("Job Seeker")}
     
    >
      <div className="p-4 rounded-full mb-4">
        <img
          src={jobseeker}
          alt="Job Seeker"
          className="h-24 w-24 object-contain rounded-full"
        />
      </div>
      <p className="mt-2 font-medium text-gray-800">Job Seeker</p>
      <p className="text-xs text-gray-500 mt-2">
        Looking for opportunities
      </p>
    </div>

    {/* Job Giver Option */}
    <div
      className="cursor-pointer border-2 border-gray-200 rounded-xl p-6 flex flex-col items-center w-full sm:w-48
                hover:border-purple-500 hover:shadow-md transition-all duration-300 transform "
      onClick={() => handleNavigate("Job Giver")}
    >
      <div className="p-4 rounded-full mb-4">
        <img
          src={jobgiver}
          alt="Job Giver"
          className="h-24 w-24 object-contain rounded-full"
        />
      </div>
      <p className="mt-2 font-medium text-gray-800">Job Giver</p>
      <p className="text-xs text-gray-500 mt-2">Hiring talent</p>
    </div>
  </div>

  <p className="text-center text-gray-500 text-sm mt-8">
    Select your role to continue
  </p>
</div>

</div>
  );
};

export default UserSelection;
