import { useState, useEffect } from 'react'

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-500">DigitalBizs</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a dedicated team of professionals committed to delivering 
              exceptional digital solutions that help businesses thrive online.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  DigitalBizs was founded with a simple mission: to help businesses 
                  succeed in the digital world through professional, reliable, and 
                  effective web solutions.
                </p>
                <p>
                  With years of experience in web development and digital strategy, 
                  our team understands what it takes to create websites that not only 
                  look great but also deliver real business results.
                </p>
                <p>
                  We believe in building long-term partnerships with our clients, 
                  providing ongoing support and ensuring their digital presence 
                  continues to evolve with their business needs.
                </p>
              </div>
            </div>
            <div className="card-simple">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">500+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
                  <div className="text-gray-600">Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary-500 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trust',
                description: 'We build trust through transparency, reliability, and consistent delivery of high-quality work.',
                icon: '🤝'
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in every project, ensuring attention to detail and professional standards.',
                icon: '⭐'
              },
              {
                title: 'Partnership',
                description: 'We view every client relationship as a partnership, working together towards shared success.',
                icon: '🎯'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`card p-8 text-center transition-all duration-500 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and see how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
