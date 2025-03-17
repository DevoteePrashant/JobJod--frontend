import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation hook
// import backgroundImage from "../src/"; // Import the provided image
import backgroundImage from '../image/login.png'
const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Array to store OTP digits
  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showSendOtp, setShowSendOtp] = useState(true); // State to track if "Send OTP" button is shown
  const [mobileError, setMobileError] = useState(""); // State for mobile validation error
  const [otpError, setOtpError] = useState(""); // State for OTP validation error

  const navigate = useNavigate(); // Initialize useNavigate hook
  const location = useLocation(); // Initialize useLocation hook to get the passed state

  // Refs for OTP input fields to allow auto-focus
  const otpRefs = useRef([]);

  // Destructure the passed state (title) from UserSelection
  const { title } = location.state || {}; // 'title' is passed from the previous page (UserSelection)

  // Validate mobile number (must be a valid phone number with a minimum length of 10)
  const validateMobileNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/; // Basic validation for 10 digits
    if (!phoneRegex.test(number)) {
      setMobileError("Please enter a valid mobile number (10 digits).");
      return false;
    }
    setMobileError("");
    return true;
  };

  // Validate OTP (ensure it's not empty)
  const validateOtp = () => {
    if (otp.some((digit) => digit === "")) {
      setOtpError("OTP cannot be empty.");
      return false;
    }
    setOtpError("");
    return true;
  };

  const handleSendOtp = async () => {
    if (!validateMobileNumber(mobileNumber)) {
      return; // If mobile number is invalid, stop the process
    }

    try {
      setShowSendOtp(false); // Hide the Send OTP button
      setOtpSent(true);
      setMessage("OTP has been sent. Please enter it to login or register.");
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate OTP before submitting
    if (!validateOtp()) {
      return; // If OTP is invalid, stop the submission
    }

    try {
      // Determine the API endpoint based on the 'title'
      const apiUrl =
        title === "Job Seeker"
          ? "http://127.0.0.1:5000/api/otp/verify-otp"
          : "http://127.0.0.1:5005/api/otp/company-verify-otp"; // Different endpoint for JobGiver

      // Make the request to the backend to verify OTP and login/register user
      const response = await axios.post(apiUrl, {
        mobileNumber,
        otp: otp.join(""), // Convert OTP array to a single string
      });

      // Get the token from the response
      const token = response.data.token; // Assuming the token is returned in the response
      const userId = response.data.login.id; // Assuming the user data is also returned

      // Save the token to localStorage (or any other method)
      localStorage.setItem("authToken", token);

      // Redirect based on the 'title' value
      if (title === "Job Seeker") {
        navigate("/userform", {
          state: { token, userId, title }, // Pass the 'title' to the next page
        });
      } else if (title === "Job Giver") {
        navigate("/companyform", {
          state: { token, userId, title }, // Pass the 'title' to the next page
        });
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  // Update OTP array when the user types in one of the OTP boxes
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      // Allow only digits (0-9)
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus on the next input field
      if (value && index < otp.length - 1) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={backgroundImage}
          alt="Office space background"
          className="w-full h-full object-cover opacity-75"
        />
      </div>

      {/* Session Content */}
      <div className="relative p-8 rounded-2xl max-w-[600px] border border-gray-100 bg-white">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          {title} OTP Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Mobile Number Input */}
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              onBlur={() => validateMobileNumber(mobileNumber)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {mobileError && (
              <p className="text-sm text-red-500">{mobileError}</p>
            )}
          </div>

          {showSendOtp && (
            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition duration-200"
            >
              Send OTP
            </button>
          )}

          {otpSent && (
            <div className="space-y-4">
              {/* OTP Input Fields */}
              <div className="flex space-x-2 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el)}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    maxLength={1}
                    className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                ))}
              </div>
              {otpError && (
                <p className="text-sm text-red-500 text-center">{otpError}</p>
              )}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition duration-200"
              >
                Submit OTP
              </button>
            </div>
          )}
        </form>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
