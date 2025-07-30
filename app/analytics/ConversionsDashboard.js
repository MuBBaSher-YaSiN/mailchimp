// "use client";

// import { useState } from 'react';
// import ConversionFunnel from './ConversionFunnel';

// export default function ConversionsDashboard() {
//     const [activeTab, setActiveTab] = useState('funnel');

//     return (
//         <div className="bg-[#f6f7f8] mt-6">
//             <div className="mx-auto bg-white border border-[#e6e6e6] rounded-lg">
//                 <div className="p-6">
//                     {/* Header */}
//                     <h2 className="text-[22px] font-medium text-[#241c15]">Conversions</h2>
//                     <div className="text-[14px] text-[#6b6b6b] mt-1">
//                         Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days • <span className="text-[#f26522] font-medium bg-[#fcf0ea] p-[3px] rounded">Includes</span> Apple MPP
//                     </div>

//                     {/* Tabs */}
//                     <div className="mt-6 border-b border-[#e6e6e6]">
//                         <div className="flex">
//                             <button
//                                 className={`pb-3 mr-6 text-[15px] ${activeTab === 'funnel'
//                                     ? 'text-[#007c89] border-b-2 border-[#007c89] font-medium'
//                                     : 'text-[#555]'}`}
//                                 onClick={() => setActiveTab('funnel')}
//                             >
//                                 Conversion funnel
//                             </button>
//                             <button
//                                 className={`pb-3 text-[15px] ${activeTab === 'time'
//                                     ? 'text-[#007c89] border-b-2 border-[#007c89] font-medium'
//                                     : 'text-[#555]'}`}
//                                 onClick={() => setActiveTab('time')}
//                             >
//                                 Conversions over time
//                             </button>
//                         </div>
//                     </div>

//                     <ConversionFunnel/>
//                 </div>
//             </div>
//         </div>
//     );
// }




































"use client";

import { useState } from 'react';
import ConversionFunnel from './ConversionFunnel';
import AnalyticsChart from './AnalyticsChart'; // Make sure this path is correct

export default function ConversionsDashboard() {
    const [activeTab, setActiveTab] = useState('funnel');

    return (
        <div className="bg-[#f6f7f8] mt-6">
            <div className="mx-auto bg-white border border-[#C3CED5] rounded-xl">
                <div className="p-6">
                    {/* Header */}
                    <h2 className="text-[20px] font-medium text-[#21262A]">Conversions</h2>
                    <div className="text-[14px] text-[#6b6b6b] mt-1">
                        Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days • <span className="text-[#f26522] font-medium bg-[#fcf0ea] p-[3px] rounded">Includes</span> Apple MPP
                    </div>

                    {/* Tabs */}
                    <div className="mt-6 border-b border-[#C3CED5]">
                        <div className="flex">
                            <button
                                className={`pb-3 mr-6 text-[16px] ${activeTab === 'funnel'
                                    ? 'text-[#21262A] border-b-2 border-[#21262A] font-medium'
                                    : 'text-[#555]'}`}
                                onClick={() => setActiveTab('funnel')}
                            >
                                Conversion funnel
                            </button>
                            <button
                                className={`pb-3 text-[16px] ${activeTab === 'time'
                                    ? 'text-[#21262A] border-b-2 border-[#21262A] font-medium'
                                    : 'text-[#555]'}`}
                                onClick={() => setActiveTab('time')}
                            >
                                Conversions over time
                            </button>
                        </div>
                    </div>

                    {/* Conditional Render Section */}
                    <div className="mt-6">
                        {activeTab === 'funnel' ? <ConversionFunnel /> : <AnalyticsChart />}
                    </div>
                </div>
            </div>
        </div>
    );
}

