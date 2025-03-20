"use client"

import { useState } from "react"

export function Calendar({ mode = "single", selected, onSelect, initialFocus }) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Generate days for the current month
  const generateDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)

    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay() // 0 = Sunday

    const days = []

    // Add empty cells for days before the first day of month
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>)
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(year, month, i)
      const isSelected = selected && selected.toDateString() === dayDate.toDateString()
      const isToday = new Date().toDateString() === dayDate.toDateString()

      days.push(
        <button
          key={i}
          onClick={() => onSelect(dayDate)}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
            isSelected
              ? "bg-blue-500 text-white"
              : isToday
                ? "border border-blue-500 text-blue-500"
                : "hover:bg-gray-100"
          }`}
        >
          {i}
        </button>,
      )
    }

    return days
  }

  // Navigate between months
  const changeMonth = (increment) => {
    const newDate = new Date(currentMonth)
    newDate.setMonth(newDate.getMonth() + increment)
    setCurrentMonth(newDate)
  }

  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => changeMonth(-1)} className="p-1 hover:bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="font-medium">
          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </div>
        <button onClick={() => changeMonth(1)} className="p-1 hover:bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="w-10 h-10 flex items-center justify-center text-xs text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{generateDays()}</div>
    </div>
  )
}

