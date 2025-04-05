export default function BrandGuidelines() {
    return (
      <div className="bg-[#1C1C1C] text-[#F4F4F4] min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-[#FBD506]">Aaitek Brand Guidelines</h1>
            <p className="text-lg text-[#F4F4F4] max-w-2xl mx-auto">
              A premium digital experience starts with consistency. Follow these brand standards to deliver high-impact, unified experiences across all platforms.
            </p>
          </header>
  
          {/* Colors */}
          <section>
            <h2 className="text-2xl font-semibold text-[#FBD506] mb-4">🎨 Brand Color Palette</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#1C1C1C' }}>
                <p className="text-white font-bold">#1C1C1C</p>
                <p className="text-white text-sm">Primary Background</p>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#FBD506' }}>
                <p className="text-[#1C1C1C] font-bold">#FBD506</p>
                <p className="text-[#1C1C1C] text-sm">Primary Accent</p>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#FFFFFF' }}>
                <p className="text-[#1C1C1C] font-bold">#FFFFFF</p>
                <p className="text-[#1C1C1C] text-sm">Text & Highlights</p>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#F4F4F4' }}>
                <p className="text-[#1C1C1C] font-bold">#F4F4F4</p>
                <p className="text-[#1C1C1C] text-sm">Cards & UI Panels</p>
              </div>
              <div className="p-6 rounded-xl" style={{ backgroundColor: '#2E2E2E' }}>
                <p className="text-white font-bold">#2E2E2E</p>
                <p className="text-white text-sm">Secondary Contrast</p>
              </div>
            </div>
          </section>
  
          {/* Typography */}
          <section>
            <h2 className="text-2xl font-semibold text-[#FBD506] mb-4">🖋️ Typography</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xl font-bold">Primary Font: Inter</p>
                <p className="text-base">Modern, geometric sans-serif. Used across all headings and body text for consistency and readability.</p>
              </div>
              <div>
                <p className="text-xl font-bold">Secondary Font: Roboto Mono</p>
                <p className="text-base">For code samples, developer content, or any technical snippets.</p>
              </div>
            </div>
          </section>
  
          {/* Buttons */}
          <section>
            <h2 className="text-2xl font-semibold text-[#FBD506] mb-4">🔘 Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FBD506] text-[#1C1C1C] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#e2c700] transition">Primary CTA</button>
              <button className="bg-[#2E2E2E] text-white px-6 py-3 rounded-full hover:bg-[#444] transition">Secondary</button>
              <button className="bg-transparent border border-[#FBD506] text-[#FBD506] px-6 py-3 rounded-full hover:bg-[#FBD506] hover:text-[#1C1C1C] transition">Outline</button>
            </div>
          </section>
  
          {/* Imagery and Layout Tips */}
          <section>
            <h2 className="text-2xl font-semibold text-[#FBD506] mb-4">📐 Layout & Aesthetic</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use dark theme base (`#1C1C1C`) as primary layout color.</li>
              <li>All sections should follow a max-width and padding convention for uniformity.</li>
              <li>Cards, panels, and modals use `#F4F4F4` with `rounded-xl` and subtle `shadow-xl`.</li>
              <li>Icons and emojis enhance content if used subtly (✔️ avoid crowding).</li>
              <li>Animations should be clean: use `hover:scale`, `fade`, `transition` effects.</li>
            </ul>
          </section>
  
          {/* Final Note */}
          <footer className="text-center text-sm text-[#F4F4F4]/60 pt-12 border-t border-[#2E2E2E]">
            Designed with precision by Aaitek — Innovation. Simplicity. Power.
          </footer>
        </div>
      </div>
    );
  }
  