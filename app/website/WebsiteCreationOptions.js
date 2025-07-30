// "use client";

// import { useState } from 'react';
// import Image from 'next/image';

// export default function WebsiteCreationOptions() {
//   // Track image loading states
//   const [imagesLoaded, setImagesLoaded] = useState({
//     website: false,
//     products: false,
//     services: false
//   });

//   const handleImageLoad = (imageType) => {
//     setImagesLoaded(prev => ({
//       ...prev,
//       [imageType]: true
//     }));
//   };

//   return (
//     <div className="max-w-[1200px] mx-auto px-5 py-6 md:px-8 md:py-12">
//       {/* Legal text */}
//       <div className="text-[13px] leading-5 text-[#4a4a4a] mb-10">
//         <p className="mb-4">
//           By clicking "Get started" and signing up for an Intuit Mailchimp × Wix account, you have read and agree to our <a href="#" className="text-[#277e89] hover:underline">Marketplace Terms of Use</a>, our <a href="#" className="text-[#277e89] hover:underline">Global Privacy Statement</a>, the <a href="#" className="text-[#277e89] hover:underline">Wix Terms of Use</a> and acknowledge the <a href="#" className="text-[#277e89] hover:underline">Wix Privacy Policy</a>. Intuit Mailchimp and Wix will share your information with each other and also in accordance with their respective privacy policies.
//         </p>
//         <p>
//           *Availability of features and functionality varies by plan type. For details, view plans and pricing. SMS Marketing: SMS is available as an add-on to paid plans in select countries. Application and agreement to terms is required before purchasing credits. Messages can only be delivered to contacts in the country selected. Australia messaging available only for contacts with +61 country code. SMS credits are added to your account after purchase and approval. Credits are issued monthly and unused credits expire and do not roll over. MMS only available for Standard and Premium plans sending to US and Canada contacts. Pricing varies. See terms for details.
//         </p>
//       </div>

//       {/* Main heading */}
//       <h2 className="text-[28px] md:text-[32px] font-medium text-[#241c15] mb-8">Create a website with Mailchimp</h2>

//       {/* Three column layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Card 1: Start designing */}
//         <div className="bg-white border border-[#e6e6e6] rounded-lg overflow-hidden">
//           <div className="p-6">
//             <h3 className="text-[22px] md:text-[24px] font-medium text-[#241c15] mb-3">Start designing your site</h3>
//             <p className="text-[15px] text-[#4a4a4a] mb-6">Launch and personalize a site using our easy-to-learn website builder.</p>
//             <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-4 py-2 rounded text-[14px] font-medium transition-colors">
//               Set Up Your Site
//             </button>
//           </div>
//           <div className="relative bg-[#ec8e38] h-64">
//             <img
//               src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/website/website.png"
//               alt="Website builder interface"
//               fill
//               sizes="(max-width: 768px) 100vw, 33vw"
//               className={`object-contain transition-opacity duration-300 ${imagesLoaded.website ? 'opacity-100' : 'opacity-0'}`}
//               onLoad={() => handleImageLoad('website')}
//             />
//           </div>
//         </div>

//         {/* Card 2: Start selling */}
//         <div className="bg-white border border-[#e6e6e6] rounded-lg overflow-hidden">
//           <div className="p-6">
//             <h3 className="text-[22px] md:text-[24px] font-medium text-[#241c15] mb-3">Start selling products</h3>
//             <p className="text-[15px] text-[#4a4a4a] mb-6">Keep your customers shopping right from your website by integrating with one of our great commerce partners like Shopify!</p>
//             <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-4 py-2 rounded text-[14px] font-medium transition-colors">
//               Connect Your Store
//             </button>
//           </div>
//           <div className="relative bg-[#c5d6b8] h-64">
//             <img
//               src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/landing-pages-surveys/website-explore-products.jpg"
//               alt="Online store interface"
//               fill
//               sizes="(max-width: 768px) 100vw, 33vw"
//               className={`object-contain transition-opacity duration-300 ${imagesLoaded.products ? 'opacity-100' : 'opacity-0'}`}
//               onLoad={() => handleImageLoad('products')}
//             />
//           </div>
//         </div>

