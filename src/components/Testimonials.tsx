import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "LuxeEstates provided an exceptional service from start to finish. They found us our dream home in record time and handled every detail with utmost professionalism.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    text: "The level of market insight and exclusive listings available through LuxeEstates is unmatched. They are my go-to agency for expanding my luxury portfolio.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Client <span className="text-accent italic">Testimonials</span></h2>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto">Read what our esteemed clients have to say about their experiences working with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 font-serif italic text-lg mb-8 leading-relaxed">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold font-sans text-primary">{t.name}</h4>
                  <p className="text-sm text-gray-500 font-sans">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
