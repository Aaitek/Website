import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { strapiFetchOne } from "@/lib/strapi";
import { formatDate, getOptimizedImageUrl } from "@/lib/utils";
import { Event, PageProps } from "@/types";
import Loading from "@/components/ui/Loading";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import OptimizedImage from "@/components/ui/OptimizedImage";

// Revalidate every hour for better performance
export const revalidate = 3600;
export const dynamic = 'force-dynamic';

/**
 * Event view page component with optimized performance and error handling
 */
export default async function EventViewPage({ searchParams }: PageProps) {
  // Handle the case when searchParams is not available (e.g., during static generation)
  let resolvedSearchParams;
  try {
    resolvedSearchParams = await searchParams;
  } catch (error) {
    // During static generation, searchParams might not be available
    console.warn('SearchParams not available during static generation:', error);
    notFound();
  }

  const identifier = resolvedSearchParams?.slug || resolvedSearchParams?.id;

  if (!identifier) {
    notFound();
  }

  // Fetch event data with optimized query and error handling
  let event;
  try {
    event = await strapiFetchOne<Event>(
      'events',
      String(identifier),
      ['Image'],
      { revalidate: 3600 }
    );

    if (!event) {
      notFound();
    }
  } catch (error) {
    console.error('Error fetching event data during build:', error);
    notFound();
  }

  const fallbackImageUrl = "/img/envent-view.png";

  return (
    <ErrorBoundary>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
      />

      {/* Navbar section */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src="/img/logo.png" alt="Aaitek Logo" width={150} height={50} className="nva-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link font-fmaily-nav text-white home" href="/">Home</Link>
              <Link className="nav-link font-fmaily-nav text-white services" href="/services">Services</Link>
              <Link className="nav-link font-fmaily-nav text-white about" href="/about">About Us</Link>
              <Link className="nav-link font-fmaily-nav text-white contact" href="/contact">Contact</Link>
              <Link className="nav-link font-fmaily-nav text-white events active" href="/events">Events</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section>
        <div className="services-banner img-possion">
          <Suspense fallback={<Loading size="lg" text="Loading image..." />}>
            <OptimizedImage
              media={event.Image?.[0]}
              alt={event.Title}
              width={1920}
              height={800}
              className="w-100"
              style={{ objectFit: 'cover' }}
              priority
              fallbackUrl={fallbackImageUrl}
              preferredSize="large"
            />
          </Suspense>
          <div className="about-possion-two">
            <h1 className="h1-font-media about-p text-left">{event.Title}</h1>
            <p className="p-font-media text-left mb-1 mb-lg-3">
              {event.Description || "Join us for this exciting event where we'll explore the latest in technology and innovation."}
            </p>
            <Link href="/contact">
              <button className="custom-btn">
                Contact us
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                  <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="event_view mt-3 mt-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <article>
                <header>
                  <h1 className="display-4 fw-bold mb-4">{event.Title}</h1>
                  {event.publishedAt && (
                    <p className="text-muted mb-4">
                      <i className="fas fa-calendar-alt me-2" />
                      {formatDate(event.publishedAt)}
                    </p>
                  )}
                </header>

                <Suspense fallback={<Loading text="Loading content..." />}>
                  <div
                    className="content-body"
                    dangerouslySetInnerHTML={{
                      __html: event.Content || event.Description || "No content available."
                    }}
                  />
                </Suspense>
              </article>
            </div>
            <div className="col-lg-5 col-12 px-0">
              <div className="contact-details px-lg-5 px-4 sticky-top">
                <h4 className="text-white font-fmaily h1-font-media">Any questions?</h4>
                <p className="mb-0">
                  Our team will be happy to help you. Give us a call:
                  <a href="tel:+61435987212" className="text-yellow fw-bold">+61 435 987 212</a>
                  {' '}or ask us a question via our digital contact form.
                </p>
                <Link href="/contact">
                  <button className="custom-btn btn-font-media">
                    Contact us
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge mb-lg-5 mb-3 mt-3">
        <div className="container">
          <div className="row mt-2 align-items-center">
            <div className="col-md-6">
              <div>
                <h6>FULL-SERVICE DIGITAL PARTNER</h6>
                <h2>What&apos;s your challenge?</h2>
                <p>
                  We are happy to help you to create a unique customer experience, empowering your employees and optimizing your IT Operations. These are the components for a successful digital transformation within your organization. Looking for a sparring partner or ready for tailor-made advice? Make an appointment or call us. Our experts are ready for your challenge.
                </p>
                <Link href="/contact">
                  <button className="custom-btn btn-font-media">
                    Contact us
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
                        <path d="M11.806 7.80429C11.6802 7.92573 11.5118 7.99292 11.337 7.9914C11.1622 7.98989 10.995 7.91977 10.8714 7.79617C10.7478 7.67256 10.6777 7.50535 10.6762 7.33056C10.6747 7.15576 10.7419 6.98736 10.8633 6.86162L13.0586 4.66629H5.33463C5.15782 4.66629 4.98825 4.59605 4.86323 4.47103C4.73821 4.346 4.66797 4.17643 4.66797 3.99962C4.66797 3.82281 4.73821 3.65324 4.86323 3.52822C4.98825 3.40319 5.15782 3.33295 5.33463 3.33295H13.0586L10.8633 1.13762C10.7419 1.01189 10.6747 0.843484 10.6762 0.668686C10.6777 0.493888 10.7478 0.32668 10.8714 0.203075C10.995 0.0794695 11.1622 0.00935665 11.337 0.0078377C11.5118 0.00631876 11.6802 0.0735153 11.806 0.194954L15.1393 3.52829C15.2643 3.65331 15.3345 3.82284 15.3345 3.99962C15.3345 4.1764 15.2643 4.34594 15.1393 4.47095L11.806 7.80429Z" fill="#1C1C1C" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 mt-lg-5 mt-2">
              <Image src="/img/Partnerships-sitecore.png" alt="Partnership" width={600} height={400} className="w-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section>
        <div className="footer-bg">
          <div className="container">
            <footer className="text-lg-start text-muted">
              <section className="footer-top py-2">
                <div className="container text-md-start mt-lg-5 mt-3">
                  <div className="row mt-3">
                    <div className="left_part col-12 col-sm-6 col-md-6 col-lg-3 col-xl-4 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-2">
                        <Image src="/img/logo.png" alt="Aaitek Logo" width={150} height={50} />
                      </h6>
                      <div>
                        <p className="text-white">
                          Aaitek is each about digital gests and digital metamorphosis. Through the power of headless, we deliver smart and unique gests to guests, people, and the community.
                        </p>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 pe-0 mb-4 space_pro1">
                      <h5 className="fw-bold mb-3 text-yellow">Pages</h5>
                      <p className="text-white font-fmaily-p hover-p-tag">
                        <Link href="/" className="text-reset text-white home">Home</Link>
                      </p>
                      <p className="text-white font-fmaily-p hover-p-tag">
                        <Link href="/services" className="text-reset text-white services">Services</Link>
                      </p>
                      <p className="text-white font-fmaily-p hover-p-tag">
                        <Link href="/about" className="text-reset text-white about">About Us</Link>
                      </p>
                      <p className="text-white font-fmaily-p hover-p-tag">
                        <Link href="/contact" className="text-reset text-white contact">Contact Us</Link>
                      </p>
                      <p className="text-white font-fmaily-p hover-p-tag">
                        <Link href="/events" className="text-reset text-white events">Events</Link>
                      </p>
                    </div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 pe-0 mb-4">
                      <h5 className="fw-bold mb-3 text-yellow">Aaitek Services</h5>
                      <div>
                        <p className="text-white font-fmaily-p hover-p-tag">
                          <Link href="/services/contentful" className="text-reset text-white">Contentful</Link>
                        </p>
                        <p className="text-white font-fmaily-p hover-p-tag">
                          <Link href="/services/umbraco" className="text-reset text-white">Umbraco</Link>
                        </p>
                        <p className="text-white font-fmaily-p hover-p-tag">
                          <Link href="/services/kentico" className="text-reset text-white">Kentico</Link>
                        </p>
                        <p className="text-white font-fmaily-p hover-p-tag">
                          <Link href="/services/contentstack" className="text-reset text-white">Contentstack</Link>
                        </p>
                        <p className="text-white font-fmaily-p hover-p-tag">
                          <Link href="/services/strapi" className="text-reset text-white">Strapi</Link>
                        </p>
                        <p className="text-white font-fmaily-p hover-p-tag">
                          <Link href="/services/xm-cloud" className="text-reset text-white">XM Cloud</Link>
                        </p>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 mb-md-0 mb-4 space_pro2">
                      <h5 className="fw-bold mb-3 text-yellow">Quick Links</h5>
                      <p className="text-white font-fmaily-p hover-p-tag">
                        <Link href="#" className="text-reset text-white">Who we are</Link>
                      </p>
                      <p className="text-white font-fmaily-p hover-p-tag">
                        <Link href="#" className="text-reset text-white">What we do</Link>
                      </p>
                      <p className="text-white font-fmaily-p hover-p-tag">
                        <Link href="#" className="text-reset text-white">Our thinking</Link>
                      </p>
                      <p className="text-white font-fmaily-p hover-p-tag">
                        <Link href="/blogs" className="text-reset text-white">Blogs</Link>
                      </p>
                      <p className="text-white font-fmaily-p hover-p-tag">
                        <Link href="/terms-condition" className="text-reset text-white">Terms & Conditions</Link>
                      </p>
                    </div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 mb-md-0 mb-4">
                      <h5 className="fw-bold mb-3 text-yellow">Contact Us</h5>
                      <div className="mt-2">
                        <p className="text-white font-fmaily-p hover-p-tag">
                          <Link href="mailto:info@Aaitek.com" className="text-light">
                            <i className="fa-solid fa-envelope me-2 text-yellow"></i>
                            info@Aaitek.com
                          </Link>
                        </p>
                        <p className="text-white font-fmaily-p hover-p-tag">
                          <Link href="tel:+61435987212" className="text-light">
                            <i className="fas fa-phone me-2 text-yellow"></i>
                            +61 435 987 212
                          </Link>
                        </p>
                        <p className="text-white font-fmaily-p hover-p-tag">
                          <Link href="#" className="text-light">
                            <i className="fa-solid fa-location-dot me-2 text-yellow"></i>
                            Sydney Australia
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <hr className="text-white" />

              <div className="footer_end d-flex justify-content-between align-items-center">
                <div className="text-right p-2 text-white font-fmaily-p hover-p-tag">
                  Copyright Ⓒ Aaitek Technology Specialist 2024 | Designed and Developed by{" "}
                  <Link className="text-reset fw-bold" href="https://www.fruxinfo.com/">
                    Fruxinfo Private Limited
                  </Link>
                </div>
                <div className="d-flex">
                  <Link href="#" className="me-lg-4 me-2 text-reset">
                    <i className="fab fa-twitter text-white"></i>
                  </Link>
                  <Link href="#" className="me-lg-4 me-2 text-reset">
                    <i className="fab fa-instagram text-white"></i>
                  </Link>
                  <Link href="#" className="me-lg-4 me-2 text-reset">
                    <i className="fab fa-facebook-f text-white"></i>
                  </Link>
                  <Link href="#" className="me-lg-4 me-2 text-reset">
                    <i className="fab fa-github text-white"></i>
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const identifier = resolvedSearchParams?.slug || resolvedSearchParams?.id;

  if (!identifier) {
    return {
      title: 'Event Not Found | Aaitek Technology Specialists',
      description: 'The requested event could not be found.',
    };
  }

  try {
    const event = await strapiFetchOne<Event>(
      'events',
      String(identifier),
      ['Image'],
      { revalidate: 3600 }
    );

    if (!event) {
      return {
        title: 'Event Not Found | Aaitek Technology Specialists',
        description: 'The requested event could not be found.',
      };
    }

    const imageUrl = getOptimizedImageUrl(event.Image?.[0]);

    return {
      title: `${event.Title} | Aaitek Technology Specialists`,
      description: event.Description || `Join us for ${event.Title} - an exciting technology event by Aaitek Technology Specialists.`,
      openGraph: {
        title: event.Title,
        description: event.Description,
        type: 'article',
        publishedTime: event.publishedAt,
        images: imageUrl ? [{
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: event.Title,
        }] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: event.Title,
        description: event.Description,
        images: imageUrl ? [imageUrl] : undefined,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Event | Aaitek Technology Specialists',
      description: 'Discover our latest technology events and workshops.',
    };
  }
}
