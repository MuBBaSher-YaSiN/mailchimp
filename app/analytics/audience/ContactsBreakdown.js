// "use client";
// import { useState } from "react";
// export default function ContactsBreakdown() {
//   const [activeTab, setActiveTab] = useState("Channel summary");

//   return (
//     <div className="bg-white border border-[#e6e6e6] rounded-lg p-6 w-[600px]">
//       {/* Header */}
//       <h2 className="text-[22px] font-medium text-[#241c15] mb-2">Contacts breakdown</h2>
//       <p className="text-[13px] text-[#6b6b6b]">June 6, 2025 - July 5, 2025</p>

//       {/* Tabs */}
//       <div className="mt-4 border-b border-[#e6e6e6]">
//         <div className="flex">
//           <button
//             className={`pb-3 mr-6 text-[15px] font-medium ${activeTab === "Channel summary" ? "text-[#007c89] border-b-2 border-[#007c89]" : "text-[#555]"}`}
//             onClick={() => setActiveTab("Channel summary")}
//           >
//             Channel summary
//           </button>
//           <button
//             className={`pb-3 text-[15px] font-medium ${activeTab === "Email" ? "text-[#007c89] border-b-2 border-[#007c89]" : "text-[#555]"}`}
//             onClick={() => setActiveTab("Email")}
//           >
//             Email
//           </button>
//         </div>
//       </div>

//       {/* Total subscribers */}
//       <div className="mt-6">
//         <div className="border-b border-dashed border-[#007c89] pb-1">
//           <span className="text-[15px] text-[#241c15]">Total subscribers</span>
//         </div>
//         <div className="mt-2 flex items-baseline">
//           <span className="text-[32px] font-medium text-[#241c15]">4</span>
//           <span className="ml-2 text-[14px] text-[#6b6b6b]">-</span>
//           <span className="ml-2 text-[13px] text-[#6b6b6b]">compared to last year</span>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className="mt-10 relative">
//         {/* Tooltip */}
//         {/* <div className="absolute left-[150px] top-[-40px] bg-white border border-[#e6e6e6] shadow-sm rounded p-2 z-10 w-[120px]">
//           <div className="text-[13px] font-medium">Jun 09</div>
//           <div className="flex items-center text-[13px] mt-1">
//             <div className="w-2 h-2 rounded-full bg-[#007c89] mr-1.5"></div>
//             <span>Email only: 0</span>
//           </div>
//           <div className="text-[13px] mt-1">Total subscribers: 0</div>
//         </div> */}


//         <div className="relative h-[80px]">

//           {/* <div className="absolute left-0 bottom-0">
//             <span className="text-[13px] text-[#6b6b6b]">0</span>
//           </div> */}
//           <div className="absolute bottom-0 left-[148px] w-[35px] h-full"></div>
//           <div className="absolute left-8 right-0 bottom-0 border-b border-[#e6e6e6]">
//             <div className="relative h-[1px] bg-[#007c89] w-full">
//               {Array.from({ length: 16 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className={`absolute w-2 h-2 rounded-full ${i === 3 ? "border-2 border-white" : ""}`}
//                   style={{
//                     backgroundColor: "#007c89",
//                     left: `${i * 6.25}%`,
//                     bottom: "-6px",
//                   }}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* X-axis labels */}
//         <div className="ml-8 relative h-[20px] mt-2">
//           {["Jun 06", "Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21"].map(
//             (date, i) => (
//               <div
//                 key={i}
//                 className="absolute text-[11px] text-[#6b6b6b] origin-top-left"
//                 style={{
//                   left: `${i * 6.25}%`,
//                   top: "0",
//                   transform: "rotate(-45deg) translate(-50%, -100%)",
//                 }}
//               >
//                 {date}
//               </div>
//             )
//           )}
//         </div>

