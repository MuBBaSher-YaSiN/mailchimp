// "use client";

// import { useState } from "react";

// export default function SubscriptionGrowth() {
//   const [activePeriod, setActivePeriod] = useState("Day");

//   const dates = [
//     "Jun 06", "Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13",
//     "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21",
//     "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29",
//     "Jun 30", "Jul 01", "Jul 02", "Jul 03", "Jul 04", "Jul 05",
//   ];

//   return (
//     <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-5xl shadow-sm">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-2">
//         <div>
//           <h2 className="text-base font-bold text-black">What's changed</h2>
//           <p className="text-xs text-gray-500">Jun 6, 2025 - Jul 5, 2025</p>
//         </div>
//       </div>

//       {/* Metric and Tabs */}
//       <div className="flex items-center justify-between mb-2">
//         <div>
//           <p className="text-sm text-black">Total net subscriptions growth</p>
//           <div className="flex items-baseline">
//             <span className="text-xl font-medium text-black">0</span>
//             <span className="ml-1 text-xs text-gray-500">0% compared to last year</span>
//           </div>
//         </div>
//         <div className="flex space-x-1">
//           <button
//             className={`px-2 py-1 text-xs rounded ${activePeriod === "Day" ? "bg-white border border-gray-200" : "bg-gray-100 text-gray-500"}`}
//             onClick={() => setActivePeriod("Day")}
//           >
//             Day
//           </button>
//           <button
//             className={`px-2 py-1 text-xs rounded ${activePeriod === "Week" ? "bg-white border border-gray-200" : "bg-gray-100 text-gray-500"}`}
//             onClick={() => setActivePeriod("Week")}
//           >
//             Week
//           </button>
//           <button
//             className={`px-2 py-1 text-xs rounded ${activePeriod === "Month" ? "bg-white border border-gray-200" : "bg-gray-100 text-gray-500"}`}
//             onClick={() => setActivePeriod("Month")}
//           >
//             Month
//           </button>
//         </div>
//       </div>

//       {/* Chart Area */}
//       <div className="relative h-[100px]">
//         {/* Y-axis */}
//         <div className="absolute left-0 bottom-0">
//           <span className="text-xs text-gray-500">0</span>
//         </div>

//         {/* Chart Line and Dots */}
//         <div className="absolute left-8 right-0 bottom-0 border-b border-gray-200">
//           <div className="relative h-[1px] bg-[#769c00]">
//             {dates.map((date, i) => (
//               <div
//                 key={i}
//                 className="absolute w-1.5 h-1.5 rounded-full bg-[#769c00]"
//                 style={{
//                   left: `${(i / (dates.length - 1)) * 100}%`,
//                   bottom: "-6px",
//                 }}
//               ></div>
//             ))}
//           </div>
//         </div>

//         {/* X-axis Labels */}
//         <div className="ml-8 relative h-[20px] mt-2">
//           {dates.map((date, i) => (
//             <div
//               key={i}
//               className="absolute text-[10px] text-gray-500 origin-top-left"
//               style={{
//                 left: `${(i / (dates.length - 1)) * 100}%`,
//                 top: "0",
//                 transform: "rotate(-45deg) translate(-50%, -100%)",
//               }}
//             >
//               {date}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="mt-2 flex items-center">
//         <div className="flex items-center mr-2">
//           <div className="w-2 h-2 rounded-full bg-[#769c00] mr-1"></div>
//           <span className="text-xs text-gray-500">ORACLESOL</span>
//         </div>
//       </div>
//     </div>
//   );
// }




























































"use client";

import { useState } from "react";

export default function SubscriptionGrowth() {
  const [activePeriod, setActivePeriod] = useState("Day");

  // All dates in the range
  const dates = [
    "Jun 06", "Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13",
    "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21",
    "Jun 22", "Jun 23", "Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29",
    "Jun 30", "Jul 01", "Jul 02", "Jul 03", "Jul 04", "Jul 05",
  ];

  return (
    <div className="bg-white border border-[#e6e6e6] rounded-lg p-6 max-w-[1000px] mt-5 mx-auto">
      {/* Header */}
      <h2 className="text-[22px] font-medium text-[#241c15]">What's changed</h2>
      <p className="text-[13px] text-[#6b6b6b] mt-1">Jun 6, 2025 - Jul 5, 2025</p>
      
      <div className="mt-6 flex flex-col md:flex-row justify-between items-start">
        {/* Total net subscriptions growth */}
        <div>
          <div className="border-b border-dashed border-[#007c89]">
            <span className="text-[15px] text-[#241c15]">Total net subscriptions growth</span>
          </div>
          <div className="flex items-baseline mt-2">
            <span className="text-[32px] font-medium text-[#241c15]">0</span>
            <span className="ml-2 text-[13px] text-[#6b6b6b]">0% compared to last year</span>
          </div>
        </div>
        
        {/* Time period selector */}
        <div className="mt-4 md:mt-0">
          <div className="flex border border-[#e6e6e6] rounded-md overflow-hidden">
            <button 
              className="px-4 py-1.5 text-[14px] bg-white text-[#241c15] font-medium"
              onClick={() => setActivePeriod("Day")}
            >
              Day
            </button>
            <button 
              className="px-4 py-1.5 text-[14px] bg-[#f6f7f8] text-[#6b6b6b] border-x border-[#e6e6e6]"
              onClick={() => setActivePeriod("Week")}
            >
              Week
            </button>
            <button 
              className="px-4 py-1.5 text-[14px] bg-[#f6f7f8] text-[#6b6b6b]"
              onClick={() => setActivePeriod("Month")}
            >
              Month
            </button>
          </div>
        </div>
      </div>
      
      {/* Chart */}
      <div className="mt-10 relative">
        {/* Y-axis */}
        <div className="absolute left-0 top-0">
          <span className="text-[13px] text-[#6b6b6b]">0</span>
        </div>
        
        {/* Chart area */}
        <div className="ml-6 h-[100px] relative border-b border-[#e6e6e6]">
          {/* Horizontal line with dots */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="relative h-[1px] bg-[#769c00] w-full">
              {dates.map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full bg-[#769c00]"
                  style={{
                    left: `${(i / (dates.length - 1)) * 100}%`,
                    bottom: '-3px',
                    transform: 'translateX(-50%)',
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* X-axis labels */}
        <div className="ml-6 mt-2 relative">
          <div className="flex justify-between">
            {dates.map((date, i) => (
              i % 3 === 0 && (
                <div
                  key={i}
                  className="absolute text-[11px] text-[#6b6b6b]"
                  style={{
                    left: `${(i / (dates.length - 1)) * 100}%`,
                    transform: 'translateX(-50%) rotate(-45deg)',
                    transformOrigin: 'top center',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {date}
                </div>
              )
            ))}
          </div>
        </div>
        
        {/* Legend */}
        <div className="mt-16 flex items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#769c00] mr-2"></div>
          <span className="text-[13px] text-[#6b6b6b]">ORACLESOL</span>
        </div>
      </div>
    </div>
  );
}
