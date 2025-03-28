"use client"

import { useState } from "react"
import dashboard from "../image/dashboard.png"
export default function ProfileInfo() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    email: "anamoulrouf.bd@gmail.com",
    phone: "+911234567890",
    location: "New York, USA",
    yearEstablished: "2025-02-22",
    website: "www.anamoulrouf.com",
    pincode: "123456",
    interviewPersons: ["John Smith", "John Doe"]
  })

  const [formData, setFormData] = useState({ ...profileData })
  const [newPerson, setNewPerson] = useState("")
  const [phoneError, setPhoneError] = useState(null)
  const [pincodeError, setPincodeError] = useState(null)

  const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\d{3})[-.\s]?(\d{4,6})$/
  const pincodeRegex = /^\d{6}$/ // Regular expression for 6-digit pincode

  const validatePhone = phone => {
    if (!phoneRegex.test(phone)) {
      setPhoneError("Invalid phone number format.")
    } else {
      setPhoneError(null)
    }
  }

  const validatePincode = pincode => {
    if (!pincodeRegex.test(pincode)) {
      setPincodeError("Invalid pincode. Please enter a 6-digit number.")
    } else {
      setPincodeError(null)
    }
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (name === "phone") {
      validatePhone(value)
    } else if (name === "pincode") {
      validatePincode(value)
    }
  }

  const handleAddPerson = () => {
    if (newPerson.trim()) {
      setFormData({
        ...formData,
        interviewPersons: [...formData.interviewPersons, newPerson.trim()]
      })
      setNewPerson("")
    }
  }

  const handleRemovePerson = index => {
    const updatedPersons = [...formData.interviewPersons]
    updatedPersons.splice(index, 1)
    setFormData({
      ...formData,
      interviewPersons: updatedPersons
    })
  }

  const handleSave = () => {
    if (!phoneError && !pincodeError) {
      setProfileData(formData)
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setFormData({ ...profileData })
    setIsEditing(false)
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-4 border border-gray-200 rounded-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 relative">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full">
            <img
              src={dashboard || "/placeholder.svg"}
              alt="logo"
              className="rounded full"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Basic Information</h2>
            <p>Update profile </p>
          </div>
        </div>
        {isEditing ? (
          <div className="flex flex-wrap gap-2 self-end sm:self-auto">
            <button
              className="py-2 px-4 border border-gray-200 rounded-xl hover:bg-gray-100"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="py-2 px-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600"
              onClick={handleSave}
              disabled={phoneError || pincodeError}
            >
              Save
            </button>
          </div>
        ) : (
          <button
            className="py-2  px-4 border border-purple-500 text-purple-500 rounded-xl hover:bg-purple-50 absolute right-4 top-4 sm:static mt-4 "
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-500 rounded-xl">
            Email Address
          </div>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <div className="text-gray-700">{profileData.email}</div>
          )}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-500">Phone Number</div>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <div className="text-gray-700">{profileData.phone}</div>
          )}
          {phoneError && <div className="text-red-500">{phoneError}</div>}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-500">Location</div>
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <div className="text-gray-700">{profileData.location}</div>
          )}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-500">
            Year Established
          </div>
          {isEditing ? (
            <input
              type="date"
              name="yearEstablished"
              value={formData.yearEstablished}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <div className="text-gray-700">{profileData.yearEstablished}</div>
          )}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-500">Website</div>
          {isEditing ? (
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <div className="text-gray-700">{profileData.website}</div>
          )}
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-500">Pincode</div>
          {isEditing ? (
            <input
              type="number"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          ) : (
            <div className="text-gray-700">{profileData.pincode}</div>
          )}
          {pincodeError && <div className="text-red-500">{pincodeError}</div>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <div className="text-sm font-medium text-gray-500">
            Interview Persons
          </div>
          <div className="flex flex-wrap gap-2">
            {(isEditing
              ? formData.interviewPersons
              : profileData.interviewPersons
            ).map((person, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 hover:bg-purple-200 p-2 rounded-xl"
              >
                {person}
                {isEditing && (
                  <button
                    className="ml-2 text-purple-600 hover:text-purple-800"
                    onClick={() => handleRemovePerson(index)}
                  >
                    ×
                  </button>
                )}
              </span>
            ))}
            {isEditing && (
              <div className="flex gap-2 items-center mt-2">
                <input
                  placeholder="Add person"
                  value={newPerson}
                  onChange={e => setNewPerson(e.target.value)}
                  className="w-48 p-2  border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
                <button
                  className="py-2 px-4 border rounded-xl border-gray-200  hover:bg-gray-100"
                  onClick={handleAddPerson}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
