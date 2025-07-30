import React from "react";

export default function MailchimpDashboard() {
  return (
    <div className="flex min-h-screen border-l-10 border-[#fbe01b]">
      {/* Left Sidebar */}
      <aside className="w-[366px]  bg-gray-50 border-r border-gray-200 flex-shrink-0">
        {/* Logo */}
        <div className="p-6">
          <img src="https://www.svgrepo.com/show/362237/monkey.svg" width={50} height={16} />
        </div>

        {/* Navigation Menu */}
        <nav className="mt-2 ">
          <ul className="px-4">
            <li className="relative">
              <a href="#" className="flex items-center justify-between px-6 py-3 text-[20px] font-medium text-[#21262A] hover:bg-gray-100">
                Email
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li className="relative">
              <a href="#" className="flex items-center justify-between px-6 py-3 text-[20px] font-medium text-[#21262A] hover:bg-gray-100">
                SMS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-[20px] font-medium text-[#21262A] hover:bg-gray-100">
                Automations
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-[20px] font-medium text-[#21262A] hover:bg-gray-100">
                Website
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-[20px] font-medium text-[#21262A] hover:bg-gray-100">
                Landing Page
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-[20px] font-medium text-[#21262A] hover:bg-gray-100">
                Creative Assistant
              </a>
            </li>
            <li className="relative border-t-2 mt-4 border-zinc-200">
              <a href="#" className="flex items-center justify-between px-6 py-3 text-[16px] font-medium text-[#21262A] mt-4 hover:bg-gray-100">
                Signup Form
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-[16px] font-medium text-[#21262A] mt-4 hover:bg-gray-100">
                Surveys
              </a>
            </li>
            <li className="relative">
              <a href="#" className="flex items-center justify-between px-6 py-3 text-[16px] font-medium text-[#21262A] mt-4 hover:bg-gray-100">
                Ad
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-[16px] font-medium text-[#21262A] mt-4 hover:bg-gray-100">
                Social Post
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <div className="max-w-5xl mx-auto px-8 pt-16 pb-12">
          {/* Main Heading */}
          <h1 className="text-[40px] leading-tight font-mediumn text-[#21262A] text-center mb-2">
            Create something that gets noticed
          </h1>

          {/* Badge Line */}
          <div className="relative flex justify-center items-center my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative z-10">
              <span className="bg-[#FFD700] px-4 py-2 font-semibold rounded-full text-gray-600">
                Based on best practices
              </span>
            </div>
          </div>

          {/* Subheading */}
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-10">
            Try building one of these
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Card 1 - Regular Email */}
            <div className="rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#eaf4e9] rounded-2xl">
                <div className="mb-6 flex justify-center">
                  <img
                    src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-email.png"
                    alt="Email"
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col items-center">
                <h3 className="text-2xl text-gray-900 mb-2">Regular email</h3>
                <p className="text-center text-gray-600 text-sm mb-6">
                  Use our email builder to launch a campaign in minutes.
                </p>
                <button className="mt-auto bg-white text-[#007C89] border border-[#007C89] hover:bg-[#007C89] hover:text-white transition-colors duration-150 font-semibold py-2.5 px-6 rounded-md text-sm mb-6">
                  Design Email
                </button>
              </div>
            </div>


            <div className="rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#eaf4e9] rounded-2xl">
                <div className="mb-6 flex justify-center">
                  <img
                    src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-automation.png"
                    alt="Email"
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col items-center">
                <h3 className="text-2xl text-gray-900 mb-2">Automation</h3>
                <p className="text-center text-gray-600 text-sm mb-6">
                 Set up email automations that personalize your marketing and save you time.
                </p>
                <button className="mt-auto bg-white text-[#007C89] border border-[#007C89] hover:bg-[#007C89] hover:text-white transition-colors duration-150 font-semibold py-2.5 px-6 rounded-md text-sm mb-6">
                  Create Jouerny
                </button>
              </div>
            </div>
            <div className="rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-[#eaf4e9] rounded-2xl">
                <div className="mb-6 flex justify-center">
                  <img
                   src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-landing-page.png"
                    alt="Email"
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col items-center">
                <h3 className="text-2xl text-gray-900 mb-2">Landing page</h3>
                <p className="text-center text-gray-600 text-sm mb-6">
                Create a landing page that lets people sign up to receive product promotions or discounts.
                </p>
                <button className="mt-auto bg-white text-[#007C89] border border-[#007C89] hover:bg-[#007C89] hover:text-white transition-colors duration-150 font-semibold py-2.5 px-6 rounded-md text-sm mb-6">
                  building landing page
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
