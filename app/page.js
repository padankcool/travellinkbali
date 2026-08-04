import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Navbar di paling atas */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <About />

      {/* Bagian selanjutnya (Services, Client, Contact) akan kita buat menyusul */}
    </main>
  );
}