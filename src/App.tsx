import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AppShowcase } from './components/AppShowcase';
import { CallToAction } from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AppShowcase />
      <Features />
      <CallToAction />
    </div>
  );
}
