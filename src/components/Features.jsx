import React from 'react';
import {
    Database,
    ShieldCheck,
    BarChart3,
    AlertTriangle,
    FileSearch,
    Lock,
    Zap,
    Clock
} from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: "Data Fusion",
            description: "Integrate multiple data sources seamlessly. Unify disparate information streams into a comprehensive intelligence framework.",
            icon: <Database className="w-8 h-8" />,
        },
        {
            title: "Anomaly Detection",
            description: "Advanced algorithms identify patterns and discrepancies across complex datasets that would otherwise remain hidden.",
            icon: <AlertTriangle className="w-8 h-8" />,
        },
        {
            title: "Compliance Monitoring",
            description: "Automated regulatory adherence tracking. Ensure your organization meets all compliance requirements in real-time.",
            icon: <ShieldCheck className="w-8 h-8" />,
        },
        {
            title: "Risk Assessment",
            description: "Comprehensive risk analysis and mitigation strategies. Identify vulnerabilities before they become issues.",
            icon: <BarChart3 className="w-8 h-8" />,
        },
        {
            title: "Audit Trail",
            description: "Complete visibility into data lineage and decision-making processes. Full transparency for regulatory review.",
            icon: <FileSearch className="w-8 h-8" />,
        },
        {
            title: "Enterprise Security",
            description: "Bank-grade encryption and access controls. Your sensitive intelligence data remains protected at all times.",
            icon: <Lock className="w-8 h-8" />,
        },
        {
            title: "Real-Time Processing",
            description: "Process and analyze data streams in real-time. Make informed decisions with up-to-the-second intelligence.",
            icon: <Zap className="w-8 h-8" />,
        },
        {
            title: "Workflow Automation",
            description: "Streamline intelligence operations with automated workflows. Reduce manual processes and improve efficiency.",
            icon: <Clock className="w-8 h-8" />,
        },
    ];

    return (
        <section id="platform" className="py-20 bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-light text-white text-center mb-4 tracking-tight">
                    COMPREHENSIVE <span className="text-gray-500">AI-DRIVEN</span> INTELLIGENCE <span className="font-normal">PLATFORM</span>
                </h2>
                <p className="text-xl text-white/70 text-center max-w-3xl mx-auto">
                    Transform raw data into strategic advantage with enterprise-grade analysis and compliance tools
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto border-t border-l border-white/10">
                {features.map((feature, index) => (
                    <div key={index} className="group p-8 border-b border-r border-white/10 hover:bg-white/5 transition-colors relative overflow-hidden">
                        <div className="mb-6 text-white/70 group-hover:text-white transition-colors">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed">
                            {feature.description}
                        </p>

                        {/* Hover effect corner */}
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
