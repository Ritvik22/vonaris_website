import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InteractiveGrid from '../components/InteractiveGrid';
import { X } from 'lucide-react';

const ApplicationModal = ({ isOpen, onClose, jobTitle }) => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append("access_key", "6407afe8-3b30-440a-a6b1-582eb9601fb0");
        formData.append("subject", `Job Application: ${jobTitle}`);
        formData.append("from_name", "Vonaris Careers");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                onClose();
                navigate('/thanks');
            } else {
                alert('Something went wrong. Please try again.');
                setIsSubmitting(false);
            }
        } catch (error) {
            alert('Something went wrong. Please try again.');
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

            {/* Modal */}
            <div className="relative bg-obsidian border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-obsidian border-b border-white/10 p-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">Apply for {jobTitle}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Hidden field for job title */}
                    <input type="hidden" name="position" value={jobTitle} />

                    {/* Personal Information */}
                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">FULL NAME *</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">PREFERRED NAME</label>
                        <input
                            type="text"
                            name="preferred_name"
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                            placeholder="What you'd like to be called"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">EMAIL *</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">PHONE NUMBER</label>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                            placeholder="+1 (555) 123-4567"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">LOCATION *</label>
                        <input
                            type="text"
                            name="location"
                            required
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                            placeholder="City, State/Country"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">LINKEDIN PROFILE URL</label>
                        <input
                            type="url"
                            name="linkedin"
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                            placeholder="https://linkedin.com/in/yourprofile"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">GITHUB PROFILE URL *</label>
                        <input
                            type="url"
                            name="github"
                            required
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                            placeholder="https://github.com/yourusername"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">PORTFOLIO URL</label>
                        <input
                            type="url"
                            name="portfolio"
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                            placeholder="https://yourportfolio.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">WHY ARE YOU INTERESTED IN THIS ROLE? *</label>
                        <textarea
                            required
                            name="interest"
                            rows="4"
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                            placeholder="Tell us what excites you about this opportunity..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-gray-400 mb-2">YEARS OF RELEVANT EXPERIENCE *</label>
                        <input
                            type="number"
                            name="experience"
                            required
                            min="0"
                            className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                            placeholder="5"
                        />
                    </div>

                    <div className="bg-white/5 border border-white/10 p-4">
                        <p className="text-sm text-gray-400">
                            <span className="font-semibold text-white">Please note:</span> After we review your application, we will request your resume/CV via email if you move forward in the process.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 flex gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-white/5 border border-white/20 text-white font-semibold py-3 hover:bg-white/10 transition-colors"
                        >
                            CANCEL
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-white text-black font-semibold py-3 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
                        </button>
                    </div>
                </form>            </div>
        </div>
    );
};

const Careers = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState('');

    const handleApply = (jobTitle) => {
        setSelectedJob(jobTitle);
        setModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-obsidian text-white">
            <InteractiveGrid />
            <Navbar />

            <main className="relative z-10 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
                        CAREERS
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mb-12">
                        Join our team of innovators building the future of intelligence platforms.
                    </p>

                    <div className="space-y-6">
                        <div className="glass-panel p-8 transition-all">
                            <h3 className="text-2xl font-bold text-white mb-2">Quantitative Research Scientist (Decision Intelligence)</h3>
                            <p className="text-gray-400 mb-4">Full-time</p>
                            <p className="text-gray-300 mb-6">
                                Develops statistical and machine learning models that power our real-time decision engine, turning complex data streams into clear, actionable insights for our customers.
                            </p>
                            <button
                                onClick={() => handleApply('Quantitative Research Scientist (Decision Intelligence)')}
                                className="bg-white text-black font-semibold px-6 py-2 hover:bg-gray-200 transition-colors"
                            >
                                APPLY NOW
                            </button>
                        </div>

                        <div className="glass-panel p-8 transition-all">
                            <h3 className="text-2xl font-bold text-white mb-2">Data Platform Engineer</h3>
                            <p className="text-gray-400 mb-4">Full-time</p>
                            <p className="text-gray-300 mb-6">
                                Designs and builds the low-latency data infrastructure that ingests, processes, and serves high-volume data in real time, enabling organizations to make instant, data-driven decisions.
                            </p>
                            <button
                                onClick={() => handleApply('Data Platform Engineer')}
                                className="bg-white text-black font-semibold px-6 py-2 hover:bg-gray-200 transition-colors"
                            >
                                APPLY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <ApplicationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                jobTitle={selectedJob}
            />
        </div>
    );
};

export default Careers;
