import { motion } from 'framer-motion';
import image1 from '../assets/dashboard-light.png'
import image2 from '../assets/programme-dark.png'
import image3 from '../assets/perso-light.png'
import image4 from '../assets/info-training-dark.png'
import image5 from '../assets/training-light.png'
import image6 from '../assets/historique-dark.png'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function AppShowcase() {
    return (
        <div className="relative pt-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Découvre le futur du
                        <span className="bg-gradient-to-r from-brand-primary to-brand-light bg-clip-text text-transparent"> Fitness</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Une interface élégante, des fonctionnalités puissantes et une expérience fluide sur tous tes
                        appareils.
                    </p>
                </motion.div>
                <div className="relative">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 place-items-center px-4 md:px-8">
                        {[image1, image2, image3, image4, image5, image6].map((image, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{ scale: 1.05 }}
                                className="relative w-[140px] md:w-[280px] h-[285px] md:h-[570px] transition-transform duration-300">
                                <img
                                    src={image}
                                    alt={`App Screenshot ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-[1.5rem] md:rounded-[3rem]"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl"
                    />
                </div>
            </div>
        </div>
    );
}
