// 'use client'

// export default function DateRangeModal({ 
//   onClose, 
//   onApply,
//   startDate,
//   endDate,
//   setStartDate,
//   setEndDate 
// }) {
//   return (
//     <div className="bg-white border rounded-md shadow-md p-6 w-full max-w-3xl borde-3">
//       {/* Close button in top right */}
//       <div className="absolute top-6 right-6">
//         <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>
      
//       {/* Top row with inputs */}
//       <div className="flex gap-4 mb-6">
//         {/* Date range dropdown - wider */}
//         <div className="w-1/3">
//           <label className="block text-sm text-gray-700 mb-2">Date range</label>
//           <div className="relative">
//             <select className="w-full border border-gray-300 rounded py-2 px-3 text-sm appearance-none">
//               <option>Last 30 days</option>
//               <option>Last 7 days</option>
//               <option>Custom range</option>
//             </select>
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>
//           </div>
//         </div>
        
//         {/* Start date */}
//         <div className="w-1/4">
//           <label className="block text-sm text-gray-700 mb-2">Start date</label>
//           <div className="relative">
//             <input
//               type="text"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               className="w-full border border-gray-300 rounded py-2 px-3 text-sm"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//             </div>
//           </div>
//         </div>
        
//         {/* End date */}
//         <div className="w-1/4">
//           <label className="block text-sm text-gray-700 mb-2">End date</label>
//           <div className="relative">
//             <input
//               type="text"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="w-full border border-gray-300 rounded py-2 px-3 text-sm"
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//               <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Bottom row with buttons */}
//       <div className="flex justify-end">
//         <button 
//           onClick={onClose}
//           className="px-6 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded mr-2"
//         >
//           Cancel
//         </button>
//         <button 
//           onClick={onApply}
//           className="px-6 py-2 text-sm text-white bg-teal-600 hover:bg-teal-700 rounded"
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// }









'use client'

export default function DateRangeModal({ 
  onClose, 
  onApply,
  startDate,
  endDate,
  setStartDate,
  setEndDate 
}) {
  return (
    <div className="bg-white border relative md:-top-16 border-gray-200 rounded-md shadow-md p-6 w-full max-w-[750px] h-[150px]">
      {/* Close button in top right */}
      <button onClick={onClose} className="text-[#21262A] p-1 rounded-lg hover:bg-[#e2e9ed] absolute right-6 hover:text-gray-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="mt-2 mb-2">
        <div className="grid grid-cols-3 gap-4">
          {/* Date range dropdown */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Date range</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm appearance-none">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Custom range</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Start date */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Start date</label>
            <div className="relative">
              <input
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* End date */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">End date</label>
            <div className="relative">
              <input
                type="text"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom row with buttons */}
      <div className="flex justify-end">
        <button 
          onClick={onClose}
          className="px-4 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg mr-2"
        >
          Cancel
        </button>
        <button 
          onClick={onApply}
          className="px-4 py-1.5 text-sm text-white bg-[#017E89] hover:bg-teal-700 rounded-lg"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

