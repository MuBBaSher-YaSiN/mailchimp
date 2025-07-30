// import React from 'react'
// import { TiPencil } from "react-icons/ti";
// import { IoMdHome } from "react-icons/io";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { GiWireCoil } from "react-icons/gi";
// import { MdOutlineLocalMovies } from "react-icons/md";
// import { MdOutlineGroups2 } from "react-icons/md";
// import { FaSignal } from "react-icons/fa6";
// import { CgWebsite } from "react-icons/cg";
// import { MdContentPaste } from "react-icons/md";
// import { LuCombine } from "react-icons/lu";


// function Sidebar() {

//     const [isVisible, setIsVisible] = useState(false);
//     return (
//         <div className=''>
//             {isVisible ?
//                 <div className='border w-[280px] border-zinc-200 flex-1 px-3 py-4 flex flex-col justify-between p-2 '>
//                     <div className='space-y-1'>
//                         <button className='flex items-center gap-3 border w-full border-zinc-300 rounded-lg p-1 py-1.5'>
//                             <TiPencil size={20} />
//                             Create
//                         </button>
//                         <button className='flex items-center gap-3 font-semibold w-full border-zinc-300 rounded-lg p-1 py-1.5 bg-gray-200'>
//                             <IoMdHome size={25} />
//                             Home
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <TfiAnnouncement size={22} />
//                             Campaigns
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <GiWireCoil size={22} />
//                             Automations
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <MdOutlineLocalMovies size={22} />
//                             Forms
//                             <p className='bg-pink-200/75 px-1 rounded-md'>Beta</p>
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <MdOutlineGroups2 size={22} />
//                             Audience
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <FaSignal size={22} />
//                             Analytics
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <CgWebsite size={22} />
//                             Website
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <MdContentPaste size={22} />
//                             Content
//                         </button>
//                         <button className='flex items-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                             <LuCombine size={22} />
//                             Integerations
//                         </button>
//                     </div>
//                     <div className='border rounded-xl border-zinc-200'>
//                         <div className='p-6 space-y-6 flex flex-col justify-center text-sm font-semibold w-full'>
//                             Time Senstive<br></br>
//                             <button className='p-4 rounded-xl mt-4 bg-gray-200 text-lg font-normal'>Upgrade</button>
//                         </div>
//                         {/* sidebar Expand */}
//                         <div className='w-full flex justify-end px-4' onClick={() => setIsActive((prev) => !prev)}>
//                             <div className='border-2 w-6 h-6 mb-2'>
//                                 <div className='border-r-2 w-[50%] bg-[#277e89] h-full'></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div> : null
//             }

//             <div className='border w-[80px] border-zinc-200 flex-1 px-3 py-4 flex flex-col justify-between border p-2 '>
//                 <div className='space-y-1 flex flex-col items-center'>
//                     <button className='flex items-center justify-center gap-3 border w-full border-zinc-300 rounded-lg p-1 py-1.5'>
//                         <TiPencil size={20} />

//                     </button>
//                     <button className='flex items-center justify-center  gap-3 font-semibold w-full border-zinc-300 rounded-lg p-1 py-1.5 '>
//                         <IoMdHome size={25} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <TfiAnnouncement size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <GiWireCoil size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <MdOutlineLocalMovies size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <MdOutlineGroups2 size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <FaSignal size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <CgWebsite size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <MdContentPaste size={22} />

//                     </button>
//                     <button className='flex items-center justify-center gap-3  w-full border-zinc-300 rounded p-1 py-1.5'>
//                         <LuCombine size={22} />
//                     </button>
//                 </div>
//                 {/* sidebar contract */}
//                 <div className='w-full flex justify-end px-4'>
//                     <div className='border-2 w-6 h-6 mb-2'>
//                         <div className='border-r-2 w-[50%] bg-[#277e89] h-full'></div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Sidebar

















































// "use client";

