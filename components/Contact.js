'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const whatsappNumber = '628091000999'; // Ganti dengan nomor asli Bli nanti
  const emailAddress = 'hello@travellinkbali.com'; // Ganti dengan email asli
  const instagramUrl = 'https://instagram.com/travellinkbali'; // Ganti dengan IG asli

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi Kirim ke WhatsApp
  const sendViaWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }
    const text = `Hello TravelLink Bali,%0A%0AMy name is ${formData.name}.%0A${formData.message}%0A%0AMy Email: ${formData.email}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  // Fungsi Kirim ke Email
  const sendViaEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }
    const subject = `Website Inquiry from ${formData.name}`;
    const body = `Hello TravelLink Bali,%0D%0A%0D%0A${formData.message}%0D%0A%0D%0ARegards,%0D%0A${formData.name}%0D%0A${formData.email}`;
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 px-6 bg-neutral-950 text-white relative overflow-hidden">
      
      {/* Background Aksens */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-amber-500 text-xs tracking-[0.4em] uppercase mb-3 block font-semibold">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-wider mb-6">
              Connect With Us
            </h2>
            <div className="w-16 h-[1px] bg-amber-500 mx-auto mb-6" />
            <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
              Whether you are looking for an exquisite stay or seeking expert management for your luxury property in Bali, our team is ready to assist you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Kolom Kiri: Info Kontak & Socials */}
          <ScrollReveal delay={200}>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-serif mb-6 text-white">Contact Information</h3>
                <div className="space-y-6 text-neutral-300 font-light text-sm md:text-base">
                  <p className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>Jl. Sunset Road, Seminyak<br/>Bali - Indonesia 80361</span>
                  </p>
                  <p className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href={`mailto:${emailAddress}`} className="hover:text-amber-400 transition-colors">{emailAddress}</a>
                  </p>
                  <p className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>+62 809 1000 999</span>
                  </p>
                </div>
              </div>

              {/* Tombol Social & WhatsApp Langsung */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">Connect Directly</h3>
                <div className="flex space-x-4">
                  {/* WhatsApp Direct Button */}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-emerald-600/10 border border-emerald-600/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    <span className="text-xs tracking-wider uppercase font-medium">WhatsApp</span>
                  </a>

                  {/* Instagram Button */}
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-pink-600/10 border border-pink-600/30 text-pink-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    <span className="text-xs tracking-wider uppercase font-medium">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Kolom Kanan: Form Pesan */}
          <ScrollReveal delay={400}>
            <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-serif mb-6 text-white">Send an Inquiry</h3>
              <form className="space-y-6">
                
                {/* Input Name */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                {/* Input Email */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                {/* Input Message */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property or stay requirements..."
                    rows="4"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Tombol Kirim Pilihan */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={sendViaEmail}
                    className="flex-1 bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium uppercase tracking-widest py-4 rounded-full transition-all shadow-md"
                  >
                    Send via Email
                  </button>
                  <button
                    onClick={sendViaWhatsApp}
                    className="flex-1 bg-neutral-800 hover:bg-emerald-600 border border-neutral-700 hover:border-transparent text-white text-xs font-medium uppercase tracking-widest py-4 rounded-full transition-all shadow-md"
                  >
                    Send via WhatsApp
                  </button>
                </div>
                <p className="text-center text-[10px] text-neutral-500 uppercase tracking-wider mt-4">
                  Choose your preferred method to send
                </p>
                
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}