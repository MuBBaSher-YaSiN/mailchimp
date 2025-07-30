'use client'

import { useState, useEffect } from 'react'
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
    const [isLoading, setIsLoading] = useState(false)
    const [dataUpdated, setDataUpdated] = useState(false)
    const [messageCount, setMessageCount] = useState(0)

    // Simulate data loading when dates change
    useEffect(() => {
        if (dataUpdated) {
            const timer = setTimeout(() => {
                setDataUpdated(false)
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [dataUpdated])

    const toggleDateModal = () => {
        setIsDateModalOpen(!isDateModalOpen)
    }

    const handleCloseModal = () => {
        setIsDateModalOpen(false)
    }

    const handleApply = () => {
        setIsLoading(true)
        
        // Simulate API call/data loading
        setTimeout(() => {
            // Format dates for display
            const formattedStartDate = formatDateForDisplay(startDate)
            const formattedEndDate = formatDateForDisplay(endDate)
            
            // Update the date range text
            setDateRange(`${formattedStartDate} - ${formattedEndDate}`)
            
            // Generate random message count to simulate data change
            const newCount = Math.floor(Math.random() * 50) + 1
            setMessageCount(newCount)
            setMessagesSelected(`${newCount} messages selected`)
            
            setIsLoading(false)
            setIsDateModalOpen(false)
            setDataUpdated(true)
        }, 800)
    }
    
    // Helper function to format dates
    const formatDateForDisplay = (dateStr) => {
        const [month, day, year] = dateStr.split('-')
        const date = new Date(`${year}-${month}-${day}`)
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    // Dynamic comparison options based on selected date range
    const getComparisonOptions = () => {
        const options = ['Last 31 days', 'Last 60 days', 'Last 90 days']
        if (dateRange.includes('-')) {
            options.push('Previous period')
            options.push('Same period last year')
        }
        return options
    }

    return (
        <div className="max-w-[1384px] mx-auto mt-6">
            <div className="max-w-[820px] mr-auto px-6 2xl:px-0">
                {/* Loading indicator */}
                {isLoading && (
                    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                        <div className="bg-white p-5 rounded-lg shadow-lg">
                            <div className="flex items-center space-x-2">
                                <svg className="animate-spin h-5 w-5 text-[#277e89]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Loading data...</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Success message for data update */}
                {dataUpdated && (
                    <div className="mb-4 bg-green-50 p-4 rounded-md border border-green-200 transition-all duration-500 animate-pulse">
                        <p className="text-green-700 text-sm">Data updated successfully for period {dateRange}</p>
                    </div>
                )}

                {/* Filters row */}
                <div className="grid grid-cols-3 gap-6 ">
                    {/* Date range filter */}
                    <div>
                        <label className="block text-[#4C555B] text-[14px] mb-2">Date range</label>
                        <div className="relative">
                            <input
                                type="text"
                                readOnly
                                value={dateRange}
                                onClick={toggleDateModal}
                                className={`w-full border ${dataUpdated ? 'border-[#277e89] bg-[#f0f8ff]' : 'border-gray-300'} text-[#21262A] rounded px-3 py-2 text-[14px] cursor-pointer transition-all duration-300`}
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
                                className={`w-full border ${dataUpdated ? 'border-[#277e89] bg-[#f0f8ff]' : 'border-gray-300'} text[14px] text-[#21262A] rounded px-3 py-2 text-sm bg-white flex justify-between items-center transition-all duration-300`}
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
                                    {getComparisonOptions().map((option) => (
                                        <div
                                            key={option}
                                            onClick={() => {
                                                setComparison(option)
                                                setComparisonOpen(false)
                                                if (option !== comparison) {
                                                    setDataUpdated(true)
                                                }
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
                                className={`w-full border ${dataUpdated ? 'border-[#277e89] bg-[#f0f8ff]' : 'border-gray-300'} rounded text[14px] text-[#21262A] px-3 py-2 text-sm bg-white flex justify-between items-center text-left transition-all duration-300`}
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
                                        className="w-full px-3 py-2 border hover:border-[#017E89] rounded-md text-[#21262A] text-[14px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#277e89]"
                                    />
                                    <p className="mt-1 text-sm text-gray-500">
                                        {messageCount > 0 
                                            ? `${messageCount} messages available to filter.` 
                                            : "You don't have any messages to filter yet."}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Apple MPP checkbox */}
                <div className="mt-4 border border-gray-200 bg-[#f0f4f6] max-w-[567px] rounded px-4 py-4 flex items-center">
                    <input
                        type="checkbox"
                        id="excludeAppleMpp"
                        checked={excludeAppleMpp}
                        onChange={(e) => {
                            setExcludeAppleMpp(e.target.checked)
                            if (e.target.checked) {
                                setDataUpdated(true)
                            }
                        }}
                        className="h-5 w-5 mr-2 border rounded-lg"
                    />
                    <label htmlFor="excludeAppleMpp" className="text-sm text-[#21262A]">
                        Exclude Apple MPP for more accurate open data.
                    </label>
                    <a href="#" className="text-[#277e89] text-sm hover:underline ml-1">See why.</a>
                    <svg className="w-4 h-4 text-gray-500 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-auto bg-[rgb(255, 230, 244)] text-gray-400 text-xs px-2 py-0.5 rounded">New</span>
                </div>

                {/* Date Range Modal */}
                {isDateModalOpen && (
                    <div className="absolute mt-1 ">
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
