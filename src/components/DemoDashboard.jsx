import React, { useState, useEffect } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
    Cell
} from 'recharts';
import { Activity, ShieldAlert, TrendingUp, Zap, Server, Database, Terminal, Table as TableIcon, BarChart2 } from 'lucide-react';

// Generate more realistic, technical data
const generateData = () => {
    const data = [];
    for (let i = 0; i < 24; i++) {
        const hour = i.toString().padStart(2, '0') + ':00';
        // Create some "events" in the data
        const isSpike = i > 14 && i < 18;

        data.push({
            time: hour,
            anomalyScore: isSpike ? 85 + Math.random() * 10 : 20 + Math.random() * 15,
            revenueGap: isSpike ? 450000 + Math.random() * 50000 : 120000 + Math.random() * 30000,
            complianceIndex: isSpike ? 92 : 98 - (Math.random() * 2),
            processedTransactions: 15000 + Math.random() * 5000,
            latency: isSpike ? 45 : 12 + Math.random() * 5
        });
    }
    return data;
};

const generateTransactions = () => {
    const sectors = ['Retail', 'Logistics', 'Energy', 'Finance', 'Tech', 'Healthcare'];
    const entities = ['Corp-A', 'Global-X', 'Alpha-Ind', 'Beta-Sys', 'Omega-Grp', 'Prime-Log'];
    const transactions = [];

    for (let i = 0; i < 50; i++) {
        const amount = Math.floor(Math.random() * 1000000) + 50000;
        const isRisk = Math.random() > 0.85;

        transactions.push({
            id: `TXN-${Math.floor(Math.random() * 1000000).toString(16).toUpperCase()}`,
            time: new Date(Date.now() - Math.floor(Math.random() * 86400000)).toISOString().split('T')[1].split('.')[0],
            entity: entities[Math.floor(Math.random() * entities.length)],
            sector: sectors[Math.floor(Math.random() * sectors.length)],
            amount: amount,
            discrepancy: isRisk ? Math.floor(amount * (0.1 + Math.random() * 0.2)) : 0,
            riskScore: isRisk ? Math.floor(80 + Math.random() * 20) : Math.floor(10 + Math.random() * 30),
            status: isRisk ? 'FLAGGED' : 'VERIFIED'
        });
    }
    return transactions.sort((a, b) => b.time.localeCompare(a.time));
};

