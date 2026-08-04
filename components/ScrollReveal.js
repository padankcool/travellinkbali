'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, delay = 0, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Jika elemen masuk ke dalam layar (terlihat)
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Hentikan pantauan agar animasi tidak berulang-ulang
        observer.unobserve(domRef.current);
      }
    }, { threshold: 0.15 }); // Akan mulai animasi saat 15% elemen terlihat

    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      } ${className}`}
    >
      {children}
    </div>
  );
}