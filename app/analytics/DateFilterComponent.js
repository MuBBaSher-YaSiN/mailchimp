
// 'use client'

// import { useState } from 'react'
// import DateRangeModal from './DateRangeModal'

// export default function DateFilterComponent() {
//     const [dateRange, setDateRange] = useState('Last 30 days')
//     const [comparison, setComparison] = useState('Last 31 days')
//     const [messagesSelected, setMessagesSelected] = useState('0 messages selected')
//     const [excludeAppleMpp, setExcludeAppleMpp] = useState(false)
//     const [isDateModalOpen, setIsDateModalOpen] = useState(false)
//     const [startDate, setStartDate] = useState('06-11-2025')
//     const [endDate, setEndDate] = useState('07-10-2025')
//     const [comparisonOpen, setComparisonOpen] = useState(false)

//     const toggleDateModal = () => {
//         setIsDateModalOpen(!isDateModalOpen)
//     }

//     const handleCloseModal = () => {
//         setIsDateModalOpen(false)
//     }

//     const handleApply = () => {
//         setIsDateModalOpen(false)
//     }

//     return (
//         <div className="max-w-7xl mx-auto mt-12">
//             <div className="max-w-4xl ml-auto">
//                 {/* Filters row */}
//                 <div className="grid grid-cols-3 gap-6">
//                     {/* Date range filter */}
//                     <div>
//                         <label className="block text-gray-600 text-sm mb-2">Date range</label>
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 readOnly
//                                 value={dateRange}
//                                 onClick={toggleDateModal}
//                                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm cursor-pointer"
//                             />
//                             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//                                 <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Comparison filter */}
//                     <div>
//                         <label className="block text-gray-600 text-sm mb-2">Comparison</label>
//                         <div className="relative">
//                             <select
//                                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none bg-white text-black"
//                                 value={comparison}
//                                 onChange={(e) => setComparison(e.target.value)}
//                             >
//                                 <option className="hover:bg-[#f0f4f6] text-black">Last 31 days</option>
//                                 <option className="hover:bg-[#f0f4f6] text-black">Last 60 days</option>
//                                 <option className="bg-[#f0f4f6] text-black">Last 90 days</option>
//                             </select>

//                             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//                                 <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Filter by message name */}
//                     <div>
//                         <label className="block text-gray-600 text-sm mb-2">Filter by message name</label>
//                         <div className="relative">
//                             <select
//                                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none"
//                                 value={messagesSelected}
//                                 onChange={(e) => setMessagesSelected(e.target.value)}
//                             >
//                                 <option>0 messages selected</option>
//                                 <option>1 message selected</option>
//                                 <option>2 messages selected</option>
//                             </select>
//                             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//                                 <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Apple MPP checkbox */}
//                 <div className="mt-6 border border-gray-200 bg-[#f0f4f6] max-w-[550px] rounded px-4 py-5 flex items-center">
//                     <input
//                         type="checkbox"
//                         id="excludeAppleMpp"
//                         checked={excludeAppleMpp}
//                         onChange={(e) => setExcludeAppleMpp(e.target.checked)}
//                         className="h-5 w-5 mr-2  border rounded-lg"
//                     />
//                     <label htmlFor="excludeAppleMpp" className="text-sm">
//                         Exclude Apple MPP for more accurate open data.
//                     </label>
//                     <a href="#" className="text-[#277e89] text-sm hover:underline ml-1">See why.</a>
//                     <svg className="w-4 h-4 text-gray-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span className="ml-auto bg-[#fde6f4] text-gray-400 text-xs px-2 py-0.5 rounded">New</span>
//                 </div>

//                 {/* Date Range Modal */}
//                 {isDateModalOpen && (
//                     <div className="absolute mt-1 left-auto">
//                         <DateRangeModal
//                             onClose={handleCloseModal}
//                             onApply={handleApply}
//                             startDate={startDate}
//                             endDate={endDate}
//                             setStartDate={setStartDate}
//                             setEndDate={setEndDate}
//                         />
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

















// 'use client'

// import { useState } from 'react'
// import DateRangeModal from './DateRangeModal'

