import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Get in <span className="text-accent italic">Touch</span></h1>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto text-lg">We are here to assist you with all your luxury real estate needs. Reach out to our dedicated team of professionals.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-full mr-4 text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-sans mb-1">Our Headquarters</h4>
                    <p className="text-gray-600 font-sans">123 Luxury Ave, Suite 500<br/>New York, NY 10022</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-full mr-4 text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-sans mb-1">Phone</h4>
                    <p className="text-gray-600 font-sans">(555) 123-4567<br/><span className="text-sm text-gray-400">Toll-free: (800) 555-0198</span></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-full mr-4 text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-sans mb-1">Email</h4>
                    <p className="text-gray-600 font-sans">info@luxeestates.com<br/><span className="text-sm text-gray-400">press@luxeestates.com</span></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/5 p-3 rounded-full mr-4 text-accent">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-sans mb-1">Business Hours</h4>
                    <p className="text-gray-600 font-sans">Mon - Fri: 9:00 AM - 6:00 PM<br/>Weekend: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-primary p-10 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-serif font-bold mb-2">Send us a Message</h3>
              <p className="text-gray-300 font-sans mb-8">Our agents will respond to your inquiry within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-sans mb-2 text-gray-300">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white font-sans" />
                  </div>
                  <div>
                    <label className="block text-sm font-sans mb-2 text-gray-300">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white font-sans" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-sans mb-2 text-gray-300">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white font-sans" />
                </div>
                
                <div>
                  <label className="block text-sm font-sans mb-2 text-gray-300">Subject</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white font-sans appearance-none">
                    <option value="" className="text-black">Select a topic</option>
                    <option value="buy" className="text-black">Buying a Property</option>
                    <option value="sell" className="text-black">Selling a Property</option>
                    <option value="press" className="text-black">Press & Media</option>
                    <option value="other" className="text-black">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-sans mb-2 text-gray-300">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-accent text-white font-sans"></textarea>
                </div>

                <button className="w-full bg-accent hover:bg-accent-light text-primary font-bold py-4 rounded-lg transition-colors font-sans text-lg">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
