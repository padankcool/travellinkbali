'use client';

import Image from 'next/image';

export default function Services() {
  const servicesList = [
    {
      title: "Villa Marketing",
      description: "We strategically list your property across top-tier Online Travel Agents (OTAs), optimizing rates and real-time availability to maximize global visibility and occupancy.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop", // Foto kamar/villa mewah
      tag: "Global Reach"
    },
    {
      title: "Villa Reservation",
      description: "We handle the complete guest inquiry and booking journey smoothly, powered by an efficient, online synchronized calendar system to eliminate double-bookings.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop", // Foto kolam renang/resort
      tag: "Seamless Operations"
    },
    {
      title: "Monthly Financial Report",
      description: "Complete transparency guaranteed. We document every transaction, manage bills and invoices on your behalf, and deliver comprehensive monthly performance reports.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", // Foto arsitektur villa modern
      tag: "Total Transparency"
    },
    {
      title: "Trusted Management",
      description: "Trusted by property owners throughout Bali. Tailored specifically for all types of villas, ensuring your investment is maintained to absolute perfection.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop", // Foto villa mewah tropis
      tag: "Expert Care"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-neutral-950 text-white relative overflow-hidden">
      
      {/* Aksen Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
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

        {/* Grid Kartu Layanan dengan Background Foto & Efek Mewah */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="group relative h-[420px] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl transition-all duration-500 hover:border-amber-500/50"
            >
              {/* Background Image dengan Efek Zoom Saat Hover */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.7]"
              />

              {/* Gradient Overlay agar teks terbaca jelas */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Konten di dalam Kartu */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                
                {/* Tag atas */}
                <div>
                  <span className="inline-block px-3.5 py-1 text-[10px] tracking-widest uppercase bg-amber-600/80 backdrop-blur-md text-white rounded-full font-medium shadow-md">
                    {service.tag}
                  </span>
                </div>

                {/* Judul dan Deskripsi */}
                <div>
                  <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-300 text-xs md:text-sm font-light leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {service.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/628091000999?text=Hello%20TravelLink%20Bali,%20I%20would%20like%20to%20consult%20about%20your%20villa%20management%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-xs font-medium tracking-widest uppercase bg-amber-600 text-white px-9 py-4 rounded-full hover:bg-amber-500 transition-all shadow-xl hover:scale-105"
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