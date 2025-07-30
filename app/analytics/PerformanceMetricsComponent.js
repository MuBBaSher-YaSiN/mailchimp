'use client'
import { GoPencil } from "react-icons/go";
import React, { useState } from 'react';

export default function PerformanceMetricsComponent() {
  const [active, setActive] = useState('Day');
  return (
    <>
      {/* Monitor performance card */}
      <div className="bg-white border border-[#C3CED5] rounded-xl mb-6 p-6">
        <div className="flex gap-3 items-center mb-3">
          <h2 className="text-[20px] font-[550] text-[#21262A]">Monitor performance</h2>
          <button className="text-[#007c89]">
            <GoPencil size={24} />
          </button>
        </div>

        <div className="text-[#4C555B] text-sm mb-6 font-medium border-b pb-4">
          Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days • <span className="text-[#d48400] bg-[#fcf0ea] text-md p-0.5 rounded font-medium bg-[]">Includes</span> Apple MPP
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
              </svg>
              <span className="text-[16px] border-b-2 border-dashed border-[#017e89] text-[#21262A]">Total sends</span>
            </div>
            <div className="text-[24px] text-[#21262A] font-medium">0</div>
            <div className="text-[13px] text-[#21262A]">--</div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
              </svg>
              <span className="text-[16px] border-b-2 border-dashed border-[#017e89] text-[#21262A]">Open rate</span>
            </div>
            <div className="text-[24px] text-[#21262A] font-medium">0%</div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
              </svg>
              <span className="text-[16px] border-b-2 border-dashed border-[#017e89] text-[#21262A]">Click rate</span>
            </div>
            <div className="text-[24px] text-[#21262A] font-medium">0%</div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <svg className="w-4 h-4 text-[#757575] mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
              </svg>
              <span className="text-[16px] border-b-2 border-dashed border-[#017e89] text-[#21262A]">Unsubscribe rate</span>
            </div>
            <div className="text-[24px] text-[#21262A] font-medium">0%</div>
          </div>
        </div>
      </div>

      {/* Performance over time card */}
      <div className="bg-white border border-[#C3CED5] h-[500px] rounded-xl p-6">
        <div>
          <h2 className="text-[20px] font-[550] text-[#21262A] mb-3">Performance over time</h2>
          <div className="text-[13px] text-[#4C555B] mb-6">
            Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days
          </div>
        </div>


        <div className="flex h-[80%]">
          <div className="w-[50%]">
            <div className="flex flex-col">
              <div className="flex items-center mb-1">
                <span className="text-[16px] text-[#21262A] border-b border-dashed">Click rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[24px] text-[#21262A] font-medium">0%</div>
                <div className="text-[16px] text-[#6b6b6b] bg-[#f0f4f6] w-8 h-8 p-1 rounded-full text-center font-bold">--</div>
              </div>

            </div>
          </div>

          <div className="w-[50%] p-3">
            <div className="flex justify-between mb-6">
              <div className="flex items-center justify-end gap-3 w-full">
                <span className="text-[14px] text-[#6b6b6b] mr-2">Metric:</span>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-[#007c89] mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none" />
                  </svg>
                  <span className="text-[14px] mr-1 font-semibold text-[#277e89]">Click rate</span>
                  <svg className="w-4 h-4 text-[#277e89]]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex bg-[#e2e9ed] p-[2px] rounded">
                  <button
                    onClick={() => setActive("Day")}
                    className={`text-[14px] px-5 py-1 rounded-l ${active === "Day"
                        ? "bg-white text-[#241c15] border rounded border-[#e8e8e8]"
                        : "bg-[#e8e8e8] text-[#241c15]"
                      }`}
                  >
                    Day
                  </button>

                  <button
                    onClick={() => setActive("Week")}
                    className={`text-[14px] px-5 py-1 ${active === "Week"
                        ? "bg-white text-[#241c15] border rounded border-[#e8e8e8]"
                        : "bg-[#e8e8e8] text-[#6b6b6b] border border-[#e8e8e8]"
                      }`}
                  >
                    Week
                  </button>

                  <button
                    onClick={() => setActive("Month")}
                    className={`text-[14px] px-5 py-1 rounded-r ${active === "Month"
                        ? "bg-white text-[#241c15] border rounded border-[#e8e8e8]"
                        : "bg-[#e8e8e8] text-[#6b6b6b] border border-[#e8e8e8]"
                      }`}
                  >
                    Month
                  </button>
                </div>
              </div>

            </div>

            <div className="mt-auto space-y-3 border-l border-gray-300 h-[80%] px-5">
              <div className="flex justify-between max-w-90 border-b border-gray-300 pb-2">
                <span className="text-[14px] text-[#21262A]">Total message count</span>
                <span className="text-[14px] text-[#21262A] font-medium">0</span>
              </div>
              <div className="flex justify-between max-w-90">
                <span className="text-[14px] text-[#21262A]">Total messages sent</span>
                <span className="text-[14px] text-[#21262A] font-medium">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
