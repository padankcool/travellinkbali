'use client';

export default function Services() {
  const servicesList = [
    {
      title: "Villa Marketing",
      description: "We strategically list your property across top-tier Online Travel Agents (OTAs), optimizing rates and real-time availability to maximize global visibility.",
      icon: (
        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Villa Reservation",
      description: "We handle the complete guest inquiry and booking journey smoothly, powered by an efficient, online synchronized calendar system to eliminate double-bookings.",
      icon: (
        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Monthly Financial Report",
      description: "Complete transparency guaranteed. We document every transaction, manage bills and invoices on your behalf, and deliver comprehensive monthly performance reports.",
      icon: (
        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Trusted Management",
      description: "Trusted by property owners throughout Bali. Tailored specifically for all types of villas, ensuring your investment is maintained to absolute perfection. Get in touch today!",
      icon: (
        <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-28 px-6 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3 block font-semibold">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-wider mb-6">
            Our Professional Services
          </h2>
          <div className="w-16 h-[1px] bg-amber-500 mx-auto mb-6" />
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
            Comprehensive, end-to-end villa management designed to maximize your rental income while preserving the highest standards of luxury hospitality.
          </p>
        </div>

        {/* Grid Kartu Layanan (Modern Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="group bg-neutral-900/60 border border-neutral-800/80 p-8 rounded-2xl transition-all duration-300 hover:border-amber-500/50 hover:bg-neutral-900 hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-neutral-800/80 border border-neutral-700/50 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif tracking-wide text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Kecil di Bawah Services */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/628091000999?text=Hello%20TravelLink%20Bali,%20I%20would%20like%20to%20consult%20about%20your%20villa%20management%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-medium tracking-widest uppercase bg-amber-600 text-white px-8 py-3.5 rounded-full hover:bg-amber-500 transition-all shadow-lg"
          >
            <span>Consult Your Property With Us</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}