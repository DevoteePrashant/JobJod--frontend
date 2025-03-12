import Navbar from './Navbar';
import React, { useState } from 'react';
import t1 from "../image/t1.png";
import t2 from "../image/t2.png";
import t3 from "../image/t3.png";
import t4 from "../image/t4.png";
import p1 from "../image/Notificationlogo1.png";
import star from "../image/star.png";
import tick from "../image/tick.png";

const Singlejobviews = () => {
    const [expanded, setExpanded] = useState(false)
  
    const description =
      "The right and contemporary use of technology is key to the progress of a nation. Keeping this in mind, Grameenphone always brings future-proof technology in order to facilitate your progress. The possibilities in this new world are immense and someone as bright as you should be the forerunner in leading the change..."
  
  return (
    <>
      <Navbar />

        <div className="bg-white rounded-lg overflow-hidden md:flex">
          {/* Left Side - Job Listings */}
          <div className="w-full md:w-1/4 p-10 border-r-2 border-gray-200 ">
            <div className="text-xl font-semibold text-gray-700 mb-2 mx-6">
              Top job picks for you
            </div>
            <div className="text-xs text-gray-500 mx-6">Based on your search <span className="font-bold mx-2 md:mx-10">45 Results</span></div>
            <div className="mt-4 p-2">
              {/* Sample Job Listing - Repeat this for each job */}
              <div className="flex items-center py-2 cursor-pointer hover:bg-blue-50">
                <img
                  src={t1} // Replace with actual logo
                  alt="Company Logo"
                  className="w-10 h-10 rounded-xl mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Product Designer</div>
                  <div className="text-xs text-gray-500"><span className='font-semibold text-black'>Grameenphone</span> Dhaka, Bangladesh</div>
                  <div className="text-xs text-black font-semibold flex mt-2"><img src={tick} alt="tick" className="mr-1 h-4 w-4" />Applied on 23 May 20</div>
                </div>
              </div>
              {/* End Sample Job Listing */}
              {/* Add more job listings here */}
              <div className="flex items-center py-2 cursor-pointer hover:bg-blue-50">
                <img
                  src={t2} // Replace with actual logo
                  alt="Company Logo"
                  className="w-10 h-10 rounded-xl mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Product Designer</div>
                  <div className="text-xs text-gray-500"><span className='font-semibold text-black'>Grameenphone</span> Dhaka, Bangladesh</div>
                </div>
              </div>
              <div className="flex items-center py-2 cursor-pointer hover:bg-blue-50">
                <img
                  src={t3} // Replace with actual logo
                  alt="Company Logo"
                  className="w-10 h-10 rounded-xl mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Product Designer</div>
                  <div className="text-xs text-gray-500"><span className='font-semibold text-black'>Grameenphone</span> Dhaka, Bangladesh</div>
                </div>
              </div>
              <div className="flex items-center py-2 cursor-pointer hover:bg-blue-50">
                <img
                  src={t4} // Replace with actual logo
                  alt="Company Logo"
                  className="w-10 h-10 rounded-xl mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Product Designer</div>
                  <div className="text-xs text-gray-500"><span className='font-semibold text-black'>Grameenphone</span> Dhaka, Bangladesh</div>
                </div>
              </div>
              <div className="flex items-center py-2 cursor-pointer hover:bg-blue-50">
                <img
                  src={t1} // Replace with actual logo
                  alt="Company Logo"
                  className="w-10 h-10 rounded-xl mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Product Designer</div>
                  <div className="text-xs text-gray-500"><span className='font-semibold text-black'>Grameenphone</span> Dhaka, Bangladesh</div>
                </div>
              </div>
              <div className="flex items-center py-2 cursor-pointer hover:bg-blue-50">
                <img
                  src={t2} // Replace with actual logo
                  alt="Company Logo"
                  className="w-10 h-10 rounded-xl mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Product Designer</div>
                  <div className="text-xs text-gray-500"><span className='font-semibold text-black'>Grameenphone</span> Dhaka, Bangladesh</div>
                </div>
              </div>
              <div className="flex items-center py-2 cursor-pointer hover:bg-blue-50">
                <img
                  src={t3} // Replace with actual logo
                  alt="Company Logo"
                  className="w-10 h-10 rounded-xl mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Product Designer</div>
                  <div className="text-xs text-gray-500"><span className='font-semibold text-black'>Grameenphone</span> Dhaka, Bangladesh</div>
                  <div className="text-xs text-black font-semibold flex mt-2"><img src={star} alt="star" className="mr-1 h-4 w-4" />Interview</div>
                </div>
              </div>
              <div className="flex items-center py-2 cursor-pointer hover:bg-blue-50">
                <img
                  src={t4} // Replace with actual logo
                  alt="Company Logo"
                  className="w-10 h-10 rounded-xl mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Product Designer</div>
                  <div className="text-xs text-gray-500"><span className='font-semibold text-black'>Grameenphone</span> Dhaka, Bangladesh</div>
                </div>
              </div>
              <div className="flex items-center py-2 cursor-pointer hover:bg-blue-50">
                <img
                  src={t1} // Replace with actual logo
                  alt="Company Logo"
                  className="w-10 h-10 rounded-xl mr-2"
                />
                <div>
                  <div className="text-sm font-medium text-gray-800">Product Designer</div>
                  <div className="text-xs text-gray-500"><span className='font-semibold text-black'>Grameenphone</span> Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Job Details */}
          <div className="w-full md:w-3/4 p-6 overflow-y-auto" style={{ overflowY: 'scroll', maxHeight: '100vh', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            {/* Job Title and Location */}
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Product Designer</h2>
                <div className="text-gray-600">
                  <span className="mr-1">
                    <img src={t1} className="w-4 h-4 inline mr-1" alt='img' />
                  </span>
                  <span className="font-semibold">Grameenphone</span> Dhaka, Bangladesh
                </div>
                <div className="text-xs text-gray-500 mt-1 font-semibold">Posted on 15 May 20  &nbsp; Expire on 30 May 20</div>
                <h2 className="font-bold mt-2">Salary:25000-30000 INR</h2>
                
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                {/* <button className="bg-purple-500 text-white rounded-xl px-6 py-2 text-sm font-medium mr-2">
                  Apply Now
                </button>
                <button className="bg-black text-white rounded-xl px-5 py-2 text-sm font-medium">
                  Save
                </button> */}
                <div className="flex items-center">
                  <img src={tick} alt="tick" className="mr-2 mt-2 h-4 w-4" />
                  <span className="text-md mt-2 
                  
                  
                  ">Applied on 23 May 20</span>
                </div>
                <button className="ml-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* HR Manager Info */}
            <div className="flex items-center mt-4 border-2 rounded-xl p-2">
              <img
                src={p1} // Replace with actual image
                alt="HR Manager"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="text-sm font-medium text-gray-800 ">Hamish Marsh</div>
                <div className="text-xs text-gray-500">HR Manager, Grameenphone</div>
              </div>
              <button className="ml-auto text-purple-400 rounded-md px-4 py-2 text-sm font-bold ">
                Send Message
              </button>
            </div>

            {/* Responsibilities */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>
                  Work on and execute design projects from start to finish while meeting creative and technical
                  requirements.
                </li>
                <li>
                  Collaborate closely with engineers, researchers, clinicians and product managers to iterate rapidly.
                </li>
                <li>
                  Work on the entire project lifecycle, from wireframes to detailed specs across multiple UX platforms.
                </li>
                <li>
                  Participate in regular design reviews and other team-wide design efforts; create and contribute to a great
                  design team culture.
                </li>
                <li>Participate in user-experience research and usability studies.</li>
              </ul>
            </div>

            {/* Qualifications and Skills */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Qualifications and Skills</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>BA/BS degree in Design, HCI, CS, or related field, or equivalent practical experience.</li>
                <li>3+ years of relevant UX Design experience in consumer products, medical devices or other relevant areas.</li>
                <li>Portfolio of UX design work.</li>
                <li>
                  Proven ability to work across the design process, from developing strong conceptual foundations to refining the
                  smallest details with high quality and attention to detail.
                </li>
              </ul>
            </div>

            {/* Preferred Qualifications and Skills */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Preferred Qualifications and Skills</h3>
              <ol className="list-decimal list-inside text-gray-600 text-sm">
                <li>Experience designing for health-related products (software and/or hardware).</li>
                <li>Experience designing for wearable devices.</li>
                <li>Experience with prototyping.</li>
                <li>
                  Self-motivated and able to prioritize and manage workload and meet critical project milestones and deadlines.
                </li>
                <li>Excellent interpersonal, communication, negotiation and collaboration skills.</li>
              </ol>
            </div>

            {/* Company Info */}
            <div className="mt-6 border-2 rounded-2xl p-4 md:p-8 relative">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-start md:items-center gap-2">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Company Logo"
            className="w-8 h-8 rounded-full mt-1 md:mt-0"
          />
          <div>
            <div className="text-sm font-medium text-gray-800">Grameenphone Ltd.</div>
            <div className="text-xs text-gray-500">
              Telecommunications 6,424 employees <span className="text-green-400 font-bold">Actively Hiring</span>
            </div>
          </div>
        </div>

        <a href="#" className="text-purple-400 text-sm font-bold md:self-start">
          View Page
        </a>
      </div>

      <div className="mt-3 md:mt-2">
        <p className="text-xs text-gray-600">
          {expanded ? description : description.substring(0, 150) + "..."}
          <button onClick={() => setExpanded(!expanded)} className="text-purple-400 ml-1 inline-flex items-center">
            {expanded ? "see less" : "see more"}
          </button>
        </p>
      </div>
 
          </div>
          </div>
        </div>
    
    </>
  );
};

export default Singlejobviews;