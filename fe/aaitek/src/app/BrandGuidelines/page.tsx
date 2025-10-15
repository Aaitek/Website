import React from 'react';

export default function BrandGuidelines() {
  return (
    <div className="bg-[#1C1C1C] text-[#F4F4F4] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FBD506]">Aaitek Brand Guidelines 2025</h1>
          <p className="text-xl text-[#FBD506] font-medium">
            ✨ &ldquo;Transform Your Digital Vision Into Reality&rdquo;
          </p>
          <p className="text-lg text-[#F4F4F4] max-w-3xl mx-auto leading-relaxed">
            A premium digital experience starts with consistency. Follow these brand standards to deliver high-impact, unified experiences across all platforms.
          </p>
        </header>

        {/* Brand Identity */}
        <section className="bg-[#2E2E2E] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-[#FBD506] mb-6">🏷 Brand Identity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Brand Name</h3>
                <p className="text-[#F4F4F4]">Aaitek</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Tagline</h3>
                <p className="text-[#FBD506] font-medium">✨ &ldquo;Transform Your Digital Vision Into Reality&rdquo;</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Core Essence</h3>
                <p className="text-[#F4F4F4]">Empowering innovation through composable, scalable, and intelligent digital solutions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Brand Personality</h3>
                <p className="text-[#F4F4F4]">Visionary · Modern · Trustworthy · Innovative</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-3xl font-bold text-[#FBD506] mb-6">🎨 Color Palette</h2>

          {/* Primary Colors */}
          <h3 className="text-2xl font-semibold text-white mb-4">Primary Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-[#1C1C1C] p-6 rounded-2xl shadow-xl border border-[#2E2E2E]">
              <div className="w-full h-20 bg-[#1C1C1C] rounded-lg mb-4 border border-[#FBD506]"></div>
              <p className="text-white font-bold text-lg">#1C1C1C</p>
              <p className="text-[#FBD506] text-sm font-medium">Deep Charcoal</p>
              <p className="text-[#F4F4F4] text-xs mt-2">Primary Background</p>
              <p className="text-[#F4F4F4] text-xs">RGB: 28, 28, 28</p>
            </div>

            <div className="bg-[#2E2E2E] p-6 rounded-2xl shadow-xl">
              <div className="w-full h-20 bg-[#FBD506] rounded-lg mb-4"></div>
              <p className="text-[#1C1C1C] bg-[#FBD506] px-2 py-1 rounded font-bold text-lg">#FBD506</p>
              <p className="text-[#FBD506] text-sm font-medium mt-2">Aaitek Yellow</p>
              <p className="text-[#F4F4F4] text-xs mt-2">Primary Accent</p>
              <p className="text-[#F4F4F4] text-xs">RGB: 251, 213, 6</p>
            </div>

            <div className="bg-[#2E2E2E] p-6 rounded-2xl shadow-xl">
              <div className="w-full h-20 bg-white rounded-lg mb-4 border border-[#FBD506]"></div>
              <p className="text-[#1C1C1C] bg-white px-2 py-1 rounded font-bold text-lg">#FFFFFF</p>
              <p className="text-[#FBD506] text-sm font-medium mt-2">White</p>
              <p className="text-[#F4F4F4] text-xs mt-2">Primary Text</p>
              <p className="text-[#F4F4F4] text-xs">RGB: 255, 255, 255</p>
            </div>

            <div className="bg-[#2E2E2E] p-6 rounded-2xl shadow-xl">
              <div className="w-full h-20 bg-[#2E2E2E] rounded-lg mb-4 border border-[#FBD506]"></div>
              <p className="text-white font-bold text-lg">#2E2E2E</p>
              <p className="text-[#FBD506] text-sm font-medium">Jet Gray</p>
              <p className="text-[#F4F4F4] text-xs mt-2">Secondary Background</p>
              <p className="text-[#F4F4F4] text-xs">RGB: 46, 46, 46</p>
            </div>

            <div className="bg-[#2E2E2E] p-6 rounded-2xl shadow-xl">
              <div className="w-full h-20 bg-[#F4F4F4] rounded-lg mb-4"></div>
              <p className="text-[#1C1C1C] bg-[#F4F4F4] px-2 py-1 rounded font-bold text-lg">#F4F4F4</p>
              <p className="text-[#FBD506] text-sm font-medium mt-2">Soft Gray</p>
              <p className="text-[#F4F4F4] text-xs mt-2">Secondary Text</p>
              <p className="text-[#F4F4F4] text-xs">RGB: 244, 244, 244</p>
            </div>
          </div>

          {/* Extended Palette */}
          <h3 className="text-2xl font-semibold text-white mb-4">Extended Palette</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2E2E2E] p-6 rounded-2xl shadow-xl">
              <div className="w-full h-16 bg-[#FFF480] rounded-lg mb-4"></div>
              <p className="text-[#1C1C1C] bg-[#FFF480] px-2 py-1 rounded font-bold">#FFF480</p>
              <p className="text-[#FBD506] text-sm font-medium mt-2">Highlight Glow</p>
            </div>

            <div className="bg-[#2E2E2E] p-6 rounded-2xl shadow-xl">
              <div className="w-full h-16 rounded-lg mb-4" style={{background: 'linear-gradient(90deg, #FBD506 0%, #FFF480 100%)'}}></div>
              <p className="text-white font-bold">Gradient</p>
              <p className="text-[#FBD506] text-sm font-medium mt-2">linear-gradient(90deg, #FBD506 0%, #FFF480 100%)</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="bg-[#2E2E2E] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-[#FBD506] mb-6">🖋 Typography System</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#FBD506]">
                  <th className="py-3 px-4 text-[#FBD506] font-semibold">Type</th>
                  <th className="py-3 px-4 text-[#FBD506] font-semibold">Font</th>
                  <th className="py-3 px-4 text-[#FBD506] font-semibold">Use Case</th>
                  <th className="py-3 px-4 text-[#FBD506] font-semibold">Weight</th>
                </tr>
              </thead>
              <tbody className="text-[#F4F4F4]">
                <tr className="border-b border-[#1C1C1C]">
                  <td className="py-3 px-4 font-medium">Primary</td>
                  <td className="py-3 px-4">Inter</td>
                  <td className="py-3 px-4">Headings, body</td>
                  <td className="py-3 px-4">400–700</td>
                </tr>
                <tr className="border-b border-[#1C1C1C]">
                  <td className="py-3 px-4 font-medium">Secondary</td>
                  <td className="py-3 px-4 font-mono">Roboto Mono</td>
                  <td className="py-3 px-4">Code snippets, developer text</td>
                  <td className="py-3 px-4">400–500</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Optional Accent</td>
                  <td className="py-3 px-4">Space Grotesk</td>
                  <td className="py-3 px-4">Hero banners, ads</td>
                  <td className="py-3 px-4">500–700</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-white">Typography Guidelines:</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#F4F4F4]">
              <li><strong>Headings:</strong> Sentence case, 0.5px letter spacing</li>
              <li><strong>Body text:</strong> Line-height 1.6 for readability</li>
              <li><strong>Font color hierarchy:</strong> White → Yellow → Soft Gray</li>
            </ul>
          </div>
        </section>

        {/* Logo Guidelines */}
        <section>
          <h2 className="text-3xl font-bold text-[#FBD506] mb-6">🧩 Logo Guidelines</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2E2E2E] rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Usage Rules</h3>
              <ul className="space-y-3 text-[#F4F4F4]">
                <li className="flex items-start">
                  <span className="text-[#FBD506] mr-2">✓</span>
                  <span><strong>Primary Use:</strong> Full Aaitek logo (white & yellow) on dark background (#1C1C1C)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FBD506] mr-2">✓</span>
                  <span><strong>Alternate Use:</strong> White-only logo for dark surfaces or watermark use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FBD506] mr-2">✓</span>
                  <span><strong>Padding:</strong> Keep 1× logo height clear space around it</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FBD506] mr-2">✓</span>
                  <span><strong>Minimum Size:</strong> 160px (digital), 20mm (print)</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2E2E2E] rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Do Not:</h3>
              <ul className="space-y-3 text-[#F4F4F4]">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Modify colors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Add shadows or gradients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">✗</span>
                  <span>Place on bright or yellow backgrounds</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Visual Design Language */}
        <section className="bg-[#2E2E2E] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-[#FBD506] mb-6">🧠 Visual Design Language</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Layout & Spacing</h3>
              <ul className="space-y-2 text-[#F4F4F4]">
                <li>• Use wide margins and consistent grid (8px or 16px rhythm)</li>
                <li>• Maintain clean symmetry with visual breathing space</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4 mt-6">UI Style</h3>
              <ul className="space-y-2 text-[#F4F4F4]">
                <li><strong>Cards:</strong> Rounded corners (16px), shadow: 0 8px 24px rgba(0,0,0,0.2)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Buttons</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <button className="bg-[#FBD506] text-[#1C1C1C] font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
                    Primary
                  </button>
                  <span className="text-[#F4F4F4] text-sm">Yellow background, black text</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-transparent border-2 border-[#FBD506] text-[#FBD506] font-semibold px-6 py-3 rounded-full hover:bg-[#FBD506] hover:text-[#1C1C1C] transition-all duration-300">
                    Secondary
                  </button>
                  <span className="text-[#F4F4F4] text-sm">Transparent background, yellow border</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 mt-6">Motion</h3>
              <ul className="space-y-2 text-[#F4F4F4]">
                <li>• Soft fade-ins, slide-up transitions, and glowing hover states</li>
                <li>• Use easing: cubic-bezier(0.25, 0.8, 0.25, 1)</li>
                <li>• Hover: Light gradient or scale animation (1.05x)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tone of Voice */}
        <section>
          <h2 className="text-3xl font-bold text-[#FBD506] mb-6">💬 Tone of Voice</h2>

          <div className="bg-[#2E2E2E] rounded-2xl p-8 shadow-xl">
            <p className="text-xl text-white mb-6">
              <strong>Style:</strong> Confident, clear, and empowering.
            </p>
            <p className="text-[#F4F4F4] mb-6">
              Speak as a guide helping clients build the future through technology.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">Examples:</h3>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-[#FBD506] pl-4 text-[#F4F4F4] italic">
                &ldquo;Transform your digital ecosystem with composable architecture.&rdquo;
              </blockquote>
              <blockquote className="border-l-4 border-[#FBD506] pl-4 text-[#F4F4F4] italic">
                &ldquo;Aaitek — where design, technology, and performance converge.&rdquo;
              </blockquote>
              <blockquote className="border-l-4 border-[#FBD506] pl-4 text-[#F4F4F4] italic">
                &ldquo;We turn your digital vision into reality.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* Brand Application */}
        <section className="bg-[#2E2E2E] rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-[#FBD506] mb-6">🌐 Brand Application</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Digital</h3>
              <ul className="space-y-2 text-[#F4F4F4]">
                <li>• Dark-themed websites and dashboards with glowing Aaitek Yellow accents</li>
                <li>• Motion-led hero sections</li>
                <li>• Interactive cards and components</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Social & Marketing</h3>
              <ul className="space-y-2 text-[#F4F4F4]">
                <li>• Dark background, bold white typography</li>
                <li>• Aaitek Yellow accent lines</li>
                <li>• Consistent corner rounding and shadow depth</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Print</h3>
              <ul className="space-y-2 text-[#F4F4F4]">
                <li>• Maintain strong contrast (Yellow on Black or White)</li>
                <li>• Prefer matte finish with spot gloss on logo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Brand Purpose */}
        <section className="bg-gradient-to-r from-[#FBD506] to-[#FFF480] rounded-2xl p-8 shadow-xl text-[#1C1C1C]">
          <h2 className="text-3xl font-bold mb-6">🚀 Brand Purpose</h2>
          <p className="text-xl leading-relaxed mb-6">
            Aaitek exists to empower creators, brands, and enterprises with composable, full-stack digital ecosystems that evolve with technology — not against it.
          </p>

          <div className="bg-[#1C1C1C] rounded-xl p-6 text-white">
            <h3 className="text-xl font-semibold text-[#FBD506] mb-4">Tagline Integration (for marketing):</h3>
            <p className="text-lg">
              &ldquo;At Aaitek, we help you <span className="text-[#FBD506] font-semibold">Transform Your Digital Vision Into Reality</span>.&rdquo;
            </p>
          </div>
        </section>

        {/* Sample Implementation */}
        <section>
          <h2 className="text-3xl font-bold text-[#FBD506] mb-6">📋 Sample Implementation</h2>

          <div className="bg-[#2E2E2E] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Sample Hero Section</h3>

            <div className="bg-[#1C1C1C] rounded-xl p-8 border border-[#FBD506]">
              <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Transform Your <span className="text-[#FBD506]">Digital Vision</span><br />
                  Into Reality
                </h1>
                <p className="text-xl text-[#F4F4F4] max-w-3xl mx-auto leading-relaxed">
                  Empowering innovation through composable, scalable, and intelligent digital solutions.
                  Experience the future of technology with Aaitek.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-[#FBD506] text-[#1C1C1C] font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                    Get Started
                  </button>
                  <button className="bg-transparent border-2 border-[#FBD506] text-[#FBD506] font-bold px-8 py-4 rounded-full hover:bg-[#FBD506] hover:text-[#1C1C1C] transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-[#F4F4F4]/60 pt-12 border-t border-[#2E2E2E]">
          <p className="mb-2">Designed with precision by Aaitek — Innovation. Simplicity. Power.</p>
          <p className="text-[#FBD506]">Transform Your Digital Vision Into Reality</p>
        </footer>
      </div>
    </div>
  );
}