const initialData = generateData();
const initialTransactions = generateTransactions();

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-obsidian border border-white/20 p-4 font-mono text-xs shadow-2xl">
                <div className="border-b border-white/10 pb-2 mb-2 font-bold text-white flex justify-between">
                    <span>TIMESTAMP</span>
                    <span>{label}</span>
                </div>
                {payload.map((entry, index) => (
                    <div key={index} className="flex justify-between gap-8 mb-1" style={{ color: entry.color }}>
                        <span className="uppercase">{entry.name}</span>
                        <span className="font-bold">
                            {entry.name === 'revenueGap' ? `$${entry.value.toLocaleString()}` :
                                entry.name === 'processedTransactions' ? entry.value.toLocaleString() :
                                    entry.name === 'latency' ? `${entry.value.toFixed(1)}ms` :
                                        entry.value.toFixed(1)}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

const DemoDashboard = () => {
    const [activeTab, setActiveTab] = useState('anomalies');
    const [viewMode, setViewMode] = useState('chart'); // 'chart' or 'table'
    const [data, setData] = useState(initialData);
    const [transactions, setTransactions] = useState(initialTransactions);
    const [logs, setLogs] = useState([
        { time: '10:42:01', level: 'INFO', msg: 'System initialized. Node US-EAST-1 active.' },
        { time: '10:42:05', level: 'INFO', msg: 'Data stream connected. Ingesting tax records...' },
        { time: '10:42:12', level: 'SUCCESS', msg: 'Baseline model loaded. Confidence: 99.8%' },
    ]);

    // Simulate live data updates
    useEffect(() => {
        const interval = setInterval(() => {
            setData(prevData => {
                const newData = [...prevData];
                // Update the last few points to simulate live changes
                const lastIndex = newData.length - 1;
                newData[lastIndex] = {
                    ...newData[lastIndex],
                    anomalyScore: 20 + Math.random() * 15,
                    revenueGap: 120000 + Math.random() * 30000,
                    latency: 12 + Math.random() * 5
                };
                return newData;
            });

            // Add random log messages
            if (Math.random() > 0.7) {
                const newLog = {
                    time: new Date().toLocaleTimeString('en-US', { hour12: false }),
                    level: Math.random() > 0.9 ? 'WARN' : 'INFO',
                    msg: Math.random() > 0.9 ? 'Anomaly detected in Sector 7G' : 'Processing batch #8842...'
                };
                setLogs(prev => [newLog, ...prev].slice(0, 6));
            }

            // Randomly update a transaction
            if (Math.random() > 0.5) {
                setTransactions(prev => {
                    const newTxns = [...prev];
                    const idx = Math.floor(Math.random() * 5); // Update recent ones
                    newTxns[idx] = {
                        ...newTxns[idx],
                        amount: newTxns[idx].amount + Math.floor(Math.random() * 1000 - 500)
                    };
                    return newTxns;
                });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="demo" className="py-20 bg-obsidian relative z-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-light text-white mb-4 tracking-tight">
                        INTELLIGENCE <span className="text-gray-500">IN ACTION</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        Real-time monitoring of corporate revenue streams and compliance risks.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Sidebar Controls - 4 Columns */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Control Panel */}
                        <div className="glass-panel p-0 overflow-hidden">
                            <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
                                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                                    <Activity size={16} /> SYSTEM STATUS
                                </h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-xs text-green-400 font-mono">ONLINE</span>
                                </div>
                            </div>

                            <div className="p-2">
                                <button
                                    onClick={() => setActiveTab('anomalies')}
                                    className={`w-full text-left p-4 mb-2 border transition-all group ${activeTab === 'anomalies' ? 'bg-white/10 border-white text-white' : 'border-transparent text-gray-400 hover:bg-white/5 hover:border-white/20'}`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-mono text-xs tracking-wider">ANOMALY DETECTION</span>
                                        <ShieldAlert size={16} className={activeTab === 'anomalies' ? 'text-red-400' : 'text-gray-600'} />
                                    </div>
                                    <div className="text-2xl font-bold font-display">85.4<span className="text-sm text-gray-500 font-normal">/100</span></div>
                                    <div className="text-xs text-red-400 mt-1 font-mono flex items-center gap-1">
                                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full"></span> HIGH RISK DETECTED
                                    </div>
                                </button>

                                <button
                                    onClick={() => setActiveTab('revenue')}
                                    className={`w-full text-left p-4 mb-2 border transition-all group ${activeTab === 'revenue' ? 'bg-white/10 border-white text-white' : 'border-transparent text-gray-400 hover:bg-white/5 hover:border-white/20'}`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-mono text-xs tracking-wider">REVENUE GAP</span>
                                        <TrendingUp size={16} className={activeTab === 'revenue' ? 'text-blue-400' : 'text-gray-600'} />
                                    </div>
                                    <div className="text-2xl font-bold font-display">$482,109</div>
                                    <div className="text-xs text-blue-400 mt-1 font-mono">ESTIMATED LEAKAGE (24H)</div>
                                </button>

                                <button
                                    onClick={() => setActiveTab('performance')}
                                    className={`w-full text-left p-4 border transition-all group ${activeTab === 'performance' ? 'bg-white/10 border-white text-white' : 'border-transparent text-gray-400 hover:bg-white/5 hover:border-white/20'}`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-mono text-xs tracking-wider">SYSTEM LATENCY</span>
                                        <Zap size={16} className={activeTab === 'performance' ? 'text-yellow-400' : 'text-gray-600'} />
                                    </div>
                                    <div className="text-2xl font-bold font-display">14.2<span className="text-sm text-gray-500 font-normal">ms</span></div>
                                    <div className="text-xs text-yellow-400 mt-1 font-mono">REAL-TIME PROCESSING</div>
                                </button>
                            </div>
                        </div>

                        {/* System Logs */}
                        <div className="glass-panel p-4 font-mono text-xs h-48 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-obsidian to-transparent z-10 pointer-events-none"></div>
                            <div className="flex items-center gap-2 text-gray-500 mb-3 pb-2 border-b border-white/10">
                                <Terminal size={12} /> SYSTEM LOGS
                            </div>
                            <div className="space-y-2">
                                {logs.map((log, i) => (
                                    <div key={i} className="flex gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                                        <span className="text-gray-600">[{log.time}]</span>
                                        <span className={log.level === 'WARN' ? 'text-yellow-500' : log.level === 'SUCCESS' ? 'text-green-500' : 'text-blue-400'}>
                                            {log.level}
                                        </span>
                                        <span className="text-gray-300 truncate">{log.msg}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-obsidian to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Main Chart Area - 8 Columns */}
                    <div className="lg:col-span-8 glass-panel p-6 min-h-[500px] flex flex-col relative">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {viewMode === 'chart' ? (
                                        <>
                                            {activeTab === 'anomalies' && 'ANOMALY CONFIDENCE INDEX'}
                                            {activeTab === 'revenue' && 'REVENUE GAP ANALYSIS'}
                                            {activeTab === 'performance' && 'NODE PERFORMANCE METRICS'}
                                        </>
                                    ) : (
                                        'TRANSACTION LEDGER'
                                    )}
                                </h3>
                                <p className="text-sm text-gray-400 font-mono">
                                    DATA SOURCE: LIVE FEED • REFRESH: 2000ms
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setViewMode('chart')}
                                    className={`px-3 py-1 border text-xs font-mono flex items-center gap-2 transition-colors ${viewMode === 'chart' ? 'bg-white text-black border-white' : 'border-white/20 text-gray-400 hover:bg-white/5'}`}
                                >
                                    <BarChart2 size={12} /> VISUAL
                                </button>
                                <button
                                    onClick={() => setViewMode('table')}
                                    className={`px-3 py-1 border text-xs font-mono flex items-center gap-2 transition-colors ${viewMode === 'table' ? 'bg-white text-black border-white' : 'border-white/20 text-gray-400 hover:bg-white/5'}`}
                                >
                                    <TableIcon size={12} /> TABLE
                                </button>
                            </div>
                        </div>

                        <div className="flex-grow w-full h-[400px] overflow-hidden">
                            {viewMode === 'chart' ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorAnomaly" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorLatency" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#eab308" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                        <XAxis
                                            dataKey="time"
                                            stroke="rgba(255,255,255,0.2)"
                                            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10, fontFamily: 'monospace' }}
                                            tickLine={false}
                                            axisLine={false}
                                            interval={3}
                                        />
                                        <YAxis
                                            stroke="rgba(255,255,255,0.2)"
                                            tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10, fontFamily: 'monospace' }}
                                            tickLine={false}
                                            axisLine={false}
                                        />
                                        <Tooltip content={<CustomTooltip />} />

                                        {activeTab === 'anomalies' && (
                                            <>
                                                <ReferenceLine y={80} stroke="#ef4444" strokeDasharray="3 3" label={{ value: 'CRITICAL THRESHOLD', position: 'insideTopRight', fill: '#ef4444', fontSize: 10 }} />
                                                <Area
                                                    type="monotone"
                                                    dataKey="anomalyScore"
                                                    stroke="#ef4444"
                                                    fill="url(#colorAnomaly)"
                                                    strokeWidth={2}
                                                    name="anomalyScore"
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="complianceIndex"
                                                    stroke="#22c55e"
                                                    strokeWidth={2}
                                                    dot={false}
                                                    name="complianceIndex"
                                                />
                                            </>
                                        )}

                                        {activeTab === 'revenue' && (
                                            <>
                                                <Bar dataKey="revenueGap" fill="#3b82f6" opacity={0.8} radius={[2, 2, 0, 0]} name="revenueGap">
                                                    {data.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.revenueGap > 400000 ? '#ef4444' : '#3b82f6'} />
                                                    ))}
                                                </Bar>
                                                <Line
                                                    type="monotone"
                                                    dataKey="processedTransactions"
                                                    stroke="#fff"
                                                    strokeWidth={1}
                                                    dot={false}
                                                    strokeDasharray="5 5"
                                                    name="processedTransactions"
                                                    yAxisId={1}
                                                />
                                                <YAxis yAxisId={1} orientation="right" hide />
                                            </>
                                        )}

                                        {activeTab === 'performance' && (
                                            <>
                                                <Area
                                                    type="step"
                                                    dataKey="latency"
                                                    stroke="#eab308"
                                                    fill="url(#colorLatency)"
                                                    strokeWidth={2}
                                                    name="latency"
                                                />
                                            </>
                                        )}
                                    </ComposedChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="w-full h-full overflow-auto custom-scrollbar">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/10 text-xs font-mono text-gray-400">
                                                <th className="p-3 sticky top-0 bg-obsidian z-10">TXN ID</th>
                                                <th className="p-3 sticky top-0 bg-obsidian z-10">TIME</th>
                                                <th className="p-3 sticky top-0 bg-obsidian z-10">ENTITY</th>
                                                <th className="p-3 sticky top-0 bg-obsidian z-10">SECTOR</th>
                                                <th className="p-3 sticky top-0 bg-obsidian z-10 text-right">AMOUNT</th>
                                                <th className="p-3 sticky top-0 bg-obsidian z-10 text-right">DISCREPANCY</th>
                                                <th className="p-3 sticky top-0 bg-obsidian z-10 text-center">RISK</th>
                                                <th className="p-3 sticky top-0 bg-obsidian z-10 text-center">STATUS</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm font-mono">
                                            {transactions.map((txn, i) => (
                                                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                    <td className="p-3 text-gray-300">{txn.id}</td>
                                                    <td className="p-3 text-gray-400">{txn.time}</td>
                                                    <td className="p-3 text-white">{txn.entity}</td>
                                                    <td className="p-3 text-gray-400">{txn.sector}</td>
                                                    <td className="p-3 text-right text-white">${txn.amount.toLocaleString()}</td>
                                                    <td className={`p-3 text-right ${txn.discrepancy > 0 ? 'text-red-400' : 'text-gray-500'}`}>
                                                        {txn.discrepancy > 0 ? `+$${txn.discrepancy.toLocaleString()}` : '-'}
                                                    </td>
                                                    <td className="p-3 text-center">
                                                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${txn.riskScore > 80 ? 'bg-red-500/20 text-red-400' :
                                                                txn.riskScore > 50 ? 'bg-yellow-500/20 text-yellow-400' :
                                                                    'bg-green-500/20 text-green-400'
                                                            }`}>
                                                            {txn.riskScore}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 text-center">
                                                        <span className={`text-[10px] ${txn.status === 'FLAGGED' ? 'text-red-400 animate-pulse' : 'text-green-400'}`}>
                                                            {txn.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>

                        {/* Footer Metrics */}
                        <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
                            <div>
                                <div className="text-[10px] text-gray-500 font-mono mb-1 uppercase">Active Entities</div>
                                <div className="text-lg font-bold text-white font-display">14,205</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-500 font-mono mb-1 uppercase">Data Ingested</div>
                                <div className="text-lg font-bold text-white font-display">8.4 TB</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-500 font-mono mb-1 uppercase">Model Version</div>
                                <div className="text-lg font-bold text-white font-display">v4.2.0</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-500 font-mono mb-1 uppercase">Uptime</div>
                                <div className="text-lg font-bold text-green-400 font-display">99.99%</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center max-w-3xl mx-auto">
                    <p className="text-xs text-gray-600 font-mono uppercase tracking-wide leading-relaxed">
                        Disclaimer: This interactive demonstration is a simulation using mock data. It is intended solely for illustrative purposes to visualize the capabilities of the CRAIM platform. No real-world data is processed or displayed in this view.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DemoDashboard;
