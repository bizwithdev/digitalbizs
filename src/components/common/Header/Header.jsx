import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '@images/logos/digitalbizs-logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <img 
              src={logo} 
              alt="DigitalBizs" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Call Button - With filled icon on all screen sizes */}
            <a 
              href="tel:+919025344010"
              className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 
              bg-[#0085c3] text-white sm:bg-transparent sm:border-2 sm:border-[#0085c3] sm:text-[#0085c3] 
              font-medium sm:font-semibold rounded-lg 
              hover:bg-[#006299] sm:hover:bg-[#0085c3] sm:hover:text-white 
              transition-all duration-300 text-sm sm:text-base"
            >
              {/* Filled Phone Icon - Visible on all screen sizes */}
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.27 1.11l-2.2 2.2z"/>
              </svg>
              {/* Text */}
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">Call Now</span>
            </a>

            {/* Contact Us Button - Hidden on mobile, visible from tablet up */}
            <Link 
              to="/contact" 
              className="hidden sm:flex items-center justify-center space-x-2 bg-[#0085c3] text-white px-6 py-2 font-semibold rounded-lg hover:bg-[#006299] transition-all duration-300 shadow-md hover:shadow-lg text-base"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
