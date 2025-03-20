import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Group from "../image/Group.svg";
import imges from "../image/login.png";
import logo2 from "../image/logo2.png";
import { Bookmark, Search, Star } from "lucide-react";
import "./Home.css";
import LogoSlider from "./LogoSlider";
import { FaBookmark } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const jobs = [
    // Duplicate job for demo
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
    },
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
    },
  ];

  return (
    <>
      <main className=" bg-gradient-to-br">
        <HeroSection />
        <div className="w-[100%] mx-auto ">
          <JobListingsSection />
          <div className="w-[87%] mx-auto">
            <LogoSlider />
          </div>
          <JobListingsAndSidebar />
          <ResumeFeatureSection />
          <EmailSignupSection />
        </div>
      </main>
      <Footer />
    </>
  );
};

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className=" p-8 py-4 w-full relative overflow-hidden bg-gradient-to-r from-purple-100 via-white to-purple-50">
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
        <div className="container relative mx-auto flex justify-between items-center">
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
              <Link href="##" className=" text-black-800 font-semibold ">
                Browse Company
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-black font-semibold">
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
              <Link to="/"> Browse Company</Link>
              <Link to="/">Hire Now</Link>
              <Link to="/Login_Signin">
                <button className="bg-black text-white px-4 py-2 rounded-full">
                  Login/Signup{" "}
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <section className="relative w-full min-h-[550px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-100 via-white to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-y8VIQbQhSCi7xcFqUiFvxXXwZtkvps.svg"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-40"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative w-full container mx-auto py-0 lg:py-20 text-center z-10">
          {/* New Feature Badge */}
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600 mb-6">
            <span className="font-medium">New</span>
            <span className="ml-2 text-blue-500">278+ Jobs Fulfilled 🎉</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Unlock <span className="text-amber-500">Your</span> Potential
          </h1>
          <p className="text-lg mb-8">
            Let us help you find your dream job here.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto px-3 py-4">
            <div className="flex flex-col md:flex-row gap-2 p-2 bg-white rounded-3xl shadow-md border-4 border-gray-800 md:rounded-full">
              <SearchInput placeholder="Job title or Keyword" />
              <SearchInput placeholder="City, state or zip" isLocation />
              <Link
                to="/JobListingPage"
                className="bg-purple-500 text-white font-medium py-3 px-12 rounded-full hover:bg-purple-600 transition-colors duration-200 shadow-sm relative"
                style={{
                  boxShadow: `0 0 5px rgba(255, 255, 255, 0.5),
                    0 0 10px rgba(255, 255, 255, 0.3),
                    0 0 20px rgba(255, 255, 255, 0.2),
                    0 0 0 4px rgba(0, 0, 0, 0.1)`,
                }}
              >
                Find Jobs
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
      </section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[4rem] left-0 right-0 bg-white py-4 shadow-md z-50 animate-slideDown">
          <nav className="flex flex-col space-y-4 px-4">
            <Link
              to="/JobListingPage"
              className="text-gray-800 hover:text-black py-2"
            >
              Find Jobs
            </Link>
            <Link
              to="/companies"
              className="text-gray-800 hover:text-black py-2"
            >
              Browse Company
            </Link>
            <Link to="/hire" className="text-gray-800 hover:text-black py-2">
              Hire Now
            </Link>
            <Link
              to="/LoginPage"
              className="bg-black text-white font-medium py-2 px-6 rounded-full text-center"
            >
              Login / Signup
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

const SearchInput = ({ icon, placeholder, isLocation = false }) => (
  <div
    className={`flex-1 flex items-center gap-2 px-4 py-2 ${
      isLocation ? "md:border-l md:border-gray-200" : ""
    }`}
  >
    <AiOutlineSearch className="text-gray-400 h-5 w-5 text-gray-400" />
    <input
      type="text"
      placeholder={placeholder}
      className="border-0 focus:ring-0 w-full outline-none"
    />
  </div>
);

const SearchInput2 = ({ icon, placeholder, isLocation = false }) => (
  <div
    className={`flex-1 flex items-center gap-2 px-4 py-2 ${
      isLocation ? "md:border-l md:border-gray-200" : ""
    }`}
  >
    <FiMapPin className="text-gray-400 h-5 w-5 text-gray-400" />
    <input
      type="text"
      placeholder={placeholder}
      className="border-0 focus:ring-0 w-full outline-none"
    />
  </div>
);

const JobListingsAndSidebar = () => (
  <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-6 py-10 px-2 bg-white dark:bg-gray-900 rounded-[24px] border border-gray-200 dark:border-gray-800 ">
    <Sidebar />
    <JobListingsSectionNew />
  </div>
);

