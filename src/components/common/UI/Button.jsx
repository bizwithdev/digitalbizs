const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    disabled = false,
    loading = false,
    icon,
    onClick,
    ...props 
  }) => {
    const baseStyles = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
    
    const variants = {
      primary: 'bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white shadow-soft hover:shadow-medium transform hover:-translate-y-0.5 focus:ring-primary-200',
      secondary: 'bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white shadow-soft hover:shadow-medium transform hover:-translate-y-0.5 focus:ring-primary-200',
      tech: 'bg-electric-500 hover:bg-electric-600 text-white shadow-soft hover:shadow-glow transform hover:-translate-y-0.5 focus:ring-electric-200',
      outline: 'bg-transparent border-2 border-silver-400 text-silver-700 hover:border-primary-500 hover:text-primary-600 hover:shadow-soft focus:ring-primary-200',
      ghost: 'bg-transparent text-silver-700 hover:bg-primary-50 hover:text-primary-600 focus:ring-primary-200'
    }
    
    const sizes = {
      sm: 'py-2 px-4 text-sm',
      md: 'py-3 px-6',
      lg: 'py-4 px-8 text-lg',
      xl: 'py-5 px-10 text-xl'
    }
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {icon && !loading && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    )
  }
  
  export default Button