"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, Check } from "lucide-react"

export default function SearchableDropdown({
  label,
  placeholder = "Search...",
  options,
  value,
  onChange
}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState(options)
  const dropdownRef = useRef(null)

  // Filter options based on search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = options.filter(option =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredOptions(filtered)
    } else {
      setFilteredOptions(options)
    }
  }, [searchQuery, options])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative" ref={dropdownRef}>
        <div className="flex items-center border-b border-gray-300 pb-2">
          {!searchQuery && value ? (
            <div
              className="flex-1 text-gray-900 font-medium cursor-pointer"
              onClick={() => setShowDropdown(true)}
            >
              {value}
            </div>
          ) : (
            <input
              type="text"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value)
                setShowDropdown(true)
              }}
              onFocus={() => setShowDropdown(true)}
              placeholder={value || placeholder}
              className="w-full focus:outline-none focus:border-purple-500"
            />
          )}
          {showDropdown ? (
            <ChevronUp
              className="h-5 w-5 text-gray-400 cursor-pointer"
              onClick={() => setShowDropdown(false)}
            />
          ) : (
            <ChevronDown
              className="h-5 w-5 text-gray-400 cursor-pointer"
              onClick={() => setShowDropdown(true)}
            />
          )}
        </div>
        {showDropdown && (
          <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredOptions.length > 0 ? (
              <ul className="py-1">
                {filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between ${
                      option === value
                        ? " text-black font-medium"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      onChange(option)
                      setSearchQuery("")
                      setShowDropdown(false)
                    }}
                  >
                    {option}
                    {option === value && <Check className="h-4 w-4 ml-2" />}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