export function JobListingsSectionNew() {
  const repeatedJobs = [
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: false,
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: true,
      isNew: false,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: false,
      isNew: true,
    },
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: false,
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: true,
      isNew: false,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: false,
      isNew: true,
    },
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: false,
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: true,
      isNew: false,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: false,
      isNew: true,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: false,
      isNew: true,
    },
  ];

  return (
    <div className="w-[70%] space-y-6 md:pt-[70px] p-0 md:pl-6 lg:p-0">
      <div className="w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 lg:gap-8">
        {repeatedJobs.map((job, index) => (
          <div key={index} className="w-fit h-full ">
            <div className="h-[270px] w-[280px] relative bg-white dark:bg-gray-900 rounded-[24px] p-5 border border-gray-700 hover:bg-[#e3dafb] dark:hover:bg-purple-900/20 transition-all duration-300 group overflow-hidden">
              <header className="flex flex-row items-center justify-between">
                <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                  <span className="text-md">{job.postedTime}</span>
                  {job.isNew && (
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-purple-100 text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      New
                    </span>
                  )}
                  {/* {job.featured && (
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-orange-100 text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity ml-1 sm:ml-2">
                      Featured
                    </span>
                  )} */}
                </div>
                <button
                  className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Bookmark job"
                >
                  {/* Bookmark Icon */}
                  <i className="fa fa-bookmark text-gray-500"></i>
                </button>
              </header>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-white border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                    <img
                      src={job.logo || "/placeholder.svg?height=24&width=24"}
                      alt={`${job.company} logo`}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm">{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 sm:px-3 text-xs rounded-full border border-black bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <footer className="flex flex-row items-start sm:items-center justify-between gap-3 bg-white dark:bg-gray-900 rounded-b-[24px] px-5 py-4 dark:border-gray-800 absolute bottom-0 left-0 right-0">
                <div>
                  <div className="font-semibold">{job.salary}</div>
                  <div className="text-sm">{job.location}</div>
                </div>
                <button className="px-2 py-2 rounded-full border border-black">
                  View Details
                </button>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="w-full sm:w-[calc(50%-0.5rem)] xl:w-[calc(33.33%-1rem)] relative bg-white dark:bg-gray-900 rounded-[24px] p-5 border border-gray-200 dark:border-gray-800 hover:bg-[#e3dafb] dark:hover:bg-purple-900/20 transition-all duration-300 group">
      <header className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {job.postedTime}
          </span>
          {job.isNew && <Badge text="New" color="purple" />}
          {job.featured && <Badge text="Featured" color="orange" />}
        </div>
        <button className="p-2 rounded-full">
          <Bookmark className="h-4 w-4 text-[#4B5563]" />
        </button>
      </header>

      <div className="space-y-4 mt-4">
        <div className="flex items-start gap-3">
          <Logo src={job.logo} alt={`${job.company} logo`} />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {job.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {job.company}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>

      <footer className="flex items-center justify-between mt-4 bg-white dark:bg-gray-900 rounded-b-[24px] -mx-5 -mb-5 p-5">
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">
            {job.salary}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {job.location}
          </div>
        </div>
        <button className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          View Details
        </button>
      </footer>
    </div>
  );
}

function Badge({ text, color }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm bg-${color}-100 text-${color}-700 opacity-0 group-hover:opacity-100 transition-opacity`}
    >
      {text}
    </span>
  );
}

function Tag({ text }) {
  return (
    <span className="px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-white/50 dark:group-hover:bg-gray-800/50">
      {text}
    </span>
  );
}

function Logo({ src, alt }) {
  return (
    <div className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="w-6 h-6 object-contain"
      />
    </div>
  );
}

export function Sidebar() {
  const categories = [
    "Software Development",
    "Data Science",
    "Product Design",
    "Digital Marketing",
    "Customer Service",
    "Sales & Business",
    "Healthcare & Medical",
    "Finance & Banking",
    "Education & Teaching",
    "Engineering",
    "Human Resources",
    "Project Management",
  ];
  return (
    <aside className="w-full lg:w-[35%] xl:w-[30%] md:w-[70%] md:px-2 bg-white rounded-2xl ">
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search your preferred industry"
          className="w-full h-12 pl-11 pr-4 rounded-3xl border border-gray-200 text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      <div className="space-y-3">
        {categories.map((category, i) => (
          <button
            key={i}
            className={`w-full py-4 px-6 rounded-3xl text-center text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
              i % 3 === 0
                ? "bg-[#e3dafb] text-purple-700"
                : i % 3 === 1
                ? "bg-[#ffe0a5] text-amber-700"
                : "bg-[#b9deee] text-sky-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  );
}

export function JobListingsSection() {
  const jobs = [
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: true,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: true,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
      featured: true,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
  ];

  const repeatedJobs = [...jobs, ...jobs];
  return (
    // <div className="w-full h-full flex flex-col overflow-hidden bg-gradient-to-r from-purple-100 via-white to-purple-50">
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={9}
      slidesPerView="auto"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        // pauseOnMouseEnter: true,
      }}
      loop={true}
      speed={800}
      grabCursor={true}
      className="job-swiper !overflow-hidden flex-1 bg-gradient-to-r from-purple-100 via-white to-purple-50"
    >
      {repeatedJobs.map((job, index) => (
        <SwiperSlide key={index} className="!w-[300px] !h-[300px] ml-2">
          <div
            className="h-[270px] w-[full] relative bg-white dark:bg-gray-900 rounded-[24px] p-5 border
              border-gray-700 hover:bg-[#e3dafb] dark:hover:bg-purple-900/20 
              transition-all duration-300 group overflow-hidden"
          >
            <header className="flex flex-row items-center justify-between">
              <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                <span className="text-md ">{job.postedTime}</span>
                {job.isNew && (
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-purple-100 text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    New
                  </span>
                )}
                {job.featured && (
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-orange-100 text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity ml-1 sm:ml-2">
                    Featured
                  </span>
                )}
              </div>
              <button
                className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Bookmark job"
              >
                {/* <Bookmark className="h-5 w-5 " /> */}
                <i className="fa fa-bookmark text-gray-500"></i>
              </button>
            </header>
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-white border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={job.logo || "/placeholder.svg?height=24&width=24"}
                    alt={`${job.company} logo`}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm">{job.company}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 sm:px-3 text-xs rounded-full border border-black bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <footer className="flex flex-row items-start sm:items-center justify-between gap-3 bg-white dark:bg-gray-900 rounded-b-[24px] px-5 py-4 dark:border-gray-800 absolute bottom-0 left-0 right-0">
              <div>
                <div className="font-semibold ">{job.salary}</div>
                <div className="text-sm ">{job.location}</div>
              </div>
              <button className="px-4 py-2 rounded-full border border-black ">
                View Details
              </button>
            </footer>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    // </div>
  );
}

const ResumeFeatureSection = () => (
  <div className="flex ms-auto me-auto z-1  flex-col w-[98%] md:w-[80%] lg:w-[85%] 2xl:w-[60%] items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-10 py-10 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
    <div className="text-center w-full max-w-xl p-3 md:p-6  ">
      {/* Header Section */}
      <ResumeFeatureHeader />

      {/* Image Container */}
      <ResumeFeatureimgContainer />

      {/* Resume Builder Section */}
      <ResumeBuilderSection />

      {/* Button */}
      <button className="mt-6 ms-auto me-auto px-8 py-4 bg-black text-white text-sm font-medium rounded-full border border-gray-400 hover:bg-gray-800 transition-colors duration-200 shadow-md flex items-center justify-center gap-2">
        Get Started <span className="ml-1">&gt;</span>
      </button>
    </div>
  </div>
);

const ResumeFeatureHeader = () => (
  <div className="text-center ">
    <p className="text-sm text-gray-500 font-semibold uppercase">New feature</p>
    <h1 className="text-3xl font-bold mt-2">Resume leveled up</h1>
    <p className="text-gray-600 mt-2">Showcase your skills the better way</p>
  </div>
);
const ResumeFeatureimgContainer = () => (
  <div className="relative mt-10 mb-10 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start ">
    <img
      src={imges}
      alt="SideImage 1"
      className="w-[120px] lg:w-[150px] hidden md:block lg:block h-[70px] lg:h-[80px] rounded-2xl shadow-md border border-gray-200 
            mt-4 lg:mt-0 md:absolute md:left-[-95px] lg:left-[-155px] 2xl:left-[-200px] md:bottom-[-55px]"
    />

    {/* Main Preview Image */}
    <img
      src={imges}
      alt="Main Preview"
      className="w-[300px] lg:w-[425px] h-[150px] lg:h-[225px] rounded-2xl shadow-lg border border-gray-200"
    />

    {/* Side Image 2 */}
    <img
      src={imges}
      alt="SideImage 2"
      className="w-[120px] lg:w-[150px] hidden md:block lg:block h-[70px] lg:h-[80px] rounded-2xl shadow-md border border-gray-200 
            mt-4 lg:mt-0 md:absolute md:right-[-95px] lg:right-[-155px] 2xl:right-[-200px] md:top-[-55px]"
    />
  </div>
);
const ResumeBuilderSection = () => (
  <div className="text-center mt-10">
    <h2 className="text-2xl font-semibold">Resume Builder</h2>
    <p className="text-gray-600 mt-2">
      Standard format for users to build their resume with industry standard
    </p>
  </div>
);

const EmailSignupSection = () => (
  <div className="flex flex-col items-center justify-center w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 flex ms-auto me-auto  flex-col p-2 z-2    items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-10 py-10 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
      Signup for new Job alerts
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm text-center mb-6">
      We will only send you 1 email / day
    </p>

    <div className="w-full max-w-xl">
      <form className="relative">
        <input
          type="email"
          placeholder="Enter your email here..."
          className="w-full h-[50px] pl-6 pr-36 py-3 rounded-full bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-base"
          required
        />
        <button
          type="submit"
          className="absolute right-[3px] top-[6px] bottom-[6px] px-5 py-2 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 transition flex items-center justify-center"
          style={{ minWidth: "140px" }}
        >
          <span className="whitespace-nowrap">Get Started &gt;</span>
        </button>
      </form>
    </div>
  </div>
);

export default Home;
