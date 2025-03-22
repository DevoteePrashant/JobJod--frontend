"use client";
import { useState } from "react";
import { Clock } from "lucide-react";

function TimePicker({
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
  label = "Timing",
}) {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);

  // Generate time options in 30-minute intervals
  const timeOptions = generateTimeOptions();

  function generateTimeOptions() {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (const minute of [0, 30]) {
        const period = hour >= 12 ? "PM" : "AM";
        const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        const formattedHour = displayHour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        options.push(`${formattedHour}:${formattedMinute}${period}`);
      }
    }
    return options;
  }

  function renderDropdown(isOpen, setIsOpen, selectedTime, onTimeChange) {
    return (
      isOpen && (
        <div className="absolute z-10 w-[200px] bg-white border border-gray-300 rounded shadow-md">
          <div className="h-[300px] overflow-y-auto">
            {timeOptions.map((time) => (
              <div
                key={time}
                className={[
                  "px-4 py-2 hover:bg-gray-100 cursor-pointer",
                  selectedTime === time &&
                    "bg-purple-50 text-purple-600 font-medium",
                ].join(" ")}
                onClick={() => {
                  onTimeChange(time);
                  setIsOpen(false);
                }}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      )
    );
  }

  return (
    <div className="space-y-4">
      {label && (
        <div className="text-sm font-medium text-gray-700">{label}</div>
      )}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 relative">
        {/* Start Time Picker */}
        <div className="relative w-full md:w-auto">
          <button
            onClick={() => setIsStartOpen(!isStartOpen)}
            className="w-full px-4 py-2 border border-gray-300 rounded text-left flex items-center space-x-2"
          >
            <Clock className="h-4 w-4 text-gray-500" />
            <span>{startTime || "Start Time"}</span>
          </button>
          {renderDropdown(isStartOpen, setIsStartOpen, startTime, onStartTimeChange)}
        </div>

        <span className="text-gray-500 hidden md:block">-</span>

        {/* End Time Picker */}
        <div className="relative w-full md:w-auto mt-2 md:mt-0">
          <button
            onClick={() => setIsEndOpen(!isEndOpen)}
            className="w-full px-4 py-2 border border-gray-300 rounded text-left flex items-center space-x-2"
          >
            <Clock className="h-4 w-4 text-gray-500" />
            <span>{endTime || "End Time"}</span>
          </button>
          {renderDropdown(isEndOpen, setIsEndOpen, endTime, onEndTimeChange)}
        </div>
      </div>
    </div>
  );
}

export default TimePicker;
