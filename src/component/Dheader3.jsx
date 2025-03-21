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
    
    <nav className="w-full mx-auto p-4 relative bg-gradient-to-r from-purple-100 via-white to-purple-50">
    <div className="absolute inset-0 w-full h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-y8VIQbQhSCi7xcFqUiFvxXXwZtkvps.svg"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-40"
            priority
          />
        </div>
      <div className="flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex container relative mx-auto px-4 items-center">
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src={logo2 || "/placeholder.svg"} alt="JobJod" />
          </Link>
        </div>
        <nav className="hidden md:flex ml-10 space-x-6">
          <Link to="/JobListingPage" className="text-black-800 font-semibold">
            Find Jobs
          </Link>
          <Link to="/browsecompany" className="text-black-800 font-semibold">
            Browse Company
          </Link>
        </nav>
      </div>
      <div className="ml-auto">
        {/* Your right-side elements like notifications, messages, profile pic can go here */}
      </div>
    </div>

    <div className="hidden md:flex items-center space-x-4">
        <Link to="/Login_Signin" className="text-black font-semibold">
          Hire Now <span className="text-gray-400">|</span>
        </Link>
        {/* <button className="bg-black text-white px-4 py-2 rounded-full"> */}
        <button className="bg-black text-white font-bold py-2 px-6 items-center text-center rounded-full  focus:outline-none focus:shadow-outline">
          <Link to="/Login_Signin" className="text-sm text-black-500 ">
            Login / Signup
          </Link>
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
          <Link to="/JobListingPage"> Find Jobs</Link>
          <Link to="/browsecompany"> Browse Company</Link>
          <Link to="/Login_Signin">Hire Now</Link>
          <Link to="/Login_Signin">
            <button className="bg-black text-white px-4 py-2 rounded-full">
              Login/Signup{" "}
            </button>
          </Link>
        </nav>
      </div>
    )}
    </nav>
  </>
  )
}

export default Dheader3