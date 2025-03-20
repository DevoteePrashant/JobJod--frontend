export function Button({ children, variant = "default", size = "default", className, ...props }) {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50"
  
    const variantStyles = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      ghost: "bg-transparent hover:bg-gray-100",
      link: "text-blue-500 underline-offset-4 hover:underline bg-transparent",
    }
  
    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 text-sm",
      lg: "h-12 px-6 text-lg",
    }
  
    // Combine classes without using cn
    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`
  
    return (
      <button className={combinedClasses} {...props}>
        {children}
      </button>
    )
  }
  
  