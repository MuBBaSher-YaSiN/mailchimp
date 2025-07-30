// "use client";

// import { useState } from 'react';

// export default function EmailAnalyticsDashboard() {
//   const [selectedTab, setSelectedTab] = useState('performance');

//   return (
//     <div className="bg-[#f9f9f9] font-sans text-[#333] mt-14">
//       <div className="max-w-5xl mx-auto px-5 pt-6">
//         {/* Filters row */}


//         {/* Tabs */}
//         <div className="border-b border-[#e1e1e1] mb-6">
//           <div className="flex">
//             <button 
//               className={`pb-3 mr-6 text-[15px] font-medium ${selectedTab === 'performance' ? 'text-[#007c89] border-b-2 border-[#007c89]' : 'text-[#555]'}`}
//               onClick={() => setSelectedTab('performance')}
//             >
//               Performance
//             </button>
//             <button 
//               className={`pb-3 text-[15px] font-medium ${selectedTab === 'compare' ? 'text-[#007c89] border-b-2 border-[#007c89]' : 'text-[#555]'}`}
//               onClick={() => setSelectedTab('compare')}
//             >
//               Compare message performance
//             </button>
//           </div>
//         </div>

//         {/* Monitor performance card */}
//         <div className="bg-white border border-[#e6e6e6] rounded-lg mb-6 p-6">
//           <div className="flex justify-between mb-3">
//             <h2 className="text-[18px] font-medium text-[#241c15]">Monitor performance</h2>
//             <button className="text-[#007c89]">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//               </svg>
//             </button>
//           </div>

//           <div className="text-[13px] text-[#6b6b6b] mb-6">
//             Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days • <span className="text-[#241c15] font-medium">Includes</span> Apple MPP
//           </div>

//           <div className="grid grid-cols-4 gap-6">
//             <div className="flex flex-col">
//               <div className="flex items-center mb-1">
//                 <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
//                   <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
//                 </svg>
//                 <span className="text-[13px] text-[#6b6b6b] border-b border-dotted border-[#6b6b6b]">Total sends</span>
//               </div>
//               <div className="text-[28px] font-medium">0</div>
//               <div className="text-[13px] text-[#6b6b6b]">--</div>
//             </div>

//             <div className="flex flex-col">
//               <div className="flex items-center mb-1">
//                 <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
//                   <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
//                 </svg>
//                 <span className="text-[13px] text-[#6b6b6b] border-b border-dotted border-[#6b6b6b]">Open rate</span>
//               </div>
//               <div className="text-[28px] font-medium">0%</div>
//             </div>

//             <div className="flex flex-col">
//               <div className="flex items-center mb-1">
//                 <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
//                   <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
//                 </svg>
//                 <span className="text-[13px] text-[#6b6b6b] border-b border-dotted border-[#6b6b6b]">Click rate</span>
//               </div>
//               <div className="text-[28px] font-medium">0%</div>
//             </div>

//             <div className="flex flex-col">
//               <div className="flex items-center mb-1">
//                 <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
//                   <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
//                 </svg>
//                 <span className="text-[13px] text-[#6b6b6b] border-b border-dotted border-[#6b6b6b]">Unsubscribe rate</span>
//               </div>
//               <div className="text-[28px] font-medium">0%</div>
//             </div>
//           </div>
//         </div>

//         {/* Performance over time card */}
//         <div className="bg-white border border-[#e6e6e6] rounded-lg p-6">
//           <h2 className="text-[18px] font-medium text-[#241c15] mb-3">Performance over time</h2>
//           <div className="text-[13px] text-[#6b6b6b] mb-6">
//             Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days
//           </div>

//           <div className="flex">
//             <div className="w-1/3">
//               <div className="flex flex-col">
//                 <div className="flex items-center mb-1">
//                   <span className="text-[13px] text-[#6b6b6b] border-b border-dotted border-[#6b6b6b]">Click rate</span>
//                 </div>
//                 <div className="text-[28px] font-medium">0%</div>
//                 <div className="text-[13px] text-[#6b6b6b]">--</div>
//               </div>
//             </div>

