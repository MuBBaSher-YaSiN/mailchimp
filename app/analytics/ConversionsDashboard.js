"use client";

import { useState } from 'react';

export default function ConversionsDashboard() {
    const [activeTab, setActiveTab] = useState('funnel');

    return (
        <div className="bg-[#f6f7f8] p-4 font-sans">
            <div className="max-w-5xl mx-auto bg-white border border-[#e6e6e6] rounded-lg">
                <div className="p-6">
                    {/* Header */}
                    <h2 className="text-[22px] font-medium text-[#241c15]">Conversions</h2>
                    <div className="text-[13px] text-[#6b6b6b] mt-1">
                        Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days • <span className="text-[#f26522] font-medium">Includes</span> Apple MPP
                    </div>

                    {/* Tabs */}
                    <div className="mt-6 border-b border-[#e6e6e6]">
                        <div className="flex">
                            <button
                                className={`pb-3 mr-6 text-[15px] ${activeTab === 'funnel'
                                    ? 'text-[#007c89] border-b-2 border-[#007c89] font-medium'
                                    : 'text-[#555]'}`}
                                onClick={() => setActiveTab('funnel')}
                            >
                                Conversion funnel
                            </button>
                            <button
                                className={`pb-3 text-[15px] ${activeTab === 'time'
                                    ? 'text-[#007c89] border-b-2 border-[#007c89] font-medium'
                                    : 'text-[#555]'}`}
                                onClick={() => setActiveTab('time')}
                            >
                                Conversions over time
                            </button>
                        </div>
                    </div>

                    {/* Click rate metric */}
                    <div className="mt-8">
                        <div>
                            <span className="text-[13px] text-[#241c15] border-b border-dashed border-[#6b6b6b]">Click rate</span>
                        </div>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-[28px] font-medium text-[#241c15]">0%</span>
                            <span className="text-[13px] text-[#6b6b6b] ml-3">--</span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#e6e6e6] my-8"></div>

                    {/* Conversion Funnel */}
                    <div className="flex justify-between items-end mt-6 pb-6">
                        {/* Deliveries */}
                        <div>
                            <div>
                                <span className="text-[13px] text-[#241c15] border-b border-dashed border-[#6b6b6b]">Deliveries</span>
                            </div>
                            <div className="mt-2">
                                <span className="text-[28px] font-medium text-[#241c15]">0</span>
                            </div>
                        </div>

                        {/* First arrow */}
                        <div className="flex flex-col items-center mb-5 relative">
                            <div className="w-48 border-t border-dashed border-[#6b6b6b]"></div>
                            <div className="absolute -bottom-6 right-0 flex flex-col items-center">
                                <span className="text-[#6b6b6b]">--</span>
                                <svg className="h-5 w-5 text-[#6b6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                                <span className="text-[11px] text-[#6b6b6b] mt-1">Drop-off</span>
                            </div>
                        </div>

                        {/* Opened */}
                        <div>
                            <div>
                                <span className="text-[13px] text-[#241c15] border-b border-dashed border-[#6b6b6b]">Opened</span>
                            </div>
                            <div className="mt-2">
                                <span className="text-[28px] font-medium text-[#241c15]">0</span>
                            </div>
                        </div>

                        {/* Second arrow */}
                        <div className="flex flex-col items-center mb-5 relative">
                            <div className="w-48 border-t border-dashed border-[#6b6b6b]"></div>
                            <div className="absolute -bottom-6 right-0 flex flex-col items-center">
                                <span className="text-[#6b6b6b]">--</span>
                                <svg className="h-5 w-5 text-[#6b6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                                <span className="text-[11px] text-[#6b6b6b] mt-1">Drop-off</span>
                            </div>
                        </div>

                        {/* Clicked */}
                        <div>
                            <div>
                                <span className="text-[13px] text-[#241c15] border-b border-dashed border-[#6b6b6b]">Clicked</span>
                            </div>
                            <div className="mt-2">
                                <span className="text-[28px] font-medium text-[#241c15]">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
