import image1 from '../assets/dashboard-light.png'
import image2 from '../assets/programme-dark.png'
import image3 from '../assets/perso-light.png'
import image4 from '../assets/info-training-dark.png'
import image5 from '../assets/training-light.png'
import image6 from '../assets/historique-dark.png'
export function AppShowcase() {
    return (
        <div className="relative pt-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Découvre le futur du fitness
                        <span
                            className="bg-gradient-to-r from-brand-primary to-brand-light bg-clip-text text-transparent"> Fitness</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Une interface élégante, des fonctionnalités puissantes et une expérience fluide sur tous tes
                        appareils. </p>
                </div>
                <div className="relative">
                    {/* iPhone Mockups */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 place-items-center px-4 md:px-8">
                        <div
                            className="relative w-[140px] md:w-[280px] h-[285px] md:h-[570px] transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={image1}
                                alt="Fitness Tracking"
                                className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-[1.5rem] md:rounded-[3rem]"
                            />
                        </div>
                        <div
                            className="relative w-[140px] md:w-[280px] h-[285px] md:h-[570px] transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={image2}
                                alt="Fitness Tracking"
                                className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-[1.5rem] md:rounded-[3rem]"
                            />
                        </div>
                        <div
                            className="relative w-[140px] md:w-[280px] h-[285px] md:h-[570px] transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={image3}
                                alt="Fitness Tracking"
                                className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-[1.5rem] md:rounded-[3rem]"
                            />
                        </div>
                        <div
                            className="relative w-[140px] md:w-[280px] h-[285px] md:h-[570px] transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={image4}
                                alt="Fitness Tracking"
                                className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-[1.5rem] md:rounded-[3rem]"
                            />
                        </div>
                        <div
                            className="relative w-[140px] md:w-[280px] h-[285px] md:h-[570px] transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={image5}
                                alt="Fitness Tracking"
                                className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-[1.5rem] md:rounded-[3rem]"
                            />
                        </div>
                        <div
                            className="relative w-[140px] md:w-[280px] h-[285px] md:h-[570px] transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={image6}
                                alt="Fitness Tracking"
                                className="absolute inset-0 w-full h-full object-cover shadow-2xl rounded-[1.5rem] md:rounded-[3rem]"
                            />
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div
                        className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl opacity-30"></div>
                </div>
            </div>
        </div>
    );
}
