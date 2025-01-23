import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import {trackAppDownload} from "../utils/analytics.tsx";

export function CallToAction() {
    return (
        <div className="bg-black" id="download">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            <span className="block">Prêt à transformer ta vie ?</span>
                            <span className="block text-brand-primary">
                                Télécharge gratuitement VidalFit dès aujourd'hui.
                            </span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://apps.apple.com/fr/app/vidalfit-your-gym-companion/id6475721253"
                                target="_blank"
                                onClick={trackAppDownload}
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-brand-primary hover:bg-brand-dark transition-colors duration-200">
                                <Download className="h-5 w-5 mr-2"/>
                                Télécharger pour iOS
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
