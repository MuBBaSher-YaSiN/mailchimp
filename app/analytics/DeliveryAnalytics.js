"use client";

import { useState } from 'react';

export default function DeliveryAnalytics() {
    const [selectedTimeFrame, setSelectedTimeFrame] = useState('day');

    const chartDates = [
        'Jun 05', 'Jun 07', 'Jun 09', 'Jun 11',
        'Jun 13', 'Jun 15', 'Jun 17', 'Jun 19'
    ];

    const deliveryDetails = [
        { label: 'Emails sent', value: 0 },
        { label: 'Deliveries', value: 0 },
        { label: 'Bounces', value: 0 },
        { label: 'Unsubscribed', value: 0 },
        { label: 'Abuse reports', value: 0 }
    ];

    return (
        <div className="bg-white font-sans max-w-5xl mx-auto p-6 border border-[#e6e6e6] rounded-lg mt-4">
            {/* Header */}
            <h2 className="text-[22px] font-medium text-[#241c15]">Delivery</h2>
            <div className="text-[13px] text-[#6b6b6b] mt-1">
                Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days
            </div>

            {/* Abuse report rate */}
            <div className="">
                <div className="inline-block border-b border-dashed border-[#6b6b6b]">
                    <span className="text-xl">Abuse report rate</span>
                </div>
                <div className="mt-1 text-[28px] font-medium text-[#241c15]">--</div>
                <div className="text-[13px] text-[#6b6b6b]">--</div>
            </div>




            <div className='border-t border-zinc-400 flex flex-col md:flex-row justify-between'>
                <div className='mt-3 w-full lg:w-[60%]'>
                    {/* Controls row */}
                    <div className="flex justify-between  items-center">
                        {/* Metric selector */}
                        <div className="flex items-center">
                            <span className="text-[14px] text-[#6b6b6b] mr-2">Metric:</span>
                            <div className="flex items-center border border-[#e6e6e6] rounded py-1 px-2">
                                <div className="flex items-center justify-center w-5 h-5 mr-1">
                                    <div className="w-4 h-4 rounded-full border border-[#007c89] flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-[#007c89]"></div>
                                    </div>
                                </div>
                                <span className="text-[14px] mr-1">Abuse report rate</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#6b6b6b] ml-1">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        {/* Time frame selector */}
                        <div className="flex border border-[#e6e6e6] rounded overflow-hidden">
                            <button
                                className={`px-4 py-1 text-[14px] ${selectedTimeFrame === 'day' ? 'bg-[#f2f2f2] text-[#241c15] font-medium' : 'bg-white text-[#6b6b6b]'}`}
                                onClick={() => setSelectedTimeFrame('day')}
                            >
                                Day
                            </button>
                            <button
                                className={`px-4 py-1 text-[14px] border-x border-[#e6e6e6] ${selectedTimeFrame === 'week' ? 'bg-[#f2f2f2] text-[#241c15] font-medium' : 'bg-white text-[#6b6b6b]'}`}
                                onClick={() => setSelectedTimeFrame('week')}
                            >
                                Week
                            </button>
                            <button
                                className={`px-4 py-1 text-[14px] ${selectedTimeFrame === 'month' ? 'bg-[#f2f2f2] text-[#241c15] font-medium' : 'bg-white text-[#6b6b6b]'}`}
                                onClick={() => setSelectedTimeFrame('month')}
                            >
                                Month
                            </button>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="mt-8">
                        <div className="flex">
                            {/* Y-axis labels */}
                            <div className="w-12 flex flex-col justify-between text-right pr-2 h-[200px]">
                                <div className="text-[12px] text-[#6b6b6b]">100%</div>
                                <div className="text-[12px] text-[#6b6b6b]">75%</div>
                                <div className="text-[12px] text-[#6b6b6b]">50%</div>
                                <div className="text-[12px] text-[#6b6b6b]">25%</div>
                                <div className="text-[12px] text-[#6b6b6b]">0%</div>
                            </div>

                            {/* Chart area */}
                            <div className="flex-1 relative h-[200px] border-l border-b border-[#e6e6e6]">
                                {/* Horizontal grid lines */}
                                <div className="absolute top-0 left-0 right-0 border-t border-[#e6e6e6] w-full"></div>
                                <div className="absolute top-1/4 left-0 right-0 border-t border-[#e6e6e6] w-full"></div>
                                <div className="absolute top-1/2 left-0 right-0 border-t border-[#e6e6e6] w-full"></div>
                                <div className="absolute top-3/4 left-0 right-0 border-t border-[#e6e6e6] w-full"></div>

                                {/* Line chart (flat at 0%) */}
                                <div className="absolute  bottom-3 left-0 right-0 h-[1px]">
                                    <svg className="w-full h-8" viewBox="0 0 800 16" preserveAspectRatio="none">
                                        <path
                                            d="M0,8 L100,8 L200,8 L300,8 L400,8 L500,8 L600,8 L700,8"
                                            stroke="#9e67ea"
                                            strokeWidth="2"
                                            fill="none"
                                        />
                                        {chartDates.map((_, i) => (
                                            <circle
                                                key={i}
                                                cx={i * 100}
                                                cy="8"
                                                r="4"
                                                fill="#9e67ea"
                                            />
                                        ))}
                                    </svg>
                                </div>
                                {/* X-axis date labels */}
                                <div className="absolute -bottom-12 left-0 right-4 flex justify-between">
                                    {chartDates.map((date, i) => (
                                        <div
                                            key={i}
                                            className="text-[12px] text-[#6b6b6b]"
                                            style={{
                                                transform: `rotate(-45deg)`,
                                                transformOrigin: 'left',
                                                marginLeft: i === 0 ? '0' : '0'
                                            }}
                                        >
                                            {date}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Pagination and legend */}
                        <div className="mt-16 flex justify-between items-center">
                            {/* Page counter */}
                            <div className="text-[13px] text-[#6b6b6b]">0 - 16 of 31</div>
                            {/* Pagination controls */}
                            <div className="flex items-center">
                                <button className="flex items-center text-[#007c89] opacity-50 cursor-not-allowed text-[14px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                                        <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                                    </svg>
                                    Previous
                                </button>
                                <button className="flex items-center text-[#007c89] text-[14px] ml-4">
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* Chart legend */}
                            <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full bg-[#9e67ea] mr-2"></div>
                                <span className="text-[13px]">Abuse report rate</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Delivery details */}
                <div className="mt-8 pt-6 border-l pl-6 w-full lg:w-[35%]">
                    <h3 className="text-[16px] font-medium text-[#241c15] mb-4">Delivery details</h3>
                    <div className="space-y-3">
                        {deliveryDetails.map((item, index) => (
                            <div key={index} className="flex justify-between border-b pb-1">
                                <span className="text-[14px] text-[#6b6b6b]">{item.label}</span>
                                <span className="text-[14px] font-medium">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
}
