import './styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        {/* <Header /> */}
        <Navigation/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
