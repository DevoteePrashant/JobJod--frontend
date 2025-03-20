
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Phone } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import backgroundImage from "../image/login.png";

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [message, setMessage] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showSendOtp, setShowSendOtp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [mobileError, setMobileError] = useState("");
  const [otpError, setOtpError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { title } = location.state || {};
  const otpRefs = useRef([]);

  useEffect(() => {
    otpRefs.current = otpRefs.current.slice(0, 6);
  }, []);

  const validateMobileNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(number)) {
      setMobileError("Please enter a valid mobile number (10 digits).")
      return false;
    }
    setMobileError("");
    return true;
  };

  const validateOtp = () => {
    if (otp.some(digit => digit === "")) {
      setOtpError("OTP cannot be empty.");
      return false;
    }
    setOtpError("");
    return true;
  };

  const handleSendOtp = async () => {
    if (!validateMobileNumber(mobileNumber)) return;
    setIsLoading(true);
    setTimeout(() => {
      setShowSendOtp(false);
      setOtpSent(true);
      setMessage("OTP has been sent. Please enter it to login.");
      otpRefs.current[0]?.focus();
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateOtp()) return;
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("authToken", "sample-token-123");
      navigate("/");
      setIsLoading(false);
    }, 1500);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < otp.length - 1) otpRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-900">
      <div className="absolute inset-0 w-full h-full">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover opacity-75" />
      </div>
  
    {/* Session Content */}
    <div className="relative p-8 rounded-2xl max-w-[600px] border border-gray-100 bg-white">
    <Link to ="/Login_Signin"><button className="absolute left-6 border border-4  rounded-xl top-9 rounded-full p-2 hover:bg-gray-100">
          <ArrowLeft size={20} />
        </button>
        </Link>
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
        Log in/Sign up
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mobile Number Input */}
        <div>
          <div className="flex items-center border rounded-full overflow-hidden">
            <input
              type="tel"
              value={mobileNumber}
              onChange={e => setMobileNumber(e.target.value)}
              onBlur={() => validateMobileNumber(mobileNumber)}
              placeholder="Mobile Number"
              className="w-full h-12 px-4 border-0 rounded-l-full text-base focus:outline-none focus:ring-0"
              disabled={otpSent || isLoading}
            />
            <div className="bg-black text-white p-2 rounded-full h-10 w-10 flex items-center justify-center mr-1">
              <Phone size={18} />
            </div>
          </div>
          {mobileError && (
            <p className="text-sm text-red-500 mt-1">{mobileError}</p>
          )}
        </div>
  
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember"
            // checked={rememberMe}
            // onChange={e => setRememberMe(e.target.checked)}
            className="h-4 w-4 border border-gray-300 rounded"
          />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none text-gray-700"
          >
            Remember me
          </label>
        </div>
  
        {!otpSent && (
          <>
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={isLoading}
              className="w-full bg-[#2c3e6f] text-white py-3 rounded-2xl font-medium hover:bg-[#253459] transition duration-200"
            >
              {isLoading ? "Processing..." : "Send OTP"}
            </button>
            <p className="text-xs text-center text-gray-600">
              By clicking Send OTP, you agree to our{" "}
              <a href="##" className="text-red-600 hover:underline">
                Terms and Conditions
              </a>
            </p>
          </>
        )}
  
        {otpSent && (
          <div className="space-y-4">
            {/* OTP Input Fields */}
            <div className="flex space-x-2 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={el => (otpRefs.current[index] = el)}
                  type="text"
                  value={digit}
                  onChange={e => handleOtpChange(e, index)}
                  maxLength={1}
                  className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
              ))}
            </div>
            {otpError && (
              <p className="text-sm text-red-500 text-center">{otpError}</p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#2c3e6f] text-white py-3 rounded-2xl font-medium hover:bg-[#253459] transition duration-200"
            >
              {isLoading ? "Verifying..." : "Submit OTP"}
            </button>
          </div>
        )}
      </form>
  
      {message && <p className="mt-4 text-center text-blue-600">{message}</p>}
    </div>
  </div>
  
  );
}
