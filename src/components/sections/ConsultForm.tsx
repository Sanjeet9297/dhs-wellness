import React from 'react';
import headSurgeryImg from '../../assets/headsurgery.jpg';

const ConsultForm: React.FC = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h4 className="text-[#3EBCB3] font-bold uppercase tracking-widest text-xs mb-3">Consult Us</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark leading-tight mb-4">
                        Not Sure What <br /> Treatment You Need?
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        Hair and skin concerns can be confusing. A proper diagnosis can save time, money, and prevent unnecessary procedures.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative">

                    {/* Left Side: Circular Image */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-start relative">
                        {/* Outer glow/circle */}
                        <div className="w-64 h-64 md:w-80 md:h-80 bg-[#F0F9FA] rounded-full flex items-center justify-center relative">
                            {/* Inner Image Circle */}
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                                <img
                                    src={headSurgeryImg}
                                    alt="Consultation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Teal/Green inner circle decoration */}
                            <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full border border-teal-100/50"></div>
                        </div>
                    </div>

                    {/* Center: Form */}
                    <div className="w-full lg:w-1/3 max-w-md">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-dark mb-1">Full Name</label>
                                <input type="text" placeholder="Enter your full name" className="w-full bg-gray-50 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#D4A056] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-dark mb-1">Phone Number</label>
                                <input type="tel" placeholder="Enter your phone number" className="w-full bg-gray-50 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#D4A056] outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-dark mb-1">Email ID</label>
                                <input type="email" placeholder="Enter your email ID" className="w-full bg-gray-50 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#D4A056] outline-none" />
                            </div>

                            <div className="pt-4 text-center">
                                <button type="submit" className="px-8 py-3 rounded-full bg-[#D4A056] text-white font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto">
                                    Book A Consultation ↗
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Text Badge */}
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-end relative">
                        <div className="w-64 h-64 md:w-72 md:h-72 bg-gradient-to-br from-[#EBF9FA] to-[#F5FBFB] rounded-full flex flex-col items-center justify-center text-center p-8 relative shadow-sm">
                            {/* Inner content */}
                            <h3 className="text-xl md:text-2xl font-bold text-gray-600 leading-tight">
                                No Packages.<br />
                                No Pressure.
                            </h3>
                            <h3 className="text-xl md:text-2xl font-bold text-[#D4A056] mt-2 italic relative">
                                Only Medical Advice.
                                {/* Underline decoration */}
                                <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#3EBCB3]"></span>
                            </h3>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ConsultForm;
