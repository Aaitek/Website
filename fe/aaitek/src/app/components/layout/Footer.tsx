import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className="bg-[#1C1C1C] text-[#F4F4F4]">
      <div className="container mx-auto py-8">
        <footer>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <Image src="/img/logo.png" alt="Aaitek Logo" width={150} height={50} />
              <p className="mt-4 text-sm">
                Aaitek is all about digital experiences and digital transformation. Through the power of headless, we deliver smart and unique experiences to guests, people, and the community.
              </p>
            </div>

            {/* Pages */}
            <div>
              <h5 className="font-bold text-[#FBD506] mb-3">Pages</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-[#FBD506]">Home</Link></li>
                <li><Link href="/services" className="hover:text-[#FBD506]">Services</Link></li>
                <li><Link href="/about" className="hover:text-[#FBD506]">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#FBD506]">Contact Us</Link></li>
                <li><Link href="/events" className="hover:text-[#FBD506]">Events</Link></li>
              </ul>
            </div>

            {/* Aaitek Services */}
            <div>
              <h5 className="font-bold text-[#FBD506] mb-3">Aaitek Services</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services-contentful" className="hover:text-[#FBD506]">Contentful</Link></li>
                <li><Link href="/services-umbraco" className="hover:text-[#FBD506]">Umbraco</Link></li>
                <li><Link href="/services-kentico" className="hover:text-[#FBD506]">Kentico</Link></li>
                <li><Link href="/services-contentstack" className="hover:text-[#FBD506]">Contentstack</Link></li>
                <li><Link href="/services-strapi" className="hover:text-[#FBD506]">Strapi</Link></li>
                <li><Link href="/services-xm-cloud" className="hover:text-[#FBD506]">XM Cloud</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-bold text-[#FBD506] mb-3">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-[#FBD506]">Who we are</Link></li>
                <li><Link href="#" className="hover:text-[#FBD506]">What we do</Link></li>
                <li><Link href="#" className="hover:text-[#FBD506]">Our thinking</Link></li>
                <li><Link href="#" className="hover:text-[#FBD506]">Blogs</Link></li>
                <li><Link href="/terms-condition" className="hover:text-[#FBD506]">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h5 className="font-bold text-[#FBD506] mb-3">Contact Us</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:info@Aaitek.com" className="hover:text-[#FBD506]">
                    <i className="fa-solid fa-envelope mr-2"></i> info@Aaitek.com
                  </a>
                </li>
                <li>
                  <a href="tel:+61435987212" className="hover:text-[#FBD506]">
                    <i className="fas fa-phone mr-2"></i> +61 435 987 212
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FBD506]">
                    <i className="fa-solid fa-location-dot mr-2"></i> Sydney, Australia
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-[#2E2E2E]" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© Aaitek Technology Specialist 2025 | Designed and Developed by{" "}
              <a href="https://www.aaitek.com.au" className="hover:text-[#FBD506]">Aaitek Pty Ltd</a>
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#"><i className="fab fa-twitter hover:text-[#FBD506]"></i></a>
              <a href="#"><i className="fab fa-instagram hover:text-[#FBD506]"></i></a>
              <a href="#"><i className="fab fa-facebook-f hover:text-[#FBD506]"></i></a>
              <a href="#"><i className="fab fa-github hover:text-[#FBD506]"></i></a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
