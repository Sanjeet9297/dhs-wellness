import React from 'react';
import headComb from '../../assets/headcomb.png';
import head from '../../assets/head.png';
import headAllItems from '../../assets/headallitems.png';
// We will rely on WhyChooseUs and KeyDifferences being merged or KeyDifferences having no bg to show the parent bg
// For "Same to Same", the background whymostbg.jpg spans across BOTH the "Why Most..." section AND the "What Sets Us Apart" cards section.
// So I will update this component to ONLY be the top part, and let a Wrapper component handle the background, 
// OR simpler: I will extend the background here and include the KeyDifferences content INSIDE this component to ensure the background flows seamlessly.

import groupImage from '../../assets/threedoctor.png'; // Updated by user
import doctorsImage3 from '../../assets/doctors3rd.png';
import doctorsImage4 from '../../assets/doctors4th.png';
import doctorsImage2 from '../../assets/doctors2nd.png';
import bgImage from '../../assets/whymostbg.jpg';
import Button from '../common/Button';

const WhyChooseUs: React.FC = () => {
    const differences = [
        {
            title: "Dermatologist Diagnosis First",
            desc: "Every concern is medically evaluated before treatment begins.",
            img: groupImage
        },
        {
            title: "Customized Treatment Plans",
            desc: "No fixed packages. No unnecessary procedures.",
            img: doctorsImage3
        },
        {
            title: "Long-Term Skin & Hair Health",
            desc: "We focus on sustainable results, not short-term cosmetic fixes.",
            img: doctorsImage4
        },
        {
            title: "Ethical Medical Advice",
            desc: "Sometimes, the right decision is not to treat, and we're honest about that.",
            img: doctorsImage2
        }
    ];

    return (
        <section className="relative w-full">
            {/* 
                Shared Background for both sections 
                The screenshot shows the background continuing down behind the cards.
            */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})`, height: '100%' }} // height 100% of the section container
            ></div>

            {/* Part 1: Why Most Treatments Fail */}
            <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20 pb-10">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px] mb-20">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/3 text-left self-start pt-10">
                        <h4 className="text-[#3EBCB3] font-bold uppercase tracking-widest text-xs mb-2">The Real Problem</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark leading-tight mb-8">
                            Why Most Hair & Skin <br /> Treatments Fail
                        </h2>

                        <div className="space-y-4 text-gray-500 text-sm">
                            <p>Many patients come to us after trying:</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2"> <span className="w-1 h-1 bg-gray-400 rounded-full"></span> Salon treatments with no diagnosis</li>
                                <li className="flex items-center gap-2"> <span className="w-1 h-1 bg-gray-400 rounded-full"></span> One-size-fits-all packages</li>
                                <li className="flex items-center gap-2"> <span className="w-1 h-1 bg-gray-400 rounded-full"></span> Expensive procedures without understanding the root cause</li>
                            </ul>
                            <p className="mt-6 text-xs text-gray-400 leading-relaxed max-w-xs border-l-2 border-[#3EBCB3]/30 pl-3 py-1">
                                Skin and hair problems often look similar but require very different medical treatments. Without proper diagnosis, results are unpredictable, and sometimes harmful.
                            </p>
                        </div>

                        <div className="mt-20 max-w-xs relative bg-white/40 p-4 rounded-xl backdrop-blur-sm border border-white/50 shadow-sm hidden md:block">
                            <h3 className="text-xl font-bold text-gray-700 leading-tight">
                                Skin & Hair <span className="text-[#D4A056] italic">Treatment Is</span> <br />
                                <span className="text-[#D4A056] italic">Medical</span>, Not Cosmetic
                            </h3>
                            <div className="w-12 h-1 bg-[#3EBCB3] mt-2 rounded"></div>
                        </div>
                    </div>

                    {/* Central Diagram */}
                    {/* Central Diagram */}
                    <div className="w-full lg:w-2/3 h-[750px] lg:h-[600px] relative flex items-center justify-center">
                        <div className="relative z-20 bg-white/90 backdrop-blur-md w-60 h-60 md:w-72 md:h-72 rounded-full flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(255,255,255,0.6)] border border-white/50">
                            <p className="text-gray-500 text-xs md:text-base font-medium">At <span className="text-[#D4A056] font-bold">Dinaaz</span>, we start with</p>
                            <h3 className="text-lg md:text-2xl font-bold text-[#3EBCB3] leading-tight my-2">
                                medical understanding,
                            </h3>
                            <p className="text-[#D4A056] font-serif italic text-lg md:text-xl font-bold">not assumptions.</p>
                            <div className="w-12 h-1 bg-[#3EBCB3] mt-3 mx-auto rounded"></div>
                        </div>

                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 50% 50% L 75% 20%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="opacity-40" />
                            <path d="M 50% 50% L 75% 80%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="opacity-40" />
                            <path d="M 50% 50% L 25% 75%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="opacity-40" />
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#3EBCB3" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#3EBCB3" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#3EBCB3" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:top-[10%] lg:right-[10%] flex flex-col items-center w-32 md:w-40 text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
                                <img src={head} alt="Salon treatment" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">Salon treatments with no diagnosis</p>
                            <div className="absolute bottom-8 right-0 md:right-2 bg-white rounded-full p-1 shadow text-gray-400 text-xs">🔍</div>
                        </div>

                        <div className="absolute bottom-[5%] right-0 md:right-[15%] lg:bottom-[20%] lg:right-[15%] flex flex-col items-center w-32 md:w-40 text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
                                <img src={headAllItems} alt="Generic packages" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">One-size-fits-all packages</p>
                            <div className="absolute bottom-8 right-0 md:right-2 bg-white rounded-full p-1 shadow text-gray-400 text-xs">🔍</div>
                        </div>

                        <div className="absolute bottom-[5%] left-0 md:left-[15%] lg:bottom-[20%] lg:left-[15%] flex flex-col items-center w-32 md:w-40 text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3">
                                <img src={headComb} alt="Root cause" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-xs text-gray-500 font-medium">Expensive procedures without understanding the root cause</p>
                            <div className="absolute bottom-8 right-0 md:right-2 bg-white rounded-full p-1 shadow text-gray-400 text-xs">🔍</div>
                        </div>
                    </div>
                </div>

                {/* Part 2: Key Differences (Still inside the shared background container) */}
                <div className="relative z-10 pb-20">
                    <div className="text-right mb-12">
                        <h4 className="text-[#3EBCB3] font-bold uppercase tracking-widest text-xs mb-1">Key Differences</h4>
                        <h2 className="text-4xl font-serif font-bold text-dark">What Sets Us Apart</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {differences.map((item, idx) => (
                            <div key={idx} className="flex flex-col group h-full bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-5 shadow-sm border border-gray-100 relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-dark leading-tight mb-3 min-h-[3rem]">{item.title}</h3>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Book A Consultation Button - Centered Below Cards */}
                    <div className="mt-16 text-center">
                        <Button variant="secondary" className="px-10 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-[#D4A056]">
                            Book A Consultation ↗
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
