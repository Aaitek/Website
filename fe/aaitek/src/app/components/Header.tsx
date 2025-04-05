import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold">MySite</h1>
        <nav className="mt-2 sm:mt-0 flex gap-4 text-sm sm:text-base">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