//             <div className="w-2/3 flex flex-col">
//               <div className="flex justify-between mb-6">
//                 <div className="flex items-center">
//                   <span className="text-[14px] text-[#6b6b6b] mr-2">Metric:</span>
//                   <div className="flex items-center">
//                     <svg className="w-4 h-4 text-[#007c89] mr-1" viewBox="0 0 24 24" fill="currentColor">
//                       <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
//                     </svg>
//                     <span className="text-[14px] mr-1">Click rate</span>
//                     <svg className="w-4 h-4 text-[#6b6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </div>
//                 </div>

//                 <div className="flex">
//                   <button className="bg-[#e8e8e8] text-[#241c15] text-[14px] px-3 py-1 rounded-l">Day</button>
//                   <button className="bg-white border border-[#e8e8e8] text-[#6b6b6b] text-[14px] px-3 py-1">Week</button>
//                   <button className="bg-white border border-[#e8e8e8] text-[#6b6b6b] text-[14px] px-3 py-1 rounded-r">Month</button>
//                 </div>
//               </div>

//               <div className="mt-auto space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-[14px] text-[#6b6b6b]">Total message count</span>
//                   <span className="text-[14px] font-medium">0</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[14px] text-[#6b6b6b]">Total messages sent</span>
//                   <span className="text-[14px] font-medium">0</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




'use client'

import { useState } from 'react'
import DateFilterComponent from './DateFilterComponent' // Assuming you have this component
import PerformanceMetricsComponent from './PerformanceMetricsComponent'
import ConversionsDashboard from './ConversionsDashboard'
import DeliveryAnalytics from './DeliveryAnalytics'
import EmptyGraphState from './EmptyGraphState'
import DetailedMessagePerfomance from './DetailedMessagePerfomance'

export default function EmailAnalyticsDashboard() {
  const [selectedTab, setSelectedTab] = useState('performance')

  return (
    <div className="bg-[#f9f9f9] font-sans text-[#333] mt-6">
      <div className="max-w-[1450px] mx-auto px-5 pt-6">
        {/* Filters row */}
        {/* <div className="mb-6">
          <DateFilterComponent />
        </div> */}

        {/* Tabs */}
        <div className="border-b border-[#e1e1e1] mb-6">
          <div className="flex">
            <button
              className={`pb-3 mr-6 text-[15px] font-medium ${selectedTab === 'performance' ? 'text-[#21262A] border-b-2 border-[#007c89]' : 'text-[#555]'}`}
              onClick={() => setSelectedTab('performance')}
            >
              Performance
            </button>
            <button
              className={`pb-3 text-[15px] font-medium ${selectedTab === 'compare' ? 'text-[#21262A] border-b-2 border-[#007c89]' : 'text-[#555]'}`}
              onClick={() => setSelectedTab('compare')}
            >
              Compare message performance
            </button>
          </div>
        </div>

        {/* Conditional rendering based on selected tab */}
        {selectedTab === 'performance' ? (
          // Original performance content
          <>
            {/* Monitor performance card */}
            <PerformanceMetricsComponent />
            <ConversionsDashboard />
            <DeliveryAnalytics />
          </>
        ) : (
          // MessageComparisonComponent rendered when compare tab is selected
          // <MessageComparisonComponent />
          <>
            <EmptyGraphState />
            <DetailedMessagePerfomance />
          </>

        )}
      </div>
    </div>
  )
}





























