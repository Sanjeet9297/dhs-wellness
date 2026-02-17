import React from 'react';
import Button from '../common/Button';
import doctorImage from '../../assets/doctorimg.png';

const DoctorProfile: React.FC = () => {
    return (
        <section className="py-20 bg-white overflow-visible">
            {/* Overflow visible to allow image to stand out if needed, but here it's contained */}
            <div className="container mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h4 className="text-[#3EBCB3] font-bold uppercase tracking-widest text-xs mb-3">The Doctor</h4>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark leading-tight">
                        Treatment By An Award-Winning Dermatologist
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between relative mt-10">

                    {/* Text Content - Left */}
                    <div className="w-full lg:w-1/3 mb-10 lg:mb-0 relative z-10 space-y-6 text-gray-500 text-sm leading-relaxed">
                        <p>
                            At Dinaaz Hair & Skin Clinic, every patient is treated under the leadership of <strong className="text-dark">Dr. Nazia Iqbal</strong>, a highly experienced Dermatologist, Trichologist, and Cosmetologist with over 10 years of doctor-led clinical practice.
                        </p>
                        <p>
                            Dr. Nazia Iqbal is nationally and internationally recognized for excellence in dermatology and aesthetic medicine, with proven expertise in:
                        </p>
                        <ul className="space-y-2 mt-2">
                            <li className="flex items-center gap-2"> <span className="w-1 h-1 bg-gray-400 rounded-full"></span> Medical skin treatments</li>
                            <li className="flex items-center gap-2"> <span className="w-1 h-1 bg-gray-400 rounded-full"></span> Hair loss diagnosis and restoration</li>
                            <li className="flex items-center gap-2"> <span className="w-1 h-1 bg-gray-400 rounded-full"></span> Ethical aesthetic dermatology</li>
                        </ul>
                    </div>

                    {/* Doctor Image - Center */}
                    <div className="w-full lg:w-1/3 flex justify-center relative z-0 mb-10 lg:mb-0">
                        <img
                            src={doctorImage}
                            alt="Dr. Nazia Iqbal"
                            className="max-h-[450px] w-auto object-contain"
                        />
                    </div>

                    {/* Quote Card - Right */}
                    <div className="w-full lg:w-1/3 relative z-10">
                        <div
                            className="p-8 md:p-10 rounded-2xl shadow-sm border border-white/50 relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #E2F5F6 0%, #FDF7EC 100%)'
                            }}
                        >
                            <p className="text-lg md:text-xl font-serif italic text-dark mb-8 leading-relaxed">
                                Patients <span className="font-bold">trust Dinaaz</span> because <span className="font-bold">medical decisions are always made by a qualified dermatologist</span>, not consultants or sales staff.
                            </p>

                            <button className="px-6 py-3 rounded-full border border-dark text-dark text-sm font-medium hover:bg-dark hover:text-white transition-all flex items-center gap-2 group">
                                Book a Consultation
                                <span className="group-hover:translate-x-1 transition-transform">↗</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DoctorProfile;
