import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <Navbar />
      
      {/* Konten Utama */}
      <div className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>

      {/* Footer selalu di bagian paling bawah */}
      <Footer />
    </main>
  );
}