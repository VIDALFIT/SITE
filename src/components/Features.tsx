import {Dumbbell, Zap, BarChart, Apple, Flame, Activity} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Programmes Générés',
    description: 'Des entraînements créés sur mesure pour atteindre tes objectifs.',
    icon: Dumbbell,
  },
  {
    name: 'Calcul des Calories Brûlées',
    description: 'Estime les calories dépensées pendant tes séances.',
    icon: Flame,
  },
  {
    name: '+ de 1500 Exercices Disponibles',
    description: 'Accède à une bibliothèque complète pour varier tes entraînements.',
    icon: Activity,
  },
  {
    name: 'Entraînements Personnalisés',
    description: 'Des sessions adaptées à ton niveau et à tes besoins spécifiques.',
    icon: Zap,
  },
  {
    name: 'Analyse des Progrès',
    description: 'Suis l’évolution de tes performances avec des insights détaillés.',
    icon: BarChart,
  },
  {
    name: 'Rappels de Collation',
    description: 'Ne manque jamais une étape essentielle de ton alimentation.',
    icon: Apple,
  },
];

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

export function Features() {
  return (
      <div className="relative bg-black py-32" id="fonctionnalités">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-primary/5 to-black"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tout ce dont tu as besoin
              <span className="bg-gradient-to-r from-brand-primary to-brand-light bg-clip-text text-transparent"> pour réussir dans le fitness</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Des fonctionnalités puissantes pour t'aider à atteindre tes objectifs fitness.
            </p>
          </motion.div>

          <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-24">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                  <motion.div
                      key={feature.name}
                      variants={item}
                      className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-light/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors duration-300">
                      <div className="inline-flex items-center justify-center p-3 rounded-lg bg-brand-primary/20">
                        <feature.icon className="h-6 w-6 text-brand-primary" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-white">{feature.name}</h3>
                      <p className="mt-4 text-gray-400 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
  );
}
