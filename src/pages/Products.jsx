import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import InteractiveGrid from '../components/InteractiveGrid';
import { Target, Database, TrendingUp, Network, BarChart3, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Products = () => {
    const coreCapabilities = [
        {
            icon: <Target size={32} />,
            title: "Revenue Under-Reporting Detection",
            description: "Uses statistical baselines and ML classifiers to identify corporations whose declared revenues deviate from expected economic patterns or sector norms."
        },
        {
            icon: <Database size={32} />,
            title: "Multi-Source Data Fusion",
            description: "Ingests and reconciles heterogeneous data, including administrative tax records, sectoral indicators, production data, and external public datasets, enabling a unified corporate risk profile."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Anomaly & Behavior Pattern Analysis",
            description: "Tracks corporate performance over time, detecting unusual fluctuations, operational inconsistencies, and reporting behaviors that correlate with compliance risks."
        },
        {
            icon: <Network size={32} />,
            title: "Entity & Relationship Mapping",
            description: "Analyzes ownership structures, related-party transactions, and corporate linkage networks to identify hidden relationships that may facilitate tax avoidance."
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Sector-Specific Economic Modeling",
            description: "Incorporates industry-level production, consumption, and pricing data to estimate top-down revenue expectations and highlight discrepancies in filings."
        }
    ];

    const valuePoints = [
        {
            icon: <Shield size={24} />,
            title: "Improved Revenue Assurance",
            description: "Identifies high-priority cases with precision, reducing manual audit workload"
        },
        {
            icon: <CheckCircle size={24} />,
            title: "Evidence-Based Enforcement",
            description: "Produces interpretable flags and data-backed risk indicators"
        },
        {
            icon: <Zap size={24} />,
            title: "Scalable Across Sectors",
            description: "Adaptable to oil and gas, manufacturing, telecommunications, logistics, retail, and more"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-obsidian text-white">
            <InteractiveGrid />
            <Navbar />

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight text-white mb-6">
                                CRAIM
                            </h1>
                            <p className="text-2xl md:text-3xl text-gray-400 font-light mb-8">
                                Corporate Revenue AI Model
                            </p>
                            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
                                An AI-driven corporate revenue intelligence system designed to help government institutions identify under-reported tax liabilities, detect systemic leakage patterns, and generate high-confidence compliance insights in real time.
                            </p>

                            <Link to="/demo" className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 hover:bg-gray-200 transition-colors">
                                REQUEST A DEMO <ArrowRight size={20} />
                            </Link>
                        </motion.div>

                        {/* Technical Overview */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="glass-panel p-8 md:p-12 mb-20"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">Architecture</h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Built using a multi-layered architecture of machine learning, sector-specific economic modeling, and behavioral anomaly detection, CRAIM unifies fragmented data sources into a single analytical pipeline capable of uncovering revenue gaps across industries and corporate structures.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                CRAIM is optimized for the complexity of emerging-market tax environments, where data is often incomplete, unstandardized, or siloed. By integrating historical filings, sectoral benchmarks, consumption indicators, and entity relationships, the model produces structured, interpretable outputs that support evidence-based enforcement and decision-making.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Core Capabilities */}
                <section className="py-20 px-6 bg-black/30">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center"
                        >
                            CORE CAPABILITIES
                        </motion.h2>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {coreCapabilities.map((capability, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="glass-panel p-8 hover:bg-white/10 transition-all group"
                                >
                                    <div className="mb-6 text-white group-hover:scale-110 transition-transform">
                                        {capability.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">
                                        {capability.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {capability.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Value for Government Agencies */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center"
                        >
                            VALUE FOR GOVERNMENT AGENCIES
                        </motion.h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            {valuePoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="glass-panel p-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="text-white mt-1">
                                            {point.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                {point.title}
                                            </h3>
                                            <p className="text-gray-400">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            <div className="glass-panel p-6">
                                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <CheckCircle size={20} className="text-green-400" />
                                    Designed for Emerging Markets
                                </h3>
                                <p className="text-gray-400">
                                    Resilient to imperfect, noisy, or incomplete data environments
                                </p>
                            </div>
                            <div className="glass-panel p-6">
                                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <CheckCircle size={20} className="text-green-400" />
                                    Supports Modernization
                                </h3>
                                <p className="text-gray-400">
                                    Strengthens digital transformation efforts within revenue authorities and regulatory bodies
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Position in Ecosystem */}
                <section className="py-20 px-6 bg-black/30">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-panel p-8 md:p-12"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Position in the Vonaris Ecosystem
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                CRAIM serves as the analytical core of the Vonaris platform, enabling future integrations such as automated case pipelines, enterprise dashboards, API-based data ingestion, and sectoral forecasting modules. As additional data sources and partnerships are incorporated, CRAIM's predictive accuracy and explanatory depth continue to improve.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Products;
