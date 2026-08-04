'use client';

import ScrollReveal from './ScrollReveal';

export default function Services() {
  const servicesList = [
    {
      title: "Villa Marketing",
      description: "We will list your property on top-tier Online Travel Agents (OTAs) and manage rates and availability to maximize occupancy.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
      tag: "Global OTA Exposure"
    },
    {
      title: "Villa Reservation",
      description: "We will take care of the booking process with an efficient online synchronized calendar system to avoid double bookings.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
      tag: "Live Sync Calendar"
    },
    {
      title: "Monthly Financial Report",
      description: "We document each and every transaction and send a detailed report on a monthly basis. We will be processing all the bills and invoices on your behalf.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      tag: "Complete Transparency"
    },
    {
      title: "Trusted Management",
      description: "Our villa management services are trusted by many of clients throughout Bali. We can cater to all types villas. For the most experienced villa management in Bali, get in touch today!",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
      tag: "10+ Years Expertise"
    }
  ];

  return (
    <section 
      id="services" 
      className="py-32 px-6 relative overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop')" }}
    >
      
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[4px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Animasi */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-amber-600 text-xs tracking-[0.4em] uppercase mb-3 block font-bold">
              Our Core Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-wider mb-6 text-stone-900">
              Our Services
            </h2>
            <div className="w-16 h-[1px] bg-amber-500 mx-auto mb-6" />
            <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
              Tailored professional hospitality solutions designed to elevate your property's performance and secure absolute peace of mind.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid Kartu Animasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            // Mengatur delay berbeda untuk setiap kartu agar efek berurutan
            <ScrollReveal key={index} delay={index * 200}>
              <div className="group relative h-[420px] rounded-3xl overflow-hidden border border-stone-200/50 shadow-2xl transition-all duration-500 hover:shadow-amber-500/20 hover:-translate-y-2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div>
                    <span className="inline-block px-3.5 py-1 text-[10px] tracking-widest uppercase bg-amber-600/90 backdrop-blur-md text-white rounded-full font-medium shadow-md">
                      {service.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-200 text-xs md:text-sm font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tombol CTA Animasi */}
        <ScrollReveal delay={800}>
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/628091000999?text=Hello%20TravelLink%20Bali,%20I%20would%20like%20to%20consult%20about%20your%20villa%20management%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-xs font-semibold tracking-widest uppercase bg-stone-900 text-white px-9 py-4 rounded-full hover:bg-amber-600 transition-all shadow-xl hover:scale-105"
            >
              <span>Consult Your Property With Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}