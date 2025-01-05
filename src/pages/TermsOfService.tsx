import {motion} from 'framer-motion';

export function TermsOfService() {
    const lastUpdated = '05/01/2025';
    return (
        <div className="min-h-screen bg-black pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    <h1 className="text-4xl font-bold text-white mb-8">Conditions Générales d'Utilisation</h1>
                    <p className="text-gray-400 mb-8">Dernière mise à jour le : {lastUpdated}</p>

                    <div className="prose prose-invert max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">1. Acceptation des
                                conditions</h2>
                            <p className="text-gray-300 mb-4">
                                En téléchargeant et en utilisant l'application VidalFit, vous acceptez d'être lié par
                                les présentes
                                conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, vous ne devez
                                pas utiliser
                                l'application.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">2. Description du
                                service</h2>
                            <p className="text-gray-300 mb-4">
                                VidalFit est une application de fitness qui propose des programmes d'entraînement
                                personnalisés, le
                                suivi des progrès et des conseils nutritionnels. L'application est disponible sur iOS
                                via l'App Store.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">3. Compte utilisateur</h2>
                            <p className="text-gray-300 mb-4">
                                Pour utiliser l'application, vous devez créer un compte. Vous êtes responsable du
                                maintien de la
                                confidentialité de vos informations de connexion et de toutes les activités qui se
                                produisent sous votre
                                compte.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">4. Utilisation de
                                l'application</h2>
                            <p className="text-gray-300 mb-4">
                                Vous vous engagez à utiliser l'application conformément aux lois en vigueur et à ne pas
                                l'utiliser à des
                                fins illégales ou non autorisées.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">5. Propriété
                                intellectuelle</h2>
                            <p className="text-gray-300 mb-4">
                                Tous les droits de propriété intellectuelle relatifs à l'application et son contenu
                                appartiennent à
                                VidalFit. Aucun droit n'est cédé à l'utilisateur.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">6. Modifications</h2>
                            <p className="text-gray-300 mb-4">
                                VidalFit se réserve le droit de modifier ces conditions à tout moment. Les modifications
                                entrent en
                                vigueur dès leur publication dans l'application.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">7. Abonnements et
                                paiements</h2>
                            <p className="text-gray-300 mb-4">
                                Les abonnements à VidalFit se renouvellent automatiquement sauf annulation 24h avant la
                                fin de la
                                période en cours. Le paiement sera prélevé sur votre compte Apple lors de la
                                confirmation de
                                l'abonnement. La gestion et l'annulation des abonnements se font via les Réglages de
                                votre compte
                                Apple.
                            </p>

                            <div className="text-gray-300 mb-4">
                                <h3 className="font-semibold mb-2">Prix et durées disponibles :</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Abonnement mensuel à 1,99€/mois</li>
                                    <li>Abonnement annuel à 19,99€/an (16% d'économie par rapport au plan mensuel)</li>
                                </ul>

                                <h3 className="font-semibold mt-4 mb-2">Période d'essai gratuite :</h3>
                                <ul className="list-disc pl-6">
                                    <li>7 jours d'essai sans engagement</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">8. Protection des
                                données</h2>
                            <p className="text-gray-300 mb-4">
                                Nous collectons et traitons vos données conformément à notre politique de
                                confidentialité. <br/>
                                En utilisant l'application, vous consentez à ce traitement et déclarez que les
                                informations fournies sont exactes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">9. Limitation de
                                responsabilité</h2>
                            <p className="text-gray-300 mb-4">
                                Les exercices et conseils proposés le sont à titre informatif. Consultez un
                                professionnel de santé avant
                                de commencer tout programme généré. VidalFit décline toute responsabilité en cas de
                                blessure ou dommage lié à l'utilisation de l'application.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-brand-primary mb-4">10. Contact</h2>
                            <p className="text-gray-300 mb-4">
                                Pour toute question concernant ces conditions ou l'application, contactez-nous à :
                                support@vidalfit.com
                            </p>
                        </section>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}
