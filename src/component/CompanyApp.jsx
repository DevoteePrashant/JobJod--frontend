import { Search, Phone, Mail, ChevronDown } from "lucide-react";
import { IoFilter } from "react-icons/io5";

export default function JobCandidateListing() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white overflow-hidden">
      {/* Left Sidebar */}
      <div className="hidden lg:block w-full lg:w-1/4 bg-white border-r border-gray-200 p-4">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="search job name..."
            className="pl-10 w-full bg-gray-50 border rounded-full py-2 text-sm"
          />
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-violet-50 cursor-pointer hover:bg-violet-100 transition-colors"
            >
              <h3 className="font-medium">{job.title}</h3>
              <div className="text-sm text-muted-foreground mt-1">
                <p>{job.company}</p>
                <p>{job.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 md:p-6 overflow-y-auto">
        {/* Mobile Header with Search and Filter */}
        <div className="lg:hidden flex items-center gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="search job name..."
              className="pl-10 w-full bg-gray-50 border rounded-full py-2 text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 bg-white text-sm font-medium whitespace-nowrap">
            <IoFilter className="h-4 w-8" />
            <span className="hidden sm:inline">Filter by</span>
            <ChevronDown className="h-4 w-8" />
          </button>
        </div>

        {/* Desktop Filter */}
        <div className="hidden lg:flex justify-end mb-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 bg-white text-sm font-medium">
            <IoFilter className="h-4 w-4" />
            <span className="w-20">Filter by</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Candidate Cards */}
        <div className="space-y-4">
          {candidates.map((candidate, index) => (
            <div
              key={index}
              className="shadow-sm overflow-hidden bg-violet-50 rounded-md border border-gray-100"
            >
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{candidate.name}</h2>
                    <div className="flex items-center gap-1 mt-1">
                      <p className="font-medium">{candidate.role}</p>
                      <span className="text-muted-foreground">
                        ({candidate.experience})
                      </span>
                    </div>

                    <div className="mt-3">
                      <p className="text-sm font-medium">Skills:</p>
                      <p className="text-sm text-muted-foreground">
                        {candidate.skills}
                      </p>
                    </div>

                    <div className="mt-3">
                      <p className="text-sm font-medium">
                        Available to join from:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {candidate.availability}
                      </p>
                    </div>

                    {/* Contact Information (only for first candidate) */}
                    {index === 0 && (
                      <div className="mt-6">
                        <h3 className="font-semibold mb-3">
                          Contact Information
                        </h3>
                        <div className="flex flex-col font-semibold gap-2">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span>{candidate.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span>{candidate.email}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="md:text-right">
                    <p className="text-sm text-muted-foreground mb-4">
                      Application: {candidate.applicationTime}
                    </p>

                    <div className="space-y-2 w-full md:w-auto">
                      {index === 0 ? (
                        <>
                          {/* <button className="w-20 ml-20 md:min-w-[150px] flex items-center justify-center rounded-full bg-gray-200 py-2 px-4 font-medium text-gray-800 hover:bg-gray-400">
                            Application
                            <ChevronDown className="h-4 w-4 ml-2" />
                          </button> */}
                          <button className="w-full md:w-48 sm:w-48 justify-center rounded-full bg-gray-200 text-gray-800 py-2 px-4 font-medium hover:bg-gray-400">
                            Application
                          </button>
                          <br />

                          <button className="w-full md:w-48 sm:w-48 justify-center rounded-full bg-violet-400 py-2 px-4 font-medium text-gray-800 hover:bg-violet-500">
                            Profile
                          </button>
                          <br />

                          <button className="w-full md:w-48 sm:w-48 justify-center rounded-full bg-black text-white py-2 px-4 font-medium hover:bg-gray-800">
                            Resume
                          </button>
                        </>
                      ) : (
                        <button className="w-full md:min-w-[150px] justify-center rounded-full bg-violet-400 py-2 px-4 font-medium text-gray-800 hover:bg-violet-500">
                          Unlock Candidate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sample data
const jobListings = [
  {
    title: "Product Designer",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Sales Manager",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Product Designer",
    company: "Grameenphone",
    location: "Dhaka, Bangladesh",
  },
];

const candidates = [
  {
    name: "John Doe",
    role: "Web Developer",
    experience: "2 Year 6 Month Experience",
    skills: "Javascript, React, MongoDB",
    availability: "01/April/2025",
    applicationTime: "12:45:00 22/02/2025",
    phone: "+91 12345 67890",
    email: "demo@gmail.com",
  },
  {
    name: "John Doe",
    role: "Web Developer",
    experience: "2 Year 6 Month Experience",
    skills: "Javascript, React, MongoDB",
    availability: "01/April/2025",
    applicationTime: "12:45:00 22/02/2025",
    phone: "+91 12345 67890",
    email: "demo@gmail.com",
  },
  {
    name: "John Doe",
    role: "Web Developer",
    experience: "2 Year 6 Month Experience",
    skills: "Javascript, React, MongoDB",
    availability: "01/April/2025",
    applicationTime: "12:45:00 22/02/2025",
    phone: "+91 12345 67890",
    email: "demo@gmail.com",
  },
];
