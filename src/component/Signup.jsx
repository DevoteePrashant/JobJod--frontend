// "use client"

// import { useState } from "react"
// import logo2 from '../image/login.png'

// export default function Signup() {
//   const [otp, setOtp] = useState(Array(7).fill(""))
//   const [mobileNumber, setMobileNumber] = useState("")

//   const handleOtpChange = () => {
   
//   }
 
//   const styles = {
//     container: {
//       display: "flex",
//       height: "100vh",
//       width: "100%",
//     },
//     imageSection: {
//       width: "60%",
//       height: "100%",
//     },
//     image: {
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//     },
//     formSection: {
//       width: "40%",
//       padding: "2rem",
//       backgroundColor: "white",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     formContainer: {
//       width: "100%",
//       maxWidth: "400px",
//     },
//     header: {
//       marginBottom: "2rem",
//     },
//     title: {
//       fontSize: "24px",
//       fontWeight: "bold",
//       marginBottom: "0.25rem",
//     },
//     subtitle: {
//       fontSize: "14px",
//       color: "#666",
//     },
//     formGroup: {
//       marginBottom: "1.5rem",
//     },
//     label: {
//       display: "block",
//       fontSize: "14px",
//       fontWeight: "500",
//       marginBottom: "0.5rem",
//       color: "#333",
//     },
//     input: {
//       width: "100%",
//       height: "48px",
//       padding: "0 1rem",
//       border: "1px solid #ddd",
//       borderRadius: "6px",
//       fontSize: "16px",
//       outline: "none",
//     },
//     otpContainer: {
//       display: "flex",
//       gap: "0.5rem",
//       position: "relative",
//     },
//     otpInput: {
//       width: "40px",
//       height: "40px",
//       textAlign: "center",
//       border: "1px solid #ddd",
//       borderRadius: "6px",
//       fontSize: "16px",
//       backgroundColor: "#f5f5f5",
//       outline: "none",
//     },
//     otpDot: {
//       position: "absolute",
//       left: "50%",
//       top: "50%",
//       transform: "translate(-50%, -50%)",
//       color: "#000",
//     },
//     button: {
//       width: "100%",
//       height: "48px",
//       backgroundColor: "#3b4a81",
//       color: "white",
//       border: "none",
//       borderRadius: "6px",
//       fontSize: "16px",
//       fontWeight: "500",
//       cursor: "pointer",
//       marginTop: "1.5rem",
//     },
//   }

//   return (
//     <div style={styles.container}>
//       {/* Left Image Section */}
//       <div style={styles.imageSection}>
//         <img
//           src={logo2}
//           alt="Conference room with people working on laptops"
//           style={styles.image}
//         />
//       </div>

//       {/* Right Form Section */}
//       <div className="w-full md:w-2/5 p-6 md:p-8 bg-white flex items-center justify-center">
//         <div className="w-full max-w-md">
//           <div className="mb-8">
//             <h1 className="text-2xl font-bold mb-1">Sign up</h1>
//             <p className="text-sm text-gray-600">Enter to continue and explore within your goal.</p>
//           </div>

//           <form >
//             {/* Mobile Number Input */}
//             <div className="mb-6">
//               <label htmlFor="mobile" className="block text-sm font-medium mb-2 text-gray-700">
//                 Mobile Number
//               </label>
//               <input
//                 id="mobile"
//                 type="tel"
//                 value={mobileNumber}
                
//                 placeholder="Enter mobile number..."
//                 className="w-full h-12 px-4 border border-gray-200 rounded-md text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//               />
//             </div>

//             {/* OTP Input */}
//             <div className="mb-6">
//               <label htmlFor="otp-0" className="block text-sm font-medium mb-2 text-gray-700">
//                 Enter OTP
//               </label>
//               <div className="flex gap-2">
//                 {otp.map((digit, index) => (
//                   <input
//                     key={index}
//                     id={`otp-${index}`}
//                     type="text"
//                     value={digit}
//                     onChange={(e) => handleOtpChange(index, e.target.value)}
//                     className="lg:w-14 lg:h-14 w-10 h-10 text-center border border-gray-200 rounded-md text-base bg-gray-50 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                     maxLength={1} 
//                   />
//                 ))}
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full h-12 bg-[#3b4a81] hover:bg-[#2e3b6e] text-white rounded-[9px]  text-base font-medium transition-colors duration-200 mt-6"
//             >
//               Submit and Continue
              
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"
import { useState } from "react"

import { ArrowLeft, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import logo2 from '../image/login.png'


export default function LoginPage() {
  const [otp, setOtp] = useState(Array(7).fill(""))
  const [mobileNumber, setMobileNumber] = useState("")

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto-focus next input after entering a digit
      if (value !== "" && index < 6) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        if (nextInput) {
          nextInput.focus()
        }
      }
    }
  }

  const handleMobileNumberChange = e => {
    setMobileNumber(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Mobile Number:", mobileNumber)
    console.log("OTP:", otp.join(""))
  }

  return (
    <div className="relative w-full h-screen bg-gray-900 ">
      {/* Background img */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={logo2}
          alt="Office space background"
       className="opacity-60 body w-full h-full"
            priority
        />
      </div>

      {/* Modal Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4 ">
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 relative">
          {/* Back Button */}
          <button className="absolute left-6 top-16 rounded-full p-1 hover:bg-gray-100">
            <ArrowLeft size={20} />

          </button>

          {/* Header */}
          <div className="text-center mb-8 mt-4">
            <h1 className="text-2xl font-bold mb-1">Sign up</h1>
            <p className="text-sm text-gray-600">
              Enter to continue and explore within your goal.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Mobile Number Input */}
            <div className="mb-6 relative">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Mobile Number
              </label>
              <div className="relative">
                <input
                  id="mobile"
                  type="tel"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  placeholder="Mobile Number"
                  className="w-full h-12 px-4 border border-gray-200 rounded-md text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-2"
                >
                  <Phone size={16} />
                </button>
              </div>
            </div>

            {/* OTP Input */}
            <div className="mb-6">
              <label
                htmlFor="otp-0"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Enter OTP
              </label>
              <div className="flex justify-between gap-2 relative">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={digit}
                    onChange={e => handleOtpChange(index, e.target.value)}
                    className="w-10 h-10 text-center border border-gray-200 rounded-md text-base bg-gray-50 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    maxLength={1}
                  />
                ))}
                {/* Center dot indicator */}
                {/* The index variable was already declared in the map function. No changes needed here. */}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-[#3b4a81] hover:bg-[#2e3b6e] text-white rounded-md text-base font-medium transition-colors duration-200 mt-6"
            >
              Submit
            </button>

            {/* Terms and Conditions */}
            <p className="text-xs text-center mt-4 text-gray-600">
              By clicking Submit, you agree to our{" "}
              <Link href="/terms" className="text-red-500 hover:underline">
                Terms and Conditions
              </Link>
            </p>
          </form>

         
        </div>
      </div>
    </div>
  )
}


