import React from 'react';
import sandeepProfile from '../../assets/sandeep.jpg';
import resultImage from '../../assets/whitecheckshirt.jpg';

const Testimonials: React.FC = () => {
    // activeIndex logic removed as it was unused and static layout is used


    const testimonials = [
        {
            id: 1,
            name: "Sandeep",
            rating: 4.9,
            date: "26/12/2025",
            image: sandeepProfile, // Reusing mostly for mock
            active: false
        },
        {
            id: 2,
            name: "Sandeep II",
            rating: 4.9,
            date: "26/12/2025",
            image: sandeepProfile,
            text: "Comparing to other clinics I don't know but personally I prefered this clinic so I took consultation and it was so good later I took hair transplantation and also gfc I can see good grow",
            active: true
        },
        {
            id: 3,
            name: "Sandeep III",
            rating: 4.9,
            date: "26/12/2025",
            image: sandeepProfile,
            active: false
        }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden relative">
            {/* Background Star/sparkle decorations (faint) could be added here if needed */}

            <div className="container mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-16">
                    <h4 className="text-[#3EBCB3] font-bold uppercase tracking-widest text-xs mb-3">Testimonials</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark leading-tight">
                        What Our Patients Say <br /> About Our Services
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">

                    {/* Column 1: Patient List (Left Sidebar) */}
                    <div className="w-full lg:w-1/4 relative">
                        {/* Connecting Curved Line (SVG) - absolute positioned behind avatars */}
                        <div className="absolute left-[24px] top-0 bottom-0 w-px hidden md:block">
                            <svg height="100%" width="100" className="overflow-visible">
                                <path d="M 0 40 Q -30 150 0 250" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                            </svg>
                        </div>

                        <div className="space-y-10 relative z-10 pl-2">
                            {testimonials.map((item, idx) => (
                                <div key={idx} className={`flex items-center gap-4 transition-all duration-300 ${item.active ? 'opacity-100 scale-105 ml-4' : 'opacity-40 hover:opacity-100'}`}>
                                    <div className={`rounded-full overflow-hidden border-2 border-white shadow-md ${item.active ? 'w-20 h-20' : 'w-12 h-12'}`}>
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className={`font-bold text-dark ${item.active ? 'text-xl' : 'text-sm'}`}>{item.name}</h4>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span className="flex items-center text-yellow-500 font-bold">{item.rating} ★</span>
                                            <span className="text-gray-300">|</span>
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quote Text (Center) */}
                    <div className="w-full lg:w-2/5 pt-4">
                        {/* Top Quote Icon */}
                        <div className="text-[#139BAD] text-6xl font-serif leading-none mb-4">“</div>

                        <p className="text-lg text-dark font-medium leading-relaxed mb-6">
                            Comparing to other clinics I don't know but personally I prefered this clinic so I took consultation and it was so good later I took hair transplantation and also gfc I can see good grow
                        </p>

                        {/* Bottom Quote Icon */}
                        <div className="text-[#139BAD] text-6xl font-serif leading-none text-right mb-8">”</div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-full border border-[#3EBCB3] text-[#3EBCB3] flex items-center justify-center hover:bg-[#3EBCB3] hover:text-white transition-colors">
                                ←
                            </button>
                            <button className="w-12 h-12 rounded-full border border-[#3EBCB3] text-[#3EBCB3] flex items-center justify-center hover:bg-[#3EBCB3] hover:text-white transition-colors">
                                →
                            </button>
                        </div>
                    </div>

                    {/* Column 3: Before/After Image (Right) */}
                    <div className="w-full lg:w-1/3">
                        <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                            <img
                                src={resultImage}
                                alt="Patient Result Before After"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