// The MessageComparisonComponent to be rendered when "Compare message performance" is clicked
function MessageComparisonComponent() {
  const [selectedMessages, setSelectedMessages] = useState([
    { id: 1, name: 'Monthly Newsletter - June', sends: 2450, openRate: '32.4%', clickRate: '8.7%', unsubRate: '0.3%' },
    { id: 2, name: 'Product Update - Summer 2025', sends: 1850, openRate: '28.9%', clickRate: '10.2%', unsubRate: '0.2%' }
  ])

  const [availableMessages, setAvailableMessages] = useState([
    { id: 3, name: 'Limited Time Offer', sends: 3200, openRate: '35.7%', clickRate: '15.3%', unsubRate: '0.4%' },
    { id: 4, name: 'Customer Feedback Survey', sends: 1750, openRate: '25.1%', clickRate: '6.8%', unsubRate: '0.5%' }
  ])

  // Function to add a message to the comparison
  const addMessage = (message) => {
    setSelectedMessages([...selectedMessages, message])
    setAvailableMessages(availableMessages.filter(m => m.id !== message.id))
  }

  // Function to remove a message from the comparison
  const removeMessage = (message) => {
    setAvailableMessages([...availableMessages, message])
    setSelectedMessages(selectedMessages.filter(m => m.id !== message.id))
  }

  return (
    <>
      {/* Message selection card */}
      <div className="bg-white border border-[#e6e6e6] rounded-lg mb-6 p-6">
        <div className="flex justify-between mb-3">
          <h2 className="text-[18px] font-medium text-[#241c15]">Compare message performance</h2>
        </div>

        <div className="text-[13px] text-[#6b6b6b] mb-6">
          Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days • <span className="text-[#241c15] font-medium">Includes</span> Apple MPP
        </div>

        {/* Selected Messages */}
        <div className="mb-6">
          <h3 className="text-[15px] font-medium mb-3">Selected messages ({selectedMessages.length})</h3>
          {selectedMessages.length === 0 ? (
            <div className="border border-dashed border-[#e1e1e1] rounded-lg p-8 text-center">
              <p className="text-[14px] text-[#6b6b6b]">No messages selected</p>
              <button className="mt-4 bg-[#007c89] text-white px-4 py-2 rounded text-sm">
                Select messages
              </button>
            </div>
          ) : (
            <div className="border border-[#e1e1e1] rounded-lg divide-y">
              {selectedMessages.map(message => (
                <div key={message.id} className="flex justify-between items-center p-4">
                  <div>
                    <div className="text-[15px] font-medium">{message.name}</div>
                    <div className="text-[13px] text-[#6b6b6b]">{message.sends.toLocaleString()} sends</div>
                  </div>
                  <button
                    className="text-[#007c89] hover:underline text-sm"
                    onClick={() => removeMessage(message)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Available Messages */}
        {availableMessages.length > 0 && (
          <div>
            <h3 className="text-[15px] font-medium mb-3">Available messages</h3>
            <div className="border border-[#e1e1e1] rounded-lg divide-y">
              {availableMessages.map(message => (
                <div key={message.id} className="flex justify-between items-center p-4">
                  <div>
                    <div className="text-[15px] font-medium">{message.name}</div>
                    <div className="text-[13px] text-[#6b6b6b]">{message.sends.toLocaleString()} sends</div>
                  </div>
                  <button
                    className="text-[#007c89] hover:underline text-sm"
                    onClick={() => addMessage(message)}
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Comparison Table */}
      {selectedMessages.length > 0 && (
        <div className="bg-white border border-[#e6e6e6] rounded-lg p-6">
          <h2 className="text-[18px] font-medium text-[#241c15] mb-5">Performance metrics</h2>

          <table className="w-full">
            <thead>
              <tr className="border-b border-[#e1e1e1]">
                <th className="text-left py-3 font-medium text-[14px] text-[#6b6b6b]">Message name</th>
                <th className="text-right py-3 font-medium text-[14px] text-[#6b6b6b]">Total sends</th>
                <th className="text-right py-3 font-medium text-[14px] text-[#6b6b6b]">Open rate</th>
                <th className="text-right py-3 font-medium text-[14px] text-[#6b6b6b]">Click rate</th>
                <th className="text-right py-3 font-medium text-[14px] text-[#6b6b6b]">Unsubscribe rate</th>
              </tr>
            </thead>
            <tbody>
              {selectedMessages.map(message => (
                <tr key={message.id} className="border-b border-[#e1e1e1]">
                  <td className="py-4 text-[15px]">{message.name}</td>
                  <td className="py-4 text-right text-[15px]">{message.sends.toLocaleString()}</td>
                  <td className="py-4 text-right text-[15px]">{message.openRate}</td>
                  <td className="py-4 text-right text-[15px]">{message.clickRate}</td>
                  <td className="py-4 text-right text-[15px]">{message.unsubRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

