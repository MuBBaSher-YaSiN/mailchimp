"use client";

import { useState } from "react";

export default function DeliveryAnalytics() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("day");

  // Data for different time frames
  const timeFrameData = {
    day: {
      dates: [
        "Jun 11",
        "Jun 13",
        "Jun 15",
        "Jun 17",
        "Jun 19",
        "Jun 21",
        "Jun 23",
        "Jun 25",
      ],
      values: [0, 0, 0, 0, 0, 0, 0, 0],
      showPagination: true,
    },
    week: {
      dates: [
        "Jun 08-Jun 14",
        "Jun 15-Jun 21",
        "Jun 22-Jun 28",
        "Jun 29-Jul 05",
        "Jul 06-Jul 12",
      ],
      values: [0, 0, 0, 0, 0],
      showPagination: false,
    },
    month: {
      dates: ["Jun 2025", "Jul 2025"],
      values: [0, 0],
      showPagination: false,
    },
  };

  const deliveryDetails = [
    { label: "Emails sent", value: 0 },
    { label: "Deliveries", value: 0 },
    { label: "Bounces", value: 0 },
    { label: "Unsubscribed", value: 0 },
    { label: "Abuse reports", value: 0 },
  ];

  return (
    <div className="bg-white font-sans mx-auto p-6 border border-[#C3CED5] rounded-xl mt-4 my-4">
      {/* Header */}
      <h2 className="text-[20px] font-[550]">Delivery</h2>
      <div className="text-[15px] mt-1">
        Jun 5, 2025 - Jul 5, 2025 • Compared to last 31 days
      </div>

      {/* Abuse report rate */}
      <div className="border-t pt-4 mt-4">
        <div className="">
          <div className="">
            <span className="text-[17px] text-black border-b-2 border-dashed border-[#6b6b6b]">
              Abuse report rate
            </span>
          </div>
          <div className="flex items-center">
            <div className="mt-1 text-[28px] font-medium text-[#241c15]">
              --
            </div>
            <div className="text-[13px] ml-4 rounded p-1 bg-gray-100 text-[#6b6b6b]">
              --
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-end">
          <div className="w-full">
            {/* Controls row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
              {/* Metric selector */}
              <div className="flex items-center">
                <span className="text-[14px] text-[#6b6b6b] mr-2">Metric:</span>
                <div className="flex items-center py-1 px-2">
                  <div className="flex items-center justify-center w-5 h-5 mr-1">
                    <div className="w-4 h-4 rounded-full border border-[#007c89] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#007c89]"></div>
                    </div>
                  </div>
                  <span className="text-[14px] mr-1 text-[#277e89]">
                    Abuse report rate
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
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

              {/* Time frame selector */}
              <div className="flex border border-[#e6e6e6] p-[1px] rounded bg-[#e2e9ed] overflow-hidden">
                <button
                  className={`px-4 sm:px-7 rounded py-1 text-[14px] ${
                    selectedTimeFrame === "day"
                      ? "bg-white text-[#241c15] font-medium"
                      : "bg-[#e2e9ed] text-[#6b6b6b]"
                  }`}
                  onClick={() => setSelectedTimeFrame("day")}
                >
                  Day
                </button>
                <button
                  className={`px-4 sm:px-7 rounded py-1 text-[14px] border-x border-[#e6e6e6] ${
                    selectedTimeFrame === "week"
                      ? "bg-white text-[#241c15] font-medium"
                      : "bg-[#e2e9ed] text-[#6b6b6b]"
                  }`}
                  onClick={() => setSelectedTimeFrame("week")}
                >
                  Week
                </button>
                <button
                  className={`px-4 sm:px-7 rounded py-1 text-[14px] ${
                    selectedTimeFrame === "month"
                      ? "bg-white text-[#241c15] font-medium"
                      : "bg-[#e2e9ed] text-[#6b6b6b]"
                  }`}
                  onClick={() => setSelectedTimeFrame("month")}
                >
                  Month
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-col lg:flex-row w-full gap-5">
            <div className="w-full lg:w-[60%]">
              {/* Chart container */}
              <div className="flex">
                {/* Y-axis labels */}
                <div className="w-12 flex flex-col justify-between text-right pr-2 h-[150px]">
                  <div className="text-[12px] text-[#6b6b6b]">100%</div>
                  <div className="text-[12px] text-[#6b6b6b]">75%</div>
                  <div className="text-[12px] text-[#6b6b6b]">50%</div>
                  <div className="text-[12px] text-[#6b6b6b]">25%</div>
                  <div className="text-[12px] text-[#6b6b6b]">0%</div>
                </div>

                {/* Chart grid and lines */}
                <div className="flex-1 h-[150px] relative">
                  {/* Grid container */}
                  <div className="w-full h-full border-[#e6e6e6] grid grid-rows-4">
                    <div className="border-t border-[#e6e6e6] mt-2"></div>
                    <div className="border-t border-[#e6e6e6]"></div>
                    <div className="border-t border-[#e6e6e6]"></div>
                    <div className="border-t border-[#e6e6e6]"></div>
                  </div>

                  {/* Line chart */}
                  <div className="absolute bottom-0 left-0 right-0 h-0">
                    {selectedTimeFrame === "day" && (
                      <svg
                        width="100%"
                        height="8"
                        preserveAspectRatio="none"
                        className="overflow-visible"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="0"
                          stroke="#9e67ea"
                          strokeWidth="2"
                        />
                        {timeFrameData.day.dates.map((_, i) => (
                          <circle
                            key={i}
                            cx={`${
                              i * (100 / (timeFrameData.day.dates.length - 1))
                            }%`}
                            cy="0"
                            r="4"
                            fill="#9e67ea"
                          />
                        ))}
                      </svg>
                    )}

                    {selectedTimeFrame === "week" && (
                      <svg
                        width="100%"
                        height="8"
                        preserveAspectRatio="none"
                        className="overflow-visible"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="0"
                          stroke="#9e67ea"
                          strokeWidth="2"
                        />
                        {timeFrameData.week.dates.map((_, i) => (
                          <circle
                            key={i}
                            cx={`${
                              i * (100 / (timeFrameData.week.dates.length - 1))
                            }%`}
                            cy="0"
                            r="4"
                            fill="#9e67ea"
                          />
                        ))}
                      </svg>
                    )}

                    {selectedTimeFrame === "month" && (
                      <svg
                        width="100%"
                        height="8"
                        preserveAspectRatio="none"
                        className="overflow-visible"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="100%"
                          y2="0"
                          stroke="#9e67ea"
                          strokeWidth="2"
                        />
                        {timeFrameData.month.dates.map((_, i) => (
                          <circle
                            key={i}
                            cx={`${
                              i * (100 / (timeFrameData.month.dates.length - 1))
                            }%`}
                            cy="0"
                            r="4"
                            fill="#9e67ea"
                          />
                        ))}
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="ml-12 mt-8">
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: `repeat(${
                      selectedTimeFrame === "day"
                        ? timeFrameData.day.dates.length
                        : selectedTimeFrame === "week"
                        ? timeFrameData.week.dates.length
                        : timeFrameData.month.dates.length
                    }, minmax(0, 1fr))`,
                    gap: "0.5rem",
                  }}
                >
                  {(selectedTimeFrame === "day"
                    ? timeFrameData.day.dates
                    : selectedTimeFrame === "week"
                    ? timeFrameData.week.dates
                    : timeFrameData.month.dates
                  ).map((date, i) => (
                    <div key={i} className="flex items-start">
                      <div
                        className="text-[12px] text-[#6b6b6b] whitespace-nowrap"
                        style={{
                          transform: "rotate(-45deg)",
                          transformOrigin: "top left",
                          width: "max-content",
                        }}
                      >
                        {date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination and legend */}
              <div
                className={`flex flex-col sm:flex-row justify-between items-center ${
                  selectedTimeFrame === "day" ? "mt-8" : "mt-4"
                } gap-3 sm:gap-0`}
              >
                {selectedTimeFrame === "day" ? (
                  <>
                    <div className="text-[13px] text-[#6b6b6b]">
                      0 - 16 of 31
                    </div>
                    <div className="flex items-center order-last sm:order-none">
                      <button className="flex items-center text-[#007c89] opacity-50 cursor-not-allowed text-[14px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 mr-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Previous
                      </button>
                      <button className="flex items-center text-[#007c89] text-[14px] ml-4">
                        Next
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 ml-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex-grow"></div>
                )}

                <div className="flex items-center sm:ml-auto">
                  <div className="w-3 h-3 rounded-full bg-[#9e67ea] mr-2"></div>
                  <span className="text-[13px]">Abuse report rate</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block border-l border-gray-300"></div>

            <div className="w-full lg:w-[40%]">
              <div className="lg:pl-6">
                <h3 className="text-[16px] font-medium text-[#241c15] mb-4">
                  Delivery details
                </h3>
                <div className="space-y-3">
                  {deliveryDetails.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b border-gray-300 pb-1"
                    >
                      <span className="text-[14px] text-[#6b6b6b]">
                        {item.label}
                      </span>
                      <span className="text-[14px] font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
