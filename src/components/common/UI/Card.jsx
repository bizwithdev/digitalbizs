const Card = ({ 
    children, 
    variant = 'modern', 
    hover = true,
    className = '',
    ...props 
  }) => {
    const baseStyles = 'overflow-hidden transition-all duration-300'
    
    const variants = {
      modern: 'bg-white rounded-2xl shadow-soft border border-neutral-200',
      tech: 'bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-medium border border-neutral-200 backdrop-blur-sm',
      glass: 'bg-white/80 backdrop-blur-md rounded-2xl shadow-soft border border-white/20',
      minimal: 'bg-white rounded-xl shadow-soft',
      elevated: 'bg-white rounded-2xl shadow-large'
    }
  
    const hoverStyles = hover ? 'hover:shadow-medium hover:scale-[1.02] cursor-pointer' : ''
  
    return (
      <div
        className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
  
  export default Card