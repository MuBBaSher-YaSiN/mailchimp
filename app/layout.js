// "use client";

// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/Sidebar";
// import HelpSidebar from "@/components/HelpSidebar";
// import LoadingProvider from "@/components/LoadingProvider"; // ✅
// import "./globals.css";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
//   const [helpSidebarOpen, setHelpSidebarOpen] = useState(false);

//   useEffect(() => {
//     const handleToggleHelpSidebar = (event) => {
//       setHelpSidebarOpen(event.detail.isOpen);
//     };
//     document.addEventListener("toggleHelpSidebar", handleToggleHelpSidebar);
//     return () => {
//       document.removeEventListener("toggleHelpSidebar", handleToggleHelpSidebar);
//     };
//   }, []);

//   const isLoginPage = pathname === "/" || pathname === "/login";
//   const isCreate = pathname === "/create";

//   if (isLoginPage) {
//     return (
//       <html lang="en">
//         <head />
//         <body>
//           <LoadingProvider>
//             {children}
//           </LoadingProvider>
//         </body>
//       </html>
//     );
//   }
//   if (isCreate) {
//     return (
//       <html lang="en">
//         <head />
//         <body>
//           <LoadingProvider>
//             {children}
//           </LoadingProvider>
//         </body>
//       </html>
//     );
//   }
//   return (
//     <html lang="en">
//       <head />
//       <body className="overflow-x-hidden">
//         <LoadingProvider>
//           <Navbar />
//           <div className="flex h-screen w-screen overflow-hidden">
//             <div className="flex-shrink-0 py-1 items-center border-r border-gray-300 max-w-[230px]">
//               <Sidebar />
//             </div>
//             <div className="flex-1 flex min-w-0 w-full">
//               <main className="flex-1 overflow-y-auto bg-[#f9f9f9]">
//                 {children}
//               </main>
//             </div>
//             <HelpSidebar isOpen={helpSidebarOpen} onClose={() => setHelpSidebarOpen(false)} />
//           </div>
//         </LoadingProvider>
//       </body>
//     </html>
//   );
// }




































"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import HelpSidebar from "@/components/HelpSidebar";
import LoadingProvider from "@/components/LoadingProvider";
import "./globals.css";

// ✅ Import Inter font
// import { Inter } from 'next/font/google';
// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
// });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [helpSidebarOpen, setHelpSidebarOpen] = useState(false);

  useEffect(() => {
    const handleToggleHelpSidebar = (event) => {
      setHelpSidebarOpen(event.detail.isOpen);
    };
    document.addEventListener("toggleHelpSidebar", handleToggleHelpSidebar);
    return () => {
      document.removeEventListener("toggleHelpSidebar", handleToggleHelpSidebar);
    };
  }, []);

  const isLoginPage = pathname === "/" || pathname === "/login";
  const isCreate = pathname === "/create";

  if (isLoginPage || isCreate) {
    return (
      <html lang="en" >
        <head />
        <body>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" >
      <head />
      <body className="overflow-x-hidden">
        <LoadingProvider>
          <Navbar />
          <div className="flex h-screen w-screen overflow-hidden">
            <div className="flex-shrink-0 py-1 items-center border-r border-gray-300 max-w-[239px]">
              <Sidebar />
            </div>
            <div className="flex-1 flex min-w-0 w-full">
              <main className="flex-1 overflow-y-auto bg-[#f9f9f9]">
                {children}
              </main>
            </div>
            <HelpSidebar isOpen={helpSidebarOpen} onClose={() => setHelpSidebarOpen(false)} />
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
