import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Typewriter = ({ text, delay = 0, onComplete, hideCursor = false }) => {
    const [displayText, setDisplayText] = React.useState('');
    const [showCursor, setShowCursor] = React.useState(true);
    const hasCompletedRef = React.useRef(false);

    React.useEffect(() => {
        if (hasCompletedRef.current) return;

        const timeout = setTimeout(() => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    hasCompletedRef.current = true;
                    if (onComplete) onComplete();
                }
            }, 50); // Typing speed

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay, onComplete]);

    React.useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className="inline-block">
            {displayText}
            <span className={`${!hideCursor && showCursor ? 'opacity-100' : 'opacity-0'} text-white ml-1 transition-opacity duration-100`}>|</span>
        </span>
    );
};

const Hero = () => {
    const [firstLineDone, setFirstLineDone] = React.useState(false);

    const handleFirstLineComplete = React.useCallback(() => {
        setFirstLineDone(true);
    }, []);

    return (
        <section className="relative z-10 h-screen flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-12 relative w-full max-w-5xl mx-auto flex flex-col items-center gap-4 min-h-[160px]">
                        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
                            <Typewriter
                                text="TRANSFORM DATA INTO"
                                delay={500}
                                onComplete={handleFirstLineComplete}
                                hideCursor={firstLineDone}
                            />
                        </h1>
                        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            {firstLineDone && (
                                <Typewriter
                                    text="STRATEGIC INTELLIGENCE"
                                    delay={0}
                                />
                            )}
                        </h1>
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
