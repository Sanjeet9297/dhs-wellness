import React from 'react';
import awardImg from '../../assets/awarddistribution.jpg';
import bgGirl from '../../assets/bggirl.jpg';

const About: React.FC = () => {
    return (
        <section className="py-20 bg-white flex justify-center">
            <div className="container mx-auto px-4 md:px-8">

                {/* Main Card Container with Background Image - Increasing Height */}
                <div className="relative rounded-[40px] overflow-hidden min-h-[700px] flex items-center shadow-2xl">

                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={bgGirl}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        {/* Teal/Green Color Overlay */}
                        <div className="absolute inset-0 bg-[#0A7F85] mix-blend-multiply opacity-95"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#004D50] to-transparent opacity-60"></div>
                    </div>

                    <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-16 p-8 md:p-20">

                        {/* Left Content - Adjusted Spacing */}
                        <div className="w-full lg:w-5/12 text-white space-y-8">
                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-sm mb-3 opacity-80 text-white">About Us</h4>
                                <h2 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                                    The Story Behind <br /> Dinaaz
                                </h2>
                            </div>

                            <div className="space-y-6 text-base md:text-lg leading-relaxed opacity-95 text-gray-100 font-light">
                                <p>
                                    Dinaaz Hair & Skin Clinic was founded by Mr. Munna, known as the "real-life Munna Bhai", after experiencing early hair loss himself.
                                    After navigating misleading treatments and expensive promises, he envisioned a <span className="font-bold text-white">clinic built on:</span>
                                </p>
                                <ul className="space-y-3 mt-4">
                                    <li className="flex items-center gap-3"> <span className="w-2 h-2 bg-white rounded-full"></span> <span className="font-bold italic text-white">Honest medical advice</span></li>
                                    <li className="flex items-center gap-3"> <span className="w-2 h-2 bg-white rounded-full"></span> <span className="font-bold italic text-white">Affordable, science-backed care</span></li>
                                    <li className="flex items-center gap-3"> <span className="w-2 h-2 bg-white rounded-full"></span> <span className="font-bold italic text-white">Respect for patient trust</span></li>
                                </ul>
                                <p className="border-l-4 border-white/30 pl-4 italic opacity-90">
                                    Dinaaz was created to make ethical dermatological care accessible to everyone.
                                </p>
                            </div>

                            <div className="pt-8">
                                <button className="px-10 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-teal-800 transition-all flex items-center gap-3 group shadow-lg">
                                    Call The Clinic
                                    <span className="group-hover:translate-x-1 transition-transform">↗</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Image (Polaroid Style) - Cropped and Enlarged */}
                        <div className="w-full lg:w-7/12 flex justify-center lg:justify-end relative">
                            {/* The White Frame */}
                            <div className="bg-white p-4 md:p-6 pb-16 md:pb-24 shadow-2xl transform rotate-2 w-full max-w-xl transition-transform hover:scale-[1.02] duration-500">
                                {/* Image Container setup to crop tightly on the subjects */}
                                <div className="w-full aspect-[4/5] overflow-hidden bg-gray-200">
                                    <img
                                        src={awardImg}
                                        alt="Founders with Award"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
