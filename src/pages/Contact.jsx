import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InteractiveGrid from '../components/InteractiveGrid';

const Contact = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append("access_key", "6407afe8-3b30-440a-a6b1-582eb9601fb0");

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
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        CONTACT US
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mb-12">
                        Get in touch with our team to learn more about Vonaris.
                    </p>

                    <div className="max-w-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="subject" value="New Contact Form Submission from Vonaris" />
                            <input type="hidden" name="from_name" value="Vonaris Website" />

                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">MESSAGE</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-white focus:outline-none"
                                    placeholder="Your message"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-semibold py-3 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;
