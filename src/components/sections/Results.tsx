import React from 'react';
import whiteCheckShirt from '../../assets/whitecheckshirt.jpg';
import whiteBlueShirt from '../../assets/whiteblueshirt.png';
import white1 from '../../assets/white1.jpg';
import white2 from '../../assets/white2.png';
import beforeAfterFace from '../../assets/beforeafterface.png';
import afterGirl from '../../assets/aftergirl.jpg';
import beforeGirl from '../../assets/beforegirl.jpg';
import afterLady from '../../assets/afterlady.jpg';

const Star = ({ className }: { className?: string }) => (
    <div className={`absolute text-gray-100 text-6xl pointer-events-none ${className}`}>★</div>
);

const Results: React.FC = () => {
    return (
        <section className="pt-20 pb-10 bg-white overflow-hidden relative min-h-[900px] lg:min-h-[850px]">
            {/* Increased bottom padding to pb-10 to create gap */}

            <Star className="top-20 left-10 rotate-12 opacity-50 scale-150" />
            <Star className="top-40 right-20 -rotate-12 opacity-40" />
            <Star className="bottom-40 left-20 rotate-45 opacity-60 scale-125" />
            <Star className="top-1/2 left-1/2 opacity-30" />
            <Star className="bottom-20 right-[20%] -rotate-6 opacity-50" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 w-full mb-10 md:mb-0">

                <div className="text-center mb-16 relative z-10">
                    <h4 className="text-[#3EBCB3] font-bold uppercase tracking-widest text-xs mb-3">Results</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark leading-tight">
                        Our Results Speaks<br /> For Themselves
                    </h2>
                </div>

                <div className="relative w-full max-w-6xl mx-auto h-[600px] md:h-[650px]">

                    {/* 1. TOP LEFT */}
                    <div className="absolute top-0 left-4 md:left-[5%] w-56 md:w-64 bg-white p-3 pb-8 shadow-2xl transform -rotate-3 z-30 hover:z-50 hover:scale-105 transition-all duration-300">
                        <img src={whiteCheckShirt} alt="Hair Result" className="w-full h-auto" />
                    </div>

                    {/* 2. CENTER: Paired Hair Top View */}
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[340px] md:w-[400px] bg-white p-3 pb-8 shadow-2xl rotate-2 z-50 hover:z-50 hover:scale-105 transition-all duration-300">
                        <div className="flex gap-1 h-48 md:h-56 overflow-hidden">
                            <div className="w-1/2 relative">
                                <img src={white1} alt="Before" className="w-full h-full object-cover" />
                                <span className="absolute bottom-1 left-1 bg-black/50 text-white text-[10px] px-1 rounded-sm">Before</span>
                            </div>
                            <div className="w-1/2 relative bg-gray-50 border-l border-white">
                                <img src={white2} alt="After" className="w-full h-full object-cover" />
                                <span className="absolute bottom-1 right-1 bg-black/50 text-white text-[10px] px-1 rounded-sm">After</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. TOP RIGHT */}
                    <div className="absolute top-10 right-4 md:right-[15%] w-60 md:w-64 bg-white p-3 pb-8 shadow-2xl transform rotate-6 z-20 hover:z-50 hover:scale-105 transition-all duration-300">
                        <img src={beforeAfterFace} alt="Pigmentation Result" className="w-full h-auto" />
                    </div>

                    {/* 4. BOTTOM LEFT */}
                    <div className="absolute top-[350px] left-0 md:left-[8%] w-60 md:w-64 bg-white p-3 pb-8 shadow-xl transform -rotate-6 z-20 hover:z-50 hover:scale-105 transition-all duration-300">
                        <img src={whiteBlueShirt} alt="Hair Restoration" className="w-full h-auto" />
                    </div>

                    {/* 5. BOTTOM RIGHT (Inner) */}
                    <div className="absolute top-[380px] right-[30%] md:right-[28%] w-56 md:w-60 bg-white p-3 pb-8 shadow-2xl transform -rotate-2 z-10 hover:z-50 hover:scale-105 transition-all duration-300">
                        <div className="h-40 overflow-hidden relative">
                            <img src={afterLady} alt="Skin Result" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* 6. BOTTOM RIGHT (Outer) */}
                    <div className="absolute top-[420px] right-0 md:right-[5%] w-64 md:w-72 bg-white p-3 pb-8 shadow-2xl transform rotate-12 z-30 hover:z-50 hover:scale-105 transition-all duration-300">
                        <div className="flex gap-1 bg-gray-50 h-40 overflow-hidden">
                            <div className="w-1/2 relative">
                                <img src={beforeGirl} alt="Before" className="w-full h-full object-cover" />
                                <span className="absolute bottom-1 left-1 bg-black/50 text-white text-[10px] px-1">Before</span>
                            </div>
                            <div className="w-1/2 relative">
                                <img src={afterGirl} alt="After" className="w-full h-full object-cover" />
                                <span className="absolute bottom-1 left-1 bg-black/50 text-white text-[10px] px-1">After</span>
                            </div>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-1/2 right-0 transform translate-x-1/4 md:translate-x-0 -translate-y-[100px] z-60 hidden lg:block">
                        <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#E2F5F6] to-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center p-4 border border-white/80">
                            <p className="text-gray-500 font-bold text-lg leading-tight">Before & <br /> <span className="text-[#D4A056] text-xl font-serif italic font-bold">After Results</span></p>
                            <div className="w-12 h-1 bg-[#3EBCB3] mt-2"></div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Results;
