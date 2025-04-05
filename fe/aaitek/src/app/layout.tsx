import './styles/globals.css';
import { Navbar } from './components/layout/Navbar';
import Footer  from './components/layout/Footer';

export const metadata = {
  title: "Aaitek",
  description: "Aaitek Technology Specialists",
  icons: {
    icon: "/img/favicon.png", // ✅ path inside public/img/
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
