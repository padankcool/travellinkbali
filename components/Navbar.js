'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false); // State baru untuk toggle bahasa di mobile
  const [currentLang, setCurrentLang] = useState('English');
  
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const languages = [
    { name: 'English', code: 'en', flag: 'https://flagcdn.com/w40/gb.png' },
    { name: 'Indonesia', code: 'id', flag: 'https://flagcdn.com/w40/id.png' },
    { name: '日本語', code: 'ja', flag: 'https://flagcdn.com/w40/jp.png' },
    { name: 'Español', code: 'es', flag: 'https://flagcdn.com/w40/es.png' },
    { name: '中文', code: 'zh-CN', flag: 'https://flagcdn.com/w40/cn.png' },
  ];

  const whatsappNumber = '6281353077575';
  const whatsappMessage = encodeURIComponent('Hello, I would like to inquire about TravelLink Bali villa management.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const airbnbUrl = 'https://www.airbnb.com/users/show/6042218';
  const airbnbLogoImg = 'https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png'; // Logo request Bli

  // Deteksi Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup dropdown bahasa jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Inisialisasi Google Translate
  useEffect(() => {
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,id,ja,es,zh-CN',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  // Fungsi Ganti Bahasa
  const changeLanguage = (lang) => {
    setCurrentLang(lang.name);
    setLangDropdownOpen(false);
    setMobileLangOpen(false);
    setMobileMenuOpen(false); // Tutup menu mobile otomatis setelah pilih bahasa

    const selectField = document.querySelector('.goog-te-combo');
    if (selectField) {
      selectField.value = lang.code;
      selectField.dispatchEvent(new Event('change'));
    }
  };

  // Fungsi Navigasi & Smooth Scroll Lintas Halaman
  const handleNavClick = (e, sectionId) => {
    if (pathname === '/') {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = section.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false); 
    setMobileLangOpen(false); // Reset state bahasa saat navigasi berpindah
  };

  return (
    <>
      <div id="google_translate_element" className="hidden"></div>
      <style jsx global>{`
        body { top: 0 !important; scroll-behavior: smooth; }
        .goog-te-banner-frame { display: none !important; }
        .skiptranslate { display: none !important; }
        #goog-gt-tt { display: none !important; }
        .goog-tooltip { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-travellink.png" 
              alt="TravelLink Bali Logo" 
              width={160} 
              height={50} 
              className="h-10 md:h-12 w-auto object-contain" 
              priority
            />
          </Link>

          {/* Menu Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase text-neutral-200">
            <Link href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-amber-400 transition-colors">About Us</Link>
            <Link href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-amber-400 transition-colors">Property Management</Link>
            <Link href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-amber-400 transition-colors">Contact</Link>
            <Link href="/booking" className="hover:text-amber-400 transition-colors font-semibold text-amber-500">Our Villas</Link>
          </nav>

          {/* Bagian Kanan (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Airbnb Icon Desktop - Menggunakan URL Image */}
            <a href={airbnbUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-600/10 border border-rose-600/30 hover:bg-rose-500 transition-all shadow-md group" title="View Airbnb Profile">
              <img 
                src={airbnbLogoImg} 
                alt="Airbnb" 
                className="w-5 h-5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
              />
            </a>

            {/* WA Icon Desktop */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600/80 hover:bg-emerald-600 text-white transition-all shadow-md" title="Chat via WhatsApp">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>

            {/* Language Selector Desktop */}
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setLangDropdownOpen(!langDropdownOpen)} className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800/60 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden py-1 z-50">
                  <div className="px-4 py-2 text-[10px] uppercase tracking-widest text-neutral-500 border-b border-neutral-800 font-semibold">Select Language</div>
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => changeLanguage(lang)} className={`w-full flex items-center space-x-3 px-4 py-2.5 text-xs text-left transition-colors ${currentLang === lang.name ? 'bg-amber-600/20 text-amber-400 font-semibold' : 'text-neutral-300 hover:bg-neutral-800'}`}>
                      <img src={lang.flag} alt={lang.name} className="w-5 h-3.5 object-cover rounded-sm shadow-sm" />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tombol Hamburger Mobile */}
          <button onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setMobileLangOpen(false); // Reset posisi bahasa saat menu dibuka/tutup
          }} className="md:hidden text-white focus:outline-none p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* ===================== MENU MOBILE ===================== */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-lg border-t border-neutral-800 shadow-xl py-6 px-6 flex flex-col space-y-4 text-center max-h-[85vh] overflow-y-auto">
            
            {/* Link Navigasi Mobile */}
            <Link href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-neutral-200 hover:text-amber-400 py-2 tracking-wider text-xs uppercase">About Us</Link>
            <Link href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-neutral-200 hover:text-amber-400 py-2 tracking-wider text-xs uppercase">Property Management</Link>
            <Link href="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-neutral-200 hover:text-amber-400 py-2 tracking-wider text-xs uppercase">Contact</Link>
            <Link href="/booking" onClick={() => setMobileMenuOpen(false)} className="text-neutral-200 hover:text-amber-400 py-2 tracking-wider text-xs uppercase font-semibold text-amber-500">Our Villas</Link>
            
            {/* Area Tambahan Mobile: Icon Deret di Bawah */}
            <div className="pt-6 pb-2 mt-4 border-t border-neutral-800 flex flex-col items-center">
              
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-4">Connect & Translate</span>
              
              {/* Tiga Tombol Berjejer: WA, Airbnb, Language (Globe) */}
              <div className="flex space-x-6 items-center">
                
                {/* WhatsApp Mobile */}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600/20 text-emerald-500 border border-emerald-600/50 hover:bg-emerald-600 hover:text-white transition-all">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
                
                {/* Airbnb Mobile - Menggunakan URL Image */}
                <a href={airbnbUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-600/20 border border-rose-600/50 hover:bg-rose-500 transition-all group">
                  <img 
                    src={airbnbLogoImg} 
                    alt="Airbnb" 
                    className="w-6 h-6 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
                  />
                </a>

                {/* Tombol Globe (Translate) Mobile */}
                <button 
                  onClick={() => setMobileLangOpen(!mobileLangOpen)} 
                  className={`flex items-center justify-center w-12 h-12 rounded-full border transition-all ${mobileLangOpen ? 'bg-amber-600 border-amber-600 text-white' : 'bg-neutral-800/60 border-neutral-700 text-neutral-300 hover:bg-neutral-800'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </button>

              </div>

              {/* Tampilan Pilihan Bahasa Terbuka saat Globe diklik (Mobile) */}
              {mobileLangOpen && (
                <div className="flex flex-wrap justify-center gap-3 mt-6 w-full animate-fade-in-up">
                  {languages.map((lang) => (
                    <button 
                      key={lang.code} 
                      onClick={() => changeLanguage(lang)} 
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all ${
                        currentLang === lang.name 
                        ? 'border-amber-500 bg-amber-600/20 text-amber-400 font-semibold' 
                        : 'border-neutral-700 bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700'
                      }`}
                    >
                      <img src={lang.flag} alt={lang.name} className="w-4 h-3 object-cover rounded-sm shadow-sm" />
                      <span className="text-[10px] uppercase tracking-wider">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}

            </div>
          </div>
        )}
      </header>
    </>
  );
}