// import React, { useState } from 'react';
// import { TiPencil } from "react-icons/ti";
// import { IoMdHome } from "react-icons/io";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { GiWireCoil } from "react-icons/gi";
// import { MdOutlineLocalMovies, MdOutlineGroups2, MdContentPaste } from "react-icons/md";
// import { FaSignal } from "react-icons/fa6";
// import { CgWebsite } from "react-icons/cg";
// import { LuCombine } from "react-icons/lu";
// import { GiHamburgerMenu } from "react-icons/gi";
// import MobileSidebar from './MobileSidebar';

// function Sidebar() {
//     const [isVisible, setIsVisible] = useState(false);

//     const sidebarItems = [
//         { icon: <TiPencil size={20} />, label: "Create" },
//         { icon: <IoMdHome size={25} />, label: "Home", active: true },
//         { icon: <TfiAnnouncement size={22} />, label: "Campaigns" },
//         { icon: <GiWireCoil size={22} />, label: "Automations" },
//         { icon: <MdOutlineLocalMovies size={22} />, label: "Forms", badge: "Beta" },
//         { icon: <MdOutlineGroups2 size={22} />, label: "Audience" },
//         { icon: <FaSignal size={22} />, label: "Analytics" },
//         { icon: <CgWebsite size={22} />, label: "Website" },
//         { icon: <MdContentPaste size={22} />, label: "Content" },
//         { icon: <LuCombine size={22} />, label: "Integrations" },
//     ];

//     return (
//         <div className="flex absolute z-50 bottom-10 left-10 lg:bottom-0 lg:left-0 lg:relative">
//             <div>
//                 {/* Expanded Sidebar */}
//                 {isVisible && (
//                     <div className='border hidden lg:flex  w-[280px] border-zinc-200 flex flex-col justify-between px-3 py-4 p-2'>
//                         <div className='space-y-1'>
//                             {sidebarItems.map((item, index) => (
//                                 <button
//                                     key={index}
//                                     className={`flex items-center gap-3 w-full border-zinc-300 rounded-lg p-1 py-1.5 ${item.active ? "bg-gray-200 font-semibold" : ""
//                                         }`}
//                                 >
//                                     {item.icon}
//                                     {item.label}
//                                     {item.badge && (
//                                         <span className='bg-pink-200/75 px-1 rounded-md text-xs'>{item.badge}</span>
//                                     )}
//                                 </button>
//                             ))}
//                         </div>

//                         <div className='border rounded-xl border-zinc-200 mt-4'>
//                             <div className='p-6 space-y-6 flex flex-col justify-center text-sm font-semibold w-full'>
//                                 Time Sensitive
//                                 <button className='p-4 rounded-xl mt-4 bg-gray-200 text-lg font-normal'>
//                                     Upgrade
//                                 </button>
//                             </div>

//                             <div className='w-full flex justify-end px-4 cursor-pointer' onClick={() => setIsVisible(false)}>
//                                 <div className='border-2 w-6 h-6 mb-2'>
//                                     <div className='border-r-2 w-[50%] bg-[#277e89] h-full'></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Collapsed Sidebar */}
//                 {!isVisible && (
//                     <div className='border hidden lg:flex  w-[80px] border-zinc-200 flex flex-col justify-between px-3 py-4 p-2'>
//                         <div className='space-y-1 hidden lg:flex  flex flex-col items-center'>
//                             {sidebarItems.map((item, index) => (
//                                 <button key={index} className='flex items-center justify-center w-full border-zinc-300 rounded-lg p-1 py-1.5'>
//                                     {item.icon}
//                                 </button>
//                             ))}
//                         </div>

//                         <div className='w-full flex justify-end px-4 cursor-pointer' onClick={() => setIsVisible(true)}>
//                             <div className='border-2 w-6 h-6 mb-2'>
//                                 <div className='border-r-2 w-[50%] bg-[#277e89] h-full'></div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             <div className='text-white lg:hidden'>
//                 <div>
//                     <MobileSidebar/>
//                 </div>
//                 <button className='p-3 border border-white bg-black rounded-full' onClick={() => setIsVisible(true)}>
//                     <GiHamburgerMenu size={20} />
//                 </button>
//             </div>