//         {/* Card 3: Start offering services */}
//         <div className="bg-white border border-[#e6e6e6] rounded-lg overflow-hidden">
//           <div className="p-6">
//             <h3 className="text-[22px] md:text-[24px] font-medium text-[#241c15] mb-3">Start offering services</h3>
//             <p className="text-[15px] text-[#4a4a4a] mb-6">You can connect your scheduling service directly into your website using one of our partners.</p>
//             <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-4 py-2 rounded text-[14px] font-medium transition-colors">
//               Connect Your Appointments
//             </button>
//           </div>
//           <div className="relative bg-[#f8e3c5] h-64">
//            <img
//               src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/website/services.png"
//               alt="Online store interface"
//               fill
//               sizes="(max-width: 768px) 100vw, 33vw"
//               className={`object-contain transition-opacity duration-300 ${imagesLoaded.products ? 'opacity-100' : 'opacity-0'}`}
//               onLoad={() => handleImageLoad('products')}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




























// "use client";

// import { useState } from 'react';

// export default function WebsiteCreationOptions() {
//   // Track image loading states
//   const [imagesLoaded, setImagesLoaded] = useState({
//     website: false,
//     products: false,
//     services: false
//   });

//   const handleImageLoad = (imageType) => {
//     setImagesLoaded(prev => ({
//       ...prev,
//       [imageType]: true
//     }));
//   };

//   return (
//     <div className="max-w-[1200px] mx-auto px-5 py-6 md:px-8 md:py-12">
//       {/* Legal text */}
//       <div className="text-[13px] leading-5 text-[#4a4a4a] mb-10">
//         <p className="mb-4">
//           By clicking "Get started" and signing up for an Intuit Mailchimp × Wix account, you have read and agree to our <a href="#" className="text-[#277e89] hover:underline">Marketplace Terms of Use</a>, our <a href="#" className="text-[#277e89] hover:underline">Global Privacy Statement</a>, the <a href="#" className="text-[#277e89] hover:underline">Wix Terms of Use</a> and acknowledge the <a href="#" className="text-[#277e89] hover:underline">Wix Privacy Policy</a>. Intuit Mailchimp and Wix will share your information with each other and also in accordance with their respective privacy policies.
//         </p>
//         <p>
//           *Availability of features and functionality varies by plan type. For details, view plans and pricing. SMS Marketing: SMS is available as an add-on to paid plans in select countries. Application and agreement to terms is required before purchasing credits. Messages can only be delivered to contacts in the country selected. Australia messaging available only for contacts with +61 country code. SMS credits are added to your account after purchase and approval. Credits are issued monthly and unused credits expire and do not roll over. MMS only available for Standard and Premium plans sending to US and Canada contacts. Pricing varies. See terms for details.
//         </p>
//       </div>

//       {/* Main heading */}
//       <h2 className="text-[28px] md:text-[32px] font-medium text-[#241c15] mb-8">Create a website with Mailchimp</h2>

//       {/* Three column layout with flex-wrap */}
//       <div className="flex flex-wrap justify-evenly gap-2">
//         {/* Card 1: Start designing */}
//         <div className="bg-white border border-[#e6e6e6] mt-3 rounded-lg overflow-hidden w-full md:max-w-[350px] md:min-w-[350px]  flex flex-col">
//           <div className="p-6 flex-grow">
//             <h3 className="text-[22px] md:text-[24px] font-medium text-[#241c15] mb-3">Start designing your site</h3>
//             <p className="text-[15px] text-[#4a4a4a] mb-6">Launch and personalize a site using our easy-to-learn website builder.</p>
//             <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-4 py-2 rounded text-[14px] font-medium transition-colors">
//               Set Up Your Site
//             </button>
//           </div>
//           <div className="bg-[#ec8e38] h-64 relative">
//             <div className="w-full h-full flex items-center justify-center">
//               <img
//                 src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/website/website.png"
//                 alt="Website builder interface"
//                 className={`z-50 max-w-full max-h-full object-contain transition-opacity duration-300 ${imagesLoaded.website ? 'opacity-100' : 'opacity-0'}`}
//                 onLoad={() => handleImageLoad('website')}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Card 2: Start selling */}
//         <div className="bg-white border border-[#e6e6e6] mt-3  rounded-lg overflow-hidden w-full md:max-w-[350px] md:min-w-[350px] w-full md:w-[calc(33.333%-16px)] flex flex-col">
//           <div className="p-6 flex-grow">
//             <h3 className="text-[22px] md:text-[24px] font-medium text-[#241c15] mb-3">Start selling products</h3>
//             <p className="text-[15px] text-[#4a4a4a] mb-6">Keep your customers shopping right from your website by integrating with one of our great commerce partners like Shopify!</p>
//             <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-4 py-2 rounded text-[14px] font-medium transition-colors">
//               Connect Your Store
//             </button>
//           </div>
//           <div className="bg-[#c5d6b8] h-64 relative">
//             <div className="w-full h-full flex items-center justify-center">
//               <img
//                 src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/landing-pages-surveys/website-explore-products.jpg"
//                 alt="Online store interface"
//                 className={`z-50 max-w-full max-h-full object-contain transition-opacity duration-300 ${imagesLoaded.products ? 'opacity-100' : 'opacity-0'}`}
//                 onLoad={() => handleImageLoad('products')}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Card 3: Start offering services */}
//         <div className="bg-white border border-[#e6e6e6] mt-3  rounded-lg w-full md:max-w-[350px] md:min-w-[350px] overflow-hidden w-full md:w-[calc(33.333%-16px)] flex flex-col">
//           <div className="p-6 flex-grow">
//             <h3 className="text-[22px] md:text-[24px] font-medium text-[#241c15] mb-3">Start offering services</h3>
//             <p className="text-[15px] text-[#4a4a4a] mb-6">You can connect your scheduling service directly into your website using one of our partners.</p>
//             <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-4 py-2 rounded text-[14px] font-medium transition-colors">
//               Connect Your Appointments
//             </button>
//           </div>
//           <div className="bg-[#f8e3c5] h-64 relative">
//             <div className="w-full h-full flex items-center justify-center">
//               <img
//                 src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/website/services.png"
//                 alt="Appointment scheduling interface"
//                 className={`z-50 max-w-full max-h-full object-contain transition-opacity duration-300 ${imagesLoaded.services ? 'opacity-100' : 'opacity-0'}`}
//                 onLoad={() => handleImageLoad('services')}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






































































