import React from 'react';

const DataCard = ({ title, value, change, trend }) => {
    return (
        <div className="glass-panel p-6 rounded-none relative overflow-hidden group hover:bg-white/10 transition-colors">
            <div className="absolute top-0 right-0 p-2 opacity-50">
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            </div>
            <h3 className="text-gray-400 text-xs font-mono uppercase tracking-widest mb-2">{title}</h3>
            <div className="flex items-end gap-4">
                <span className="text-3xl font-bold text-white">{value}</span>
                <span className={`text-sm font-mono ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {change}
                </span>
            </div>

            {/* Decorative graph lines */}
            <div className="mt-4 h-8 flex items-end gap-1 opacity-50">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="w-full bg-white/20"
                        style={{ height: `${Math.random() * 100}%` }}
                    ></div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
    );
};

export default DataCard;
