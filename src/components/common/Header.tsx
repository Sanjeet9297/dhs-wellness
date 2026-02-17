import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
    return (
        <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-secondary rotate-45 mr-4 flex items-center justify-center">
                        <div className="w-4 h-4 bg-secondary rotate-45"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-serif text-dark font-bold tracking-widest uppercase leading-none">
                            Dinaaz
                        </span>
                        <span className="text-xs md:text-sm font-sans text-dark tracking-[0.2em] font-light uppercase">
                            Hair & Skin
                        </span>
                    </div>
                </div>

                {/* CTA Button */}
                <div>
                    <Button variant="secondary" size="md" className="rounded-full px-6 py-2 md:py-3 font-semibold shadow-none hover:shadow-md text-sm md:text-base text-white bg-[#D4A056]">
                        Book A Consultation ↗
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