//         </div>
//     );
// }

// export default Sidebar;





























































































































































































// "use client";

// import React, { useState, useEffect } from "react";
// import Link from 'next/Link'
// import { FiEdit3, FiHome, FiMessageSquare } from "react-icons/fi";
// // import { TfiAnnouncement } from "react-icons/tfi";
// import { CiBullhorn } from "react-icons/ci";
// import { VscCircuitBoard } from "react-icons/vsc";
// import { PiCircuitryFill } from "react-icons/pi";
// // import { TbScreenShare } from "react-icons/tb";
// import { HiOutlineUserGroup } from "react-icons/hi";
// import { BsBarChart, BsGlobe, BsFolder, BsBoxes } from "react-icons/bs";
// import { CiBoxes } from "react-icons/ci";
// import { IoCloseOutline } from "react-icons/io5";
// import { HiChevronRight } from "react-icons/hi";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { PiCircuitryDuotone } from "react-icons/pi";

// // import { FaPen } from "react-icons/fa";
// // import { MdHomeFilled } from "react-icons/md";

// import { FaPen, FaBullhorn, FaRobot, FaSms, FaWpforms, FaUsers, FaChartLine, FaGlobeAmericas, FaFolderOpen, FaPuzzlePiece } from "react-icons/fa";
// import { MdHomeFilled } from "react-icons/md";
// import { MdTextsms } from "react-icons/md";
// import { SiGoogleforms } from "react-icons/si";
// import { BsBarChartFill } from "react-icons/bs";
// import { FaGlobe } from "react-icons/fa";
// import { FaBoxes } from "react-icons/fa";
// import { FaFolderMinus } from "react-icons/fa";

// export default function Sidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [hoveredItem, setHoveredItem] = useState(null);


