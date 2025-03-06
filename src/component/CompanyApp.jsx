import { useState } from "react"
import { MdOutlineRemoveRedEye } from "react-icons/md"
import { CgAttachment } from "react-icons/cg"
import { IoCallOutline } from "react-icons/io5"
import { CiMail } from "react-icons/ci"

const candidates = [
  { name: "Shubh Mangukiya", date: "22/02/2025", status: "Application" },
  { name: "Shubh Mangukiya", date: "22/02/2025", status: "Application" },
  { name: "Shubh Mangukiya", date: "22/02/2025", status: "Interview" },
  { name: "Shubh Mangukiya", date: "22/02/2025", status: "Application" },


]

const statusClasses = {
  Application: "bg-gray-300 text-gray-700",
  Interview: "bg-green-200 text-green-700",
  Reject: "bg-red-500 text-white",
  Pending: "bg-yellow-500 text-white"
}

const CompanyApp = () => {
  const [updatedCandidates, setUpdatedCandidates] = useState(candidates)

  const handleStatusChange = (index, newStatus) => {
    const updatedCandidatesList = [...updatedCandidates]
    updatedCandidatesList[index].status = newStatus
    setUpdatedCandidates(updatedCandidatesList)
  }

  // State to keep track of selected div index
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Handle click event to set the selected div
  const handleClick = index => {
    setSelectedIndex(index) // Set the clicked div as selected
  }

  return (
    <div className="p-3 md:p-4 xl:p-8 w-ful flex flex-col lg:flex-row gap-6">
      {/* Left Column: Company Information */}
      <div className="lg:w-1/3 flex flex-col ">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            // Set the index when div is clicked
            onClick={() => handleClick(idx)}
            // Apply background color to the selected div
            className={`p-4 rounded-lg cursor-pointer shadow-md ${
              selectedIndex === idx ? "bg-[#F4F5FF]" : ""
            }`}
          >
            <h2 className="text-lg font-semibold">Product Designer</h2>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Grameenphone</span> Dhaka,
              Bangladesh
            </p>
          </div>
        ))}
      </div>

      {/* Right Column: Candidate List */}
      <div className="lg:w-2/3 overflow-x-auto">
        <table className="min-w-full bg-[#F4F5FF] border rounded-lg shadow-md">
          <thead className="bg-indigo-50">
            <tr>
              <th className="py-4 px-3 text-left text-xs sm:text-base">
                Candidate Name
              </th>
              <th className="py-4 px-3 text-left text-xs sm:text-base">
                Date Applied
              </th>
              <th className="py-4 px-3 text-center text-xs sm:text-base">
                Profile
              </th>
              <th className="py-4 px-3 text-center text-xs sm:text-base">
                Contact
              </th>
              <th className="py-4 px-3 text-center text-xs sm:text-base">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {updatedCandidates.map((candidate, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-3 text-xs sm:text-sm">
                  {candidate.name}
                </td>
                <td className="py-2 px-3 text-xs sm:text-sm">
                  {candidate.date}
                </td>
                <td className="py-2 px-3">
                  <span className="flex justify-center gap-3">
                    <MdOutlineRemoveRedEye className="cursor-pointer text-base sm:text-lg" />
                    <a
                      href={`/path/to/${candidate.name
                        .toLowerCase()
                        .replace(" ", "_")}_resume.pdf`}
                      download={`${candidate.name}_Resume.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CgAttachment className="cursor-pointer text-base sm:text-lg" />
                    </a>
                  </span>
                </td>
                <td className="py-2 px-3">
                  <span className="flex justify-center gap-3">
                    <IoCallOutline
                      className="cursor-pointer text-base sm:text-lg"
                      style={{ strokeWidth: 2 }}
                    />
                    <CiMail
                      className="cursor-pointer text-base sm:text-lg"
                      style={{ strokeWidth: 1 }}
                    />
                  </span>
                </td>
                <td className="py-2 px-3 text-center">
                  <select
                    value={candidate.status}
                    onChange={e => handleStatusChange(index, e.target.value)}
                    className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      statusClasses[candidate.status]
                    }`}
                  >
                    {Object.keys(statusClasses).map(status => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompanyApp
