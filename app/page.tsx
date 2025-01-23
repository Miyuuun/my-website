import Hero from '../components/Hero';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import SampleHP from '../components/SampleHP';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Projects />
      <AboutMe />
      <SampleHP />
      <Contact />
    </main>
  );
}