// export default function DateFilterComponent() {
//     const [dateRange, setDateRange] = useState('Last 30 days')
//     const [comparison, setComparison] = useState('Last 31 days')
//     const [comparisonOpen, setComparisonOpen] = useState(false)
//     const [messagesSelected, setMessagesSelected] = useState('0 messages selected')
//     const [excludeAppleMpp, setExcludeAppleMpp] = useState(false)
//     const [isDateModalOpen, setIsDateModalOpen] = useState(false)
//     const [startDate, setStartDate] = useState('06-11-2025')
//     const [endDate, setEndDate] = useState('07-10-2025')

//     const toggleDateModal = () => {
//         setIsDateModalOpen(!isDateModalOpen)
//     }

//     const handleCloseModal = () => {
//         setIsDateModalOpen(false)
//     }

//     const handleApply = () => {
//         setIsDateModalOpen(false)
//     }

//     return (
//         <div className="max-w-7xl mx-auto mt-12">
//             <div className="max-w-4xl ml-auto">
//                 {/* Filters row */}
//                 <div className="grid grid-cols-3 gap-6">
//                     {/* Date range filter */}
//                     <div>
//                         <label className="block text-gray-600 text-sm mb-2">Date range</label>
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 readOnly
//                                 value={dateRange}
//                                 onClick={toggleDateModal}
//                                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm cursor-pointer"
//                             />
//                             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//                                 <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Comparison filter (custom dropdown) */}
//                     <div>
//                         <label className="block text-gray-600 text-sm mb-2">Comparison</label>
//                         <div className="relative">
//                             <button
//                                 type="button"
//                                 onClick={() => setComparisonOpen(prev => !prev)}
//                                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white flex justify-between items-center"
//                             >
//                                 <span>{comparison}</span>
//                                 <svg
//                                     className="w-4 h-4 text-gray-500"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth={2}
//                                         d="M19 9l-7 7-7-7"
//                                     />
//                                 </svg>
//                             </button>

//                             {comparisonOpen && (
//                                 <div className="absolute z-10 w-full mt-1 border border-gray-300 rounded shadow bg-white">
//                                     {["Last 31 days", "Last 60 days", "Last 90 days"].map((option) => (
//                                         <div
//                                             key={option}
//                                             onClick={() => {
//                                                 setComparison(option)
//                                                 setComparisonOpen(false)
//                                             }}
//                                             className={`px-3 py-2 text-sm cursor-pointer ${
//                                                 comparison === option
//                                                     ? "bg-[#f0f4f6] text-[#241c15] font-medium"
//                                                     : "bg-white text-black hover:bg-[#f0f4f6]"
//                                             }`}
//                                         >
//                                             {option}
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     {/* Filter by message name */}
//                     <div>
//                         <label className="block text-gray-600 text-sm mb-2">Filter by message name</label>
//                         <div className="relative">
//                             {/* <select
//                                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm appearance-none"
//                                 value={messagesSelected}
//                                 onChange={(e) => setMessagesSelected(e.target.value)}
//                             >
//                                 <option>0 messages selected</option>
//                                 <option>1 message selected</option>
//                                 <option>2 messages selected</option>
//                             </select> */}
//                             <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
//                                 <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Apple MPP checkbox */}
//                 <div className="mt-6 border border-gray-200 bg-[#f0f4f6] max-w-[550px] rounded px-4 py-5 flex items-center">
//                     <input
//                         type="checkbox"
//                         id="excludeAppleMpp"
//                         checked={excludeAppleMpp}
//                         onChange={(e) => setExcludeAppleMpp(e.target.checked)}
//                         className="h-5 w-5 mr-2  border rounded-lg"
//                     />
//                     <label htmlFor="excludeAppleMpp" className="text-sm">
//                         Exclude Apple MPP for more accurate open data.
//                     </label>
//                     <a href="#" className="text-[#277e89] text-sm hover:underline ml-1">See why.</a>
//                     <svg className="w-4 h-4 text-gray-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span className="ml-auto bg-[#fde6f4] text-gray-400 text-xs px-2 py-0.5 rounded">New</span>
//                 </div>

//                 {/* Date Range Modal */}
//                 {isDateModalOpen && (
//                     <div className="absolute mt-1 left-auto">
//                         <DateRangeModal
//                             onClose={handleCloseModal}
//                             onApply={handleApply}
//                             startDate={startDate}
//                             endDate={endDate}
//                             setStartDate={setStartDate}
//                             setEndDate={setEndDate}
//                         />
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }














































'use client'

import { useState } from 'react'
import DateRangeModal from './DateRangeModal'

