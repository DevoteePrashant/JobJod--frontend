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


