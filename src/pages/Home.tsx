import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Hero from '../components/sections/Hero';
import DoctorProfile from '../components/sections/DoctorProfile';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Services from '../components/sections/Services';
import Testimonials from '../components/sections/Testimonials';
import Results from '../components/sections/Results';
import Process from '../components/sections/Process';
import About from '../components/sections/About';
import ConsultForm from '../components/sections/ConsultForm';
import BottomBanner from '../components/sections/BottomBanner';

const Home: React.FC = () => {
    return (
        <div className="font-sans text-dark min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Hero />
                <WhyChooseUs />
                {/* KeyDifferences is now part of WhyChooseUs for background continuity */}
                <DoctorProfile />
                <Services />
                <Testimonials />
                <Results />
                <Process />
                <About />
                <ConsultForm />
                <BottomBanner />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
