import React from 'react';

// Using inline SVG icons to match the screenshot 'same to same' style without importing external images
// Since the screenshot shows specific icon styles (hair follicle, face mask, skin layers)

const Services: React.FC = () => {
    const services = [
        {
            title: "Hair Treatments",
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 42C24 42 36 36 36 24V12L24 6L12 12V24C12 36 24 42 24 42Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 16V32" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 22L24 16L30 22" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Simplified hair strand logic, will use more custom paths below for better match */}
                </svg>
            )
        },
        {
            title: "Skin Treatments",
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="14" stroke="#1A1A1A" strokeWidth="2" />
                    <path d="M18 22C18 22 20 20 24 20C28 20 30 22 30 22" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                    <path d="M24 30C24 30 22 32 18 32" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                    {/* Simplified face icon */}
                </svg>
            )

        },
        {
            title: "Aesthetic Dermatology",
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="24" width="32" height="16" rx="2" stroke="#1A1A1A" strokeWidth="2" />
                    <path d="M16 24V18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                    <path d="M24 24V16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                    <path d="M32 24V18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                    {/* Simplified derma roller/needle logic */}
                </svg>
            )
        }
    ];

    // Replacing the SVGs with more specific ones to match the screenshot:
    // Hair: Follicle with stars
    // Skin: Face with towel/mask
    // Aesthetic: Layers/Needling device

    return (
        <section className="py-20 bg-[#DDF1F3]"> {/* Light teal background matching screenshot */}
            <div className="container mx-auto px-4 md:px-8">

                <div className="mb-12">
                    <h4 className="text-[#3EBCB3] font-bold uppercase tracking-widest text-xs mb-2">Services</h4>
                    <h2 className="text-4xl font-serif font-bold text-dark">
                        Treatments Available
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Hair */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all relative h-[450px] flex flex-col group">
                        <div className="p-8 pb-0 flex-grow">
                            {/* Icon Area */}
                            <div className="w-16 h-16 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14 text-dark">
                                    <path d="M32 54C40 54 48 40 48 28C48 16 42 16 38 16C34 16 32 20 32 20C32 20 30 16 26 16C22 16 16 16 16 28C16 40 24 54 32 54Z" />
                                    <path d="M32 20V10" />
                                    <path d="M22 6L28 12" />
                                    <path d="M42 6L36 12" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-dark leading-tight w-2/3">
                                Hair <br /> Treatments
                            </h3>
                        </div>

                        {/* Bottom Decoration - 'Paper Fold' Effect */}
                        <div className="relative h-32 w-full mt-auto">
                            {/* The slanted/curved bottom area */}
                            <div className="absolute inset-0 bg-[#F0EFEC] rounded-tl-[40px] transform skew-y-0 group-hover:bg-[#E2F5F6] transition-colors"></div>

                            {/* Arrow Button */}
                            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                →
                            </div>

                            {/* Paper Fold Shadow/Gradient mimics design */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white via-gray-50 to-transparent opacity-50 transform rotate-180 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Card 2: Skin */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all relative h-[450px] flex flex-col group">
                        <div className="p-8 pb-0 flex-grow">
                            <div className="w-16 h-16 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14 text-dark">
                                    <circle cx="32" cy="32" r="14" />
                                    <path d="M32 18V8" /> {/* Hair towel top */}
                                    <path d="M18 32H10" />
                                    <path d="M46 32H54" />
                                    <path d="M26 28C26 28 28 30 32 30C36 30 38 28 38 28" /> {/* Smile */}
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-dark leading-tight w-2/3">
                                Skin <br /> Treatments
                            </h3>
                        </div>
                        <div className="relative h-32 w-full mt-auto">
                            <div className="absolute inset-0 bg-[#F0EFEC] rounded-tl-[40px] group-hover:bg-[#E2F5F6] transition-colors"></div>
                            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 transform -rotate-45 group-hover:rotate-0 transition-transform">→</div>
                        </div>
                    </div>

                    {/* Card 3: Aesthetic */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all relative h-[450px] flex flex-col group">
                        <div className="p-8 pb-0 flex-grow">
                            <div className="w-16 h-16 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-14 h-14 text-dark">
                                    <rect x="16" y="32" width="32" height="12" rx="2" /> {/* Skin layer */}
                                    <path d="M20 20V32" /> {/* Needles */}
                                    <path d="M28 20V32" />
                                    <path d="M36 20V32" />
                                    <path d="M44 20V32" />
                                    <rect x="16" y="14" width="32" height="6" rx="1" /> {/* Device handle */}
                                </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-dark leading-tight w-2/3">
                                Aesthetic <br /> Dermatology
                            </h3>
                        </div>
                        <div className="relative h-32 w-full mt-auto">
                            <div className="absolute inset-0 bg-[#F0EFEC] rounded-tl-[40px] group-hover:bg-[#E2F5F6] transition-colors"></div>
                            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-600 transform -rotate-45 group-hover:rotate-0 transition-transform">→</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
