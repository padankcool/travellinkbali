'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const whatsappNumber = '6281353077575'; // Sesuai data kontak
  const emailAddress = 'sales@travellinkbali.com'; // Sesuai data di gambar
  const airbnbUrl = 'https://www.airbnb.com/users/show/6042218'; // ID Airbnb perusahaan

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendViaWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }
    const text = `Hello TravelLink Bali,%0A%0AMy name is ${formData.name}.%0A*Subject: ${formData.subject || 'General Inquiry'}*%0A%0A${formData.message}%0A%0AMy Email: ${formData.email}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const sendViaEmail = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message.");
      return;
    }
    const mailSubject = formData.subject ? `Website Inquiry: ${formData.subject}` : `Website Inquiry from ${formData.name}`;
    const body = `Hello TravelLink Bali,%0D%0A%0D%0A${formData.message}%0D%0A%0D%0ARegards,%0D%0A${formData.name}%0D%0A${formData.email}`;
    window.location.href = `mailto:${emailAddress}?subject=${mailSubject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-28 px-6 bg-neutral-950 text-white relative overflow-hidden">
      
      {/* Background Aksens */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />
      
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Kolom Kiri: Info Kontak, Socials & Map */}
          <ScrollReveal delay={200}>
            <div className="space-y-12">
              
              {/* Info Text */}
              <div>
                <h3 className="text-2xl font-serif mb-6 text-white">Address & Contacts</h3>
                <div className="space-y-5 text-neutral-300 font-light text-sm md:text-base">
                  <p className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>Jalan Gatot Subroto Timur No. 88E Denpasar</span>
                  </p>
                  <p className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>+6281353077575</span>
                  </p>
                  <p className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>+6281220175795</span>
                  </p>
                  <p className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href={`mailto:${emailAddress}`} className="hover:text-amber-400 transition-colors">{emailAddress}</a>
                  </p>
                </div>
              </div>

              {/* Tombol Social Media & Chat */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-5">Connect Directly</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-emerald-600/10 border border-emerald-600/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    <span className="text-xs tracking-wider uppercase font-medium">Chat on WhatsApp</span>
                  </a>
                  <a
                    href={airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-rose-600/10 border border-rose-600/30 text-rose-400 hover:bg-rose-500 hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.56 10.96a17.43 17.43 0 0 0-2.66-3.88l-4.52-5.4A4.85 4.85 0 0 0 12 0a4.85 4.85 0 0 0-3.38 1.68l-4.52 5.4a17.43 17.43 0 0 0-2.66 3.88A9.78 9.78 0 0 0 0 15.52a8.68 8.68 0 0 0 8.87 8.48A7 7 0 0 0 14.52 22a8.07 8.07 0 0 0 2.61-3 8.07 8.07 0 0 0 2.61 3 7 7 0 0 0 5.65 2 8.68 8.68 0 0 0 8.87-8.48 9.78 9.78 0 0 0-1.46-4.56zm-10.56 9a2.53 2.53 0 1 1 2.53-2.53 2.53 2.53 0 0 1-2.53 2.53zm0-8.6a3.9 3.9 0 0 0-3.75 4 4.14 4.14 0 0 0 1.29 3 4.86 4.86 0 0 0 4.92 0 4.14 4.14 0 0 0 1.29-3 3.9 3.9 0 0 0-3.75-4z"/></svg>
                    <span className="text-xs tracking-wider uppercase font-medium">Airbnb Profile</span>
                  </a>
                </div>
              </div>

              {/* Google Maps Location - Diset ke Jl Gatot Subroto Timur Denpasar */}
              <div className="w-full h-56 md:h-64 rounded-2xl overflow-hidden border border-neutral-800 shadow-lg relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3824967390977!2d115.234394075811!3d-8.655106191392683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2404e9c7de91f%3A0xc03f295b9d24a9ed!2sJl.%20Gatot%20Subroto%20Timur%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
              </div>

            </div>
          </ScrollReveal>

          {/* Kolom Kanan: Form Pesan dengan field "Subject" baru */}
          <ScrollReveal delay={400}>
            <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-10 rounded-3xl shadow-xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-serif mb-6 text-white">Send a message to us</h3>
              <form className="space-y-6">
                
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Your Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                {/* Field Subject Baru */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Subject:</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2">Message:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={sendViaEmail}
                    className="flex-1 bg-amber-600 hover:bg-amber-500 text-white text-xs font-medium uppercase tracking-widest py-4 rounded-full transition-all shadow-md"
                  >
                    Send Message
                  </button>
                  <button
                    onClick={sendViaWhatsApp}
                    className="flex-1 bg-neutral-800 hover:bg-emerald-600 border border-neutral-700 hover:border-transparent text-white text-xs font-medium uppercase tracking-widest py-4 rounded-full transition-all shadow-md"
                  >
                    Send via WhatsApp App
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