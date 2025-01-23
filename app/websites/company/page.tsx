import Header from '@/components/company/C_Header';
import Hero from '@/components/company/C_Hero';
import Concept from '@/components/company/C_Concept';
import ReservationButton from '@/components/company/C_ReservationButton';
import Footer from '@/components/company/C_Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Concept />
      <ReservationButton />
      <Footer />
    </main>
  );
}
