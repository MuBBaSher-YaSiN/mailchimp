// import React from 'react';

// // Fixed: Every const declaration now has an initializer
// const AnalyticsChart = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-sm">
//       {/* Header section with metrics and tabs */}
//       <div className="flex justify-between items-center mb-8">
//         {/* Metric display */}
//         <div>
//           <div className="flex items-center">
//             <span className="text-sm font-medium text-[#008080]">Clicked</span>
//           </div>
//           <div className="w-14 border-b border-dotted border-[#008080] mt-0.5"></div>
//           <div className="flex items-center gap-2 mt-1">
//             <span className="text-3xl font-semibold">0</span>
//             <span className="text-sm text-gray-400">--</span>
//           </div>
//         </div>

//         {/* Time period selector */}
//         <div className="flex rounded-md bg-gray-100">
//           <button className="px-4 py-1.5 text-sm font-medium bg-white rounded-md shadow-sm">
//             Day
//           </button>
//           <button className="px-4 py-1.5 text-sm font-medium text-gray-500">
//             Week
//           </button>
//           <button className="px-4 py-1.5 text-sm font-medium text-gray-500">
//             Month
//           </button>
//         </div>
//       </div>

//       {/* Chart container */}
//       <div className="relative h-[280px]">
//         {/* Y-axis labels */}
//         <div className="absolute left-0 top-0 h-[240px] flex flex-col justify-between text-right">
//           {[4, 3, 2, 1, 0].map(value => (
//             <span key={value} className="text-xs text-gray-500">{value}</span>
//           ))}
//         </div>

//         {/* Chart grid */}
//         <div className="absolute left-8 right-0 top-0 h-[240px]">
//           {[0, 1, 2, 3, 4].map((_, i) => (
//             <div 
//               key={i} 
//               className="absolute left-0 right-0 border-t border-gray-200"
//               style={{ top: `${i * 60}px` }}
//             ></div>
//           ))}

//           {/* Flat line at bottom (no data) */}
//           <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-400"></div>

//           {/* X-axis labels */}
//           <div className="absolute left-0 right-0 bottom-[-30px] flex justify-between">
//             <div className="transform -rotate-45 origin-top-left text-xs text-gray-500">Jun 2025</div>
//             <div className="transform -rotate-45 origin-top-left text-xs text-gray-500">Jul 2025</div>
//           </div>
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="flex justify-end mt-4">
//         <div className="flex items-center gap-2">
//           <div className="w-3 h-3 rounded-sm bg-[#E6E6FA]"></div>
//           <span className="text-xs text-gray-600">Clicked</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsChart;


































import React, { useState, useEffect } from 'react';

// Mock data for different views
const mockData = {
    day: {
        labels: ['Jun 11', 'Jun 13', 'Jun 15', 'Jun 17', 'Jun 19', 'Jun 21', 'Jun 23', 'Jun 25'],
        values: [0, 0, 0, 0, 0, 0, 0, 0],
        range: '0 - 16 of 31',
        hasPagination: true
    },
    week: {
        labels: ['Jun 08-Jun 14', 'Jun 15-Jun 21', 'Jun 22-Jun 28', 'Jun 29-Jul 05', 'Jul 06-Jul 12'],
        values: [0, 0, 0, 0, 0],
        range: '',
        hasPagination: false
    },
    month: {
        labels: ['Jun 2025', 'Jul 2025'],
        values: [0, 0],
        range: '',
        hasPagination: false
    }
};

const AnalyticsChart = () => {
    const [activeView, setActiveView] = useState('day');
    const [data, setData] = useState(mockData.day);

    // Switch data when view changes
    useEffect(() => {
        setData(mockData[activeView]);
    }, [activeView]);

    return (
        <div className="w-full max-w-[1450px] bg-white">
            {/* Header section with metrics and tabs */}
            <div className="flex justify-between items-center mb-8">
                {/* Metric display */}
                <div>
                    <div className="flex items-center">
                        <span className="text-[16px] text-[#21262A] border-b-2 border-dashed border-[#6b6b6b]">Clicked</span>
                    </div>
                   
                    <div className="flex items-center gap-2 mt-1">
                        <span className="heading_text">0</span>
                        <span className="text-[16px] font-bold text-black text-center h-8 w-8 rounded-full bg-gray-100">--</span>
                    </div>
                </div>

                {/* Time period selector */}
                <div className="flex p-[3px] rounded-md bg-[#e2e9ed]">
                    <button
                        className={`px-7 py-1.5 text-sm font-medium rounded-md transition-colors ${activeView === 'day' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-600'
                            }`}
                        onClick={() => setActiveView('day')}
                    >
                        Day
                    </button>
                    <button
                        className={`px-7 py-1.5 text-sm font-medium rounded-md transition-colors ${activeView === 'week' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-600'
                            }`}
                        onClick={() => setActiveView('week')}
                    >
                        Week
                    </button>
                    <button
                        className={`px-7 py-1.5 text-sm font-medium rounded-md transition-colors ${activeView === 'month' ? 'bg-white text-gray-800 shadow-sm' : 'text-gray-600'
                            }`}
                        onClick={() => setActiveView('month')}
                    >
                        Month
                    </button>
                </div>
            </div>

            {/* Chart container */}
            <div className="relative h-[200px]">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-[200px] flex flex-col justify-between text-right">
                    {[4, 3, 2, 1, 0].map(value => (
                        <span key={value} className="text-xs text-gray-500">{value}</span>
                    ))}
                </div>

                {/* Chart grid */}
                <div className="absolute left-8 right-0 top-0 h-[200px]">
                    {/* Horizontal grid lines */}
                    {[0, 1, 2, 3, 4].map((_, i) => (
                        <div
                            key={i}
                            className="absolute left-0 right-0 border-t border-gray-200"
                            style={{ top: `${i * 48}px` }}
                        ></div>
                    ))}

                    {/* Flat line at bottom (no data) */}
                    {/* <div className="bottom-0 left-0 right-0 h-[1px] bg-gray-400"></div> */}

                    {/* X-axis labels */}
                </div>
            </div>
            <div className=''>
                <div className="h-[60px] mt-4 flex justify-between px-4">
                        {data.labels.map((label, index) => (
                            <div
                                key={index}
                                className="-rotate-5 text-xs text-gray-500"
                                style={{
                                    // position: 'absolute',
                                    left: `${(index / (data.labels.length - 1)) * 100}%`,
                                    transform: index === 0 ? 'rotate(-45deg)' : index === data.labels.length - 1 ? 'translateX(-100%) rotate(-45deg)' : 'translateX(-50%) rotate(-45deg)'
                                }}
                            >
                                {label}
                            </div>
                        ))}
                    </div>
            </div>
            <div className=''>
                {data.hasPagination && (
                    <div className=" w-full text-center bottom-[-60px]">
                        <div className="inline-flex items-center gap-4">
                            <span className="text-black">{data.range}</span>
                            <div className="flex items-center gap-2">
                                <button className="text-gray-400 px-2">
                                    <span className="sr-only text-sm text-black">Previous</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <span className="text-xs text-gray-600">Previous</span>
                                <span className="text-xs text-[#008080]">Next</span>
                                <button className="text-[#008080] px-2">
                                    <span className="sr-only">Next</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Legend */}
            <div className="flex justify-end mt-2">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-[#c0abff]"></div>
                    <span className="text-xs text-gray-600">Clicked</span>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsChart;
