import { useState } from "react"
import dashboard from "../image/dashboard.png"
import { RxDashboard } from "react-icons/rx"
import { PiBagSimpleFill } from "react-icons/pi"
import { PiMonitorFill } from "react-icons/pi"
import { FaUser } from "react-icons/fa6"
import { IoMdSettings } from "react-icons/io"
import logo2 from "../image/logo2.png"
import Dheader from "./Dheader"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import { PlusIcon } from "lucide-react"
import profile from "../image/Notificationlogo1.png"
import t1 from "../image/t1.png"
import JobPostModal from "./JobPostModal"

function CompanyPostJobs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isJobModalOpen, setIsJobModalOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const openJobModal = () => {
    setIsJobModalOpen(true)
  }

  const closeJobModal = () => {
    setIsJobModalOpen(false)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 text-gray-700 hover:text-gray-900"
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <GiHamburgerMenu size={24} />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`
        w-64 flex-shrink-0 bg-white shadow-lg fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:block
        `}
      >
        {/* Sidebar Content */}
        <div className="flex items-center justify-center h-20">
          <img src={logo2 || "/placeholder.svg"} alt="JOBJOD" className="h-9" />
        </div>

        {/* Profile */}
        <div className="flex items-center p-4 space-x-4 m-auto">
          <div className="relative">
            <img
              src={dashboard || "/placeholder.svg"}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <p className="text-gray-700 font-bold">Hello, Company</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 mt-6">
          <ul>
            <li className="mb-2">
              <Link
                to="/CompanyDashboard"
                className="flex items-center p-2 rounded-xl text-sm font-medium  text-gray-700 hover:bg-gray-100"
              >
                <RxDashboard className="mr-2" />{" "}
                <span className="m-auto">Dashboard</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/CompanyPostJobs"
                className="flex items-center p-2 rounded-xl text-sm font-medium  text-white bg-gray-900 hover:bg-gray-800 "
              >
                <PiBagSimpleFill className="mr-2" />{" "}
                <span className="m-auto">Jobs</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/CompanyApplications"
                className="flex items-center p-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <PiMonitorFill className="mr-2" />{" "}
                <span className="m-auto">Applications</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/CompanyProfile"
                className="flex items-center p-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 "
              >
                <FaUser className="mr-2" />{" "}
                <span className="m-auto">Company Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="##"
                className="flex items-center p-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                <IoMdSettings className="mr-2" />{" "}
                <span className="m-auto">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-scroll">
        {/* Header */}
        <Dheader />

        {/* Main Content */}
        <div className="min-h-screen bg-gray-50">
          {/*  Mobile-First Sidebar (collapsible) */}
          <div className="lg:hidden bg-white border-b border-gray-200 p-4">
            <button
              onClick={openJobModal}
              className="w-full py-2 px-4 bg-white text-purple-500 border border-purple-500 rounded-xl flex items-center justify-center"
            >
              <span>Post New Job</span>
              <PlusIcon className="h-4 w-4 ml-1" />
            </button>
          </div>

          <div className="lg:flex">
            {/* Left Sidebar (desktop view) */}
            <div
              className="hidden lg:block w-full lg:w-1/4 bg-white border-r border-gray-200 p-4"
              style={{ overflowY: "auto", scrollbarWidth: "none" }}
            >
              <button
                onClick={openJobModal}
                className="w-full py-2 px-4 bg-white text-purple-500 border border-purple-500 rounded-xl mb-6 flex items-center justify-center"
              >
                <span>Post New Job</span>
                <PlusIcon className="h-4 w-4 ml-1" />
              </button>
              {/* Job List */}
              <div className="space-y-4">
                {[1, 2, 3].map(item => (
                  <div key={item} className="p-3 bg-violet-50 rounded-md ">
                    <h3 className="font-bold text-gray-900">
                      Product Designer
                    </h3>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Grameenphone</span>
                      &nbsp;&nbsp; Dhaka, Bangladesh
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Details */}
            <div
              className="flex-1 p-4 lg:p-6 bg-white overflow-y-auto"
              style={{ overflowY: "auto", scrollbarWidth: "none" }}
            >
              {/* Header Stats */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-4 lg:mb-8 border-b border-gray-200 pb-2 lg:pb-4">
                <div>
                  <p className="text-gray-500 text-sm">Total Applications</p>
                  <h2 className="text-2xl lg:text-3xl font-bold">4,561</h2>
                </div>
                <button className="py-2 px-4 font-semibold bg-white text-purple-500 border border-purple-500 rounded-xl mt-2 md:mt-0">
                  View Applicants
                </button>
              </div>

              {/* Job Title Section */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2">
                <h1 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-0">
                  Product Designer
                </h1>
                <button className="text-purple-500 font-medium">Edit</button>
              </div>

              {/* Company and Location */}
              <div className="flex items-center mb-2">
                <div className="bg-white p-1 rounded mr-2">
                  <img
                    src={t1 || "/placeholder.svg"}
                    alt="icon"
                    className="h-4 w-4 text-purple-500"
                  />
                </div>
                <span className="text-gray-700 font-semibold">
                  Grameenphone
                </span>
                <span className="text-gray-500 ml-1">Dhaka, Bangladesh</span>
              </div>

              {/* Job Dates */}
              <p className="text-gray-500 text-sm mb-4 lg:mb-6">
                Posted on 15 May 20 · Expire on 30 May 20
              </p>

              {/* Applicant Card */}
              <div className="border border-gray-200 rounded-xl p-3 lg:p-4 mb-4 lg:mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={profile || "/placeholder.svg"}
                      alt="Nihar Gami"
                      className="h-10 w-10 lg:h-12 lg:w-12 rounded-full mr-2 lg:mr-3"
                    />
                    <div>
                      <h3 className="font-medium">Nihar Gami</h3>
                      <p className="text-sm text-gray-500">
                        Godhani Technology
                      </p>
                    </div>
                  </div>
                  <button className="text-purple-500 font-bold">Change</button>
                </div>
              </div>

              {/* Edit Button */}
              <div className="flex justify-end mb-4 lg:mb-6">
                <button className="text-purple-500 font-medium">Edit</button>
              </div>

              {/* Responsibilities Section */}
              <div className="mb-4 lg:mb-6 font-semibold">
                <h2 className="text-lg font-medium mb-2">Responsibilities</h2>
                <ul className="list-disc pl-5 lg:pl-6 space-y-2">
                  <li className="text-gray-700">
                    Work on and execute design projects from start to finish
                    while meeting creative and technical requirements.
                  </li>
                  <li className="text-gray-700">
                    Collaborate closely with engineers, researchers, clinicians
                    and product managers to iterate rapidly.
                  </li>
                  <li className="text-gray-700">
                    Work on the entire project lifecycle, from wireframes to
                    detailed specs across multiple UX platforms.
                  </li>
                  <li className="text-gray-700">
                    Participate in regular design reviews and other team-wide
                    design efforts; create and contribute to a great design team
                    culture.
                  </li>
                  <li className="text-gray-700">
                    Participate in user-experience research and usability
                    studies.
                  </li>
                </ul>
              </div>

              {/* Qualifications Section */}
              <div className="mb-4 lg:mb-6 font-semibold">
                <h2 className="text-lg font-medium mb-2">
                  Qualifications and Skills
                </h2>
                <ul className="list-disc pl-5 lg:pl-6 space-y-2">
                  <li className="text-gray-700">
                    BA/BS degree in Design, HCI, CS, or related field, or
                    equivalent practical experience.
                  </li>
                  <li className="text-gray-700">
                    3+ years of relevant UX Design experience in consumer
                    products, medical devices or other relevant areas.
                  </li>
                  <li className="text-gray-700">
                    Portfolio of UX design work.
                  </li>
                  <li className="text-gray-700">
                    Proven ability to work across the design process, from
                    developing strong conceptual foundations to refining the
                    smallest details with high quality and attention to detail.
                  </li>
                </ul>
              </div>

              {/* Preferred Qualifications Section */}
              <div className="mb-4 lg:mb-6 font-semibold pb-4 lg:pb-8">
                <h2 className="text-lg font-medium mb-2">
                  Preferred Qualifications and Skills
                </h2>
                <ol className="list-decimal pl-5 lg:pl-6 space-y-2">
                  <li className="text-gray-700">
                    Experience designing for health-related products (software
                    and/or hardware).
                  </li>
                  <li className="text-gray-700">
                    Experience designing for wearable devices.
                  </li>
                  <li className="text-gray-700">
                    Experience with prototyping.
                  </li>
                  <li className="text-gray-700">
                    Self-motivated and able to prioritize and manage workload
                    and meet critical project milestones and deadlines.
                  </li>
                  <li className="text-gray-700">
                    Excellent interpersonal, communication, negotiation and
                    collaboration skills.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Post Modal */}
      <JobPostModal isOpen={isJobModalOpen} onClose={closeJobModal} />
    </div>
  )
}

export default CompanyPostJobs
