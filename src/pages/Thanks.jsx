import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InteractiveGrid from '../components/InteractiveGrid';
import { CheckCircle } from 'lucide-react';

const Thanks = () => {
    return (
        <div className="min-h-screen bg-obsidian text-white">
            <InteractiveGrid />
            <Navbar />

            <main className="relative z-10 pt-32 pb-20 flex items-center justify-center min-h-[80vh]">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="mb-8 flex justify-center">
                        <CheckCircle size={80} className="text-white" strokeWidth={1} />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        THANK YOU
                    </h1>

                    <p className="text-2xl text-gray-300 mb-4">
                        Your submission has been received.
                    </p>

                    <p className="text-lg text-gray-400 mb-12">
                        We appreciate you reaching out to Vonaris. Our team will review your information and get back to you shortly.
                    </p>

                    <Link
                        to="/"
                        className="inline-block bg-white text-black font-semibold px-8 py-3 hover:bg-gray-200 transition-colors"
                    >
                        RETURN TO HOME
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Thanks;
