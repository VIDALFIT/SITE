import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, MapPin, ChevronDown, MessageSquare, Users, Settings } from 'lucide-react';

interface FAQItem {
    category: string;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        category: "Account",
        question: "Comment modifier mes informations de profil ?",
        answer: "Accédez à l'onglet Profil dans l'application, appuyez sur 'Modifier le profil' pour mettre à jour vos informations personnelles."
    },
    {
        category: "Account",
        question: "Comment réinitialiser mon mot de passe ?",
        answer: "Dans l'écran de connexion, appuyez sur 'Mot de passe oublié' et suivez les instructions envoyées par email."
    },
    {
        category: "Features",
        question: "Comment générer un nouveau programme d'entraînement ?",
        answer: "Dans l'onglet Programme, appuyez sur le bouton '+' et suivez l'assistant de création de programme."
    },
    {
        category: "Features",
        question: "Comment suivre mes progrès ?",
        answer: "Consultez l'onglet Statistiques pour voir vos progrès détaillés, historique d'entraînement et évolution."
    },
    {
        category: "Technical",
        question: "L'application ne se lance pas, que faire ?",
        answer: "Essayez de fermer complètement l'application et de la relancer. Si le problème persiste, désinstallez et réinstallez l'application."
    },
    {
        category: "Subscription",
        question: "Comment gérer mon abonnement ?",
        answer: "Gérez votre abonnement directement depuis les paramètres de votre compte App Store."
    },
    {
        category: "Privacy",
        question: "Comment sont protégées mes données ?",
        answer: "Vos données sont cryptées et stockées de manière sécurisée. Consultez notre politique de confidentialité pour plus de détails."
    }
];

export function Support() {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Technical Issue',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const mailBody = `
Nom: ${formData.name}
Email: ${formData.email}
Sujet: ${formData.subject}

Message:
${formData.message}
`.trim();

        const encodedSubject = encodeURIComponent(`Support VidalFit - ${formData.subject}`);
        const encodedBody = encodeURIComponent(mailBody);

        window.location.href = `mailto:contact@vidalfit.fr?subject=${encodedSubject}&body=${encodedBody}`;

        setFormData({
            name: '',
            email: '',
            subject: 'Technical Issue',
            message: ''
        });

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
    };

    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Comment pouvons-nous
                        <span className="bg-gradient-to-r from-brand-primary to-brand-light bg-clip-text text-transparent"> vous aider ?</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Notre équipe est là pour vous accompagner dans votre parcours fitness.
                    </p>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10 flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-brand-primary" />
                        <div>
                            <h3 className="text-white font-semibold">Email Support</h3>
                            <p className="text-gray-400">contact@vidalfit.fr</p>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 border border-white/10 flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-brand-primary" />
                        <div>
                            <h3 className="text-white font-semibold">Heures d'ouverture</h3>
                            <p className="text-gray-400">Lun-Ven: 9h-18h</p>
                        </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-6 border border-white/10 flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-brand-primary" />
                        <div>
                            <h3 className="text-white font-semibold">Localisation</h3>
                            <p className="text-gray-400">France (UTC+1)</p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form and How to Get Help */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Contactez-nous</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Sujet
                                </label>
                                <select
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                >
                                    <option value="Technical Issue">Problème Technique</option>
                                    <option value="Account Problem">Problème de Compte</option>
                                    <option value="Feature Request">Suggestion de Fonctionnalité</option>
                                    <option value="Other">Autre</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    required
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full px-6 py-3 bg-brand-primary text-black font-semibold rounded-lg hover:bg-brand-dark transition-colors duration-200"
                            >
                                Envoyer
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* How to Get Help */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Comment obtenir de l'aide</h2>
                        <div className="space-y-6">
                            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                                <div className="flex items-center space-x-3 mb-4">
                                    <MessageSquare className="h-6 w-6 text-brand-primary" />
                                    <h3 className="text-lg font-semibold text-white">Support en ligne</h3>
                                </div>
                                <p className="text-gray-400">
                                    Utilisez notre formulaire de contact pour une réponse sous 24-48h ouvrées.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Users className="h-6 w-6 text-brand-primary" />
                                    <h3 className="text-lg font-semibold text-white">Communauté</h3>
                                </div>
                                <p className="text-gray-400">
                                    Rejoignez notre communauté sur les réseaux sociaux pour des conseils et du support.
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Settings className="h-6 w-6 text-brand-primary" />
                                    <h3 className="text-lg font-semibold text-white">Guide technique</h3>
                                </div>
                                <p className="text-gray-400">
                                    Consultez notre base de connaissances pour des solutions rapides aux problèmes courants.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-white mb-8">Questions fréquentes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/5 rounded-lg border border-white/10 overflow-hidden"
                                initial={false}
                            >
                                <button
                                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                                >
                                    <span className="font-medium text-white">{faq.question}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 text-brand-primary transform transition-transform duration-200 ${
                                            activeQuestion === index ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {activeQuestion === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 py-4 border-t border-white/10">
                                                <p className="text-gray-400">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Success Notification */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
                    >
                        Votre client mail va s'ouvrir avec votre message. Merci de nous avoir contacté !
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
