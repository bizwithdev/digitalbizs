import { useState, useEffect } from 'react'

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: [
        'Responsive Design',
        'Fast Loading Speed',
        'SEO Optimization',
        'Cross-browser Compatibility',
        'Security Best Practices',
        'Content Management System'
      ],
      icon: '🌐',
      price: 'Starting from $2,500'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that engage users and convert visitors into customers through strategic design thinking.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems',
        'Mobile-First Approach'
      ],
      icon: '🎨',
      price: 'Starting from $1,800'
    },
    {
      id: 3,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to help your business succeed in the online marketplace and reach your target audience.',
      features: [
        'Market Analysis',
        'Competitor Research',
        'Digital Marketing Plan',
        'Brand Positioning',
        'Growth Strategy',
        'Analytics & Reporting'
      ],
      icon: '📊',
      price: 'Starting from $1,200'
    },
    {
      id: 4,
      title: 'E-Commerce Solutions',
      description: 'Complete online store solutions with payment integration, inventory management, and customer management systems.',
      features: [
        'Shopping Cart Integration',
        'Payment Gateway Setup',
        'Inventory Management',
        'Order Processing',
        'Customer Accounts',
        'Admin Dashboard'
      ],
      icon: '🛒',
      price: 'Starting from $3,500'
    },
    {
      id: 5,
      title: 'Website Maintenance',
      description: 'Ongoing support and maintenance services to keep your website secure, updated, and performing at its best.',
      features: [
        'Regular Updates',
        'Security Monitoring',
        'Backup Services',
        'Performance Optimization',
        'Content Updates',
        'Technical Support'
      ],
      icon: '🔧',
      price: 'Starting from $300/month'
    },
    {
      id: 6,
      title: 'SEO Services',
      description: 'Search engine optimization services to improve your website visibility and drive organic traffic to your business.',
      features: [
        'Keyword Research',
        'On-Page Optimization',
        'Technical SEO',
        'Content Strategy',
        'Link Building',
        'Performance Tracking'
      ],
      icon: '📈',
      price: 'Starting from $800/month'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed project plan with timelines, milestones, and clear deliverables.'
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'Our team works on creating your solution with regular updates and feedback sessions.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'We thoroughly test everything before launch and provide ongoing support and maintenance.'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional digital solutions designed to help your business grow and succeed 
              in today's competitive online marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`card p-8 h-full transition-all duration-500 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <div className="text-primary-500 font-semibold text-lg mb-4">{service.price}</div>
                  <button className="btn-primary w-full">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is delivered on time and exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-500 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200 + 500}ms` }}
              >
                <div className="w-16 h-16 bg-primary-500 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose DigitalBizs?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Experienced Team',
                    description: 'Our skilled professionals have years of experience delivering successful digital solutions.'
                  },
                  {
                    title: 'Quality Guarantee',
                    description: 'We stand behind our work with a satisfaction guarantee and ongoing support.'
                  },
                  {
                    title: 'Transparent Pricing',
                    description: 'Clear, upfront pricing with no hidden fees or surprise costs along the way.'
                  },
                  {
                    title: 'Fast Delivery',
                    description: 'We deliver projects on time without compromising on quality or attention to detail.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-500 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card-simple text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Contact us today for a free consultation and let's discuss how we can help your business grow.
              </p>
              <button className="btn-primary mb-4">
                Free Consultation
              </button>
              <p className="text-sm text-gray-500">No obligation • 30-minute call</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Contact us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services