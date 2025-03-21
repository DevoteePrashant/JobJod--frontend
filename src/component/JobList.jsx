import { MapPin, Clock, ChevronDown } from "lucide-react"
import icon from "../image/icon.png"
import { Link } from "react-router-dom"
import { useState } from "react";
export default function JobList({ jobs, isBrowseCompany }) {
  const options = ["Most Recent", "Highest Paid", "Most Relevant"];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <main className="w-full lg:w-1/2 space-y-4 mt-12">
      <div className="flex justify-end">
        <div className="relative">
          <button
            className="flex items-center justify-between p-2 sm:p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            onClick={toggleDropdown}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M3 6H21M6 12H18M10 18H14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm sm:text-lg font-medium">
                {selectedOption ? `Filter by: ${selectedOption}` : "Filter by"}
              </span>
            </div>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <ul className="py-1" role="menu" aria-orientation="vertical">
                {options.map((option) => (
                  <li key={option}>
                    <button
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${selectedOption === option ? "bg-gray-50 font-medium" : ""
                        }`}
                      onClick={() => selectOption(option)}
                      role="menuitem"
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <Link to="/Singlejobview" key={job.id} className="block ">
            <article className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <img
                  src={icon}
                  alt={job.company.name}
                  width={40}
                  height={40}
                  className="rounded-md"
                />

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                    <div className="flex items-center gap-3 md:block">
                      {/* {<img
                        src={job.company.icon || "/placeholder.svg"}
                        alt={`${job.company.name} logo`}
                        width={32}
                        height={32}
                        className="rounded-md md:hidden"
                      />} */}
                      <div>
                        <h3 className="text-lg font-semibold">{isBrowseCompany ? job.company.name : job.title}</h3>
                        {!isBrowseCompany && <p className="text-gray-600 text-sm">{job.company.name}</p>}
                      </div>
                    </div>

                    {job.isNew && !isBrowseCompany && (
                      <span className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full w-fit h-fit">
                        New post
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    {!isBrowseCompany && <><div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                      <div className="font-medium text-gray-900">${job.salary}</div></>}
                  </div>

                  <p className="mt-3 text-gray-600 line-clamp-2 md:line-clamp-none">{job.description}</p>

                  {!isBrowseCompany && <div className="mt-3 text-sm text-gray-500">Posted {job.postedAt}</div>}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">&lt;</button>
        <button className="px-3 py-1 rounded bg-purple-500 text-white">1</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">2</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">3</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">4</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">5</button>
        <button className="px-3 py-1 rounded bg-gray-200 text-gray-600">&gt;</button>
      </div>
    </main>
  )
}

