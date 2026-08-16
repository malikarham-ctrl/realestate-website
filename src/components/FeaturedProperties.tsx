import { MapPin, Bed, Bath, Square } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Modern Glass Villa",
    price: "$4,500,000",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 6,
    sqft: 6200,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: 2,
    title: "Oceanfront Penthouse",
    price: "$8,900,000",
    location: "Miami Beach, FL",
    beds: 4,
    baths: 4.5,
    sqft: 4500,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Historic Country Estate",
    price: "$12,000,000",
    location: "Greenwich, CT",
    beds: 8,
    baths: 10,
    sqft: 12500,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }
];

export default function FeaturedProperties() {
  return (
    <section className="py-24 bg-white text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Featured <span className="text-accent italic">Properties</span></h2>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto">Explore our hand-picked selection of the most exquisite properties currently available on the market.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div key={prop.id} className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold font-sans">
                  {prop.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent transition-colors">{prop.title}</h3>
                <div className="flex items-center text-gray-500 mb-4 text-sm font-sans">
                  <MapPin size={16} className="mr-1 text-accent" />
                  {prop.location}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm font-sans text-gray-600">
                  <div className="flex items-center gap-1"><Bed size={16} className="text-primary"/> {prop.beds} Beds</div>
                  <div className="flex items-center gap-1"><Bath size={16} className="text-primary"/> {prop.baths} Baths</div>
                  <div className="flex items-center gap-1"><Square size={16} className="text-primary"/> {prop.sqft} sqft</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-light text-white border border-primary px-8 py-3 rounded-full font-sans font-semibold transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
