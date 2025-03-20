"use client"

import React, { useState, useRef, useEffect } from "react"

export function Popover({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef(null)

  // Handle click outside to close popover
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [popoverRef])

  // Clone children and pass isOpen state
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isOpen, setIsOpen })
    }
    return child
  })

  return (
    <div ref={popoverRef} className="relative">
      {childrenWithProps}
    </div>
  )
}

export function PopoverTrigger({ children, asChild, isOpen, setIsOpen }) {
  if (asChild) {
    // Clone the child and add onClick handler
    return React.cloneElement(React.Children.only(children), {
      onClick: (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)

        // Call the original onClick if it exists
        if (children.props.onClick) {
          children.props.onClick(e)
        }
      },
    })
  }

  return <button onClick={() => setIsOpen(!isOpen)}>{children}</button>
}

export function PopoverContent({ children, className, align = "center" }) {
  return (
    <div
      className={`absolute z-50 mt-1 bg-white border border-gray-200 rounded-md shadow-lg ${className} ${
        align === "start" ? "left-0" : align === "end" ? "right-0" : "left-1/2 transform -translate-x-1/2"
      }`}
    >
      {children}
    </div>
  )
}

