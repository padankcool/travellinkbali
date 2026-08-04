import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      {/* Nanti kita tambahkan Footer & Our Client di sini */}
    </main>
  );
}