'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function BookingPage() {
  // === DATA DESTINATIONS (Accordion Slider) ===
  const destinations = [
    {
      id: 1,
      name: 'Jimbaran & Nusa Dua',
      desc: 'A location brimming with elegance and class, Jimbaran & Nusa Dua are perfect for those looking to experience sheer luxury for their holiday experience.',
      image: 'https://images.unsplash.com/photo-1590381105801-94576313170e?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Sanur',
      desc: 'Discover the coastal charm of Sanur with our villas. Known for its mesmerizing sunrise and rich art culture, Sanur is a place not to be missed.',
      image: 'https://images.unsplash.com/photo-1497362943212-005128e461b2?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Ubud & Beyond',
      desc: "Experience Bali's world renowned paddy fields and serene natural beauty with our villas in Ubud. Witness the magnificent blend of culture and nature.",
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Seminyak & Kerobokan',
      desc: 'Experience a variety of restaurants, vibrant nightlife, and serene beaches. Elevate your stay with our comfortable villas and attentive staff.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Canggu & Beyond',
      desc: "Known as Bali's coolest area, our Canggu villas promise an unparalleled experience with spacious bedrooms, large swimming pools, and lush gardens.",
      image: 'https://images.unsplash.com/photo-1613490453576-3100d7f6c7fe?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  // State untuk Destinasi yang aktif (Default: Ubud - index 3)
  const [activeDest, setActiveDest] = useState(3);

  // === DATA VILLA DUMMY (Grid 3x3) ===
  const allVillas = [
    {
      id: 1, name: 'Villa Serenity', location: 'Ubud, Gianyar', price: 'From $450/night',
      description: 'Nestled in the lush jungles of Ubud, this sanctuary offers panoramic views of the river valley. Featuring an infinity pool and bespoke Balinese architecture infused with modern luxury.',
      features: ['3 Bedrooms', 'Infinity Pool', 'Jungle View', 'Butler'],
      mainImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop'
      ]
    },
    {
      id: 2, name: 'The Azure', location: 'Seminyak, Badung', price: 'From $600/night',
      description: 'Located in the heart of Seminyak, The Azure blends tropical modernism with ultimate convenience. Private oasis with a sunken lounge and elegant interiors.',
      features: ['4 Bedrooms', 'Private Pool', 'Sunken Lounge', 'Prime Location'],
      mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
      ]
    },
    {
      id: 3, name: 'Cliffside Estate', location: 'Uluwatu, Badung', price: 'From $950/night',
      description: 'Perched on the dramatic cliffs of Uluwatu, this ultra-luxury estate offers uninterrupted 180-degree ocean views. Experience breathtaking sunsets from your private deck.',
      features: ['5 Bedrooms', 'Ocean View', 'Infinity Edge', 'Private Chef'],
      mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop'
      ]
    },
    {
      id: 4, name: 'Casa Blanca', location: 'Canggu, Badung', price: 'From $500/night',
      description: 'A minimalist white canvas surrounded by emerald rice paddies. Perfect for creatives and digital nomads seeking luxury and inspiration.',
      features: ['3 Bedrooms', 'Ricefield View', 'Cinema Room', 'Fast WiFi'],
      mainImage: 'https://images.unsplash.com/photo-1613490453576-3100d7f6c7fe?q=80&w=1000&auto=format&fit=crop',
      gallery: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop']
    },
    {
      id: 5, name: 'Villa Taramille', location: 'Nusa Dua, Badung', price: 'From $800/night',
      description: 'Step into beachfront perfection. Direct access to white sands and crystal clear waters, featuring a massive central pool and classical Balinese pavilions.',
      features: ['6 Bedrooms', 'Beachfront', 'Huge Pool', 'Staff Fully Included'],
      mainImage: 'https://images.unsplash.com/photo-1590381105801-94576313170e?q=80&w=1000&auto=format&fit=crop',
      gallery: ['https://images.unsplash.com/photo-1497362943212-005128e461b2?q=80&w=1000&auto=format&fit=crop']
    },
    {
      id: 6, name: 'The Bamboo House', location: 'Sidemen, Karangasem', price: 'From $300/night',
      description: 'An architectural marvel made entirely of sustainable bamboo. Immerse yourself in the authentic Balinese countryside with Mt. Agung views.',
      features: ['2 Bedrooms', 'Eco-Friendly', 'Mountain View', 'Yoga Deck'],
      mainImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop',
      gallery: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop']
    },
    {
      id: 7, name: 'Oasis Retreat', location: 'Jimbaran, Badung', price: 'From $550/night',
      description: 'Hidden behind massive antique doors lies a secret garden oasis. This villa features lush landscaping and a gorgeous stone-carved swimming pool.',
      features: ['4 Bedrooms', 'Tropical Garden', 'BBQ Area', 'Near Seafood Beach'],
      mainImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
      gallery: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop']
    },
    {
      id: 8, name: 'Royal Estate', location: 'Sanur, Denpasar', price: 'From $700/night',
      description: 'Classical elegance meets coastal charm. A massive estate perfect for large family gatherings, located in the peaceful and historic Sanur area.',
      features: ['7 Bedrooms', 'Classic Design', 'Large Lawn', 'Kid Friendly'],
      mainImage: 'https://images.unsplash.com/photo-1497362943212-005128e461b2?q=80&w=1000&auto=format&fit=crop',
      gallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop']
    },
    {
      id: 9, name: 'Skyline Penthouse', location: 'Kuta, Badung', price: 'From $400/night',
      description: 'Experience Bali from above in this luxury penthouse. Features a rooftop jacuzzi, panoramic city and ocean views, and sleek contemporary design.',
      features: ['2 Bedrooms', 'Rooftop Jacuzzi', 'Ocean View', 'Modern Setup'],
      mainImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop',
      gallery: ['https://images.unsplash.com/photo-1613490453576-3100d7f6c7fe?q=80&w=1000&auto=format&fit=crop']
    }
  ];

  const whatsappNumber = '6281353077575';
  
  // === LOGIKA PAGINATION ===
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVillas = allVillas.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allVillas.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    const gridSection = document.getElementById('villa-grid');
    if (gridSection) gridSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    const gridSection = document.getElementById('villa-grid');
    if (gridSection) gridSection.scrollIntoView({ behavior: 'smooth' });
  };

  // === LOGIKA MODAL POPUP ===
  const [selectedVilla, setSelectedVilla] = useState(null);

  useEffect(() => {
    if (selectedVilla) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedVilla]);

  // Handle klik "Explore More" di Accordion
  const handleExploreMore = () => {
    const gridSection = document.getElementById('villa-grid');
    if (gridSection) gridSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col relative">
      <Navbar />

      {/* Hero Header dengan Efek Parallax (bg-fixed) */}
      <section 
        className="relative pt-48 pb-10 px-6 overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-[4px]" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-4 block font-semibold">
              TravelLink Collection
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wider mb-6 text-white">
              The Villa Portfolio
            </h1>
            <div className="w-16 h-[1px] bg-amber-500 mx-auto mb-6" />
            <p className="text-neutral-300 text-sm md:text-base font-light max-w-2xl mx-auto">
              Curated luxury properties designed for the ultimate Balinese getaway.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* === ACCORDION DESTINATIONS === */}
      <section className="py-20 px-4 md:px-6 bg-neutral-950">
        <ScrollReveal>
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-amber-500 uppercase">Destinations</h2>
              <div className="w-10 h-[1px] bg-neutral-700 mx-auto mt-6" />
            </div>

            {/* Kontainer Flex Accordion */}
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 lg:h-[500px]">
              {destinations.map((dest, index) => {
                const isActive = activeDest === dest.id;
                // Logika odd/even untuk efek staggered pada desktop saat sedang tidak aktif
                const isOdd = index % 2 !== 0;

                return (
                  <div
                    key={dest.id}
                    onClick={() => setActiveDest(dest.id)}
                    className={`relative flex flex-col group cursor-pointer transition-all duration-700 ease-in-out
                      ${isActive ? 'lg:basis-[45%] h-[400px] lg:h-full' : 'lg:basis-[13.75%] h-[120px] lg:h-full'}
                      ${!isActive && isOdd ? 'lg:pt-12' : ''}
                    `}
                  >
                    {/* Gambar & Overlay Container */}
                    <div className={`relative w-full overflow-hidden transition-all duration-700 ease-in-out h-full rounded-xl lg:rounded-none
                      ${isActive ? 'grayscale-0' : 'grayscale opacity-70 hover:grayscale-[30%] hover:opacity-100'}
                    `}>
                      <img 
                        src={dest.image} 
                        alt={dest.name} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Konten Saat Aktif */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent flex flex-col justify-end p-6 md:p-10 transition-opacity duration-700
                        ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                      `}>
                        <div className={`transition-all duration-700 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                          <h3 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-widest mb-4">
                            {dest.name}
                          </h3>
                          <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6 max-w-sm">
                            {dest.desc}
                          </p>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleExploreMore();
                            }}
                            className="text-amber-500 border-b border-amber-500 pb-1 text-xs uppercase tracking-widest font-semibold hover:text-white hover:border-white transition-colors"
                          >
                            Explore More
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Judul Teks Saat Tidak Aktif (Desktop Only) */}
                    <div className={`hidden lg:block text-center mt-6 transition-all duration-500
                      ${isActive ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}
                    `}>
                      <span className="text-xs font-serif tracking-widest uppercase text-neutral-400">
                        {dest.name}
                      </span>
                    </div>

                    {/* Judul Mobile Saat Tidak Aktif */}
                    <div className={`lg:hidden absolute inset-0 flex items-center justify-center bg-neutral-950/50 transition-opacity duration-500 pointer-events-none
                      ${isActive ? 'opacity-0' : 'opacity-100'}
                    `}>
                      <span className="text-sm font-serif tracking-widest uppercase text-white drop-shadow-lg">
                        {dest.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* === GRID INSTAGRAM STYLE (3x3) === */}
      <section id="villa-grid" className="py-20 px-4 md:px-6 flex-grow max-w-[1400px] w-full mx-auto scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {currentVillas.map((villa, index) => (
            <ScrollReveal key={villa.id} delay={index * 50} className="w-full">
              <div 
                onClick={() => setSelectedVilla(villa)}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-neutral-900"
              >
                <img 
                  src={villa.mainImage} 
                  alt={villa.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.8]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-amber-400 text-[10px] tracking-widest uppercase font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {villa.location}
                  </span>
                  <h3 className="text-2xl font-serif text-white drop-shadow-md">
                    {villa.name}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Kontrol Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center space-x-6">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center space-x-2 text-xs uppercase tracking-widest font-medium transition-all ${currentPage === 1 ? 'text-neutral-700 cursor-not-allowed' : 'text-amber-500 hover:text-amber-400'}`}
            >
              <span>← Prev</span>
            </button>
            
            <span className="text-xs text-neutral-500 tracking-widest">
              PAGE {currentPage} / {totalPages}
            </span>

            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center space-x-2 text-xs uppercase tracking-widest font-medium transition-all ${currentPage === totalPages ? 'text-neutral-700 cursor-not-allowed' : 'text-amber-500 hover:text-amber-400'}`}
            >
              <span>Next →</span>
            </button>
          </div>
        )}
      </section>

      {/* === MODAL POP-UP DETAIL VILLA === */}
      {selectedVilla && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-neutral-950/90 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedVilla(null)}
          />
          
          <div className="relative w-full max-w-6xl max-h-full bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col lg:flex-row animate-fade-in-up">
            
            <button 
              onClick={() => setSelectedVilla(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-neutral-950/50 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="w-full lg:w-1/2 p-4 flex flex-col gap-4">
              <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden">
                <img src={selectedVilla.mainImage} alt={selectedVilla.name} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {selectedVilla.gallery.map((img, idx) => (
                  <div key={idx} className="w-full h-32 md:h-48 rounded-xl overflow-hidden">
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-neutral-900">
              <span className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-2 block font-semibold">
                {selectedVilla.location}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                {selectedVilla.name}
              </h2>
              <div className="w-12 h-[1px] bg-neutral-800 mb-6" />
              
              <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed mb-8">
                {selectedVilla.description}
              </p>

              <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-4">Villa Features</h4>
              <div className="grid grid-cols-2 gap-y-3 mb-10">
                {selectedVilla.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 text-neutral-300 text-sm font-light">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Rates</span>
                  <span className="text-xl font-serif text-white">{selectedVilla.price}</span>
                </div>
                
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20TravelLink%20Bali,%20I%20am%20interested%20in%20booking%20${encodeURIComponent(selectedVilla.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium tracking-widest uppercase px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span>Book via WhatsApp</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      )}

      <Footer />
      
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </main>
  );
}