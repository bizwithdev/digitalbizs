'use client';
import { ReactLenis } from 'lenis/react';
import h1 from '@images/hero/h1.jpg'
import h2 from '@images/hero/h2.jpg'
import a1 from '@images/about/a1.jpg'
import a2 from '@images/about/a2.jpg'
import a3 from '@images/about/a3.jpg'
import a4 from '@images/about/a4.jpg'
import s1 from '@images/services/s1.jpg'
import s2 from '@images/services/s2.jpg'
import s3 from '@images/services/s3.jpg'
import BusinessInfoTabs from '../components/common/UI/BusinessInfoTabs';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  return (
    <ReactLenis root>
      <main className="bg-white">

        <div className="wrapper">
          {/* Hero Section */}
          <section className="relative text-gray-900 h-screen w-full bg-white grid place-content-center sticky top-10">
            <div className="absolute opacity-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#0085c31a_1px,transparent_1px),linear-gradient(to_bottom,#0085c31a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="relative z-10 text-center max-w-5xl px-4">
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold tracking-tight leading-[110%] mb-8">
                Transform Your Business with <span className="text-[#0085c3]">Digital Bizs</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                We create stunning websites that convert visitors into customers
                <span className="text-[#0085c3] font-semibold"> Ready to grow your business?</span>
              </p>

              <div className="flex flex-row gap-3 sm:gap-6 justify-center items-center mb-8 px-2">
                {/* Primary Button */}
                <button className="flex-1 sm:flex-none relative inline-flex items-center justify-center bg-[#0085c3] hover:bg-[#006299] text-white font-semibold py-3 sm:py-4 px-4 sm:px-10 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#0085c3]/30 transition-all duration-300 transform">
                  <a href="tel:+919025344010" className="text-center">
                    <span className="text-sm sm:text-base">
                      <span className="block sm:hidden">Get Started</span>
                      <span className="hidden sm:block">Start Your Free Consultation</span>
                    </span>
                  </a>
                </button>

                {/* Secondary Button */}
                <button onClick={() => navigate('/contact')} className="flex-1 sm:flex-none relative inline-flex items-center justify-center border-2 border-[#0085c3] text-[#0085c3] font-semibold py-3 sm:py-4 px-4 sm:px-10 rounded-lg overflow-hidden group hover:text-white focus:outline-none focus:ring-4 focus:ring-[#0085c3]/30 transition-all duration-300">
                  <span className="absolute inset-0 bg-[#0085c3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative text-sm sm:text-base">Contact Now</span>
                </button>
              </div>
            </div>

            {/* Bouncing Arrow in Left Bottom Corner */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
              <div className="flex justify-center">
                <div className="animate-bounce">
                  <svg
                    className="w-10 h-10 text-[#0085c3]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 16l-6-6h12l-6 6z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="relative text-white h-screen w-full bg-[#0085c3] grid place-content-center sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            {/* Background image with opacity */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(${h1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>

            {/* Grid overlay on top of image */}
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="relative z-10 max-w-6xl px-8 text-center">
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-semibold tracking-tight leading-[120%] mb-8 text-white">
                We Turn Your Innovative Ideas<br />
                Into a Profitable Business
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
                Professional . Reliable . Results<br />
                Your success is our mission
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-lg text-white">
                <span>Trusted by Businesses</span>
                <span>Fast & Professional</span>
                <span>24/7 Support</span>
              </div>
            </div>

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
              <div className="flex justify-center">
                <div className="animate-bounce">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 16l-6-6h12l-6 6z" />
                  </svg>
                </div>
              </div>
            </div>


            {/* <div className="absolute bottom-20 left-40 z-20">
              <div className="flex">
                <div className="animate-bounce">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12l-6 6z" />
                  </svg>
                </div>
              </div>
            </div> */}


          </section>

          {/* Third Section */}
          <section className="relative text-gray-900 h-screen w-full bg-black grid place-content-center sticky top-0 overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `url(${h2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>

            {/* Enhanced Grid overlay with subtle animation */}
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#0085c31a_1px,transparent_1px),linear-gradient(to_bottom,#0085c31a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-pulse"></div>

            {/* Floating elements for depth */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-[#0085c3] rounded-full opacity-50 animate-ping"></div>
            <div className="absolute bottom-32 right-16 w-3 h-3 bg-[#0085c3] rounded-full opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-ping delay-500"></div>

            <div className="relative z-10 max-w-7xl px-8 mx-auto text-center">
              {/* Improved Headline */}
              <div className="mb-6">
                <h1 className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[110%] mb-8">
                  We Help Your Business
                  <br />
                  <span className="text-[#0085c3] relative">
                    Grow Digital Fast
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
                  Professional websites that work for your business. We build them right, {` `}
                  <br className="hidden md:block" />
                  keep them running, and help you succeed online
                </p>
              </div>
            </div>
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
              <div className="flex justify-center">
                <div className="animate-bounce">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 16l-6-6h12l-6 6z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>




        <section className="text-white w-full bg-[#0085c3]">
          {/* Desktop Layout - Unchanged */}
          <div className="hidden lg:grid lg:grid-cols-2">
            <div className="sticky top-0 h-screen flex items-center justify-center p-8">
              <div className="max-w-lg">
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center lg:text-left tracking-tight leading-[110%] mb-4">
                    <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      See What We've Built
                    </span>
                    <span className="block text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium mt-2">
                      For Businesses Like Yours
                    </span>
                  </h1>
                </div>

                <div className="text-lg md:text-xl leading-relaxed space-y-6 text-center lg:text-left mb-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="text-white/95 font-medium mb-3">
                      We are DigitalBizs - a dedicated team that builds meaningful websites for real businesses.
                    </p>

                    <p className="text-white/85 mb-3">
                      We listen carefully, work with modern technology, and create digital solutions that help your business thrive online.
                    </p>

                    <p className="text-white/75">
                      Every project receives our complete attention because your success is what drives us forward.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <button className="group relative overflow-hidden bg-white hover:bg-gray-50 text-[#0085c3] font-semibold py-4 px-10 rounded-lg shadow-md hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform">
                    <a href="tel:+919025344010">
                      <span className="relative z-10 flex items-center justify-center">
                        Know More About US
                      </span>
                    </a>
                  </button>

                  <button onClick={() => navigate('/contact')} className="group relative inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-10 rounded-lg overflow-hidden hover:text-[#0085c3] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:shadow-lg">
                    <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    <span className="relative flex items-center justify-center">
                      Contact Now
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-0 p-1 -space-y-28">
              <figure className="group grid place-content-center justify-start z-1 transition-all duration-700 ease-out">
                <div className="relative w-80 h-96 overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ease-out group-hover:shadow-3xl group-hover:scale-105 group-hover:-translate-y-6" style={{ transform: 'rotate(-6deg)', marginBottom: '-3rem' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10"></div>
                  <img
                    src={a1}
                    alt="DigitalBizs website project showcase"
                    className="transition-all duration-700 ease-out w-full h-full object-cover group-hover:scale-110"
                    style={{ transform: 'rotate(6deg) scale(1.1)' }}
                  />
                </div>
              </figure>

              <figure className="group grid place-content-center justify-end z-1 transition-all duration-700 ease-out">
                <div className="relative w-80 h-96 overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ease-out group-hover:shadow-3xl group-hover:scale-105 group-hover:-translate-y-6" style={{ transform: 'rotate(6deg)', marginTop: '-3rem' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10"></div>
                  <img
                    src={a2}
                    alt="Business website development example"
                    className="transition-all duration-700 ease-out w-full h-full object-cover group-hover:scale-110"
                    style={{ transform: 'rotate(-6deg) scale(1.1)' }}
                  />
                </div>
              </figure>

              <figure className="group grid place-content-center justify-start z-1 transition-all duration-700 ease-out">
                <div className="relative w-80 h-96 overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ease-out group-hover:shadow-3xl group-hover:scale-105 group-hover:-translate-y-6" style={{ transform: 'rotate(-6deg)', marginBottom: '-3rem' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10"></div>
                  <img
                    src={a3}
                    alt="Professional web design portfolio"
                    className="transition-all duration-700 ease-out w-full h-full object-cover group-hover:scale-110"
                    style={{ transform: 'rotate(6deg) scale(1.1)' }}
                  />
                </div>
              </figure>

              <figure className="group grid place-content-center justify-end z-1 transition-all duration-700 ease-out">
                <div className="relative w-80 h-96 overflow-hidden rounded-2xl shadow-xl transition-all duration-700 ease-out group-hover:shadow-3xl group-hover:scale-105 group-hover:-translate-y-6" style={{ transform: 'rotate(6deg)', marginTop: '-3rem' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out z-10"></div>
                  <img
                    src={a4}
                    alt="Digital business solution showcase"
                    className="transition-all duration-700 ease-out w-full h-full object-cover group-hover:scale-110"
                    style={{ transform: 'rotate(-6deg) scale(1.1)' }}
                  />
                </div>
              </figure>
            </div>
          </div>

          {/* Mobile Layout - Only First Two Images */}
          <div className="lg:hidden">
            {/* Mobile Header Section */}
            {/* Mobile Header Section */}
            <div className="px-6 py-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[110%] mb-6">
                  <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    See What We've Built
                  </span>
                  <span className="block text-xl sm:text-2xl text-white/90 font-medium mt-3">
                    For Businesses Like Yours
                  </span>
                </h1>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
                  <p className="text-white/95 font-medium mb-4 text-base">
                    We are DigitalBizs - a dedicated team that builds meaningful websites for real businesses.
                  </p>

                  <p className="text-white/85 mb-4 text-sm">
                    We listen carefully, work with modern technology, and create digital solutions that help your business thrive online.
                  </p>

                  <p className="text-white/75 text-sm">
                    Every project receives our complete attention because your success is what drives us forward.
                  </p>
                </div>

                {/* Updated Horizontal Buttons */}
                <div className="flex flex-row gap-3 sm:gap-6 justify-center items-center mb-12 px-2">
                  <button className="flex-1 sm:flex-none group relative overflow-hidden bg-white hover:bg-gray-50 text-[#0085c3] font-semibold py-3 sm:py-4 px-4 sm:px-10 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300">
                    <a href="tel:+919025344010" className="block w-full text-center">
                      <span className="relative z-10 text-sm sm:text-base">
                        <span className="block sm:hidden">Know More</span>
                        <span className="hidden sm:block">Know More About US</span>
                      </span>
                    </a>
                  </button>

                  <button onClick={() => navigate('/contact')} className="flex-1 sm:flex-none group relative inline-flex items-center justify-center border-2 border-white text-white font-semibold py-3 sm:py-4 px-4 sm:px-10 rounded-lg overflow-hidden hover:text-[#0085c3] focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300">
                    <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    <span className="relative text-sm sm:text-base">Contact Now</span>
                  </button>
                </div>
              </div>
            </div>


            {/* Mobile Portfolio Grid - Only First Two Images */}
            <div className="px-4 pb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {/* Portfolio Item 1 */}
                <figure className="group flex justify-center">
                  <div className="relative w-80 sm:w-72 h-96 sm:h-80 overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-105" style={{ transform: 'rotate(-3deg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10"></div>
                    <img
                      src={a1}
                      alt="DigitalBizs website project showcase"
                      className="transition-all duration-500 ease-out w-full h-full object-cover group-hover:scale-110"
                      style={{ transform: 'rotate(3deg) scale(1.05)' }}
                    />
                  </div>
                </figure>

                {/* Portfolio Item 2 */}
                <figure className="group flex justify-center">
                  <div className="relative w-80 sm:w-72 h-96 sm:h-80 overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-105" style={{ transform: 'rotate(3deg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10"></div>
                    <img
                      src={a2}
                      alt="Business website development example"
                      className="transition-all duration-500 ease-out w-full h-full object-cover group-hover:scale-110"
                      style={{ transform: 'rotate(-3deg) scale(1.05)' }}
                    />
                  </div>
                </figure>
              </div>


            </div>
          </div>
        </section>






        <section className="text-gray-900 w-full bg-white">
          {/* Desktop Layout - Unchanged */}
          <div className="hidden lg:flex justify-between px-40">
            <div className="grid gap-2">
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="relative h-80 w-full max-w-[30rem] rounded-2xl rotate-3 hover:rotate-0 p-8 grid place-content-center gap-6 transition-all duration-500 shadow-2xl hover:shadow-3xl group overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${s1})`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0085c3]/90 to-[#006b9f]/95"></div>

                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-white">Custom Website Development</h1>
                    <p className="text-white/90 leading-relaxed">
                      We build unique websites from scratch, designed specifically for your business goals. Clean code, modern design, and built to grow with your business.
                    </p>
                    <button className="w-fit bg-white text-[#0085c3] font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 group-hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </article>
              </figure>

              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="relative h-80 w-full max-w-[30rem] rounded-2xl -rotate-2 hover:rotate-0 p-8 grid place-content-center gap-6 transition-all duration-500 shadow-2xl hover:shadow-3xl group overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${s2})`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700/90 to-slate-900/95"></div>

                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 5M7 13l-1.5 5m0 0h9m-9 0L17 18" />
                      </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-white">Online Store Solutions</h1>
                    <p className="text-white/90 leading-relaxed">
                      We create powerful e-commerce platforms that make selling online simple. Easy inventory management, secure payments, and mobile-friendly design.
                    </p>
                    <button className="w-fit bg-white text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 group-hover:scale-105">
                      Explore Options
                    </button>
                  </div>
                </article>
              </figure>

              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="relative h-80 w-full max-w-[30rem] rounded-2xl rotate-2 hover:rotate-0 p-8 grid place-content-center gap-6 transition-all duration-500 shadow-2xl hover:shadow-3xl group overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${a1})`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/90 to-blue-600/95"></div>

                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-white">Website Care & Maintenance</h1>
                    <p className="text-white/90 leading-relaxed">
                      We keep your website running smoothly with regular updates, security monitoring, and quick fixes. Your website stays fast, secure, and always up-to-date.
                    </p>
                    <button className="w-fit bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 group-hover:scale-105">
                      Get Support
                    </button>
                  </div>
                </article>
              </figure>

              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="relative h-80 w-full max-w-[30rem] rounded-2xl -rotate-1 hover:rotate-0 p-8 grid place-content-center gap-6 transition-all duration-500 shadow-2xl hover:shadow-3xl group overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${s3})`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-800/90 to-indigo-900/95"></div>

                  <div className="text-center space-y-4 relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-white">Digital Business Guidance</h1>
                    <p className="text-white/90 leading-relaxed">
                      We help you understand what your business needs online and create a clear plan to achieve your digital goals. No confusing tech talk, just honest advice.
                    </p>
                    <button className="w-fit bg-white text-indigo-800 font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 group-hover:scale-105">
                      Get Guidance
                    </button>
                  </div>
                </article>
              </figure>
            </div>

            <div className="sticky top-0 h-screen grid place-content-center lg:ml-12">
              <div className="text-center lg:text-left max-w-lg">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[110%] mb-6">
                  <span className="block text-[#0085c3] mb-2">How We Help</span>
                  <span className="block text-gray-900">Your Business Grow</span>
                </h1>

                <div className="mt-8 space-y-6">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Every business has unique needs. We listen to your goals and create digital solutions that actually work for your specific situation.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                    <button className="relative inline-flex items-center justify-center bg-[#0085c3] hover:bg-[#006299] text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#0085c3]/30 transition-all duration-300 transform">
                      <a href="tel:+919025344010">
                        <span className="mr-2">Start Your Free Consultation</span>
                      </a>
                    </button>

                    <button onClick={() => navigate('/contact')} className="relative inline-flex items-center justify-center border-2 border-[#0085c3] text-[#0085c3] font-semibold py-4 px-10 rounded-lg overflow-hidden group hover:text-white focus:outline-none focus:ring-4 focus:ring-[#0085c3]/30 transition-all duration-300">
                      <span className="absolute inset-0 bg-[#0085c3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                      <span className="relative mr-2">Contact Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Separate Header and Cards */}
          <div className="lg:hidden">
            {/* Mobile "How We Help" Section - SEPARATE and ALWAYS VISIBLE */}
            <div className="px-6 py-12 bg-gradient-to-br from-gray-50 to-white">
              <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[110%] mb-6">
                  <span className="block text-[#0085c3] mb-2">How We Help</span>
                  <span className="block text-gray-900">Your Business Grow</span>
                </h1>

                <div className="mt-6 space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Every business has unique needs. We listen to your goals and create digital solutions that actually work for your specific situation.
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8">
                    <button className="w-full relative inline-flex items-center justify-center bg-[#0085c3] hover:bg-[#006299] text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#0085c3]/30 transition-all duration-300">
                      <a href="tel:+919025344010" className="text-center">
                        <span className="text-sm sm:text-base">
                          <span className="block sm:hidden">Get Started</span>
                          <span className="hidden sm:block">Start Free Consultation</span>
                        </span>
                      </a>
                    </button>

                    <button onClick={() => navigate('/contact')} className="w-full relative inline-flex items-center justify-center border-2 border-[#0085c3] text-[#0085c3] font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg overflow-hidden group hover:text-white focus:outline-none focus:ring-4 focus:ring-[#0085c3]/30 transition-all duration-300">
                      <span className="absolute inset-0 bg-[#0085c3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                      <span className="relative text-sm sm:text-base">Contact Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Service Cards Container - SEPARATE with Sticky Effects */}
            <div className="relative">
              {/* Service 1 - Custom Website Development */}
              <section className="sticky top-0 h-screen flex items-center justify-center z-20 px-4">
                <article className="relative h-80 w-full max-w-[22rem] mx-auto rounded-2xl rotate-1 hover:rotate-0 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 shadow-xl hover:shadow-2xl group overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${s1})`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0085c3]/90 to-[#006b9f]/95"></div>

                  <div className="text-center space-y-3 relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h1 className="text-xl font-bold text-white">Custom Website Development</h1>
                    <p className="text-white/90 leading-relaxed text-sm">
                      We build unique websites from scratch, designed specifically for your business goals. Clean code, modern design, and built to grow with your business.
                    </p>
                    <button onClick={() => navigate('/contact')} className="w-fit bg-white text-[#0085c3] font-semibold py-2 px-5 rounded-lg hover:bg-white/90 transition-all duration-300 group-hover:scale-105 text-sm">
                      Learn More
                    </button>
                  </div>
                </article>
              </section>

              {/* Service 2 - E-commerce Solutions */}
              <section className="sticky top-0 h-screen flex items-center justify-center z-30 px-4">
                <article className="relative h-80 w-full max-w-[22rem] mx-auto rounded-2xl -rotate-1 hover:rotate-0 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 shadow-xl hover:shadow-2xl group overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${s2})`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700/90 to-slate-900/95"></div>

                  <div className="text-center space-y-3 relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 5M7 13l-1.5 5m0 0h9m-9 0L17 18" />
                      </svg>
                    </div>
                    <h1 className="text-xl font-bold text-white">Online Store Solutions</h1>
                    <p className="text-white/90 leading-relaxed text-sm">
                      We create powerful e-commerce platforms that make selling online simple. Easy inventory management, secure payments, and mobile-friendly design.
                    </p>
                    <button onClick={() => navigate('/contact')} className="w-fit bg-white text-slate-700 font-semibold py-2 px-5 rounded-lg hover:bg-white/90 transition-all duration-300 group-hover:scale-105 text-sm">
                      Explore Options
                    </button>
                  </div>
                </article>
              </section>

              {/* Service 3 - Website Maintenance */}
              <section className="sticky top-0 h-screen flex items-center justify-center z-40 px-4">
                <article className="relative h-80 w-full max-w-[22rem] mx-auto rounded-2xl rotate-1 hover:rotate-0 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 shadow-xl hover:shadow-2xl group overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${a1})`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/90 to-blue-600/95"></div>

                  <div className="text-center space-y-3 relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h1 className="text-xl font-bold text-white">Website Care & Maintenance</h1>
                    <p className="text-white/90 leading-relaxed text-sm">
                      We keep your website running smoothly with regular updates, security monitoring, and quick fixes. Your website stays fast, secure, and always up-to-date.
                    </p>
                    <button onClick={() => navigate('/contact')} className="w-fit bg-white text-blue-600 font-semibold py-2 px-5 rounded-lg hover:bg-white/90 transition-all duration-300 group-hover:scale-105 text-sm">
                      Get Support
                    </button>
                  </div>
                </article>
              </section>

              {/* Service 4 - Digital Business Guidance */}
              <section className="sticky top-0 h-screen flex items-center justify-center z-50 px-4">
                <article className="relative h-80 w-full max-w-[22rem] mx-auto rounded-2xl -rotate-1 hover:rotate-0 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-500 shadow-xl hover:shadow-2xl group overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${s3})`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-800/90 to-indigo-900/95"></div>

                  <div className="text-center space-y-3 relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h1 className="text-xl font-bold text-white">Digital Business Guidance</h1>
                    <p className="text-white/90 leading-relaxed text-sm">
                      We help you understand what your business needs online and create a clear plan to achieve your digital goals. No confusing tech talk, just honest advice.
                    </p>
                    <button onClick={() => navigate('/contact')} className="w-fit bg-white text-indigo-800 font-semibold py-2 px-5 rounded-lg hover:bg-white/90 transition-all duration-300 group-hover:scale-105 text-sm">
                      Get Guidance
                    </button>
                  </div>
                </article>
              </section>

              {/* Add spacing at the end for proper scroll completion */}
              <div className="h-screen"></div>
            </div>
          </div>
        </section>



        <BusinessInfoTabs />







      </main>
    </ReactLenis>
  );
}
