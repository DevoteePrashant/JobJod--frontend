import {
  Briefcase,
  Award,
  Crown,
  FileText,
  Plus,
  Star,
  Download,
  Eye,
  Trash
} from "lucide-react"

export default function ProfileContent({
  experiences = [],
  education = [],
  skills = [],
  attachments = []
}) {
  return (
    <div className="rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 lg:pl-20 xl:pl-80 justify-center">
      {experiences.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border p-6 max-w-screen-xl  mx-auto overflow-hidden " >
          <SectionHeader
            icon={<Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />}
            title="Experiences"
            buttonText="Add Experience"
          />
          <ExperienceList experiences={experiences} />
        </div>
      )}

      {education.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border mt-4 p-6 max-w-screen-xl  mx-auto overflow-hidden ">
          <SectionHeader
            icon={<Award className="w-4 h-4 sm:w-5 sm:h-5" />}
            title="Education & Certifications"
            buttonText="Add Education"
          />
          <EducationList education={education} />
        </div>
      )}

      {skills.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border mt-4 p-6 max-w-screen-xl  mx-auto overflow-hidden ">
          <SectionHeader
            icon={<Crown className="w-4 h-4 sm:w-5 sm:h-5" />}
            title="Skills"
            buttonText="Add Skills"
          />
          <SkillsList skills={skills} />
        </div>
      )}

      {attachments.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border mt-4 p-6 max-w-screen-xl  mx-auto overflow-hidden ">
          <SectionHeader
            icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5" />}
            title="Attachments"
            buttonText="Add File"
          />
          <AttachmentsList attachments={attachments} />
        </div>
      )}
    </div>
  )
}

const SectionHeader = ({ icon, title, buttonText }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
    <div className="flex items-center gap-2 mb-2 sm:mb-0">
      <div className="p-1.5 sm:p-2 bg-purple-100 rounded-lg">{icon}</div>
      <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
    </div>
    <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-purple-600 hover:bg-purple-50 rounded-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
      <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
      {buttonText}
    </button>
  </div>
)

const ExperienceList = ({ experiences }) => (
  <div className="space-y-4 sm:space-y-6">
    {experiences.map((exp, index) => (
      <div key={index} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex-shrink-0">
          <img
            src="/placeholder.svg?height=48&width=48"
            alt={exp.company}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-sm sm:text-base">{exp.role}</h3>
          <p className="text-xs sm:text-sm text-gray-600">{exp.company}</p>
          <p className="text-xs sm:text-sm text-gray-500">
            {exp.location} · {exp.period}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
            {exp.description}
          </p>
          <button className="text-purple-500 text-xs sm:text-sm mt-1 sm:mt-2">
            See More
          </button>
        </div>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <button className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm">
            Delete
          </button>
          <button className="text-purple-500 hover:text-purple-700 text-xs sm:text-sm">
            Edit
          </button>
        </div>
      </div>
    ))}
  </div>
)

const EducationList = ({ education }) => (
  <div className="space-y-4 sm:space-y-6">
    {education.map((edu, index) => (
      <div key={index} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="flex-shrink-0">
          <img
            src="/placeholder.svg?height=48&width=48"
            alt={edu.school}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-sm sm:text-base">{edu.school}</h3>
          <p className="text-xs sm:text-sm text-gray-600">{edu.course}</p>
          <p className="text-xs sm:text-sm text-gray-500">
            Grade: {edu.grade} · {edu.period}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
            {edu.description}
          </p>
          <button className="text-purple-500 text-xs sm:text-sm mt-1 sm:mt-2">
            See More
          </button>
        </div>
        <div className="flex gap-2 mt-2 sm:mt-0">
          <button className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm">
            Delete
          </button>
          <button className="text-purple-500 hover:text-purple-700 text-xs sm:text-sm">
            Edit
          </button>
        </div>
      </div>
    ))}
  </div>
)

const SkillsList = ({ skills }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="flex items-center justify-between p-3 sm:p-4  rounded-lg"
      >
        <div>
          <h3 className="font-medium text-sm sm:text-base">{skill.name}</h3>
          <p className="text-xs sm:text-sm text-gray-500">{skill.level}</p>
        </div>
        <div className="flex gap-0.5 sm:gap-1">
          {[1, 2, 3, 4, 5].map(star => (
            <Star
              key={star}
              className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 fill-purple-500"
            />
          ))}
        </div>
      </div>
    ))}
  </div>
)

const AttachmentsList = ({ attachments }) => (
  <div className="space-y-2 sm:space-y-3">
    {attachments.map((file, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-3  rounded-lg"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
            <Download className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
          </div>
          <div>
            <h3 className="font-medium text-sm sm:text-base">{file.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{file.size}</p>
          </div>
        </div>
        <div className="flex gap-1 sm:gap-2">
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full">
            <Trash className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    ))}
  </div>
)
