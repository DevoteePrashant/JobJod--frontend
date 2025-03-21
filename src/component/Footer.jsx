import logo2 from "../image/logo2.png"
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiBasketballLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
      <footer className="bg-black text-white py-12 sm:w-full text-lg">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-7 lg:w-[82%]">
          {/* JobJod Section */}
          <div className="lg:col-span-2">
            {/* <h2 className="text-lg font-bold">JobJod</h2> */} <Link to="/"><img src={logo2} alt="JobJod" className="bg-white" /></Link>
            <p className="text-gray-400 mt-2">
              Great platform for the job seeker that is passionate about startups.
              Find your dream job easier.
            </p>
          </div>
  
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">About</h2>
            <ul className="text-gray-400 space-y-1">
              <li>
                <Link href="##" className="hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Advice
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
  
          {/* Resources Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">Resources</h2>
            <ul className="text-gray-400 space-y-1">
              <li>
                <Link href="##" className="hover:text-white">
                  Help Docs
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Updates
                </Link>
              </li>
              <li>
                <Link href="##" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
  
          {/* Job Notifications Section */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold mb-2">Get job notifications</h2>
            <p className="text-gray-400 text-lg mb-4">
              The latest job news, articles, sent to <br /> your inbox weekly.
            </p>
            <div className="flex space-x-2 ">
              <input
                type="email"
                placeholder="Email Address"
                style={{width:"2000px"}}
                className="flex-1 p-2 w-300 border border-gray-700 bg-white text-black text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700 md:flex-grow-0"
              />
              <button className="bg-purple-700  text-white px-4 py-2 text-sm hover:bg-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center md:flex md:justify-between md:items-center w-[80%] mx-auto">
          <p className="text-gray-400 text-lg">
            2025 @ JobJod. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <span className="text-gray-400 text-lg cursor-pointer"><FaFacebook /></span>
            <span className="text-gray-400 text-lg cursor-pointer"><FaInstagram /></span>
            <span className="text-gray-400 text-lg cursor-pointer"><RiBasketballLine /></span>
            <span className="text-gray-400 text-lg cursor-pointer"><FaLinkedinIn /></span>
            <span className="text-gray-400 text-lg cursor-pointer"><FaTwitter /></span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  