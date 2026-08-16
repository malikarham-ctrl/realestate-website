import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold tracking-wider mb-6 block">
              LUXE<span className="text-accent">ESTATES</span>
            </Link>
            <p className="text-gray-300 mb-6 font-sans text-sm leading-relaxed">
              Redefining luxury real estate with unparalleled service and exclusive property listings worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-4 text-sm font-sans">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/properties" className="text-gray-300 hover:text-white transition-colors">Properties</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4 text-sm font-sans text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>123 Luxury Ave, Suite 500<br/>New York, NY 10022</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>info@luxeestates.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-accent">Newsletter</h3>
            <p className="text-sm font-sans text-gray-300 mb-4">Subscribe to receive updates on exclusive new listings.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border border-white/20 text-white px-4 py-2 w-full focus:outline-none focus:border-accent text-sm"
              />
              <button className="bg-accent hover:bg-accent-light text-primary px-4 py-2 font-semibold transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-sans">
          <p>&copy; {new Date().getFullYear()} LuxeEstates. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
