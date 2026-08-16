import { Award, Users, Globe, Building } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our <span className="text-accent italic">Story</span></h1>
            <p className="text-gray-600 font-sans leading-relaxed text-lg mb-6">
              Founded in 1995, LuxeEstates emerged with a singular vision: to provide an unparalleled real estate experience for the world's most discerning clientele. For over two decades, we have been at the forefront of the luxury property market.
            </p>
            <p className="text-gray-600 font-sans leading-relaxed text-lg">
              We believe that true luxury is found in the details—in the seamless transaction, the exquisite presentation, and the personalized service that anticipates every need before it is voiced.
            </p>
          </div>
          <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80" alt="Luxury Office" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex justify-center mb-4"><Building size={32} className="text-accent"/></div>
            <div className="text-4xl font-serif font-bold text-primary mb-2">$5B+</div>
            <div className="text-gray-500 font-sans text-sm uppercase tracking-wider">In Sales</div>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex justify-center mb-4"><Users size={32} className="text-accent"/></div>
            <div className="text-4xl font-serif font-bold text-primary mb-2">10k+</div>
            <div className="text-gray-500 font-sans text-sm uppercase tracking-wider">Happy Clients</div>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex justify-center mb-4"><Globe size={32} className="text-accent"/></div>
            <div className="text-4xl font-serif font-bold text-primary mb-2">15</div>
            <div className="text-gray-500 font-sans text-sm uppercase tracking-wider">Global Offices</div>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex justify-center mb-4"><Award size={32} className="text-accent"/></div>
            <div className="text-4xl font-serif font-bold text-primary mb-2">25+</div>
            <div className="text-gray-500 font-sans text-sm uppercase tracking-wider">Years Exp.</div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Leadership <span className="text-accent italic">Team</span></h2>
          <p className="text-gray-600 font-sans max-w-2xl mx-auto">The visionaries behind our legacy of excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{name: "Eleanor Vance", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"},
            {name: "James Sterling", role: "Head of Global Sales", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"},
            {name: "Sophia Rossi", role: "Chief Design Officer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1061&q=80"}
          ].map((member, i) => (
            <div key={i} className="text-center group">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-lg">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-accent font-sans">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