//   useEffect(() => {
//     const checkScreenSize = () => setIsMobile(window.innerWidth < 1000);
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (mobileOpen && !event.target.closest("#sidebar-container") && !event.target.closest("#hamburger-button")) {
//         setMobileOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [mobileOpen]);

//   useEffect(() => {
//     // Get current URL path (e.g., "/home", "/analytics")
//     const currentPath = window.location.pathname;
//     // Find the menu item whose path matches the current URL
//     const activeItem = menuItems.find((item) => item.path === currentPath);
//     // Set expandedItem to the matching item's id, or null if no match
//     setExpandedItem(activeItem ? activeItem.id : null);
//   }, []);








//   const menuItems = [
//     {
//       id: "create",
//       icon: <FiEdit3 size={20} />,
//       hoverIcon: <FaPen size={20} />,
//       label: "Create",
//       path: "/create",
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "home",
//       icon: <FiHome size={20} />,
//       hoverIcon: <MdHomeFilled size={20} />,
//       label: "Home",
//       path: "/home",
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "campaigns",
//       // icon: <TfiAnnouncement size={20} />,
//       icon:<CiBullhorn size={20}/>,

//       hoverIcon: <FaBullhorn size={18} />,
//       label: "Campaigns",
//       path: "/campaigns",
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "automations",
//       icon: <PiCircuitryDuotone size={20} />,
//       hoverIcon: <PiCircuitryFill size={20} />,
//       label: "Automations",
//       path: "/automations",
//       hasSubmenu: true,
//       submenu: [
//         { label: "All Flows", path: "#all-flows" },
//         { label: "Flow Templates", path: "#flow-templates" },
//         { label: "Transactional Email", path: "#transactional-email" },
//       ],
//     },
//     {
//       id: "sms",
//       icon: <FiMessageSquare size={20} />,
//       hoverIcon: <MdTextsms size={20} />,
//       label: "SMS",
//       path: "#",
//       badge: { text: "New", color: "pink" },
//       hasSubmenu: false,
//       submenu: [],
//     },
//     {
//       id: "forms",
//       icon: <FaWpforms size={20} />,
//       hoverIcon: <SiGoogleforms  size={20} />,
//       label: "Forms",
//       path: "/forums",
//       badge: { text: "Beta", color: "purple" },
//       hasSubmenu: true,
//       submenu: [{ label: "Other Forms", path: "#other-forms" }],
//     },
//     {
//       id: "audience",
//       icon: <HiOutlineUserGroup size={20} />,
//       hoverIcon: <FaUsers size={20} />,
//       label: "Audience",
//       path: "/audience",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Audience Dashboard", path: "#audience-dashboard" },
//         { label: "Tags", path: "#" },
//         { label: "Segments", path: "#" },
//         { label: "Surveys", path: "#" },
//         { label: "Subscriber Preferences", path: "#" },
//         { label: "Inbox", path: "#" },
//       ],
//     },
//     {
//       id: "analytics",
//       icon: <BsBarChart size={20} />,
//       hoverIcon: <BsBarChartFill size={20} />,
//       label: "Analytics",
//       path: "/analytics",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Reports", path: "#" },
//         { label: "Custom Reports", path: "" },
//       ],
//     },
//     {
//       id: "website",
//       icon: <BsGlobe size={20} />,
//       hoverIcon: <FaGlobe size={20} />,
//       label: "Website",
//       path: "/website",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Settings", path: "#" },
//         { label: "Reports", path: "#" },
//       ],
//     },
//     {
//       id: "content",
//       icon: <BsFolder size={20} />,
//       hoverIcon: <FaFolderMinus size={20} />,
//       label: "Content",
//       path: "/content",
//       hasSubmenu: true,
//       submenu: [
//         { label: "Creative Assistant", path: "#" },
//         { label: "Email templates", path: "#" },
//         { label: "Brand Kit", path: "#" },
//       ],
//     },
//     {
//       id: "integrations",
//       icon: <CiBoxes size={20} />,
//       hoverIcon: <FaBoxes size={20} />,
//       label: "Integrations",
//       path: "/integrations",
//       hasSubmenu: true,
//       submenu: [{ label: "Manage", path: "#" }],
//     },
//   ];



//   const handleMenuClick = (id) => {
//     setExpandedItem(expandedItem === id ? null : id);
//   };

//   return (
//     <>
//       {isMobile && !mobileOpen && (
//         <button id="hamburger-button" onClick={() => setMobileOpen(true)} className="fixed z-50 bottom-6 left-6 bg-black text-black border-4 rounded-full p-3 shadow-lg">
//           <GiHamburgerMenu size={20} />
//         </button>
//       )}

//       {isMobile && mobileOpen && <div className="fixed top-0 left-0 h-full w-full bg-white bg-opacity-50 z-40" />}

//       <div

//         className={`left-0 h-[90vh] transition-all duration-300  max-lg:z-99
//           ${isMobile && mobileOpen ? "w-full" : isExpanded ? "w-[230px]" : "w-[60px] py-2 ml-2"} ${isMobile ? (mobileOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}`}
//       >
//         {isMobile && mobileOpen && (
//           <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 text-gray-500">
//             <IoCloseOutline size={24} />
//           </button>
//         )}

//         <nav className="h-full flex flex-col">
//           <div className="flex-grow overflow-y-auto">
//             <ul className="px-2 space-y-1">
//               {menuItems.map((item) => {
//                 const isActive = expandedItem === item.id;
//                 const isHovered = hoveredItem === item.id;

//                 const getIcon = () => {
//                   if (isActive || isHovered) return item.hoverIcon || item.icon;
//                   return item.icon;
//                 };

//                 return (
//                   <li key={item.id}>
//                     <Link
//                       href={item.path}
//                       onClick={() => handleMenuClick(item.id)}
//                       onMouseEnter={() => setHoveredItem(item.id)}
//                       onMouseLeave={() => setHoveredItem(null)}
//                       className={`flex items-center px-2 py-2 rounded-md group transition-colors duration-200
//             ${isActive ? "bg-gray-200" : isHovered ? "bg-gray-300" : ""}`}
//                     >
//                       <div className="min-w-8">
//                         {React.cloneElement(getIcon(), {})}
//                       </div>
//                       {(isExpanded || (isMobile && mobileOpen)) && (
//                         <div className="ml-2 flex flex-1 items-center justify-between">
//                           <span className="text-sm text-black">{item.label}</span>
//                           {item.badge && (
//                             <span className={`text-xs px-1.5 py-0.5 rounded mr-2 ${item.badge.color === "pink" ? "bg-pink-100 text-pink-800" : "bg-purple-100 text-purple-800"}`}>
//                               {item.badge.text}
//                             </span>
//                           )}
//                           {item.hasSubmenu && (
//                             <HiChevronRight size={16} className={`transition-transform ${isActive ? "rotate-90" : ""}`} />
//                           )}
//                         </div>
//                       )}
//                     </Link>

//                     {(isExpanded || (isMobile && mobileOpen)) && isActive && item.hasSubmenu && (
//                       <ul className="pl-10 py-1 space-y-1">
//                         {item.submenu.map((subItem, index) => (
//                           <li key={index}>
//                             <a href={subItem.path} className="block py-1.5 px-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
//                               {subItem.label}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>



//           </div>

//           {(isExpanded || (isMobile && mobileOpen)) && (
//             <div className="p-1 px-2 max-w-sm mx-auto mt-auto mb-20">
//               <div className="border bg-[#f8fafb] rounded-xl p-4 border-zinc-200">
//                 <div className="text-xs font-semibold">Time sensitive</div>
//                 <h4 className="font-medium text-sm mt-2 font-semibold text-gray-500">Onboarding</h4>
//                 <p className="text-xs text-gray-700 mt-1">83 days left to access a personalized product tour of our tools and features.</p>
//                 <button className="w-full mt-3 py-1 bg-white border border-zinc-200 hover:bg-gray-200 rounded-lg text-sm">Connect to expert</button>
//               </div>
//             </div>
//           )}

//           {!isMobile && (
//             <button onClick={() => setIsExpanded(!isExpanded)} className="fixed right-4 w-6 bottom-4 right-3 border mb-8 border-3">
//               <div className="w-5 h-5 flex">
//                 <div className={`w-1/2 h-full border-r-2 ${isExpanded ? "bg-white" : "bg-[#277e89]"}`}></div>
//                 <div className={`w-1/2 h-full border-r-2 ${isExpanded ? "bg-[#277e89]" : "bg-white"}`}></div>
//               </div>
//             </button>
//           )}
//         </nav>
//       </div>

//       <div className={`transition-all duration-300 ${!isMobile ? (isExpanded ? "ml-[280px]" : "ml-[80px]") : "ml-0"}`} />
//     </>
//   );
// }







































"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { FiEdit3, FiHome, FiMessageSquare } from "react-icons/fi";
import { CiBullhorn } from "react-icons/ci";
import { PiCircuitryFill, PiCircuitryDuotone } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsBarChart, BsGlobe, BsFolder } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { HiChevronRight } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

