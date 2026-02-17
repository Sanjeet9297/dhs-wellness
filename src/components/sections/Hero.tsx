import React from 'react';
import Button from '../common/Button';
import heroBg from '../../assets/treatment.jpg'; // Updated to use treatment.jpg as requested

const Hero: React.FC = () => {
    return (
        <section className="relative w-full bg-primary text-white overflow-hidden pb-16">

            {/* Main Hero Content Wrapper */}
            <div className="relative min-h-[600px] flex items-center justify-start">

                {/* Background Image Reference */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Background"
                        className="w-full h-full object-cover object-right md:object-center opacity-40 md:opacity-100 mix-blend-overlay md:mix-blend-normal"
                    />
                    {/* Gradient Overlay for text readability on left side */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0E5E6F] via-[#0E5E6F]/90 to-transparent z-10 md:w-3/4"></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-20 py-20">
                    <div className="w-full md:w-3/5 lg:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-sans font-bold leading-tight tracking-tight">
                            Dermatologist-Led <br />
                            Hair & Skin Treatments <br />
                            <span className="text-white">You Can Trust</span>
                        </h1>

                        <p className="text-base md:text-lg text-gray-200 max-w-xl font-light leading-relaxed">
                            Medical-grade diagnosis and personalized treatment for hair loss, skin conditions, and aesthetic concerns; never salon-based or package-driven care.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded text-base font-medium transition-all">
                                Call The Clinic ↗
                            </Button>
                            <Button variant="secondary" className="px-8 py-3 rounded text-base font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-white">
                                Book A Consultation ↗
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slanted Trust Badges Bar */}
            <div className="-mt-16 relative z-30 transform -rotate-1 origin-center w-[110%] -ml-[5%] overflow-hidden">
                <div className="bg-white text-dark py-5 shadow-lg border-y-4 border-gray-100">
                    <div className="container mx-auto flex flex-wrap justify-center md:justify-around items-center gap-4 md:gap-8 text-xs md:text-sm font-bold text-gray-800 tracking-wide uppercase px-4 md:px-20 transform skew-x-1">

                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <span className="text-dark text-lg font-extrabold">✓</span> Award-Winning Dermatologist
                        </div>

                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <span className="text-dark text-lg font-extrabold">✓</span> 10+ Years of Ethical Clinical Practice
                        </div>

                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <span className="text-dark text-lg font-extrabold">✓</span> Nationally & Internationally Recognized
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
