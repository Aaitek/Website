'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import 'swiper/swiper-bundle.css';

const BlogCarousel = () => {
  const blogs = [
    { image: '/img/news-1.jpg', title: 'Why should you go for Umbraco CMS for your business?' },
    { image: '/img/news-2.jpg', title: 'Virto Commerce Version History and Features' },
    { image: '/img/news-3.jpg', title: 'Contentstack Version History and Features' },
    { image: '/img/news-4.jpg', title: 'Why does your Strapi website need a Strapi consultant?' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left Content */}
          <div className="col-span-1">
            <h6 className="uppercase tracking-widest text-[#FBD506] font-semibold">Inspiration</h6>
            <h2 className="text-4xl font-bold my-4 text-white">Blogs & News</h2>
            <p className="mb-6 text-[#F4F4F4]">
              Get inspired by our experts in Digital Transformation, Customer Experience, Commissioning, and IT.
            </p>
            <Link
              href="/blogs"
              className="inline-flex items-center bg-[#FBD506] hover:bg-[#e2c700] text-[#1C1C1C] px-5 py-3 rounded-full shadow-lg transition duration-300 font-semibold"
            >
              Discover more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="8"
                className="ml-3"
                fill="currentColor"
              >
                <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" />
              </svg>
            </Link>
          </div>

          {/* Right Swiper Carousel */}
          <div className="col-span-1 lg:col-span-2">
            <Swiper
              modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: true,
              }}
            >
              {blogs.map((blog, index) => (
                <SwiperSlide key={index} style={{ width: '320px' }}>
                  <div className="bg-[#F4F4F4] rounded-xl shadow-xl overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="w-full object-cover"
                    />
                    <div className="p-5">
                      <p className="text-xs uppercase text-[#FBD506] font-semibold">Insight</p>
                      <h6 className="font-semibold text-lg text-[#1C1C1C] mt-2">
                        {blog.title}
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
