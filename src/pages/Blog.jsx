import { useState, useEffect } from 'react'

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Exploring upcoming trends and technologies that will shape the web development landscape in 2024 and beyond.',
      date: '2024-01-15',
      category: 'Development',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Design Systems That Scale',
      excerpt: 'How to create and maintain design systems that grow with your business and improve team collaboration.',
      date: '2024-01-10',
      category: 'Design',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'SEO Best Practices for 2024',
      excerpt: 'Latest SEO strategies and techniques to improve your website visibility and drive organic traffic.',
      date: '2024-01-05',
      category: 'SEO',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Insights, tips, and industry knowledge to help you succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className={`card overflow-hidden transition-all duration-500 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded">{post.category}</span>
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-500 transition-colors">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog