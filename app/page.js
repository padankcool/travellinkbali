import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* Selanjutnya kita bisa lanjut ke Our Client & Contact Us */}
    </main>
  );
}