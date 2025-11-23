import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InteractiveGrid from '../components/InteractiveGrid';
import StatementSection from '../components/StatementSection';
import Features from '../components/Features';
import DemoDashboard from '../components/DemoDashboard';

const Home = () => {
    return (
        <div className="min-h-screen bg-obsidian text-white selection:bg-white/20 font-sans">
            <InteractiveGrid />
            <Navbar />

            <main className="relative z-10">
                <Hero />
                <DemoDashboard />
                <StatementSection />
                <Features />
            </main>

            <footer className="relative z-10 border-t border-white/10 py-12 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xl font-bold tracking-widest text-white">VONARIS</div>
                    <div className="text-gray-500 text-sm">© 2025 VONARIS INC. ALL RIGHTS RESERVED.</div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
