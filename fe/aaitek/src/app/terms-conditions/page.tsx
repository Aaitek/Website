import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Aaitek Technology Specialists',
  description: 'Terms and conditions for Aaitek Technology Specialists services and website usage.',
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-white">
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/img/About-banner.png"
            alt="Terms & Conditions Banner"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold">Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Terms and Conditions</h2>

            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">1. Introduction</h3>
                <p>
                  Welcome to Aaitek Technology Specialists. These terms and conditions outline the rules and
                  regulations for the use of our website and services. By accessing this website and using our
                  services, we assume you accept these terms and conditions. Do not continue to use our website
                  if you do not agree to take all of the terms and conditions stated on this page.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">2. Definitions</h3>
                <p>
                  The following terminology applies to these terms and conditions: &quot;Company&quot; (or &quot;we&quot; or &quot;us&quot; or &quot;our&quot;)
                  refers to Aaitek Technology Specialists. &quot;You&quot; refers to the user or viewer of our website.
                  &quot;Service&quot; refers to the technology solutions and consulting services provided by our company.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">3. Use License</h3>
                <p>
                  Permission is granted to temporarily download one copy of the materials on Aaitek Technology
                  Specialists&apos; website for personal, non-commercial transitory viewing only. This is the grant
                  of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">4. Service Terms</h3>
                <p>
                  Our technology consulting and development services are provided under separate service agreements.
                  All project deliverables, timelines, and payment terms will be outlined in individual contracts.
                  We reserve the right to modify our service offerings and pricing with appropriate notice to clients.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">5. Privacy Policy</h3>
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect
                  your information when you use our services. By using our website and services, you agree to
                  the collection and use of information in accordance with our Privacy Policy.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">6. Limitation of Liability</h3>
                <p>
                  In no event shall Aaitek Technology Specialists or its suppliers be liable for any damages
                  (including, without limitation, damages for loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on our website, even if we or our authorized
                  representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">7. Accuracy of Materials</h3>
                <p>
                  The materials appearing on our website could include technical, typographical, or photographic errors.
                  We do not warrant that any of the materials on its website are accurate, complete, or current.
                  We may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">8. Modifications</h3>
                <p>
                  Aaitek Technology Specialists may revise these terms of service for its website at any time without notice.
                  By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">9. Contact Information</h3>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us through our
                  contact page or reach out to our support team directly.
                </p>
              </div>

              <div className="border-t pt-6 mt-8">
                <p className="text-sm text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}