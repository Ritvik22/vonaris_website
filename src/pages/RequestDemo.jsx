import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InteractiveGrid from '../components/InteractiveGrid';

const RequestDemo = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append("access_key", "6407afe8-3b30-440a-a6b1-582eb9601fb0");
        formData.append("subject", "New Demo Request for Vonaris CRAIM");
        formData.append("from_name", "Vonaris Website");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
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

    return (
        <div className="min-h-screen bg-obsidian text-white">
            <InteractiveGrid />
            <Navbar />

            <main className="relative z-10 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
                        REQUEST A DEMO
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mb-12">
                        See how Vonaris CRAIM can transform your organization's revenue intelligence.
                    </p>

                    <div className="max-w-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">

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
                                <label className="block text-sm font-mono text-gray-400 mb-2">WORK EMAIL *</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">COMPANY NAME *</label>
                                <input
                                    type="text"
                                    name="company"
                                    required
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                                    placeholder="Company Inc."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">JOB TITLE</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                                    placeholder="Director of Operations"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">TELL US ABOUT YOUR COMPANY & NEEDS *</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    required
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                                    placeholder="Describe your organization and why you think you need Vonaris CRAIM..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-semibold py-3 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'SENDING REQUEST...' : 'REQUEST DEMO'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RequestDemo;