// "use client";

// import { useState } from "react";
// import assembly from '../assests/download.png'
// export default function WebsiteCreationOptions() {
//   const [imagesLoaded, setImagesLoaded] = useState({
//     website: false,
//     products: false,
//     services: false,
//   });

//   const handleImageLoad = (imageType) => {
//     setImagesLoaded((prev) => ({
//       ...prev,
//       [imageType]: true,
//     }));
//   };

//   const cards = [
//     {
//       title: "Start designing your site",
//       description: "Launch and personalize a site using our easy-to-learn website builder.",
//       buttonText: "Set Up Your Site",
//       imageSrc: assembly,
//       imageAlt: "Website builder interface",
//       bgColor: "#ec8e38",
//       imageType: "website",
//     },
//     {
//       title: "Start selling products",
//       description: "Keep your customers shopping right from your website by integrating with one of our great commerce partners like Shopify!",
//       buttonText: "Connect Your Store",
//       imageSrc: assembly,
//       imageAlt: "Online store interface",
//       bgColor: "#c5d6b8",
//       imageType: "products",
//     },
//     {
//       title: "Start offering services",
//       description: "You can connect your scheduling service directly into your website using one of our partners.",
//       buttonText: "Connect Your Appointments",
//       imageSrc: assembly,
//       imageAlt: "Appointment scheduling interface",
//       bgColor: "#f8e3c5",
//       imageType: "services",
//     },
//   ];

//   return (
//     <div className="max-w-[1200px] mx-auto px-5 py-6 md:px-8 md:py-12">
//       {/* Legal text */}
//       <div className="text-[13px] leading-5 text-[#4a4a4a] mb-10">
//         <p className="mb-4">
//           By clicking "Get started" and signing up for an Intuit Mailchimp × Wix account, you have read and agree to our{" "}
//           <a href="#" className="text-[#277e89] hover:underline">
//             Marketplace Terms of Use
//           </a>
//           , our{" "}
//           <a href="#" className="text-[#277e89] hover:underline">
//             Global Privacy Statement
//           </a>
//           , the{" "}
//           <a href="#" className="text-[#277e89] hover:underline">
//             Wix Terms of Use
//           </a>{" "}
//           and acknowledge the{" "}
//           <a href="#" className="text-[#277e89] hover:underline">
//             Wix Privacy Policy
//           </a>
//           . Intuit Mailchimp and Wix will share your information with each other and also in accordance with their respective privacy policies.
//         </p>
//         <p>
//           *Availability of features and functionality varies by plan type. For details, view plans and pricing. SMS Marketing: SMS is available as an add-on to paid plans in select countries. Application and agreement to terms is required before purchasing credits. Messages can only be delivered to contacts in the country selected. Australia messaging available only for contacts with +61 country code. SMS credits are added to your account after purchase and approval. Credits are issued monthly and unused credits expire and do not roll over. MMS only available for Standard and Premium plans sending to US and Canada contacts. Pricing varies. See terms for details.
//         </p>
//       </div>

