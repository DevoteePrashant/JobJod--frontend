import logo2 from "../image/Logo1.png"
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
            {/* <h2 className="text-lg font-bold">JobJod</h2> */} <Link to="/"><img src={logo2} alt="JobJod" /></Link>
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
                <a href="##" className="hover:text-white">
                  Companies
                </a>
              </li>
              <li>
                <a href="##" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="##" className="hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="##" className="hover:text-white">
                  Advice
                </a>
              </li>
              <li>
                <a href="##" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
  
          {/* Resources Section */}
          <div>
            <h2 className="text-lg font-bold mb-2">Resources</h2>
            <ul className="text-gray-400 space-y-1">
              <li>
                <a href="##" className="hover:text-white">
                  Help Docs
                </a>
              </li>
              <li>
                <a href="##" className="hover:text-white">
                  Guide
                </a>
              </li>
              <li>
                <a href="##" className="hover:text-white">
                  Updates
                </a>
              </li>
              <li>
                <a href="##" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
  
         {/* Job Notifications Section */}
<div className="lg:col-span-2">
  <h2 className="text-lg font-bold mb-2">Get job notifications</h2>
  <p className="text-gray-400 text-lg mb-4">
    The latest job news, articles, sent to your inbox weekly.
  </p>
  <div className="flex flex-col sm:flex-row items-center gap-3">
    {/* Input Field */}
    <input
      type="email"
      placeholder="Email Address"
      className="flex-1 p-3 border border-gray-700 bg-white text-black text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700 w-full sm:w-auto"
    />
    {/* Subscribe Button */}
    <button className="bg-purple-700 text-white px-6 py-3 text-sm hover:bg-purple-600 focus:outline-none focus:ring-1 focus:ring-purple-500">
      Subscribe
    </button>
  </div>
</div>

        </div>
  
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center md:flex md:justify-between md:items-center w-[80%] mx-auto">
          <p className="text-gray-400 text-lg pt-3">
            2025 @ JobJod. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <span className="text-gray-400 bg-gray-600  rounded-[1vw]  p-3 text-lg cursor-pointer"><FaFacebook /></span>
            <span className="text-gray-400 bg-gray-600  rounded-[1vw]  p-3 text-lg cursor-pointer"><FaInstagram /></span>
            <span className="text-gray-400 bg-gray-600  rounded-[1vw]  p-3 text-lg cursor-pointer"><RiBasketballLine /></span>
            <span className="text-gray-400 bg-gray-600  rounded-[1vw]  p-3 text-lg cursor-pointer"><FaLinkedinIn /></span>
            <span className="text-gray-400 bg-gray-600  rounded-[1vw]  p-3 text-lg cursor-pointer"><FaTwitter /></span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  