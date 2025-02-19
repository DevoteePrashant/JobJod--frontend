import { User, Briefcase, Award, Crown, FileText } from "lucide-react"

const navItems = [
  { icon: User, label: "Information", isActive: true },
  { icon: Briefcase, label: "Experiences" },
  { icon: Award, label: "Education" },
  { icon: Crown, label: "Skills" },
  { icon: FileText, label: "Attachments" },
]

export function ProfileSidebar({ name, role, avatarUrl }) {
  return (
    <div className="w-full lg:w-[280px] lg:flex-shrink-0">
      <div className="bg-white rounded-2xl shadow-sm border p-4">
     
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li
                key={item.label}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                  item.isActive ? "bg-purple-50 text-purple-600" : "hover:bg-gray-50"
                }`}
              >
                <item.icon className={`w-5 h-5 ${item.isActive ? "text-purple-600" : "text-gray-500"}`} />
                <span className={item.isActive ? "font-medium" : ""}>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

