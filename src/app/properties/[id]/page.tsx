import { MapPin, Bed, Bath, Square, Calendar, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function PropertyDetail({ params }: { params: { id: string } }) {
  // Mock data for the specific property
  const prop = {
    id: params.id,
    title: "Modern Glass Villa",
    price: "$4,500,000",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 6,
    sqft: 6200,
    type: "Villa",
    yearBuilt: "2022",
    description: "Experience the pinnacle of luxury living in this architectural masterpiece. Featuring floor-to-ceiling glass walls that blur the lines between indoor and outdoor living, this stunning villa offers panoramic views of the city skyline and ocean. The chef's kitchen is equipped with top-of-the-line appliances, while the master suite boasts a private terrace and spa-like bathroom.",
    features: [
      "Infinity Edge Pool",
      "Smart Home Technology",
      "Wine Cellar",
      "Home Theater",
      "Gourmet Kitchen",
      "Private Spa"
    ],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Image */}
      <div className="w-full h-[60vh] relative">
        <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-primary/90 backdrop-blur-sm text-white inline-block px-6 py-2 rounded-full font-semibold mb-4 text-xl">
              {prop.price}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{prop.title}</h1>
            <div className="flex items-center text-gray-200 text-lg font-sans">
              <MapPin size={20} className="mr-2 text-accent" />
              {prop.location}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            {/* Quick Stats */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center mb-12">
              <div className="text-center">
                <div className="flex justify-center mb-2"><Bed size={24} className="text-accent"/></div>
                <div className="font-bold text-xl text-primary">{prop.beds}</div>
                <div className="text-gray-500 text-sm font-sans uppercase tracking-wider">Bedrooms</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="flex justify-center mb-2"><Bath size={24} className="text-accent"/></div>
                <div className="font-bold text-xl text-primary">{prop.baths}</div>
                <div className="text-gray-500 text-sm font-sans uppercase tracking-wider">Bathrooms</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="flex justify-center mb-2"><Square size={24} className="text-accent"/></div>
                <div className="font-bold text-xl text-primary">{prop.sqft}</div>
                <div className="text-gray-500 text-sm font-sans uppercase tracking-wider">Square Feet</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="flex justify-center mb-2"><Calendar size={24} className="text-accent"/></div>
                <div className="font-bold text-xl text-primary">{prop.yearBuilt}</div>
                <div className="text-gray-500 text-sm font-sans uppercase tracking-wider">Year Built</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">About This Property</h2>
              <p className="text-gray-600 font-sans leading-relaxed text-lg">
                {prop.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prop.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 font-sans bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <CheckCircle size={20} className="text-accent mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-primary text-white p-8 rounded-xl sticky top-32 shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-2">Interested?</h3>
              <p className="text-gray-300 font-sans mb-8">Contact our agent for more details or to schedule a private viewing.</p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Agent" className="w-full h-full object-cover"/>
                </div>
                <div>
                  <h4 className="font-bold text-lg font-sans">James Sterling</h4>
                  <p className="text-accent text-sm font-sans">Senior Partner</p>
                </div>
              </div>

              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-accent text-white font-sans"/>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-accent text-white font-sans"/>
                <input type="tel" placeholder="Your Phone" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-accent text-white font-sans"/>
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:border-accent text-white font-sans"></textarea>
                <button className="w-full bg-accent hover:bg-accent-light text-primary font-bold py-4 rounded-md transition-colors font-sans text-lg">
                  Request Information
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