//       {/* Main heading */}
//       <h2 className="text-[28px] md:text-[32px] font-medium text-[#241c15] mb-8">Create a website with Mailchimp</h2>

//       {/* Three column layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {cards.map((card, index) => (
//           <div key={index} className="bg-white border border-[#e6e6e6] rounded-lg overflow-hidden flex flex-col">
//             <div className="p-6 flex-grow">
//               <h3 className="text-[22px] md:text-[24px] font-medium text-[#241c15] mb-3">{card.title}</h3>
//               <p className="text-[15px] text-[#4a4a4a] mb-6">{card.description}</p>
//               <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#241c15] px-4 py-2 rounded text-[14px] font-medium transition-colors">
//                 {card.buttonText}
//               </button>
//             </div>
//             <div className={`h-64 flex items-center justify-center`} style={{ backgroundColor: card.bgColor }}>
//               <img
//                 src={card.imageSrc}
//                 alt={card.imageAlt}
//                 className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
//                   imagesLoaded[card.imageType] ? "opacity-100" : "opacity-0"
//                 }`}
//                 onLoad={() => handleImageLoad(card.imageType)}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
































"use client";

import { useState } from "react";

export default function WebsiteCreationOptions() {
  const [imagesLoaded, setImagesLoaded] = useState({
    website: false,
    products: false,
    services: false,
  });

  const handleImageLoad = (imageType) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [imageType]: true,
    }));
  };

  const cards = [
    {
      title: "Start designing your site",
      description: "Launch and personalize a site using our easy-to-learn website builder.",
      buttonText: "Set Up Your Site",
      imageSrc: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/website/website.png", // Public folder path
      imageAlt: "Website builder interface",
      // bgColor: "#d79637",
      imageType: "website",
    },
    {
      title: "Start selling products",
      description: "Keep your customers shopping right from your website by integrating with one of our great commerce partners like Shopify!",
      buttonText: "Connect Your Store",
      imageSrc: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/landing-pages-surveys/website-explore-products.jpg",
      imageAlt: "Online store interface",
      // bgColor: "#c5d6b8",
      imageType: "products",
    },
    {
      title: "Start offering services",
      description: "You can connect your scheduling service directly into your website using one of our partners.",
      buttonText: "Connect Your Appointments",
      imageSrc: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/website/services.png",
      imageAlt: "Appointment scheduling interface",
      // bgColor: "#f8e3c5",
      imageType: "services",
    },
  ];

  return (
    <div className="max-w-[1248px] mx-auto px-5 py-2 md:px-6 md:py-12">
      
      {/* Legal text */}
      <div className="text-[14px] leading-5 text-[#4C555B] mb-10">
        <p className="mb-4">
          By clicking "Get started" and signing up for an Intuit Mailchimp × Wix account, you have read and agree to our{" "}
          <a href="#" className="text-[#277e89] hover:underline">Marketplace Terms of Use</a>, our{" "}
          <a href="#" className="text-[#277e89] hover:underline">Global Privacy Statement</a>, the{" "}
          <a href="#" className="text-[#277e89] hover:underline">Wix Terms of Use</a> and acknowledge the{" "}
          <a href="#" className="text-[#277e89] hover:underline">Wix Privacy Policy</a>. 
          Intuit Mailchimp and Wix will share your information with each other and also in accordance with their respective privacy policies.
        </p>
        <p>
          *Availability of features and functionality varies by plan type. For details, view plans and pricing. SMS Marketing: SMS is available as an add-on to paid plans in select countries. Application and agreement to terms is required before purchasing credits. Messages can only be delivered to contacts in the country selected. Australia messaging available only for contacts with +61 country code. SMS credits are added to your account after purchase and approval. Credits are issued monthly and unused credits expire and do not roll over. MMS only available for Standard and Premium plans sending to US and Canada contacts. Pricing varies. See terms for details.
        </p>
      </div>

      {/* Main heading */}
      <h2 className="heading_text mb-4">
        Create a website with Mailchimp
      </h2>

      {/* Three column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white border border-[#e6e6e6] rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 py-14 flex-grow flex flex-col items-center">
              <h3 className="heading_text">
                {card.title}
              </h3>
              <p className="text-[14px] text-center text-[#21262A] mb-6">
                {card.description}
              </p>
              <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#21262A] px-4 py-1 rounded-lg text-[14px] font-medium transition-colors">
                {card.buttonText}
              </button>
            </div>

            <div className="h-64 flex items-center justify-center" >
              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                className={`max-w-full object-contain transition-opacity duration-300`} 
                onLoad={() => handleImageLoad(card.imageType)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
