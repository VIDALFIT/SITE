import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AppShowcase } from './components/AppShowcase';
import { CallToAction } from './components/CallToAction';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Subscription } from './pages/Subscription';
import { Support } from './pages/Support';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AppShowcase />
              <Features />
              <CallToAction />
            </>
          } />
          <Route path="/cgu" element={<TermsOfService />} />
          <Route path="/confidentialite" element={<PrivacyPolicy />} />
          <Route path="/abonnement" element={<Subscription />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}