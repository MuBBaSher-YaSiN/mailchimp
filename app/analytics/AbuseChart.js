"use client";

import { useState } from "react";

const AbuseChart = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("day");

  const timeFrames = {
    day: [
      "Jun 05",
      "Jun 07",
      "Jun 09",
      "Jun 11",
      "Jun 13",
      "Jun 15",
      "Jun 17",
      "Jun 19",
    ],
    week: [
      "Jun 08-Jun 14",
      "Jun 15-Jun 21",
      "Jun 22-Jun 28",
      "Jun 29-Jul 05",
      "Jul 06-Jul 12",
    ],
    month: ["Jun 2025", "Jul 2025"],
  };

  const chartDates = timeFrames[selectedTimeFrame];

  return (
    <div className="w-full lg:w-[60%] mt-3">
      {/* Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[14px] text-[#6b6b6b] mr-2">Metric:</span>
          <div className="flex items-center border border-[#e6e6e6] rounded py-1 px-2">
            <div className="w-4 h-4 rounded-full border border-[#007c89] flex items-center justify-center mr-1">
              <div className="w-2 h-2 rounded-full bg-[#007c89]" />
            </div>
            <span className="text-[14px] mr-1">Abuse report rate</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-4 h-4 text-[#6b6b6b] ml-1"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="flex border border-[#e6e6e6] rounded overflow-hidden">
          {Object.keys(timeFrames).map((frame) => (
            <button
              key={frame}
              onClick={() => setSelectedTimeFrame(frame)}
              className={`px-4 py-1 text-[14px] ${
                selectedTimeFrame === frame
                  ? "bg-[#f2f2f2] text-[#241c15] font-medium"
                  : "bg-white text-[#6b6b6b]"
              } ${frame !== "day" && "border-l border-[#e6e6e6]"}`}
            >
              {frame.charAt(0).toUpperCase() + frame.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="mt-8 grid grid-rows-[auto_1fr_auto] h-[240px]">
        {/* Y-axis labels and grid */}
        <div className="flex text-[12px] text-[#6b6b6b] justify-between pr-2">
          {["100%", "75%", "50%", "25%", "0%"].map((label, idx) => (
            <div key={idx} className="h-full flex items-center justify-end">
              {label}
            </div>
          ))}
        </div>

        {/* Chart lines and dots */}
        <div className="flex border-l border-b border-[#e6e6e6] h-full items-end relative">
          <svg
            className="w-full h-full"
            viewBox={`0 0 ${chartDates.length * 100} 40`}
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="20"
              x2={chartDates.length * 100}
              y2="20"
              stroke="#9e67ea"
              strokeWidth="2"
            />
            {chartDates.map((_, i) => (
              <circle key={i} cx={i * 100} cy="20" r="4" fill="#9e67ea" />
            ))}
          </svg>
        </div>

        {/* X-axis date labels */}
        <div className="flex justify-between mt-4">
          {chartDates.map((date, i) => (
            <div
              key={i}
              className="text-[12px] text-[#6b6b6b]"
              style={{ transform: "rotate(-45deg)", transformOrigin: "left" }}
            >
              {date}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination and Legend */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-[13px] text-[#6b6b6b]">0 - 16 of 31</div>
        <div className="flex items-center">
          <button className="flex items-center text-[#007c89] opacity-50 cursor-not-allowed text-[14px]">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" />
            </svg>
            Previous
          </button>
          <button className="flex items-center text-[#007c89] text-[14px] ml-4">
            Next
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#9e67ea] mr-2"></div>
          <span className="text-[13px]">Abuse report rate</span>
        </div>
      </div>
    </div>
  );
};

export default AbuseChart;
