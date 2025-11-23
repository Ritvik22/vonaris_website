import React from 'react';
import Navbar from '../components/Navbar';
import InteractiveGrid from '../components/InteractiveGrid';

const Mission = () => {
    return (
        <div className="min-h-screen bg-obsidian text-white">
            <InteractiveGrid />
            <Navbar />

            <main className="relative z-10 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        OUR MISSION
                    </h1>
                    <div className="max-w-4xl">
                        <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                            To empower organizations with the intelligence tools they need to make data-driven decisions in real time.
                        </p>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            We believe in transparency, innovation, and the power of data to transform the way institutions operate.
                            Our platform models the hidden logic of complex systems, enabling adaptive decision-making that shapes
                            strategy, stability, and scale.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Mission;
