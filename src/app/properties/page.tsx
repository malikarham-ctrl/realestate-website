import { MapPin, Bed, Bath, Square, Search } from 'lucide-react';
import Link from 'next/link';

const properties = [
  {
    id: 1,
    title: "Modern Glass Villa",
    price: "$4,500,000",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 6,
    sqft: 6200,
    type: "Villa",
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
    type: "Apartment",
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
    type: "House",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "Skyline View Loft",
    price: "$2,200,000",
    location: "Manhattan, NY",
    beds: 2,
    baths: 2,
    sqft: 2100,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    title: "Desert Oasis Estate",
    price: "$3,800,000",
    location: "Scottsdale, AZ",
    beds: 6,
    baths: 5,
    sqft: 7100,
    type: "House",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    title: "Ski-in/Ski-out Chalet",
    price: "$6,500,000",
    location: "Aspen, CO",
    beds: 5,
    baths: 6,
    sqft: 5400,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1065&q=80"
  }
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Exclusive <span className="text-accent italic">Listings</span></h1>
            <p className="text-gray-600 font-sans max-w-xl">Browse our curated collection of the world&apos;s most exceptional properties.</p>
          </div>
          
          <div className="mt-8 md:mt-0 w-full md:w-auto">
            <div className="flex items-center bg-white p-2 rounded-lg shadow-sm border border-gray-100">
              <Search className="text-gray-400 ml-2" size={20} />
              <input 
                type="text" 
                placeholder="Search properties..." 
                className="px-4 py-2 w-full md:w-64 focus:outline-none font-sans text-primary"
              />
              <button className="bg-primary text-white px-6 py-2 rounded-md font-sans hover:bg-primary-light transition-colors">
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <Link href={`/properties/${prop.id}`} key={prop.id}>
              <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white cursor-pointer h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={prop.image} 
                    alt={prop.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold font-sans">
                    {prop.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold font-sans uppercase tracking-wider">
                    {prop.type}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-accent transition-colors text-primary">{prop.title}</h3>
                    <div className="flex items-center text-gray-500 mb-6 text-sm font-sans">
                      <MapPin size={16} className="mr-1 text-accent" />
                      {prop.location}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm font-sans text-gray-600">
                    <div className="flex items-center gap-1"><Bed size={16} className="text-primary"/> {prop.beds} Beds</div>
                    <div className="flex items-center gap-1"><Bath size={16} className="text-primary"/> {prop.baths} Baths</div>
                    <div className="flex items-center gap-1"><Square size={16} className="text-primary"/> {prop.sqft} sqft</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
