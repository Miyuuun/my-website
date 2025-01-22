import Hero from '../components/Hero';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  );
}
