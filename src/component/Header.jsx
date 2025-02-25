import { useState } from "react";
import { Link } from 'react-router-dom';
import logo2 from "../image/logo2.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-4">
    <div className="w-[90%] mx-auto">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold space-x-16">
            <Link to="/">
              <img src={logo2 || "/placeholder.svg"} alt="JobJod" className="h-8" />
            </Link>
          </div>
          <nav className="hidden md:flex ml-10 space-x-6">
            <Link to="/JobListingPage" className="text-gray-700 hover:text-black">
              Find Jobs
            </Link>
            <a href="##" className="text-gray-700 hover:text-black">
              Browse Company
            </a>
          </nav>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/JobListingPage" className="text-gray-600 hover:text-black">
            Hire Now
          </Link>
          <Link
            to="/LoginPage"
            className="bg-black text-white font-bold py-2 px-6 rounded-full hover:bg-gray-800 transition-colors"
          >
            Login / Signup
          </Link>
        </div>

        <button className="md:hidden text-gray-600 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="30" height="25" viewBox="0 0 30 25" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="5" rx="2" fill="#000" />
            <rect y="10" width="30" height="5" rx="2" fill="#000" />
            <rect y="20" width="30" height="5" rx="2" fill="#000" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4 rounded-lg">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/JobListingPage" className="text-gray-700 hover:text-black">
              Find Jobs
            </Link>
            <Link to="/" className="text-gray-700 hover:text-black">
              Browse Company
            </Link>
            <Link to="/" className="text-gray-700 hover:text-black">
              Hire Now
            </Link>
            <Link to="/LoginPage" className="bg-black text-white px-4 py-2 rounded-full text-center">
              Login/Signup
            </Link>
          </nav>
        </div>
      )}
    </div>
  </header>
  );
};

export default Header;
