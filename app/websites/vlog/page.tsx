import CustomCursor from '@/components/hotel/CustomCursor';
import Header from '@/components/vlog/Header';
import Hero from '@/components/vlog/Hero';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* <WelcomeScreen /> */}
      <CustomCursor />
      {/* <Header /> */}
      <Hero />
    </main>
  );
}
