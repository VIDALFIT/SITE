import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Bell, Trash2 } from 'lucide-react';

export function PrivacyPolicy() {
  const sections = [
    {
      icon: Shield,
      title: "Protection des données",
      content: "Nous utilisons des protocoles de sécurité avancés pour protéger vos informations personnelles."
    },
    {
      icon: Database,
      title: "Collecte des données",
      content: "Nous collectons uniquement les données nécessaires au bon fonctionnement de l'application. (voir section détaillée plus bas)"
    },
    {
      icon: Eye,
      title: "Utilisation des données",
      content: "Vos données sont utilisées exclusivement pour améliorer votre expérience utilisateur et ne sont pas partagées avec des tiers."
    },
    {
      icon: Bell,
      title: "Communications",
      content: "Vous pouvez gérer vos préférences de communication à tout moment."
    },
    {
      icon: Lock,
      title: "Sécurité",
      content: "Vos données sont stockées de manière sécurisée et cryptée."
    },
    {
      icon: Trash2,
      title: "Suppression",
      content: "Vous pouvez demander la suppression de vos données à tout moment dans l'onglet profil (Dernier onglet)"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Politique de Confidentialité</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6 border border-white/10"
              >
                <section.icon className="h-8 w-8 text-brand-primary mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>
                <p className="text-gray-300">{section.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-primary mb-4">Informations détaillées</h2>
              <p className="text-gray-300 mb-4">
                Cette politique de confidentialité décrit comment VidalFit collecte, utilise et protège vos informations personnelles lorsque vous utilisez notre application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-primary mb-4">Données collectées</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Informations de profil (nom, prénom, email)</li>
                <li>Données d'entraînement</li>
                <li>Objectifs de fitness</li>
                <li>Mesures corporelles (taille, poids, age, genre)</li>
                <li>Historique d'activité</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-brand-primary mb-4">Vos droits</h2>
              <p className="text-gray-300 mb-4">
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
