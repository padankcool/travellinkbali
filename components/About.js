'use client';

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-neutral-900 text-white relative overflow-hidden">
      {/* Aksen Dekoratif Mewah */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3 block font-semibold">
            About TravelLink Bali
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-wider mb-6 leading-tight">
            A Decade of Excellence in Bali Villa Management
          </h2>
          <div className="w-16 h-[1px] bg-amber-500 mx-auto mb-6" />
          <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
            Founded in August 2012, TravelLink Bali has evolved into a cornerstone of professional hospitality, bridging exceptional property assets with discerning global travelers.
          </p>
        </div>

        {/* Grid Konten Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Sisi Kiri: Cerita & Nilai Inti */}
          <div className="space-y-6 text-neutral-300 font-light text-sm md:text-base leading-relaxed">
            <p>
              Born out of a deep passion for Bali’s unique charm and high-end tourism, <strong className="text-white font-medium">TravelLink Bali</strong> operates as an elite extension of your property asset. We are more than just managers; we are master curators of guest experiences and revenue strategists.
            </p>
            <p>
              As specialized experts embedded deeply within the island's <strong className="text-white font-medium">sales, marketing, and reservation</strong> ecosystem, we understand the intricacies of driving consistent occupancy in Bali's dynamic hospitality market.
            </p>
            <div className="pt-4 border-t border-neutral-800 grid grid-cols-2 gap-6">
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-amber-500 font-bold mb-1">2012</span>
                <span className="text-xs uppercase tracking-widest text-neutral-400">Established Year</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-amber-500 font-bold mb-1">10+</span>
                <span className="text-xs uppercase tracking-widest text-neutral-400">Years of Expertise</span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Kartu Keunggulan (Hook untuk Owner & Tamu) */}
          <div className="space-y-6">
            <div className="bg-neutral-950/60 border border-neutral-800 p-8 rounded-2xl backdrop-blur-sm transition-all hover:border-amber-500/50">
              <h3 className="text-lg font-serif text-amber-400 mb-2">Industry Power Connections</h3>
              <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
                Over a decade of dedicated networking has allowed us to forge deep, positive relationships with major players and global distribution channels across the luxury travel industry.
              </p>
            </div>

            <div className="bg-neutral-950/60 border border-neutral-800 p-8 rounded-2xl backdrop-blur-sm transition-all hover:border-amber-500/50">
              <h3 className="text-lg font-serif text-amber-400 mb-2">Proven Revenue Generation</h3>
              <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed">
                Our strategic marketing edge and advanced yield management translate directly into a proven track record of considerable, sustainable revenue for villa owners.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}