export default function DateFilterComponent() {
    const [dateRange, setDateRange] = useState('Last 30 days')
    const [comparison, setComparison] = useState('Last 31 days')
    const [comparisonOpen, setComparisonOpen] = useState(false)
    const [messagesSelected, setMessagesSelected] = useState('0 messages selected')
    const [showMessageFilter, setShowMessageFilter] = useState(false)
    const [excludeAppleMpp, setExcludeAppleMpp] = useState(false)
    const [isDateModalOpen, setIsDateModalOpen] = useState(false)
    const [startDate, setStartDate] = useState('06-11-2025')
    const [endDate, setEndDate] = useState('07-10-2025')

    const toggleDateModal = () => {
        setIsDateModalOpen(!isDateModalOpen)
    }

    const handleCloseModal = () => {
        setIsDateModalOpen(false)
    }

    const handleApply = () => {
        setIsDateModalOpen(false)
    }

    return (
        <div className="max-w-7xl mx-auto mt-12">
            <div className="max-w-[820px] ml-auto">
                {/* Filters row */}
                <div className="grid grid-cols-3 gap-6">
                    {/* Date range filter */}
                    <div>
                        <label className="block text-[#4C555B] text-[14px] mb-2">Date range</label>
                        <div className="relative">
                            <input
                                type="text"
                                readOnly
                                value={dateRange}
                                onClick={toggleDateModal}
                                className="w-full border border-gray-300 text-[#21262A] rounded px-3 py-2 text-[14px] cursor-pointer"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Comparison filter (custom dropdown) */}
                    <div>
                        <label className="block text-[#4C555B] text-[14px] mb-2">Comparison</label>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setComparisonOpen(prev => !prev)}
                                className="w-full border border-gray-300 text[14px] text-[#21262A] rounded px-3 py-2 text-sm bg-white flex justify-between items-center"
                            >
                                <span>{comparison}</span>
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {comparisonOpen && (
                                <div className="absolute z-10 w-full mt-1 border border-gray-300 rounded shadow bg-white">
                                    {['Last 31 days', 'Last 60 days', 'Last 90 days'].map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => {
                                                setComparison(option)
                                                setComparisonOpen(false)
                                            }}
                                            className={`px-3 py-2 text-sm cursor-pointer ${comparison === option
                                                ? 'bg-[#f0f4f6] text-[#241c15] font-medium'
                                                : 'bg-white text-black hover:bg-[#f0f4f6]'
                                                }`}
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Filter by message name */}
                    <div className='relative'>
                        <label className="block text-[#4C555B] text-[14px] mb-2">Filter by message name</label>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setShowMessageFilter(prev => !prev)}
                                className="w-full border border-gray-300 rounded text[14px] text-[#21262A] px-3 py-2 text-sm bg-white flex justify-between items-center text-left"
                            >
                                <span>{messagesSelected}</span>
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {showMessageFilter && (
                            <div className="absolute right-0 w-full lg:w-[450px] p-4 mt-2 bg-white rounded-lg shadow-sm">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search and filter your messages by name"
                                        className="w-full px-3 py-2 border border-[#277e89] rounded-md text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#277e89]"
                                    />
                                    <p className="mt-1 text-sm text-gray-500">You don't have any messages to filter yet.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Apple MPP checkbox */}
                <div className="mt-6 border border-gray-200 bg-[#f0f4f6] max-w-[567px] rounded px-4 py-5 flex items-center">
                    <input
                        type="checkbox"
                        id="excludeAppleMpp"
                        checked={excludeAppleMpp}
                        onChange={(e) => setExcludeAppleMpp(e.target.checked)}
                        className="h-5 w-5 mr-2 border rounded-lg"
                    />
                    <label htmlFor="excludeAppleMpp" className="text-sm text-[#21262A]">
                        Exclude Apple MPP for more accurate open data.
                    </label>
                    <a href="#" className="text-[#277e89] text-sm hover:underline ml-1">See why.</a>
                    <svg className="w-4 h-4 text-gray-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-auto bg-[rgb(255, 230, 244)
] text-gray-400 text-xs px-2 py-0.5 rounded">New</span>
                </div>

                {/* Date Range Modal */}
                {isDateModalOpen && (
                    <div className="absolute mt-1 left-auto">
                        <DateRangeModal
                            onClose={handleCloseModal}
                            onApply={handleApply}
                            startDate={startDate}
                            endDate={endDate}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
