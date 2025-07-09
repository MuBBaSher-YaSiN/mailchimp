// // import React from "react";
// // export default function MailchimpRecommendations() {
// //   return (
// //     <div className="flex min-h-screen">
// //       {/* Sidebar */}
// //       <div className="w-[320px] bg-[#f6f6f6] border-r border-[#e6e6e6] flex-shrink-0">
// //         <div className="px-8 py-7">
// //           <img 
// //             src="https://cdn-images.mailchimp.com/product/logos/monkey-head.svg" 
// //             alt="Mailchimp" 
// //             className="w-8 h-8"
// //           />
// //         </div>
        
// //         <nav className="mt-5">
// //           <ul className="space-y-1">
// //             {["Email", "Automations", "Website", "Landing Page", "Creative Assistant"].map((item, i) => (
// //               <li key={item} className={`pl-8 pr-4 py-3 ${i === 0 ? "bg-white border-l-4 border-[#FFD700] font-semibold" : ""}`}>
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-[15px] text-[#2C2C2C]">{item}</span>
// //                   {i === 0 && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
// //                 </div>
// //               </li>
// //             ))}
            
// //             {["Signup Form", "Surveys", "Ad", "Social Post"].map((item, i) => (
// //               <li key={item} className="pl-8 pr-4 py-3">
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-[15px] text-[#2C2C2C]">{item}</span>
// //                   {(i === 0 || i === 2) && <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-grow bg-white px-12 py-14">
// //         <div className="max-w-5xl mx-auto">
// //           <h1 className="text-[32px] font-bold text-center mb-2 text-[#2C2C2C]">Create something that gets noticed</h1>
// //           <p className="text-center mb-10 relative">
// //             <span className="inline-block px-4 py-1 bg-[#FFD700] rounded-full text-xs font-semibold text-[#2C2C2C]">Based on best practices</span>
// //             <span className="absolute w-full h-[1px] bg-gray-200 left-0 top-1/2 -z-10"></span>
// //           </p>
          
// //           <h2 className="text-2xl font-semibold text-center mb-10">Try building one of these</h2>
          
// //           <div className="grid grid-cols-3 gap-6">
// //             {/* Card 1 - Regular Email */}
// //             <div className="bg-[#eaf4e9] rounded-2xl shadow-md p-6 flex flex-col items-center">
// //               <div className="mb-6 flex justify-center items-center">
// //                 <img
// //                   src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-email.png"
// //                   alt="Email"
// //                   className="w-[120px]"
// //                 />
// //               </div>
// //               <h3 className="text-lg font-bold mb-2 text-center">Regular email</h3>
// //               <p className="text-center text-sm text-gray-600 mb-6">
// //                 Use our email builder to launch a campaign in minutes.
// //               </p>
// //               <button className="mt-auto bg-white border border-[#007C89] text-[#007C89] hover:bg-[#007C89] hover:text-white font-semibold py-2 px-6 rounded-md transition-colors">
// //                 Design Email
// //               </button>
// //             </div>
            
// //             {/* Card 2 - Automation */}
// //             <div className="bg-[#eaf4fb] rounded-2xl shadow-md p-6 flex flex-col items-center">
// //               <div className="mb-6 flex justify-center items-center">
// //                 <img
// //                   src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-automation.png"
// //                   alt="Automation"
// //                   className="w-[120px]"
// //                 />
// //               </div>
// //               <div className="mb-2 text-center">
// //                 <h3 className="text-lg font-bold inline">Automation</h3>
// //                 <span className="ml-2 inline-block px-2 py-0.5 bg-[#FFD700] rounded text-[10px] font-semibold text-[#2C2C2C]">
// //                   Based on best practices
// //                 </span>
// //               </div>
// //               <p className="text-center text-sm text-gray-600 mb-6">
// //                 Set up email automations to personalize your marketing and save you time.
// //               </p>
// //               <button className="mt-auto bg-white border border-[#007C89] text-[#007C89] hover:bg-[#007C89] hover:text-white font-semibold py-2 px-6 rounded-md transition-colors">
// //                 Create Journey
// //               </button>
// //             </div>
            
// //             {/* Card 3 - Landing Page */}
// //             <div className="bg-[#fff4e5] rounded-2xl shadow-md p-6 flex flex-col items-center">
// //               <div className="mb-6 flex justify-center items-center">
// //                 <img
// //                   src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-landing-page.png"
// //                   alt="Landing Page"
// //                   className="w-[120px]"
// //                 />
// //               </div>
// //               <h3 className="text-lg font-bold mb-2 text-center">Landing page</h3>
// //               <p className="text-center text-sm text-gray-600 mb-6">
// //                 Create a landing page that lets people sign up to receive product promotions or discounts.
// //               </p>
// //               <button className="mt-auto bg-white border border-[#007C89] text-[#007C89] hover:bg-[#007C89] hover:text-white font-semibold py-2 px-6 rounded-md transition-colors">
// //                 Build Landing Page
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



















































// import React from "react";

// export default function MailchimpDashboard() {
//   return (
//     <div className="flex min-h-screen">
//       {/* Left Sidebar */}
//       <aside className="w-64 bg-gray-50 border-r border-gray-200 flex-shrink-0">
//         {/* Logo */}
//         <div className="p-6">
//           <img 
//             src="https://cdn-images.mailchimp.com/logo/mc-freddie-dark.svg" 
//             alt="Mailchimp" 
//             className="w-10 h-10"
//           />
//         </div>
        
//         {/* Navigation Menu */}
//         <nav className="mt-2">
//           <ul>
//             <li className="relative">
//               <a href="#" className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
//                 Email
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
//                 Automations
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
//                 Website
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
//                 Landing Page
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
//                 Creative Assistant
//               </a>
//             </li>
//             <li className="relative">
//               <a href="#" className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
//                 Signup Form
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
//                 Surveys
//               </a>
//             </li>
//             <li className="relative">
//               <a href="#" className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
//                 Ad
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
//                 Social Post
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 bg-white">
//         <div className="max-w-5xl mx-auto px-8 pt-16 pb-12">
//           {/* Main Heading */}
//           <h1 className="text-[32px] leading-tight font-extrabold text-gray-900 text-center mb-2">
//             Create something that gets noticed
//           </h1>
          
//           {/* Badge Line */}
//           <div className="relative flex justify-center items-center my-8">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-200"></div>
//             </div>
//             <div className="relative z-10">
//               <span className="bg-[#FFD700] px-4 py-1 text-xs font-semibold rounded-full">
//                 Based on best practices
//               </span>
//             </div>
//           </div>
          
//           {/* Subheading */}
//           <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
//             Try building one of these
//           </h2>
          
//           {/* Cards Grid */}
//           <div className="grid grid-cols-3 gap-6">
//             {/* Card 1 - Regular Email */}
//             <div className="bg-[#eaf4e9] rounded-2xl shadow-sm overflow-hidden">
//               <div className="p-6 flex flex-col items-center h-full">
//                 <div className="mb-6 flex justify-center">
//                   <img 
//                     src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-email.png"
//                     alt="Email" 
//                     className="w-[120px] h-[120px] object-contain"
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">Regular email</h3>
//                 <p className="text-center text-gray-600 text-sm mb-6">
//                   Use our email builder to launch a campaign in minutes.
//                 </p>
//                 <button className="mt-auto bg-white text-[#007C89] border border-[#007C89] hover:bg-[#007C89] hover:text-white transition-colors duration-150 font-semibold py-2.5 px-6 rounded-md text-sm">
//                   Design Email
//                 </button>
//               </div>
//             </div>
            
//             {/* Card 2 - Automation */}
//             <div className="bg-[#eaf4fb] rounded-2xl shadow-sm overflow-hidden">
//               <div className="p-6 flex flex-col items-center h-full">
//                 <div className="mb-6 flex justify-center">
//                   <img 
//                     src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-automation.png"
//                     alt="Automation" 
//                     className="w-[120px] h-[120px] object-contain"
//                   />
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <h3 className="text-lg font-bold text-gray-900">Automation</h3>
//                   <span className="ml-2 bg-[#FFD700] px-2 py-0.5 text-[10px] font-bold rounded text-gray-900">
//                     Based on best practices
//                   </span>
//                 </div>
//                 <p className="text-center text-gray-600 text-sm mb-6">
//                   Set up email automations that personalize your marketing and save you time.
//                 </p>
//                 <button className="mt-auto bg-white text-[#007C89] border border-[#007C89] hover:bg-[#007C89] hover:text-white transition-colors duration-150 font-semibold py-2.5 px-6 rounded-md text-sm">
//                   Create Journey
//                 </button>
//               </div>
//             </div>
            
//             {/* Card 3 - Landing Page */}
//             <div className="bg-[#fff4e5] rounded-2xl shadow-sm overflow-hidden">
//               <div className="p-6 flex flex-col items-center h-full">
//                 <div className="mb-6 flex justify-center">
//                   <img 
//                     src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-landing-page.png"
//                     alt="Landing Page" 
//                     className="w-[120px] h-[120px] object-contain"
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">Landing page</h3>
//                 <p className="text-center text-gray-600 text-sm mb-6">
//                   Create a landing page that lets people sign up to receive product promotions or discounts.
//                 </p>
//                 <button className="mt-auto bg-white text-[#007C89] border border-[#007C89] hover:bg-[#007C89] hover:text-white transition-colors duration-150 font-semibold py-2.5 px-6 rounded-md text-sm">
//                   Build Landing Page
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }










































import React from "react";

export default function MailchimpDashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200 flex-shrink-0">
        {/* Logo */}
        <div className="p-6">
          <img 
            src="https://cdn-images.mailchimp.com/logo/mc-freddie-dark.svg" 
            alt="Mailchimp" 
            className="w-10 h-10"
          />
        </div>
        
        {/* Navigation Menu */}
        <nav className="mt-2">
          <ul>
            <li className="relative">
              <a href="#" className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Email
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Automations
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Website
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Landing Page
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Creative Assistant
              </a>
            </li>
            <li className="relative">
              <a href="#" className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Signup Form
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Surveys
              </a>
            </li>
            <li className="relative">
              <a href="#" className="flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
                Ad
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="block px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">
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
          <h1 className="text-[32px] leading-tight font-extrabold text-gray-900 text-center mb-2">
            Create something that gets noticed
          </h1>
          
          {/* Badge Line */}
          <div className="relative flex justify-center items-center my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative z-10">
              <span className="bg-[#FFD700] px-4 py-1 text-xs font-semibold rounded-full">
                Based on best practices
              </span>
            </div>
          </div>
          
          {/* Subheading */}
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Try building one of these
          </h2>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Card 1 - Regular Email */}
            <div className="bg-[#eaf4e9] rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 flex flex-col items-center h-full">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-email.png"
                    alt="Email" 
                    className="w-[120px] h-[120px] object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Regular email</h3>
                <p className="text-center text-gray-600 text-sm mb-6">
                  Use our email builder to launch a campaign in minutes.
                </p>
                <button className="mt-auto bg-white text-[#007C89] border border-[#007C89] hover:bg-[#007C89] hover:text-white transition-colors duration-150 font-semibold py-2.5 px-6 rounded-md text-sm">
                  Design Email
                </button>
              </div>
            </div>
            
            {/* Card 2 - Automation */}
            <div className="bg-[#eaf4fb] rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 flex flex-col items-center h-full">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-automation.png"
                    alt="Automation" 
                    className="w-[120px] h-[120px] object-contain"
                  />
                </div>
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Automation</h3>
                  <span className="ml-2 bg-[#FFD700] px-2 py-0.5 text-[10px] font-bold rounded text-gray-900">
                    Based on best practices
                  </span>
                </div>
                <p className="text-center text-gray-600 text-sm mb-6">
                  Set up email automations that personalize your marketing and save you time.
                </p>
                <button className="mt-auto bg-white text-[#007C89] border border-[#007C89] hover:bg-[#007C89] hover:text-white transition-colors duration-150 font-semibold py-2.5 px-6 rounded-md text-sm">
                  Create Journey
                </button>
              </div>
            </div>
            
            {/* Card 3 - Landing Page */}
            <div className="bg-[#fff4e5] rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 flex flex-col items-center h-full">
                <div className="mb-6 flex justify-center">
                  <img 
                    src="https://cdn-images.mailchimp.com/product/front-door/redesign/recommendations-landing-page.png"
                    alt="Landing Page" 
                    className="w-[120px] h-[120px] object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Landing page</h3>
                <p className="text-center text-gray-600 text-sm mb-6">
                  Create a landing page that lets people sign up to receive product promotions or discounts.
                </p>
                <button className="mt-auto bg-white text-[#007C89] border border-[#007C89] hover:bg-[#007C89] hover:text-white transition-colors duration-150 font-semibold py-2.5 px-6 rounded-md text-sm">
                  Build Landing Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
