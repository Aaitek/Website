// export default function HomePage() {
//   return (
//     <main
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         fontFamily: "Inter, sans-serif",
//         backgroundColor: "#1C1C1C",
//         color: "#FFFFFF",
//       }}
//     >
//       <h1>Test Page</h1>
//     </main>
//   );
// }


import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { HeroCarousel } from '@/components/common/HeroCarousel';
// import BlogCarousel from '@/components/common/BlogCarousel';

export default function HomePage() {
  return (
    <div className="bg-[#1C1C1C] text-[#F4F4F4] min-h-screen">
      {/* Simple Hero Section for Testing */}
      <section id="hero" className="relative py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Aaitek Technology <span className="text-[#FBD506]">Specialists</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            20+ years of experience in digital transformation, headless CMS solutions, and innovative technology consulting.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FBD506] text-black px-8 py-4 rounded-lg font-bold hover:bg-[#F4A607] transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="border border-[#FBD506] text-[#FBD506] px-8 py-4 rounded-lg font-bold hover:bg-[#FBD506] hover:text-black transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Service Cards */}
      <section className="py-20 lg:py-24 bg-[#1C1C1C]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#FBD506]">Expertise</span>
            </h2>
            <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto leading-relaxed">
              Transform Your Digital Vision Into Reality with cutting-edge content management solutions and 20+ years of experience in enterprise-grade platforms
            </p>
          </div>
          {/* Three Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Contentful Card */}
            <Link href="/Services" className="group">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full border border-[#FBD506]/20 hover:border-[#FBD506] hover:scale-105 transform">
                <div className="mb-4">
                  <svg width="60" height="60" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_18_265)">
                      <path d="M20.772 47.63C18.9241 45.912 17.4537 43.8285 16.454 41.5119C15.4543 39.1953 14.9473 36.6961 14.965 34.173C14.9455 31.6701 15.4299 29.1888 16.3892 26.8769C17.3485 24.565 18.7632 22.4698 20.549 20.716C21.9582 19.2917 22.7462 17.3675 22.7408 15.3639C22.7355 13.3603 21.9372 11.4403 20.5204 10.0236C19.1037 8.60684 17.1837 7.80854 15.1801 7.80319C13.1765 7.79784 11.2523 8.58586 9.828 9.99502C3.54545 16.4781 0.0223731 25.1452 9.04369e-08 34.173C-0.00032716 38.6665 0.887477 43.1159 2.61238 47.2652C4.33728 51.4145 6.86526 55.1819 10.051 58.351C10.7483 59.0667 11.5819 59.6356 12.5025 60.024C13.4232 60.4123 14.4123 60.6124 15.4115 60.6124C16.4107 60.6124 17.3998 60.4123 18.3205 60.024C19.2412 59.6356 20.0747 59.0667 20.772 58.351C22.0934 56.8782 22.8242 54.9692 22.8242 52.9905C22.8242 51.0118 22.0934 49.1028 20.772 47.63Z" fill="#FFD85F"/>
                      <path d="M20.771 20.716C22.4956 18.8804 24.5815 17.4218 26.8976 16.432C29.2136 15.4422 31.7094 14.9428 34.228 14.965C36.7301 14.951 39.2098 15.4378 41.5209 16.3968C43.832 17.3558 45.9279 18.7676 47.685 20.549C49.1093 21.9582 51.0335 22.7462 53.0371 22.7408C55.0407 22.7355 56.9607 21.9372 58.3774 20.5204C59.7942 19.1037 60.5925 17.1837 60.5978 15.1801C60.6032 13.1765 59.8152 11.2523 58.406 9.828C51.9229 3.54545 43.2558 0.0223731 34.228 9.04349e-08C29.7344 -0.00032716 25.2851 0.887496 21.1358 2.6124C16.9865 4.3373 13.2191 6.86528 10.05 10.051C9.33429 10.7483 8.76546 11.5818 8.37707 12.5025C7.98867 13.4232 7.78857 14.4123 7.78857 15.4115C7.78857 16.4107 7.78857 17.3998 8.37707 18.3205C8.76546 19.2412 9.33429 20.0747 10.05 20.772C11.5358 22.073 13.4462 22.7856 15.4211 22.7752C17.396 22.7649 19.2989 22.0325 20.771 20.716Z" fill="#3BB4E7"/>
                      <path d="M47.6849 47.63C45.9608 49.4665 43.875 50.9261 41.559 51.9167C39.2429 52.9074 36.7468 53.4076 34.2279 53.386C31.7258 53.4 29.2461 52.9132 26.935 51.9542C24.6239 50.9952 22.528 49.5834 20.7709 47.802C20.0683 47.0919 19.2323 46.5276 18.3109 46.1416C17.3896 45.7556 16.401 45.5556 15.402 45.5529C14.4031 45.5502 13.4134 45.745 12.49 46.1261C11.5666 46.5071 10.7276 47.0669 10.0212 47.7733C9.31483 48.4797 8.75503 49.3187 8.37398 50.2421C7.99293 51.1655 7.79814 52.1552 7.80081 53.1541C7.80348 54.1531 8.00355 55.1417 8.38953 56.063C8.77551 56.9844 9.33979 57.8204 10.0499 58.523C16.5332 64.8052 25.2003 68.3279 34.2279 68.35C38.7215 68.3503 43.1708 67.4625 47.3201 65.7376C51.4694 64.0127 55.2368 61.4848 58.4059 58.299C59.1216 57.6017 59.6905 56.7682 60.0788 55.8475C60.4672 54.9268 60.6673 53.9377 60.6673 52.9385C60.6673 51.9393 60.4672 50.9502 60.0788 50.0295C59.6905 49.1089 59.1216 48.2753 58.4059 47.578C56.9206 46.2764 55.0104 45.5632 53.0356 45.5728C51.0607 45.5824 49.1575 46.3141 47.6849 47.63Z" fill="#ED5C68"/>
                    </g>
                  </svg>
                </div>
                <h5 className="text-sm font-bold text-[#FBD506] mb-2">HEADLESS CMS</h5>
                <h4 className="text-xl font-bold text-white mb-3">Contentful Development Excellence</h4>
                <p className="text-[#F4F4F4] text-sm mb-4 leading-relaxed">Transform your digital content strategy with our expert Contentful implementation. We deliver scalable, API-first solutions that power seamless content delivery across all platforms.</p>
                <div className="flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5.39062 7.5L0.84295 2.7546C0.37028 2.26138 0.366018 1.48458 0.833247 0.986203C1.33615 0.449771 2.18576 0.443794 2.69616 0.9731L8.08594 6.5625C8.32031 6.83594 8.4375 7.14844 8.4375 7.5C8.4375 7.85156 8.32031 8.16406 8.08594 8.4375L2.69616 14.0269C2.18576 14.5562 1.33615 14.5502 0.833247 14.0138C0.366018 13.5154 0.37028 12.7386 0.84295 12.2454L5.39062 7.5Z" fill="#FBD506"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Strapi Card */}
            <Link href="/Services" className="group">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full border border-[#FBD506]/20 hover:border-[#FBD506] hover:scale-105 transform">
                <div className="mb-4">
                  <svg width="60" height="60" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_18_279)">
                      <path d="M23.528 47C36.5222 47 47.056 36.4787 47.056 23.5C47.056 10.5213 36.5222 0 23.528 0C10.5338 0 0 10.5213 0 23.5C0 36.4787 10.5338 47 23.528 47Z" fill="#F05A22"/>
                      <path d="M23.528 20.367C24.2619 20.3594 24.9757 20.6065 25.5478 21.0663C26.1199 21.526 26.5148 22.1699 26.6654 22.8882C26.8159 23.6066 26.7127 24.3549 26.3733 25.0056C26.0339 25.6564 25.4794 26.1693 24.8042 26.457C24.129 26.7447 23.3749 26.7893 22.6705 26.5833C21.966 26.3773 21.3548 25.9334 20.941 25.3272C20.5272 24.7211 20.3364 23.9902 20.4012 23.2591C20.4659 22.528 20.7821 21.842 21.296 21.318C21.5855 21.0183 21.9323 20.7798 22.3156 20.6164C22.699 20.4531 23.1112 20.3683 23.528 20.367Z" fill="white"/>
                    </g>
                  </svg>
                </div>
                <h5 className="text-sm font-bold text-[#FBD506] mb-2">OPEN SOURCE CMS</h5>
                <h4 className="text-xl font-bold text-white mb-3">Strapi Development Mastery</h4>
                <p className="text-[#F4F4F4] text-sm mb-4 leading-relaxed">Unlock the power of flexible content management with our custom Strapi solutions. We create robust APIs, beautiful front-ends, and scalable architectures.</p>
                <div className="flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5.39062 7.5L0.84295 2.7546C0.37028 2.26138 0.366018 1.48458 0.833247 0.986203C1.33615 0.449771 2.18576 0.443794 2.69616 0.9731L8.08594 6.5625C8.32031 6.83594 8.4375 7.14844 8.4375 7.5C8.4375 7.85156 8.32031 8.16406 8.08594 8.4375L2.69616 14.0269C2.18576 14.5562 1.33615 14.5502 0.833247 14.0138C0.366018 13.5154 0.37028 12.7386 0.84295 12.2454L5.39062 7.5Z" fill="#FBD506"/>
                  </svg>
                </div>
              </div>
            </Link>

            {/* Kentico Card */}
            <Link href="/Services" className="group">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full border border-[#FBD506]/20 hover:border-[#FBD506] hover:scale-105 transform">
                <div className="mb-4">
                  <svg width="60" height="60" viewBox="0 0 77 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_18_291)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M69.3082 12.806H22.6372V36.206H45.6022C45.9953 36.206 46.3722 36.3622 46.6501 36.6401C46.9281 36.918 47.0842 37.295 47.0842 37.688V60.335H70.7902V14.291C70.7906 14.0962 70.7526 13.9031 70.6783 13.723C70.604 13.5428 70.4949 13.3791 70.3572 13.2412C70.2195 13.1032 70.056 12.9938 69.876 12.9191C69.696 12.8445 69.5031 12.806 69.3082 12.806Z" fill="#8E75FF"/>
                      <path opacity="0.405" fillRule="evenodd" clipRule="evenodd" d="M22.6352 12.806V36.206H0.741202C0.593951 36.206 0.450048 36.1621 0.327809 36.08C0.20557 35.9979 0.110523 35.8813 0.0547648 35.745C-0.000993311 35.6087 -0.0149406 35.4589 0.0146981 35.3147C0.0443367 35.1704 0.116221 35.0383 0.221202 34.935L22.6352 12.806Z" fill="#8E75FF"/>
                    </g>
                  </svg>
                </div>
                <h5 className="text-sm font-bold text-[#FBD506] mb-2">ENTERPRISE CMS</h5>
                <h4 className="text-xl font-bold text-white mb-3">Kentico CMS Excellence</h4>
                <p className="text-[#F4F4F4] text-sm mb-4 leading-relaxed">Maximize your digital potential with enterprise-grade Kentico solutions. We build comprehensive platforms that streamline content management and enhance user experiences.</p>
                <div className="flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5.39062 7.5L0.84295 2.7546C0.37028 2.26138 0.366018 1.48458 0.833247 0.986203C1.33615 0.449771 2.18576 0.443794 2.69616 0.9731L8.08594 6.5625C8.32031 6.83594 8.4375 7.14844 8.4375 7.5C8.4375 7.85156 8.32031 8.16406 8.08594 8.4375L2.69616 14.0269C2.18576 14.5562 1.33615 14.5502 0.833247 14.0138C0.366018 13.5154 0.37028 12.7386 0.84295 12.2454L5.39062 7.5Z" fill="#FBD506"/>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-8">
            <div className="md:col-span-7">
              <Link href="/Services" className="block group">
                <div className="bg-[#2E2E2E] rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-[#FBD506]/20 hover:border-[#FBD506]">
                  <Image
                    src="/img/about-2.png"
                    alt="About service 2"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </Link>
            </div>
            <div className="md:col-span-5">
              <Link href="/Services" className="block group">
                <div className="bg-[#2E2E2E] rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-[#FBD506]/20 hover:border-[#FBD506]">
                  <Image
                    src="/img/About-1.png"
                    alt="About service 1"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#FBD506] to-[#FFF480]">
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-[#1C1C1C]">
              <h6 className="text-sm font-bold mb-4 tracking-wider">OUR MISSION</h6>
              <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">Transform Your Digital Vision Into Reality</h3>
              <p className="text-lg mb-8 leading-relaxed">With over two decades of expertise, Aaitek specializes in delivering cutting-edge composable solutions that revolutionize how businesses connect with their audiences. We combine technical excellence with creative vision to build digital experiences that drive engagement, growth, and lasting success.</p>
              <Link href="/about">
                <button className="bg-[#1C1C1C] text-[#FBD506] px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2 hover:scale-105 transform shadow-lg">
                  Learn Our Story
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#FBD506"/>
                  </svg>
                </button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#1C1C1C] rounded-2xl p-8 border border-[#FBD506]/20">
                <Image
                  src="/img/passion-frmae.png"
                  alt="Passion frame"
                  width={500}
                  height={400}
                  className="w-full max-w-md rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-24 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h6 className="text-[#FBD506] font-bold mb-4 text-sm tracking-wider">COMPREHENSIVE SOLUTIONS</h6>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">Enterprise-Grade Digital Solutions</h3>
              <p className="text-[#F4F4F4] mb-8 text-lg leading-relaxed">We deliver world-class content management systems, headless architectures, and digital transformation solutions that scale with your business. Our proven methodologies ensure rapid deployment, exceptional performance, and long-term success.</p>
              <Link href="/Services">
                <button className="bg-[#FBD506] text-[#1C1C1C] px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2 hover:scale-105 transform shadow-lg">
                  Explore All Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C"/>
                  </svg>
                </button>
              </Link>
            </div>
            <div>
              <h5 className="text-2xl font-bold text-white mb-8">Core Technologies</h5>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9H18V7H1V9Z" fill="#FBD506"/>
                        </svg>
                      </span>
                      <span className="text-[#F4F4F4]">Contentful</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9H18V7H1V9Z" fill="#FBD506"/>
                        </svg>
                      </span>
                      <span className="text-[#F4F4F4]">Umbraco CMS</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9H18V7H1V9Z" fill="#FBD506"/>
                        </svg>
                      </span>
                      <span className="text-[#F4F4F4]">Kentico CMS</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9H18V7H1V9Z" fill="#FBD506"/>
                        </svg>
                      </span>
                      <span className="text-[#F4F4F4]">Sitecore XM Cloud</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9H18V7H1V9Z" fill="#FBD506"/>
                        </svg>
                      </span>
                      <span className="text-[#F4F4F4]">Contentstack</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
                          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9H18V7H1V9Z" fill="#FBD506"/>
                        </svg>
                      </span>
                      <span className="text-[#F4F4F4]">Strapi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service & About Section */}
      <section className="py-16 lg:py-20 bg-[#1C1C1C]">
        <div className="container mx-auto px-4">
          {/* First Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="bg-[#2E2E2E] rounded-2xl p-6 border border-[#FBD506]/20">
                <Image
                  src="/img/service-about-1.jpg"
                  alt="AI Technology"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h6 className="text-sm font-bold text-[#FBD506] mb-4 tracking-wider">A Journey into the Future</h6>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Exploring the Transformative Power and Limitless Potential of AI Technology</h2>
              <p className="text-[#F4F4F4] mb-6">Dive into the realm of Artificial Intelligence as we uncover its profound impact on industries, society, and the future. Discover how AI is revolutionizing healthcare, finance, transportation, and beyond, shaping a world of innovation and endless possibilities.</p>
              <Link href="/blogs">
                <button className="bg-[#FBD506] text-[#1C1C1C] px-8 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C"/>
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Second Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-sm font-bold text-[#FBD506] mb-4 tracking-wider">Exploring Tomorrow&apos;s Technology Today</h6>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Navigating the Landscape of AI: A Comprehensive Guide for Newcomers</h2>
              <p className="text-[#F4F4F4] mb-6">Dive into the fascinating world of Artificial Intelligence (AI) with our comprehensive guide. From understanding the basics to exploring advanced applications, embark on a journey through tomorrow&apos;s technology landscape.</p>
              <Link href="/blogs">
                <button className="bg-[#FBD506] text-[#1C1C1C] px-8 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C"/>
                  </svg>
                </button>
              </Link>
            </div>
            <div>
              <div className="bg-[#2E2E2E] rounded-2xl p-6 border border-[#FBD506]/20">
                <Image
                  src="/img/service-about-2.jpg"
                  alt="AI Guide"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working at Aaitek Section */}
      <section className="py-16 lg:py-20 bg-[#2E2E2E]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-sm font-bold text-[#FBD506] mb-4 tracking-wider">GREAT PLACE TO WORK</h6>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Working at Aaitek</h2>
              <p className="text-[#F4F4F4] mb-6">Do you want to work at a Great Place to Work? A place where we value vitality, culture, diversity and a good dose of challenges? Visit our Dutch or German website for all available vacancies.</p>
              <Link href="/blogs">
                <button className="bg-[#FBD506] text-[#1C1C1C] px-8 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Check out vacancies
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C"/>
                  </svg>
                </button>
              </Link>
            </div>
            {/* <div>
              <div className="bg-[#1C1C1C] rounded-2xl p-6 border border-[#FBD506]/20">
                <Image
                  src="/img/Working-at Aaitek-old.png"
                  alt="Working at Aaitek"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      {/* <section className="py-16 lg:py-20 bg-[#1C1C1C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#2E2E2E] rounded-2xl p-6 border border-[#FBD506]/20">
                <Image
                  src="/img/Partnerships-mic.jpg"
                  alt="Microsoft Partnership"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div>
              <div className="mb-6">
                <Image
                  src="/img/microsoft.png"
                  alt="Microsoft Logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <h6 className="text-sm font-bold text-[#FBD506] mb-4 tracking-wider">Partnerships</h6>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Microsoft and Aaitek: Strategic Partners in Digital Transformation</h2>
              <p className="text-[#F4F4F4]">Dive into the realm of artificial intelligence companies and witness the transformative impact of cutting-edge technologies. From AI-driven solutions to groundbreaking innovations, discover how these companies are reshaping industries and shaping the future of technology.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Blog Section - Temporarily Commented */}
      <section id="blogs" className="py-20 bg-[#2E2E2E]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Latest <span className="text-[#FBD506]">Insights</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Stay updated with our latest thoughts on technology, digital transformation, and innovation.
          </p>
          <Link
            href="/blogs"
            className="bg-[#FBD506] text-black px-8 py-4 rounded-lg font-bold hover:bg-[#F4A607] transition-colors"
          >
            View All Blogs
          </Link>
        </div>
      </section>
    </div>
  );
}