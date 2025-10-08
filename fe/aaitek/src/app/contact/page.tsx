"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Star,
  MessageSquare,
  Users,
  ArrowRight,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  phone: string;
  message: string;
  agreeToTerms: boolean;
  serviceInterest: string;
}

interface FormErrors {
  [key: string]: string;
}

const services = [
  'Contentful Implementation',
  'Umbraco Development',
  'Contentstack Solutions',
  'Kentico Projects',
  'Strapi Development',
  'Sitecore XM Cloud',
  'Custom Development',
  'Digital Transformation',
  'Consulting Services'
];

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our experts',
    contact: '+61 435 987 212',
    href: 'tel:+61435987212',
    color: 'blue'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us a message',
    contact: 'info@aaitek.com',
    href: 'mailto:info@aaitek.com',
    color: 'green'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our team',
    contact: 'Available 24/7',
    href: '#',
    color: 'purple'
  }
];

const officeInfo = {
  address: 'Sydney, Australia',
  timezone: 'AEST (UTC+10)',
  hours: 'Mon-Fri: 9AM-6PM',
  emergency: '24/7 Support Available'
};

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'TechCorp Australia',
    role: 'CTO',
    content: 'Aaitek transformed our digital presence completely. Their expertise in headless CMS is unmatched.',
    rating: 5
  },
  {
    name: 'James Wilson',
    company: 'Global Retail Ltd',
    role: 'Digital Director',
    content: 'Outstanding service and support. They delivered our project on time and exceeded expectations.',
    rating: 5
  },
  {
    name: 'Maria Garcia',
    company: 'Innovation Hub',
    role: 'Product Manager',
    content: 'The team at Aaitek is incredibly professional and their solutions are cutting-edge.',
    rating: 5
  }
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity, but most implementations take 8-16 weeks from start to finish.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, updates, and technical assistance.'
  },
  {
    question: 'Can you work with our existing systems?',
    answer: 'Absolutely! We specialize in integrations and can work with your existing technology stack seamlessly.'
  },
  {
    question: 'What platforms do you specialize in?',
    answer: 'We are experts in Contentful, Umbraco, Contentstack, Kentico, Strapi, and Sitecore XM Cloud.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
    agreeToTerms: false,
    serviceInterest: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          phone: '',
          message: '',
          agreeToTerms: false,
          serviceInterest: ''
        });
      }, 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Let&apos;s Build Something <span className="text-yellow-400">Amazing</span> Together
            </h1>
            <p className={`text-xl text-gray-200 mb-8 leading-relaxed transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Ready to transform your digital presence? Our team of experts is here to help you navigate
              your digital transformation journey with cutting-edge solutions and personalized support.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href="#contact-form">
                <button className="group bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                  Start Your Project
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
              <Link href="/about">
                <button className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                className={`group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${
                  method.color === 'blue' ? 'border-blue-500' :
                  method.color === 'green' ? 'border-green-500' :
                  'border-purple-500'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  method.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  method.color === 'green' ? 'bg-green-100 text-green-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className={`font-semibold transition-colors duration-300 ${
                  method.color === 'blue' ? 'text-blue-600 group-hover:text-blue-700' :
                  method.color === 'green' ? 'text-green-600 group-hover:text-green-700' :
                  'text-purple-600 group-hover:text-purple-700'
                }`}>
                  {method.contact}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    How can we help you?
                  </h2>
                  <p className="text-xl text-gray-600">
                    Let&apos;s get in touch and discuss your project!
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                          Organization <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.organization ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Your company name"
                        />
                        {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="+61 XXX XXX XXX"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service (optional)</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        How can we help you? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Tell us about your project, goals, or questions..."
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1 mr-3"
                      />
                      <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                        By sending this request, you agree to our{' '}
                        <Link href="/terms-conditions" className="text-blue-600 hover:text-blue-700 underline">
                          privacy terms
                        </Link>
                        . <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.agreeToTerms && <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Request
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-4 space-y-8">
                {/* Contact Details */}
                <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p className="text-gray-200">{officeInfo.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a href="tel:+61435987212" className="text-gray-200 hover:text-white transition-colors duration-300">
                          +61 435 987 212
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:info@aaitek.com" className="text-gray-200 hover:text-white transition-colors duration-300">
                          info@aaitek.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-gray-200">{officeInfo.hours}</p>
                        <p className="text-gray-200 text-sm">{officeInfo.timezone}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Emergency Support</h4>
                        <p className="text-gray-200">{officeInfo.emergency}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Aaitek?</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Fast Response</h4>
                        <p className="text-gray-600 text-sm">We respond to all inquiries within 2 hours during business hours.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Users className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                        <p className="text-gray-600 text-sm">25+ years of combined experience in digital transformation.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Globe className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Global Reach</h4>
                        <p className="text-gray-600 text-sm">Serving clients worldwide with 24/7 support capabilities.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Star className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Proven Results</h4>
                        <p className="text-gray-600 text-sm">500+ successful projects with 98% client satisfaction rate.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from some of our satisfied clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                &quot;{testimonials[activeTestimonial].content}&quot;
              </blockquote>

              <div>
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-blue-600 font-medium">
                  {testimonials[activeTestimonial].role}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeTestimonial].company}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full bg-white rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-all duration-300 flex justify-between items-center"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      expandedFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="bg-gray-50 rounded-b-lg p-6 -mt-2">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visit Our <span className="text-green-600">Office</span>
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Sydney&apos;s innovation district
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 blur-xl opacity-20"></div>
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sydney%20Australia+(AaiTek%20Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="relative rounded-2xl"
              title="Aaitek Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}