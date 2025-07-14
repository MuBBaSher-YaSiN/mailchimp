// // components/Loader.js

// export default function Loader() {
//   return (
//     <div className="flex justify-center items-center h-full">
//       <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-gray-200 border-t-transparent [--spinner-color:#267c89]" style={{ borderTopColor: 'var(--spinner-color)' }}></div>
//     </div>
//   );
// }









// components/Loader.js
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}



