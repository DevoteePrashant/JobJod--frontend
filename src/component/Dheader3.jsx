import React, { useState } from 'react'
import logo2 from "../image/logo2.png";
import { Link } from "react-router-dom";
function Dheader3() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [formData, setFormData] = useState({
        fullName: "",
        emailAddress: "",
        location: "",
        gender: "",
        mobileNumber: "",
        dateOfBirth: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission logic here}
      }
  return (
    <> 
    
    <nav className="w-full relative bg-gradient-to-r from-purple-100 via-white to-purple-50">
  {/* Background Pattern */}
  <div className="absolute inset-0 w-full h-full">
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-y8VIQbQhSCi7xcFqUiFvxXXwZtkvps.svg"
      alt="Background Pattern"
      className="w-full h-full object-cover opacity-40"
    />
  </div>

  <div className="w-[93%] p-4 relative z-10">
    <div className="flex justify-between items-center">
      {/* Logo and Navigation Links */}
      <div className="flex items-center">
        <div className="text-2xl font-bold lg:ml-24 ">
          <Link to="/">
            <img
              src={logo2}
              alt="JobJod"
              className="h-10"
            />
          </Link>
        </div>
        <nav className="hidden md:flex ml-10 space-x-6">
          <Link
            to="/JobListingPage"
            className="text-gray-800 font-semibold hover:text-purple-600 transition-colors"
          >
            Find Jobs
          </Link>
          <Link
            to="/browsecompany"
            className="text-gray-800 font-semibold hover:text-purple-600 transition-colors"
          >
            Browse Company
          </Link>
        </nav>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          to="/Login_Signin"
          className="text-gray-800 font-semibold hover:text-purple-600 transition-colors"
        >
          Hire Now <span className="text-gray-400 ml-1">|</span>
        </Link>
        <Link to="/Login_Signin">
          <button
            variant="default"
            className="bg-black text-white hover:bg-gray-800 rounded-full p-2"
          >
            Login / Signup
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none z-20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
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
      <div className="md:hidden bg-white py-4 mt-4 rounded-xl shadow-lg p-2">
        <nav className="flex flex-col space-y-4 px-4">
          <Link
            to="/JobListingPage"
            className="text-gray-800 font-medium py-2 hover:text-purple-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Find Jobs
          </Link>
          <Link
            to="/browsecompany"
            className="text-gray-800 font-medium py-2 hover:text-purple-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Browse Company
          </Link>
          <Link
            to="/Login_Signin"
            className="text-gray-800 font-medium py-2 hover:text-purple-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Hire Now
          </Link>
          <Link to="/Login_Signin" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-2">
              Login / Signup
            </button>
          </Link>
        </nav>
      </div>
    )}
  </div>
</nav>

  </>
  )
}

export default Dheader3