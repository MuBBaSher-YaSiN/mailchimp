"use client";

import { useState } from 'react';

export default function EmailAnalyticsDashboard() {
  const [selectedTab, setSelectedTab] = useState('performance');
  
  return (
    <div className="bg-[#f9f9f9] font-sans text-[#333]">
      <div className="max-w-5xl mx-auto px-5 pt-6">
        {/* Filters row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Date range */}
          <div>
            <label className="block text-[14px] text-[#555] mb-1.5">Date range</label>
            <div className="relative">
              <input 
                type="text" 
                value="Last 30 days" 
                className="w-full border border-[#ccc] rounded px-3 py-2 text-[14px] focus:outline-none focus:border-[#007c89]"
                readOnly 
              />
              <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Comparison */}
          <div>
            <label className="block text-[14px] text-[#555] mb-1.5">Comparison</label>
            <div className="relative">
              <select className="w-full border border-[#ccc] appearance-none rounded px-3 py-2 text-[14px] focus:outline-none focus:border-[#007c89] bg-white">
                <option>Last 31 days</option>
              </select>
              <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Filter by message name */}
          <div>
            <label className="block text-[14px] text-[#555] mb-1.5">Filter by message name</label>
            <div className="relative">
              <select className="w-full border border-[#ccc] appearance-none rounded px-3 py-2 text-[14px] focus:outline-none focus:border-[#007c89] bg-white">
                <option>0 messages selected</option>
              </select>
              <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-[#555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Apple MPP checkbox */}
        <div className="bg-[#fcf7f7] border border-[#efeded] rounded px-4 py-3 mb-8 flex items-center">
          <input 
            type="checkbox" 
            id="excludeAppleMpp" 
            className="mr-2 h-4 w-4"
          />
          <label htmlFor="excludeAppleMpp" className="text-[14px]">
            Exclude Apple MPP for more accurate open data.
            <a href="#" className="text-[#007c89] ml-1 hover:underline">See why</a>
          </label>
          <svg className="ml-1 w-4 h-4 text-[#888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="ml-auto bg-[#efebeb] text-[11px] px-2 py-0.5 rounded">New</span>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#e1e1e1] mb-6">
          <div className="flex">
            <button 
              className={`pb-3 mr-6 text-[15px] font-medium ${selectedTab === 'performance' ? 'text-[#007c89] border-b-2 border-[#007c89]' : 'text-[#555]'}`}
              onClick={() => setSelectedTab('performance')}
            >
              Performance
            </button>
            <button 
              className={`pb-3 text-[15px] font-medium ${selectedTab === 'compare' ? 'text-[#007c89] border-b-2 border-[#007c89]' : 'text-[#555]'}`}
              onClick={() => setSelectedTab('compare')}
            >
              Compare message performance
            </button>
          </div>
        </div>

        {/* Monitor performance card */}
        <div className="bg-white border border-[#e6e6e6] rounded-lg mb-6 p-6">
          <div className="flex justify-between mb-3">
            <h2 className="text-[18px] font-medium text-[#241c15]">Monitor performance</h2>
            <button className="text-[#007c89]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
          
          <div className="text-[13px] text-[#6b6b6b] mb-6">
            Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days • <span className="text-[#241c15] font-medium">Includes</span> Apple MPP
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            <div className="flex flex-col">
              <div className="flex items-center mb-1">
                <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
                </svg>
                <span className="text-[13px] text-[#6b6b6b] border-b border-dotted border-[#6b6b6b]">Total sends</span>
              </div>
              <div className="text-[28px] font-medium">0</div>
              <div className="text-[13px] text-[#6b6b6b]">--</div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center mb-1">
                <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
                </svg>
                <span className="text-[13px] text-[#6b6b6b] border-b border-dotted border-[#6b6b6b]">Open rate</span>
              </div>
              <div className="text-[28px] font-medium">0%</div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center mb-1">
                <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
                </svg>
                <span className="text-[13px] text-[#6b6b6b] border-b border-dotted border-[#6b6b6b]">Click rate</span>
              </div>
              <div className="text-[28px] font-medium">0%</div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center mb-1">
                <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
                </svg>
                <span className="text-[13px] text-[#6b6b6b] border-b border-dotted border-[#6b6b6b]">Unsubscribe rate</span>
              </div>
              <div className="text-[28px] font-medium">0%</div>
            </div>
          </div>
        </div>

        {/* Performance over time card */}
        <div className="bg-white border border-[#e6e6e6] rounded-lg p-6">
          <h2 className="text-[18px] font-medium text-[#241c15] mb-3">Performance over time</h2>
          <div className="text-[13px] text-[#6b6b6b] mb-6">
            Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days
          </div>
          
          <div className="flex">
            <div className="w-1/3">
              <div className="flex flex-col">
                <div className="flex items-center mb-1">
                  <span className="text-[13px] text-[#6b6b6b] border-b border-dotted border-[#6b6b6b]">Click rate</span>
                </div>
                <div className="text-[28px] font-medium">0%</div>
                <div className="text-[13px] text-[#6b6b6b]">--</div>
              </div>
            </div>
            
            <div className="w-2/3 flex flex-col">
              <div className="flex justify-between mb-6">
                <div className="flex items-center">
                  <span className="text-[14px] text-[#6b6b6b] mr-2">Metric:</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-[#007c89] mr-1" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
                    </svg>
                    <span className="text-[14px] mr-1">Click rate</span>
                    <svg className="w-4 h-4 text-[#6b6b6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex">
                  <button className="bg-[#e8e8e8] text-[#241c15] text-[14px] px-3 py-1 rounded-l">Day</button>
                  <button className="bg-white border border-[#e8e8e8] text-[#6b6b6b] text-[14px] px-3 py-1">Week</button>
                  <button className="bg-white border border-[#e8e8e8] text-[#6b6b6b] text-[14px] px-3 py-1 rounded-r">Month</button>
                </div>
              </div>
              
              <div className="mt-auto space-y-3">
                <div className="flex justify-between">
                  <span className="text-[14px] text-[#6b6b6b]">Total message count</span>
                  <span className="text-[14px] font-medium">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[14px] text-[#6b6b6b]">Total messages sent</span>
                  <span className="text-[14px] font-medium">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
