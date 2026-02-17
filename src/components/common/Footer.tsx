import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#FAF8F5] text-dark pt-16 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 pb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        {/* Logo */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            {/* Gold Diamond Icon Placeholder - Replaced with Font/SVG if needed */}
                            <div className="text-[#D4A056] text-5xl mb-2">
                                {/* Simple CSS diamond or SVG logo */}
                                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50 0L100 50L50 100L0 50L50 0Z" stroke="#D4A056" strokeWidth="4" fill="none" />
                                    <path d="M50 20L80 50L50 80L20 50L50 20Z" stroke="#D4A056" strokeWidth="4" fill="none" />
                                    {/* This is a placeholder for the specific logo in the image */}
                                </svg>
                            </div>

                            <h2 className="text-2xl font-serif text-dark font-medium tracking-wide">
                                DINAAZ HAIR & SKIN
                            </h2>
                            <p className="text-[10px] font-bold text-dark tracking-widest uppercase mt-1">
                                DERMATOLOGY & COSMETOLOGY CLINIC
                            </p>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed text-center md:text-left">
                            Whether you're looking for hair restoration or rejuvenating skin treatments, we are dedicated to helping you achieve a youthful and confident look.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="pt-4">
                        <h4 className="text-base font-bold mb-6 text-dark font-sans">Quick Links</h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Skin Treatments</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Results</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div className="pt-4">
                        <h4 className="text-base font-bold mb-6 text-dark font-sans">Useful Links</h4>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Hair Fixing</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Hair Transplant</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Hair PRP Plus</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Dinaaz Regrow</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Dinaaz ST Plus</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Dinaaz Cover</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">QR 678 Hair Therapy</a></li>
                            <li><a href="#" className="hover:text-[#D4A056] transition-colors">Stem Cell Hair Therapy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="pt-4">
                        <h4 className="text-base font-bold mb-6 text-dark font-sans">Contact</h4>
                        <div className="space-y-4 text-gray-500 text-sm">
                            <p>
                                7338422548, 9535399710
                            </p>
                            <p className="leading-relaxed">
                                Dinaaz Hair & Skin #1, Sai LCM Tower, 2nd Floor, 9th Cross Rd, Nagarbhavi 1st Stage, Phase 3, Chandra Layout, Bengaluru, Karnataka 560040
                            </p>
                            <p>
                                oksanjeetkr124@gmail.com
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-3 pt-2">
                                <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs hover:bg-[#D4A056] transition-colors">
                                    f
                                </a>
                                <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs hover:bg-[#D4A056] transition-colors">
                                    in
                                </a>
                                <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs hover:bg-[#D4A056] transition-colors">
                                    yt
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-dark font-medium uppercase tracking-wide">
                    <div className="flex gap-8 mb-4 md:mb-0">
                        <a href="#" className="hover:text-[#D4A056]">PRIVACY POLICY</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="hover:text-[#D4A056]">TERMS AND CONDITIONS</a>
                    </div>
                    <p className="text-gray-600">©Copyright 2026 Dinaaz Hair and Skin. All rights reserved.</p>
                </div>

            </div>

            {/* Design Credit Bar */}
            <div className="bg-[#D4A056] py-3 text-center text-white text-[10px] uppercase font-bold tracking-widest">
                DESIGN AND DEVELOPED BY SANJEET KUMAR
            </div>

        </footer>
    );
};

export default Footer;