//         {/* Legend and pagination */}
//         <div className="flex justify-between items-center mt-6">
//           <div className="flex items-center">
//             <div className="w-2 h-2 rounded-full bg-[#007c89] mr-2"></div>
//             <span className="text-[13px] text-[#555]">Email only</span>
//           </div>
//           <div className="flex items-center">
//             <span className="text-[13px] text-[#6b6b6b]">0 - 16 of 30</span>
//             <div className="ml-4">
//               <button className="text-[13px] text-[#6b6b6b] opacity-50 mr-2">← Previous</button>
//               <button className="text-[13px] text-[#007c89]">Next →</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



































"use client";
import { useState } from "react";

export default function ContactsBreakdown() {
    const [activeTab, setActiveTab] = useState("Channel summary");

    return (
        <div className="bg-white w-4xl rounded-lg p-6 mx-auto">
            {/* Header */}
            <h2 className="text-[22px] font-medium text-[#241c15]">Contacts breakdown</h2>
            {/* <p className="text-[13px] text-[#6b6b6b]">June 6, 2025 - July 5, 2025</p> */}

            {/* Tabs */}
            <div className="mt-4 border-b border-[#e6e6e6]">
                <div className="flex">
                    <button
                        className={`pb-3 mr-6 text-[15px] ${activeTab === "Channel summary" ? "text-[#007c89] border-b-2 border-[#007c89] font-medium" : "text-[#555]"}`}
                        onClick={() => setActiveTab("Channel summary")}
                    >
                        Channel summary
                    </button>
                    <button
                        className={`pb-3 text-[15px] ${activeTab === "Email" ? "text-[#007c89] border-b-2 border-[#007c89] font-medium" : "text-[#555]"}`}
                        onClick={() => setActiveTab("Email")}
                    >
                        Email
                    </button>
                </div>
            </div>

            {/* Total subscribers */}
            <div className="mt-6">
                <div className="inline-block border-b border-dashed border-[#007c89]">
                    <span className="text-[15px] text-[#241c15]">Total subscribers</span>
                </div>
                <div className="mt-2 flex items-baseline">
                    <span className="text-[32px] font-medium text-[#241c15]">4</span>
                    <span className="ml-2 text-[14px] text-[#6b6b6b]">--</span>
                    <span className="ml-2 text-[13px] text-[#6b6b6b]">compared to last year</span>
                </div>
            </div>

            {/* Chart */}
            <div className="mt-12 mb-8">
                {/* Y-axis label */}
                <div className="flex items-center h-6 mb-1">
                    <span className="text-[13px] text-[#6b6b6b]">0</span>
                </div>

                {/* Chart area */}
                <div className="border-b border-[#e6e6e6]">
                    <div className="relative h-[1px] bg-[#007c89] w-full">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 rounded-full bg-[#007c89]"
                                style={{
                                    left: `${(i / 15) * 100}%`,
                                    top: "-4px",
                                    transform: "translateX(-50%)",
                                }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* X-axis labels */}
                <div className="relative h-[60px] mt-1">
                    {["Jun 06", "Jun 07", "Jun 08", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15", "Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21"].map(
                        (date, i) => (
                            <div
                                key={i}
                                className="absolute text-[11px] text-[#6b6b6b]"
                                style={{
                                    left: `${(i / 15) * 100}%`,
                                    top: "0",
                                    transform: "rotate(-45deg)",
                                    transformOrigin: "top left",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                {date}
                            </div>
                        )
                    )}
                </div>

                {/* Legend and pagination */}
                <div className="flex justify-between items-center mt-8 border-t border-[#e6e6e6] pt-4">
                    <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#007c89] mr-2"></div>
                        <span className="text-[13px] text-[#555]">Email only</span>
                    </div>

                    <div className="flex items-center">
                        <span className="text-[13px] text-[#6b6b6b]">0 - 16 of 30</span>
                        <div className="ml-4 flex">
                            <button className="text-[13px] text-[#6b6b6b] opacity-50 mr-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Previous
                            </button>
                            <button className="text-[13px] text-[#007c89] flex items-center">
                                Next
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
