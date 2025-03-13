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
    <>  <header className=" p-8 py-4 w-full relative overflow-hidden bg-gradient-to-r from-purple-100 via-white to-purple-50">
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
        <div className="text-2xl font-bold space-x-16">
          <></>
          <Link to="/">
            <img src={logo2} alt="JobJod" />
          </Link>
        </div>
        <nav className="hidden md:flex ml-10 space-x-6">
          <Link
            to="/JobListingPage"
            className="text-black-800 font-semibold"
          >
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
          <Link to="/LoginPage" className="text-sm text-black-500 ">
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
          <Link to="/"> Browse Company</Link>
          <Link to="/">Hire Now</Link>
          <Link to="/LoginPage">
            <button className="bg-black text-white px-4 py-2 rounded-full">
              Login/Signup{" "}
            </button>
          </Link>
        </nav>
      </div>
    )}
  </header></>
  )
}

export default Dheader3