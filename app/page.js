'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal'; // Kita gunakan animasi yang sudah dibuat

export default function BookingPage() {
  // === DATA VILLA (Silakan edit bagian ini nanti dengan data asli Bli) ===
  const villas = [
    {
      id: 1,
      name: 'Villa Serenity Ubud',
      location: 'Ubud, Gianyar',
      description: 'Nestled in the lush jungles of Ubud, this sanctuary offers panoramic views of the river valley. Featuring an infinity pool and bespoke Balinese architecture infused with modern luxury, it is the perfect escape for those seeking tranquility.',
      features: ['3 Bedrooms', 'Infinity Pool', 'Jungle View', 'Dedicated Butler'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop', // Foto Dummy
      price: 'Contact for rates',
      linkRef: 'Villa Serenity Ubud'
    },
    {
      id: 2,
      name: 'The Azure Seminyak',
      location: 'Seminyak, Badung',
      description: 'Located in the heart of Seminyak, The Azure blends tropical modernism with ultimate convenience. Just minutes away from world-class dining and beach clubs, offering a private oasis with a sunken lounge and elegant interiors.',
      features: ['4 Bedrooms', 'Private Pool', 'Sunken Lounge', 'Prime Location'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop', // Foto Dummy
      price: 'Contact for rates',
      linkRef: 'The Azure Seminyak'
    },
    {
      id: 3,
      name: 'Cliffside Estate Uluwatu',
      location: 'Uluwatu, Badung',
      description: 'Perched on the dramatic cliffs of Uluwatu, this ultra-luxury estate offers uninterrupted 180-degree ocean views. Experience breathtaking sunsets from your private deck, complete with world-class amenities and unparalleled privacy.',
      features: ['5 Bedrooms', 'Ocean View', 'Infinity Edge', 'Private Chef'],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop', // Foto Dummy
      price: 'Contact for rates',
      linkRef: 'Cliffside Estate Uluwatu'
    }
  ];

  const whatsappNumber = '6281353077575'; // Nomor WA Bli

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col">
      {/* Navbar Transparan / Solid saat di-scroll */}
      <Navbar />

      {/* Hero Header Khusus Halaman Villas */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4 block font-semibold">
              The TravelLink Collection
            </span>
            <h1 className="text-4xl md:text-6xl font-serif tracking-wider mb-6">
              Our Exclusive Villas
            </h1>
            <div className="w-16 h-[1px] bg-amber-500 mx-auto mb-6" />
            <p className="text-neutral-400 text-sm md:text-base font-light max-w-2xl mx-auto">
              Discover our handpicked portfolio of luxury properties across Bali. Each villa is managed with uncompromising standards to ensure an extraordinary stay.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Daftar Villa (Layout Editorial/Selang-seling) */}
      <section className="py-10 px-6 flex-grow">
        <div className="max-w-7xl mx-auto space-y-32">
          {villas.map((villa, index) => {
            // Logika untuk selang-seling gambar kiri dan kanan pada layar besar
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={villa.id} delay={100}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                  
                  {/* Kolom Gambar */}
                  <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-3xl">
                    <div className="aspect-[4/3] w-full relative">
                      <img 
                        src={villa.image} 
                        alt={villa.name} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.85]"
                      />
                    </div>
                    {/* Aksen Label di pojok gambar */}
                    <div className="absolute top-6 left-6 bg-neutral-950/80 backdrop-blur-md border border-neutral-700/50 px-4 py-2 rounded-full">
                      <span className="text-xs uppercase tracking-widest text-amber-500 font-medium">
                        {villa.location}
                      </span>
                    </div>
                  </div>

                  {/* Kolom Detail (Teks) */}
                  <div className="w-full lg:w-2/5 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">
                      {villa.name}
                    </h2>
                    
                    <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed mb-8">
                      {villa.description}
                    </p>

                    {/* Fitur Utama */}
                    <div className="grid grid-cols-2 gap-4 mb-10 border-y border-neutral-800 py-6">
                      {villa.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-neutral-300 text-sm font-light">
                          <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Aksi / Booking */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div>
                        <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Starting from</span>
                        <span className="text-lg font-serif text-white">{villa.price}</span>
                      </div>
                      
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=Hello%20TravelLink%20Bali,%20I%20am%20interested%20in%20booking%20${encodeURIComponent(villa.linkRef)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium tracking-widest uppercase px-8 py-4 rounded-full transition-all shadow-lg"
                      >
                        <span>Inquire Now</span>
                      </a>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Call to Action penutup */}
      <section className="py-24 mt-20 border-t border-neutral-900 bg-neutral-950 relative overflow-hidden text-center px-6">
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-serif mb-6">Looking for something specific?</h2>
          <p className="text-neutral-400 font-light text-sm md:text-base mb-8 max-w-lg mx-auto">
            Our concierge team can help you find the perfect villa that matches your unique preferences and dates.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello,%20I%20need%20help%20finding%20a%20villa%20in%20Bali.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white px-8 py-3.5 text-xs font-medium tracking-widest uppercase rounded-full transition-all"
          >
            Contact Concierge
          </a>
        </ScrollReveal>
      </section>

      {/* Footer selalu terpasang di bawah */}
      <Footer />
    </main>
  );
}