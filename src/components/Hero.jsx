import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative z-10 h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-6 relative w-full max-w-5xl mx-auto">
                        <svg className="w-full h-auto" viewBox="0 0 1000 180">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="white" />
                                    <stop offset="100%" stopColor="#6b7280" />
                                </linearGradient>
                            </defs>
                            <text x="50%" y="45%" textAnchor="middle" className="text-5xl md:text-7xl font-display font-bold tracking-tight fill-transparent stroke-white stroke-1 animate-text-stroke">
                                TRANSFORM DATA INTO
                            </text>
                            <text x="50%" y="90%" textAnchor="middle" className="text-5xl md:text-7xl font-display font-bold tracking-tight fill-transparent stroke-[url(#gradient)] stroke-1 animate-text-stroke-delay">
                                STRATEGIC INTELLIGENCE
                            </text>
                        </svg>
                    </div>
                    <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                        Advanced intelligence platform for government agencies and enterprises.
                        Comprehensive analysis, anomaly detection, and automated compliance monitoring.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/demo" className="group relative px-8 py-3 bg-white text-black font-semibold rounded-none overflow-hidden transition-all hover:bg-gray-200 inline-flex items-center">
                            <span className="relative z-10 flex items-center gap-2">
                                REQUEST A DEMO <ArrowRight size={18} />
                            </span>
                        </Link>
                        <Link to="/products" className="px-8 py-3 border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors inline-flex items-center">
                            LEARN MORE
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
