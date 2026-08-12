'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const whatsappNumber = '6281353077575';
  const emailAddress = 'sales@travellinkbali.com';
  const instagramUrl = 'https://instagram.com/travellinkbali';
  const airbnbUrl = 'https://www.airbnb.com/users/show/6042218';

  return (
    <footer className="bg-neutral-950 pt-20 pb-10 border-t border-neutral-900 text-neutral-400 relative overflow-hidden">
      
      {/* Efek Cahaya Halus di Kiri Bawah */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Kolom 1: Brand & About */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              {/* Jika ingin memakai logo gambar, Bli bisa *uncomment* kode di bawah ini dan hapus teksnya */}
              {/* <Image src="/logo-travellink.png" alt="TravelLink Bali Logo" width={140} height={40} className="object-contain" /> */}
              <span className="text-xl font-serif font-bold tracking-widest text-white">
                TRAVELLINK <span className="text-amber-500 font-light">BALI</span>
              </span>
            </Link>
            <p className="text-sm font-light leading-relaxed">
              Premier villa management and curated luxury stays in Bali. We transform properties into high-yielding assets and deliver unforgettable holiday experiences.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-pink-600 hover:text-white transition-all shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={airbnbUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-rose-500 hover:text-white transition-all shadow-sm">
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.56 10.96a17.43 17.43 0 0 0-2.66-3.88l-4.52-5.4A4.85 4.85 0 0 0 12 0a4.85 4.85 0 0 0-3.38 1.68l-4.52 5.4a17.43 17.43 0 0 0-2.66 3.88A9.78 9.78 0 0 0 0 15.52a8.68 8.68 0 0 0 8.87 8.48A7 7 0 0 0 14.52 22a8.07 8.07 0 0 0 2.61-3 8.07 8.07 0 0 0 2.61 3 7 7 0 0 0 5.65 2 8.68 8.68 0 0 0 8.87-8.48 9.78 9.78 0 0 0-1.46-4.56zm-10.56 9a2.53 2.53 0 1 1 2.53-2.53 2.53 2.53 0 0 1-2.53 2.53zm0-8.6a3.9 3.9 0 0 0-3.75 4 4.14 4.14 0 0 0 1.29 3 4.86 4.86 0 0 0 4.92 0 4.14 4.14 0 0 0 1.29-3 3.9 3.9 0 0 0-3.75-4z"/></svg>
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-white font-serif text-lg tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-amber-400 transition-colors">Our Services</Link></li>
              <li><Link href="/booking" className="hover:text-amber-400 transition-colors">Our Villas</Link></li>
              <li><Link href="/#contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Legal & Support */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-white font-serif text-lg tracking-wide">Support</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#" className="hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>

          {/* Kolom 4: Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-white font-serif text-lg tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Jalan Gatot Subroto Timur No. 88E<br />Denpasar, Bali</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+6281353077575" className="hover:text-amber-400 transition-colors">+62 813 5307 7575</a>
                  <a href="tel:+6281220175795" className="hover:text-amber-400 transition-colors">+62 812 2017 5795</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href={`mailto:${emailAddress}`} className="hover:text-amber-400 transition-colors">{emailAddress}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Garis Pembatas dan Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-neutral-500">
          <p>© {currentYear} TravelLink Bali. All rights reserved.</p>
          <p>
            Designed & Managed in Bali, Indonesia.
          </p>
        </div>

      </div>
    </footer>
  );
}