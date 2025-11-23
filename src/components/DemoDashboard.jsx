import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, DollarSign, TrendingUp, Zap } from 'lucide-react';

const data = [
    { name: '00:00', revenue: 4000, savings: 2400, efficiency: 2400 },
    { name: '04:00', revenue: 3000, savings: 1398, efficiency: 2210 },
    { name: '08:00', revenue: 2000, savings: 9800, efficiency: 2290 },
    { name: '12:00', revenue: 2780, savings: 3908, efficiency: 2000 },
    { name: '16:00', revenue: 1890, savings: 4800, efficiency: 2181 },
    { name: '20:00', revenue: 2390, savings: 3800, efficiency: 2500 },
    { name: '24:00', revenue: 3490, savings: 4300, efficiency: 2100 },
];

const DemoDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <section id="demo" className="py-20 bg-obsidian relative z-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
                        INTELLIGENCE <span className="text-gray-500">IN ACTION</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Experience how Vonaris transforms raw data into actionable insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar Controls */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="glass-panel p-6">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Activity size={20} /> LIVE MONITORING
                            </h3>

                            <div className="space-y-4">
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`w-full text-left p-4 border transition-all ${activeTab === 'overview' ? 'bg-white/10 border-white text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-mono text-sm">TOTAL REVENUE</span>
                                        <TrendingUp size={16} className="text-green-400" />
                                    </div>
                                    <div className="text-2xl font-bold">$4,294,102</div>
                                    <div className="text-xs text-green-400 mt-1">+12.5% vs last period</div>
                                </button>

                                <button
                                    onClick={() => setActiveTab('savings')}
                                    className={`w-full text-left p-4 border transition-all ${activeTab === 'savings' ? 'bg-white/10 border-white text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-mono text-sm">OPERATIONAL SAVINGS</span>
                                        <DollarSign size={16} className="text-blue-400" />
                                    </div>
                                    <div className="text-2xl font-bold">$1,850,400</div>
                                    <div className="text-xs text-blue-400 mt-1">Optimized by AI Core</div>
                                </button>

                                <button
                                    onClick={() => setActiveTab('efficiency')}
                                    className={`w-full text-left p-4 border transition-all ${activeTab === 'efficiency' ? 'bg-white/10 border-white text-white' : 'border-white/10 text-gray-400 hover:bg-white/5'}`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-mono text-sm">SYSTEM EFFICIENCY</span>
                                        <Zap size={16} className="text-yellow-400" />
                                    </div>
                                    <div className="text-2xl font-bold">98.9%</div>
                                    <div className="text-xs text-yellow-400 mt-1">All systems nominal</div>
                                </button>
                            </div>
                        </div>

                        <div className="glass-panel p-6">
                            <h3 className="text-sm font-mono text-gray-400 mb-4">ACTIVE NODES</h3>
                            <div className="flex flex-wrap gap-2">
                                {['US-EAST-1', 'EU-WEST-2', 'ASIA-PAC-1', 'SA-EAST-1'].map((node) => (
                                    <div key={node} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                        {node}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Chart Area */}
                    <div className="lg:col-span-2 glass-panel p-6 min-h-[500px] flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 flex gap-2">
                            <div className="px-3 py-1 bg-white/10 text-xs font-mono text-white rounded">LIVE</div>
                            <div className="px-3 py-1 border border-white/20 text-xs font-mono text-gray-400 rounded">24H</div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-8">
                            {activeTab === 'overview' && 'REVENUE ANALYTICS'}
                            {activeTab === 'savings' && 'COST REDUCTION ANALYSIS'}
                            {activeTab === 'efficiency' && 'SYSTEM PERFORMANCE'}
                        </h3>

                        <div className="flex-grow w-full h-full">
                            <ResponsiveContainer width="100%" height={400}>
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#fff" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#fff" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} />
                                    <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0a0a0a', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
                                        itemStyle={{ color: '#fff' }}
                                    />

                                    {activeTab === 'overview' && (
                                        <Area
                                            type="monotone"
                                            dataKey="revenue"
                                            stroke="#fff"
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            fill="url(#colorRevenue)"
                                            animationDuration={1000}
                                        />
                                    )}

                                    {activeTab === 'savings' && (
                                        <Area
                                            type="monotone"
                                            dataKey="savings"
                                            stroke="#3b82f6"
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            fill="url(#colorSavings)"
                                            animationDuration={1000}
                                        />
                                    )}

                                    {activeTab === 'efficiency' && (
                                        <Area
                                            type="step"
                                            dataKey="efficiency"
                                            stroke="#eab308"
                                            strokeWidth={2}
                                            fill="rgba(234, 179, 8, 0.1)"
                                            animationDuration={1000}
                                        />
                                    )}
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                            <div className="text-center">
                                <div className="text-xs text-gray-500 font-mono mb-1">DATA POINTS</div>
                                <div className="text-lg font-bold text-white">1.2M</div>
                            </div>
                            <div className="text-center border-l border-white/10">
                                <div className="text-xs text-gray-500 font-mono mb-1">LATENCY</div>
                                <div className="text-lg font-bold text-white">12ms</div>
                            </div>
                            <div className="text-center border-l border-white/10">
                                <div className="text-xs text-gray-500 font-mono mb-1">PREDICTION</div>
                                <div className="text-lg font-bold text-green-400">99.8%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoDashboard;
