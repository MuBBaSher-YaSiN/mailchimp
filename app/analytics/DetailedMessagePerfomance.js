import React from 'react';

const DetailedMessagePerfomance = () => {
    return (
        <div className='text-[#21262A] my-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-[20px] font-semibold'>Detailed message performance</p>
                    <div className='flex items-center gap-3 my-4'>
                        <p className='text-[14px]'>June 12, 2025 - July 12, 20250</p>
                        <p className="bg-[#fcf0ea] w-12 text-[12px] text-center rounded-lg text-[#b63900]">Include</p>
                        <p className=" text-[12px] text-center rounded-lg">Apple MPP</p>
                    </div>

                </div>
                <div className='flex text-[14px] gap-4'>
                    <button className='border border-gray-300 rounded px-7 py-1 font-medium'>Go to custom reports</button>
                    <button className='border border-gray-300 rounded px-7 py-1 text-white bg-[#9bc8ce] font-semibold'>Export CSV</button>
                </div>
            </div>
            <div className="bg-white  rounded-xl border border-[#C3CED5] h-[568px] p-8 flex justify-center items-center gap-3 w-full">
                <div className="max-w-md pr-4">
                    <h2 className="text-[20px] font-medium text-[#21262A] mb-3">
                       No detailed message performance data yet
                    </h2>
                    <p className="text-gray-600 text-[16px] leading-relaxed mb-5">
                        Detailed data about your messages will appear here. See the impact your marketing is having and gain insight into user behavior.
                    </p>
                    <button className="flex items-center text-teal-600 text-[14px] text-[#277e89] ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-2v-6h2v6zm0-10h-2v2h2V6z" />
                        </svg>
                        About detailed message performance
                    </button>
                </div>

                <div className="relative">
                    <img src='https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/magnifying_glass_empty_states.png' className='max-w-60 ' />
                </div>
            </div>
        </div>

    );
};

export default DetailedMessagePerfomance;
