"use client";

import React, { useState } from 'react';

const OnboardingCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // Two slides based on the provided data
  const tasks = [
    [
      {
        title: "Connect an integration",
        description: "Leverage data to create more automated, personalized omni-channel marketing communications.",
        time: "2 min",
        icons: [
          { letter: "W", bgColor: "bg-[#eef6ff]", textColor: "text-[#0077ff]" },
          { letter: "C", bgColor: "bg-[#e6f7f4]", textColor: "text-[#00aa8a]" },
        ],
      },
      {
        title: "Import your brand",
        description: "We'll create email designs using your fonts, logos, colors and images.",
        time: "2 seconds",
        icons: [
          { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" /><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> },
          { svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M12 4h3l2 4h3a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h3l2-4z" /></svg> },
        ],
      },
      {
        title: "Authenticate your email domain",
        description: "Strongly recommended to improve deliverability, avoid spam folders, and build your sender reputation.",
        time: "4 min",
        icons: [
          { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> },
        ],
      },
    ],
    [
      {
        title: "Add your contacts",
        description: "Upload your list of subscribers or import them from another app.",
        time: "4 min",
        icons: [
          { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> },
        ],
      },
      {
        title: "Connect an integration",
        description: "Leverage data to create more automated, personalized omni-channel marketing communications.",
        time: "2 min",
        icons: [
          { letter: "W", bgColor: "bg-[#eef6ff]", textColor: "text-[#0077ff]" },
          { letter: "C", bgColor: "bg-[#e6f7f4]", textColor: "text-[#00aa8a]" },
        ],
      },
      {
        title: "Import your brand",
        description: "We'll create email designs using your fonts, logos, colors and images.",
        time: "2 seconds",
        icons: [
          { svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" /><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg> },
          { svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2"><path d="M12 4h3l2 4h3a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h3l2-4z" /></svg> },
        ],
      },
    ],
  ];

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="max-w-[1092px] mx-auto p-4 py-8 sm:p-6 min-h-[300px] mt-4">
      <div className='flex'>
        <div className="mb-6 sm:mb-8 flex flex-col justify-center rounded-lg mr-4">
          <h2 className="text-[20px] text-[#2B3135] font-medium mb-2">Finish setting up your account</h2>
          <div className="flex items-center">
            <span className="mr-2 text-sm">0%</span>
            <div className="w-[90%] mx-auto h-2 bg-[#d9e6f2] rounded-full"></div>
          </div>
          <p className="text-[12px] text- mt-2"><span className="text-[#005056] italic">0 of 4</span> tasks completed</p>
        </div>

        {/* Sliding Task Cards */}
        <div className="transition-all duration-300 ease-in-out  flex overflow-hidden">
          <div
            className="flex items-center gap-6"
            style={{ transform: `translateX(-${currentSlide * 400}px)`, transition: 'transform 0.3s ease-in-out' }}
          >
            {tasks[currentSlide].map((task, index) => (
              <div
                key={index}
                className="w-[330px] min-w-[330px] h-[200px] border border-[#d9e6f2] rounded-lg p-4 bg-white shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-[#d9e6f2]"></div>
                  <div className="flex space-x-2">
                    {task.icons.map((icon, idx) => (
                      <div
                        key={idx}
                        className={`w-6 h-6 flex items-center justify-center ${icon.bgColor ? icon.bgColor : 'bg-white'} rounded-full`}
                      >
                        {icon.letter ? (
                          <span className={`text-xs font-bold ${icon.textColor}`}>{icon.letter}</span>
                        ) : (
                          icon.svg
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-[14px] font-medium text-[#017E89] mt-3">{task.title}</h3>
                <p className="text-sm text-[#4C555B] my-4">{task.description}</p>
                <p className="text-[14px] text-[#9AA7B0]">{task.time}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* Header */}

      {/* Navigation buttons */}
      <div className="flex justify-end mt-6 sm:mt-8 space-x-3">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className={`w-10 h-10 flex items-center justify-center border border-[#d9e6f2] rounded-lg ${currentSlide === 0 ? 'text-[#cccccc] cursor-not-allowed' : 'text-[#666666] hover:bg-gray-100'
            }`}
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentSlide === totalSlides - 1}
          className={`w-10 h-10 flex items-center justify-center border border-[#d9e6f2] rounded-lg ${currentSlide === totalSlides - 1 ? 'text-[#cccccc] cursor-not-allowed' : 'text-[#666666] hover:bg-gray-100'
            }`}
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OnboardingCarousel;
