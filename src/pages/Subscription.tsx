import {motion} from 'framer-motion';
import {Check} from 'lucide-react';

export function Subscription() {
    const features = [
        "Génération de programme illimitée",
        "Entraînements personnalisés illimités",
        "Support prioritaire",
        "Programmes nutritionnels illimités (à venir)",
        "Suivi personnalisé des progrès (à venir)",
    ];

    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    <h1 className="text-4xl font-bold text-white mb-8">Conditions d'Abonnement</h1>

                    <div className="bg-white/5 rounded-lg p-8 border border-white/10 mb-12">
                        <h2 className="text-2xl font-semibold text-brand-primary mb-6">Fonctionnalités Premium</h2>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{opacity: 0, x: -20}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.6, delay: index * 0.1}}
                                    className="flex items-center text-gray-300"
                                >
                                    <Check className="h-5 w-5 text-brand-primary mr-3"/>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">Durée et renouvellement</h2>
                            <p className="text-gray-300 mb-4">
                                L'abonnement est conclu pour une durée d'un mois et se renouvelle automatiquement sauf
                                résiliation. Vous pouvez annuler votre abonnement à tout moment via les paramètres de
                                votre compte App Store.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">Modalités de paiement</h2>
                            <p className="text-gray-300 mb-4">
                                Le paiement est effectué via votre compte App Store. Le montant de l'abonnement sera
                                automatiquement débité de votre compte à chaque renouvellement.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">Période d'essai</h2>
                            <p className="text-gray-300 mb-4">
                                Une période d'essai gratuite de 7 jours est proposée pour tout nouvel abonnement. À la
                                fin de cette période, l'abonnement sera automatiquement converti en abonnement payant.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">Remboursement</h2>
                            <p className="text-gray-300 mb-4">
                                Aucun remboursement ne sera effectué pour les abonnements en cours. Vous pouvez annuler
                                votre abonnement à tout moment pour éviter le renouvellement.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">Résiliation</h2>
                            <p className="text-gray-300 mb-4">
                                Vous pouvez résilier votre abonnement à tout moment. La résiliation prendra effet à la
                                fin de la période en cours. Aucun remboursement ne sera effectué pour la période
                                entamée.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
