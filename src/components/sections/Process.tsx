import React from 'react';
import whatToExpectImage from '../../assets/whattoexpect.jpg';
import Button from '../common/Button';

const Process: React.FC = () => {
    return (
        <section className="bg-white overflow-hidden relative pb-16 pt-10">
            {/* Added top padding pt-10 to create gap */}

            <div className="container mx-auto px-4 md:px-8">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">

                    {/* Left: Image with Decorative Circle */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end pr-10">
                        {/* Large Light Blue Circle Behind */}
                        <div className="absolute top-[-50px] left-[-80px] w-96 h-96 bg-[#E0F4F5] rounded-full z-0 opacity-60"></div>

                        {/* Image */}
                        <div className="relative z-10 w-full max-w-md rounded-lg overflow-hidden">
                            <img
                                src={whatToExpectImage}
                                alt="Process"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2 pl-4">
                        <h4 className="text-[#3EBCB3] font-bold uppercase tracking-widest text-xs mb-2">Our Process</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark leading-tight mb-12">
                            What To Expect At <br /> Dinaaz
                        </h2>

                        <div className="space-y-8 relative">
                            {/* Connecting Line */}
                            <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gray-100 z-0"></div>

                            {/* Step 1 */}
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="w-14 h-14 rounded-full border-2 border-black bg-white flex items-center justify-center flex-shrink-0 text-xl font-bold">01</div>
                                <div>
                                    <h3 className="text-xl font-bold text-dark mb-1">Medical Consultation</h3>
                                    <p className="text-gray-500 text-sm">A detailed evaluation by a dermatologist.</p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="w-14 h-14 rounded-full border-2 border-black bg-white flex items-center justify-center flex-shrink-0 text-xl font-bold">02</div>
                                <div>
                                    <h3 className="text-xl font-bold text-dark mb-1">Accurate Diagnosis</h3>
                                    <p className="text-gray-500 text-sm">Understanding the root cause of your concern.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="w-14 h-14 rounded-full border-2 border-black bg-white flex items-center justify-center flex-shrink-0 text-xl font-bold">03</div>
                                <div>
                                    <h3 className="text-xl font-bold text-dark mb-1">Personalized Treatment Plan</h3>
                                    <p className="text-gray-500 text-sm">Only treatments that are medically necessary.</p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="w-14 h-14 rounded-full border-2 border-black bg-white flex items-center justify-center flex-shrink-0 text-xl font-bold">04</div>
                                <div>
                                    <h3 className="text-xl font-bold text-dark mb-1">Ongoing Care & Follow-Ups</h3>
                                    <p className="text-gray-500 text-sm">Focused on long-term skin and hair health.</p>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-12">
                            <Button variant="secondary" className="px-8 py-3 rounded-full text-white font-bold bg-[#D4A056] shadow-md hover:shadow-lg">
                                Book A Consultation ↗
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Process;
