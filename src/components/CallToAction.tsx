export default function CallToAction() {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Find Your <span className="text-accent italic">Luxury Home?</span></h2>
        <p className="text-gray-300 font-sans mb-10 text-lg">Contact our specialized agents today to begin your journey to exceptional real estate ownership.</p>
        <button className="bg-accent hover:bg-accent-light text-primary px-10 py-4 rounded-full font-sans font-bold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}
