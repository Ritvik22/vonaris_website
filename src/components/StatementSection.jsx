import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StatementSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "center 0.5"]
    });

    const text = "Our intelligence platform models the hidden logic of complex systems, empowering institutions and enterprises to make adaptive, data-driven decisions that shape strategy, stability, and scale in real time.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="w-full bg-obsidian py-32 md:py-40 px-6 relative z-10 min-h-[80vh] flex items-center justify-center">
            <div className="max-w-6xl mx-auto">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light text-white text-center leading-relaxed tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-2">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

                        return (
                            <motion.span
                                key={i}
                                style={{ opacity }}
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </p>
            </div>
        </section>
    );
};

export default StatementSection;
