import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackAppDownload } from '../utils/analytics.tsx';

export function Hero() {
    return (
        <div className="relative bg-black overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 to-black"/>

            {/* Animated gradient orb */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-primary to-brand-light rounded-full blur-3xl"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center justify-center px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                        <Sparkles className="h-4 w-4 text-brand-primary mr-2"/>
                        <span className="text-sm text-white/80">Votre compagnon personnel</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Transforme ton corps <br/>
                        <span className="bg-gradient-to-r from-brand-primary to-brand-light bg-clip-text text-transparent">
                            Transforme ta vie
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
                        Programmes générés, entraînements personnalisés, calcul de ton métabolisme et rappels de
                        collation – tout dans une seule application. Commence ton parcours fitness avec VidalFit dès
                        aujourd'hui.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://apps.apple.com/fr/app/vidalfit-your-gym-companion/id6475721253"
                            target="_blank"
                            onClick={trackAppDownload}
                            className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-dark text-black font-semibold rounded-lg inline-flex items-center justify-center transition-colors duration-200"
                        >
                            Télécharger maintenant
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#fonctionnalités"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium inline-flex items-center justify-center backdrop-blur-sm transition-colors duration-200"
                        >
                            Découvrir les fonctionnalités
                            <TrendingUp className="ml-2 h-5 w-5"/>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
