import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-2xl font-bold tracking-wider">
              LUXE<span className="text-accent">ESTATES</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-sans text-sm tracking-wide">
            <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
            <Link href="/properties" className="hover:text-accent transition-colors">PROPERTIES</Link>
            <Link href="/about" className="hover:text-accent transition-colors">ABOUT</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">CONTACT</Link>
            <a href="tel:+1234567890" className="flex items-center gap-2 bg-accent text-primary px-6 py-2.5 rounded-full font-semibold hover:bg-accent-light transition-colors">
              <Phone size={16} />
              (555) 123-4567
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-accent p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
