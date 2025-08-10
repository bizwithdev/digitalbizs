// import { useState, useEffect } from 'react'

// const Contact = () => {
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState('')

//   useEffect(() => {
//     // Scroll to top when component mounts
//     window.scrollTo(0, 0)
//     setIsLoaded(true)
//   }, [])

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate form submission
//     setTimeout(() => {
//       setSubmitStatus('success')
//       setIsSubmitting(false)
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       })
//     }, 2000)
//   }

//   return (
//     <div className="pt-12 sm:pt-16">
//       {/* Your existing JSX remains the same */}
//       {/* Hero Section */}
//       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className={`text-center transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
//               Get in <span className="text-primary-500">Touch</span>
//             </h1>
//             <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4">
//               Have a question or want to work together? Send us a message and we'll get back to you soon.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="max-w-2xl mx-auto">
//             {/* Form Card */}
//             <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10">
//               {/* Success Message */}
//               {submitStatus === 'success' && (
//                 <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 text-sm sm:text-base">
//                   <div className="flex items-center">
//                     <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     Thank you for your message! We'll get back to you within 24 hours.
//                   </div>
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Name & Email Row */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 {/* Subject */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
//                     What's this about? *
//                   </label>
//                   <select
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base bg-white"
//                   >
//                     <option value="">Choose a topic</option>
//                     <option value="general">General Inquiry</option>
//                     <option value="project">New Project</option>
//                     <option value="support">Support</option>
//                     <option value="partnership">Partnership</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
//                     Your Message *
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows="5"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical text-sm sm:text-base"
//                     placeholder="Tell us what you have in mind..."
//                   ></textarea>
//                 </div>

//                 {/* Submit Button - Right Aligned */}
//                 <div className="pt-2 flex justify-end">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center min-w-[140px] text-sm sm:text-base"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Contact

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoaded(true)
    
    // Initialize EmailJS with direct values (working solution)
    emailjs.init("ijyYqOxcFRa7w2Cqd")
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Email 1: Send notification to YOU (business owner)
      await emailjs.send(
        'service_tqwc4th',
        'template_nz04sqg',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )

      // Email 2: Send auto-reply to CUSTOMER
      await emailjs.send(
        'service_tqwc4th',
        'template_beexc3e',
        {
          customer_name: formData.name,
          customer_email: formData.email,
          customer_subject: formData.subject,
          customer_message: formData.message,
          to_email: formData.email
        }
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      // console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-12 sm:pt-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Get in <span className="text-[#0085c3]">Touch</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4">
              Have a question or want to work together? Send us a message and we'll get back to you soon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            {/* Form Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 lg:p-10">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 text-sm sm:text-base">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6 text-sm sm:text-base">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Something went wrong. Please try again or contact us directly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0085c3] focus:border-[#0085c3] transition-colors text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0085c3] focus:border-[#0085c3] transition-colors text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    What's this about? *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0085c3] focus:border-[#0085c3] transition-colors text-sm sm:text-base bg-white"
                  >
                    <option value="">Choose a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="project">New Project</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0085c3] focus:border-[#0085c3] transition-colors resize-vertical text-sm sm:text-base"
                    placeholder="Tell us what you have in mind..."
                  ></textarea>
                </div>

                {/* Submit Button - Right Aligned */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0085c3] hover:bg-[#006299] disabled:bg-gray-300 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center min-w-[140px] text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Information Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Other Ways to <span className="text-[#0085c3]">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prefer to reach out directly? Here are all the ways you can get in touch with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#0085c3] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Ready to discuss your project?</p>
              <a href="tel:+919025344010" className="text-[#0085c3] font-semibold hover:text-[#006299] transition-colors">
                +91 90253 44010
              </a>
            </div>

            {/* Email */}
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#0085c3] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us a detailed message</p>
              <a href="mailto:bizwithdev0512@gmail.com" className="text-[#0085c3] font-semibold hover:text-[#006299] transition-colors">
                bizwithdev0512@gmail.com
              </a>
            </div>

            {/* Response Time */}
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#0085c3] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600 mb-4">We typically respond within</p>
              <span className="text-[#0085c3] font-semibold text-lg">24 Hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact