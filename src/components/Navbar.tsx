import {useState, useEffect} from 'react';
import {Menu, X} from 'lucide-react';
import {Link, useLocation} from 'react-router-dom';
import logo from '../assets/icon-only.png';
import { trackAppDownload } from '../utils/analytics.tsx';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getHref = () => {
        return location.pathname === '/' ? '#fonctionnalités' : '/';
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="" className="h-10 w-10 text-brand-primary rounded-md"/>
                            <span className="ml-2 text-xl font-bold text-white">
                VidalFit
              </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href={getHref()}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Fonctionnalités
                        </a>

                        <Link
                            to="/support"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Support
                        </Link>

                        <Link
                            to="/cgu"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            CGU
                        </Link>
                        <Link
                            to="/confidentialite"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Confidentialité
                        </Link>
                        <Link
                            to="/abonnement"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Abonnement
                        </Link>

                        <a
                            href="https://apps.apple.com/fr/app/vidalfit-your-gym-companion/id6475721253"
                            onClick={trackAppDownload}
                            className="px-4 py-2 text-sm font-medium text-black bg-brand-primary hover:bg-brand-dark rounded-lg transition-colors"
                        >
                            Télécharger l'application
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-white"
                            aria-label="Menu principal"
                            aria-expanded={isMobileMenuOpen}
                            aria-haspopup="true"
                        >
                            <span className="sr-only">
                                {isMobileMenuOpen ? "Fermer" : "Ouvrir"} le menu principal
                            </span>
                            {isMobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-sm">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            href="#fonctionnalités"
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                        >
                            Fonctionnalités
                        </a>
                        <Link
                            to="/support"
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                        >
                            Support
                        </Link>
                        <Link
                            to="/cgu"
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                        >
                            CGU
                        </Link>
                        <Link
                            to="/confidentialite"
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                        >
                            Confidentialité
                        </Link>
                        <Link
                            to="/abonnement"
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                        >
                            Abonnement
                        </Link>
                        <a
                            href="https://apps.apple.com/fr/app/vidalfit-your-gym-companion/id6475721253"
                            onClick={trackAppDownload}
                            className="block px-3 py-2 text-base font-medium text-black bg-brand-primary hover:bg-brand-dark rounded-lg"
                        >
                            Télécharger l'application
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
