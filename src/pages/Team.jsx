import React from 'react';
import Navbar from '../components/Navbar';
import InteractiveGrid from '../components/InteractiveGrid';

const TeamMember = ({ name, title, description }) => {
    return (
        <div className="glass-panel p-8 hover:bg-white/10 transition-all">
            <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
            <p className="text-xl text-gray-400 mb-4 font-mono">{title}</p>
            <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
    );
};

const Team = () => {
    const teamMembers = [
        {
            name: "Abdulahi Amadu",
            title: "CEO",
            description: "Abdulahi leads Vonaris with a vision to transform how organizations leverage intelligence platforms. With extensive experience in government technology and enterprise solutions, he drives our mission to empower institutions with adaptive, data-driven decision-making capabilities."
        },
        {
            name: "Ritvik Shah",
            title: "CTO",
            description: "Ritvik oversees all technical architecture and engineering at Vonaris. He brings deep expertise in building scalable intelligence systems and leads our team in developing cutting-edge solutions for anomaly detection, compliance monitoring, and real-time analysis."
        },
        {
            name: "Jinseop Song",
            title: "HEAD OF AI/ML",
            description: "Jinseop heads our AI and Machine Learning division, pioneering advanced algorithms for pattern recognition and predictive analytics. His work enables our platform to model the hidden logic of complex systems and deliver unprecedented intelligence insights."
        }
    ];

    return (
        <div className="min-h-screen bg-obsidian text-white">
            <InteractiveGrid />
            <Navbar />

            <main className="relative z-10 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        OUR TEAM
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mb-16">
                        Meet the leaders driving innovation at Vonaris.
                    </p>

                    <div className="space-y-8">
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Team;
