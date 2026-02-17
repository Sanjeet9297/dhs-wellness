import React from 'react';
import surgeryBg from '../../assets/surgerybg.jpg';
import surgeryImg from '../../assets/surgery.jpg';

const BottomBanner: React.FC = () => {
    return (
        <section className="pb-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                <div className="relative rounded-[50px] overflow-hidden min-h-[450px] shadow-lg flex items-center group">

                    {/* 1. Right Image Layer (Base Background) */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={surgeryImg}
                            alt="Skin Treatment"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* 2. Left Orange Curve Layer */}
                    {/* "your skin and hair wala ko thoda or kam kro img ke ajise surgery wala img dikhan chahiye" */}
                    {/* Translation: Reduce the width of the orange section so more of the surgery image is visible */}
                    <div className="absolute top-0 bottom-0 left-0 w-full h-full z-10 pointer-events-none md:pointer-events-auto">
                        <div className="w-full h-full relative transition-all duration-700 ease-out"
                            style={{
                                // Reduced width from 75% to 58% to show more face (Right side)
                                // Increased vertical radius (150%) for steeper curve
                                clipPath: 'ellipse(58% 150% at 0% 50%)',
                                backgroundColor: '#D4A056'
                            }}>
                            <img
                                src={surgeryBg}
                                alt="Texture"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply"
                            />
                            {/* Orange Color Overlay to ensure vibrancy */}
                            <div className="absolute inset-0 bg-[#E88D14] mix-blend-color opacity-40"></div>
                        </div>
                    </div>

                    {/* White Circular Separator Line - Adjusted for new curve */}
                    <div className="absolute top-0 bottom-0 left-[53%] w-[2px] h-full bg-white/20 z-10 hidden md:block"
                        style={{
                            clipPath: 'ellipse(150% 150% at 0% 50%)'
                        }}>
                    </div>

                    {/* 3. Text Content - Narrowed container width to fit new curve */}
                    <div className="relative z-20 w-full md:w-[55%] p-8 md:p-12 lg:pl-20 flex flex-col justify-center h-full">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-sm font-sans">
                            Your Skin & Hair Deserve <br />
                            Medical Expertise, <br />
                            <span className="opacity-90">Not Experiments</span>
                        </h2>

                        <button className="bg-white text-[#1E3A5F] w-fit font-bold text-base px-10 py-4 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2 shadow-lg">
                            Book A Consultation
                            <span className="font-serif">↗</span>
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BottomBanner;
