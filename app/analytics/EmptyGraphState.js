import React from 'react';

const EmptyGraphState = () => {
    return (
        <div className="bg-white rounded-xl border border-[#C3CED5] h-[568px] p-8 flex justify-center items-center gap-3 w-full">
            <div className="max-w-md pr-4">
                <h2 className="text-[20px] font-medium text-[#21262A] mb-3">
                    No individual message performance data yet
                </h2>
                <p className="text-[#21262A] text-[16px] leading-relaxed mb-5">
                    Performance data for your individual messages will appear here.
                    You'll see the impact each message is having and gain insight into
                    user behavior.
                </p>
                <button className="flex items-center text-teal-600 text-[14px] text-[#277e89] ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-2v-6h2v6zm0-10h-2v2h2V6z" />
                    </svg>
                    About individual message performance
                </button>
            </div>

            <div className="relative">
                <img src='https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/graph_empty_states.png' className='max-w-60 '/>
            </div>
        </div>
    );
};

export default EmptyGraphState;