import { FaPen, FaBullhorn, FaWpforms, FaUsers, FaGlobe, FaBoxes, FaFolderMinus } from "react-icons/fa";
import { MdHomeFilled, MdTextsms } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { BsBarChartFill } from "react-icons/bs";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1000);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileOpen && !event.target.closest("#sidebar-container") && !event.target.closest("#hamburger-button")) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeItem = menuItems.find((item) => item.path === currentPath);
    setExpandedItem(activeItem ? activeItem.id : null);
  }, []);

  const menuItems = [
    {
      id: "create",
      icon: <FiEdit3 size={20} />,
      hoverIcon: <FaPen size={20} />,
      label: "Create",
      path: "/create",
      hasSubmenu: false,
      submenu: [],
    },
    {
      id: "home",
      icon: <FiHome size={20} />,
      hoverIcon: <MdHomeFilled size={20} />,
      label: "Home",
      path: "/home",
      hasSubmenu: false,
      submenu: [],
    },
    {
      id: "campaigns",
      icon:<CiBullhorn size={20}/>,
      hoverIcon: <FaBullhorn size={18} />,
      label: "Campaigns",
      path: "/campaigns",
      hasSubmenu: false,
      submenu: [],
    },
    {
      id: "automations",
      icon: <PiCircuitryDuotone size={20} />,
      hoverIcon: <PiCircuitryFill size={20} />,
      label: "Automations",
      path: "/automations",
      hasSubmenu: true,
      submenu: [
        { label: "All Flows", path: "#all-flows" },
        { label: "Flow Templates", path: "#flow-templates" },
        { label: "Transactional Email", path: "#transactional-email" },
      ],
    },
    {
      id: "sms",
      icon: <FiMessageSquare size={20} />,
      hoverIcon: <MdTextsms size={20} />,
      label: "SMS",
      path: "#",
      // badge: { text: "New", color: "pink" },
      hasSubmenu: false,
      submenu: [],
    },
    {
      id: "forms",
      icon: <FaWpforms size={20} />,
      hoverIcon: <SiGoogleforms  size={20} />,
      label: "Forms",
      path: "/forums",
      badge: { text: "Beta", color: "pink" },
      hasSubmenu: true,
      submenu: [{ label: "Other Forms", path: "#other-forms" }],
    },
    {
      id: "audience",
      icon: <HiOutlineUserGroup size={20} />,
      hoverIcon: <FaUsers size={20} />,
      label: "Audience",
      path: "/audience",
      hasSubmenu: true,
      submenu: [
        { label: "Audience Dashboard", path: "#audience-dashboard" },
        { label: "Tags", path: "#" },
        { label: "Segments", path: "#" },
        { label: "Surveys", path: "#" },
        { label: "Subscriber Preferences", path: "#" },
        { label: "Inbox", path: "#" },
      ],
    },
    {
      id: "analytics",
      icon: <BsBarChart size={20} />,
      hoverIcon: <BsBarChartFill size={20} />,
      label: "Analytics",
      path: "/analytics",
      hasSubmenu: true,
      submenu: [
        { label: "Reports", path: "#" },
        { label: "Custom Reports", path: "" },
      ],
    },
    {
      id: "website",
      icon: <BsGlobe size={20} />,
      hoverIcon: <FaGlobe size={20} />,
      label: "Website",
      path: "/website",
      hasSubmenu: true,
      submenu: [
        { label: "Settings", path: "#" },
        { label: "Reports", path: "#" },
      ],
    },
    {
      id: "content",
      icon: <BsFolder size={20} />,
      hoverIcon: <FaFolderMinus size={20} />,
      label: "Content",
      path: "/content",
      hasSubmenu: true,
      submenu: [
        { label: "Creative Assistant", path: "#" },
        { label: "Email templates", path: "#" },
        { label: "Brand Kit", path: "#" },
      ],
    },
    {
      id: "integrations",
      icon: <CiBoxes size={20} />,
      hoverIcon: <FaBoxes size={20} />,
      label: "Integrations",
      path: "/integrations",
      hasSubmenu: true,
      submenu: [{ label: "Manage", path: "#" }],
    },
  ];

  const handleMenuClick = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="">
      {/* Mobile hamburger button */}
      {isMobile && !mobileOpen && (
        <button 
          onClick={() => setMobileOpen(true)} 
          className="fixed z-50 bottom-6 left-6 bg-black text-white border-4 rounded-full p-3 shadow-lg"
        >
          <GiHamburgerMenu size={20} />
        </button>
      )}

      {/* Sidebar */}
      <div
        
        className={`h-[85vh] 2xl:h-[95vh] transition-all duration-300 bg-white
          ${isMobile 
            ? mobileOpen 
              ? "w-full fixed top-0 left-0 z-50" 
              : "w-0 hidden" 
            : isExpanded 
              ? "" 
              : "w-[60px]"
          }`}
      >
        {/* Mobile header with close button */}
        {isMobile && mobileOpen && (
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className="font-medium">Menu</div>
            <button 
              onClick={() => setMobileOpen(false)} 
              className="text-gray-500 hover:bg-gray-100 p-1 rounded-full"
            >
              <IoCloseOutline size={24} />
            </button>
          </div>
        )}

        <nav className="h-full flex flex-col relative">
          <div className="flex-grow overflow-y-auto pt-4">
            <ul className="px-3 space-y-1">
              {menuItems.map((item) => {
                const isActive = expandedItem === item.id;
                const isHovered = hoveredItem === item.id;
                const getIcon = () => isActive || isHovered ? item.hoverIcon || item.icon : item.icon;
                const showExpanded = isExpanded || (isMobile && mobileOpen);

                return (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      onClick={() => handleMenuClick(item.id)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`flex items-center mx-auto px-1.5 py-1.5 rounded-md group transition-colors duration-200
                        ${isActive ? "bg-gray-200" : isHovered ? "bg-gray-100" : ""}  ${item.label=== 'Create'? "border border-zinc-300": null}` }
                    >
                      <div className="min-w-8">
                        {React.cloneElement(getIcon(), {})}
                      </div>
                      
                      {showExpanded && (
                        <div className="ml-3 flex flex-1 items-center justify-between">
                          <span className="text-sm text-[#4C555B]">{item.label}</span>
                          
                          {item.badge && (
                            <span className={`text-xs px-1.5 py-0.5 rounded mr-2 ${
                              item.badge.color === "pink" ? "bg-[#fde6f4] text-pink-800" : "bg-purple-100 text-purple-800"
                            }`}>
                              {item.badge.text}
                            </span>
                          )}
                          
                          {item.hasSubmenu && (
                            <HiChevronRight 
                              size={16} 
                              className={`transition-transform ${isActive ? "rotate-90" : ""}`} 
                            />
                          )}
                        </div>
                      )}
                    </Link>

                    {showExpanded && isActive && item.hasSubmenu && (
                      <ul className="pl-12 py-2 space-y-2">
                        {item.submenu.map((subItem, index) => (
                          <li key={index}>
                            <a 
                              href={subItem.path} 
                              className="block py-1.5 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Onboarding card */}
          {(isExpanded || (isMobile && mobileOpen)) && (
            <div className="p-3 px-4 max-w-sm mx-auto mb-3 2xl:mb-10 text-[#21262A]">
              <div className="border bg-[#f8fafb] rounded-xl p-4 border-zinc-200">
                <div className="text-xs font-semibold">Time sensitive</div>
                <h4 className="font-medium text-sm mt-2 font-medium">Onboarding</h4>
                <p className="text-xs mt-1">83 days left to access a personalized product tour of our tools and features.</p>
                <button className="w-full mt-3 py-1.5 bg-white border border-zinc-200 hover:bg-gray-200 rounded-lg text-sm">Connect to expert</button>
              </div>
            </div>
          )}

          {/* Toggle button - now properly placed at the bottom */}
          {!isMobile && (
            <div className="absolute -bottom-3 2xl:bottom-6 right-4">
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="w-6 shadow-sm"
              >
                <div className="w-5 h-5 flex border-2">
                  <div className={`w-1/2 h-full  ${isExpanded ? "bg-white" : "bg-[#277e89]"}`}></div>
                  <div className={`w-1/2 h-full  ${isExpanded ? "bg-[#277e89]" : "bg-white"}`}></div>
                </div>
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Content spacing */}
      <div className={`flex-1 transition-all duration-300 ${!isMobile ? (isExpanded ? "ml-[230px]" : "ml-[60px]") : "ml-0"}`} />
    </div>
  );
}
