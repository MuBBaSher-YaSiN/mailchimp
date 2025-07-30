// components/campaign/ListViewTab.js
"use client";

import { useState } from 'react';

export default function ListViewTab() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      {/* Search bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full pl-10 text-[14px] pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#007c89] focus:border-[#007c89]"
            placeholder="Search campaigns"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center ">
            <span className="text-sm text-[#4C555B]">Type:</span>
            <div className="relative">
              <select className="appearance-none text-[#017E89] pr-7 pl-2 py-1 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
                <option>All</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center ">
            <span className="text-sm text-[#4C555B]">Status:</span>
            <div className="relative">
              <select className="appearance-none text-[#017E89] pr-7 pl-2 py-1 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
                <option>All</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-sm text-[#4C555B]">Folder:</span>
            <div className="relative">
              <select className="appearance-none text-[#017E89] pr-7 pl-2 py-1 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
                <option>All</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center ">
            <span className="text-sm text-[#4C555B]">Date:</span>
            <div className="relative">
              <select className="appearance-none text-[#017E89] pr-7 pl-2 py-1 rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
                <option>All</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="w-4 h-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <button className="text-sm text-gray-100">Clear</button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[13px] text-[#4C555B]">Sort by:</span>
          <div className="relative">
            <select className="appearance-none pr-8 pl-3 py-1 text-[#017E89] hover:bg-[#d5dee3] rounded text-[13px] bg-white focus:outline-none focus:ring-1 focus:ring-[#007c89]">
              <option>Date edited</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#017E89]">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <button className="p-1">
            <svg className="w-5 h-5 text-[#017E89]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Campaign Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-t border-b border-gray-200">
              <th className="w-10 py-3 pr-3 text-left">
                <input type="checkbox" className="h-4 w-4 text-[#007c89] rounded border-gray-300 focus:ring-[#007c89]" />
              </th>
              <th className="py-3 px-3 text-left font-medium text-[#4C555B] text-sm">Name</th>
              <th className="py-3 px-3 text-left font-medium text-[#4C555B] text-sm">Status</th>
              <th className="py-3 px-3 text-left font-medium text-[#4C555B] text-sm">Audience</th>
              <th className="py-3 px-3 text-left font-medium text-[#4C555B] text-sm">Analytics</th>
              <th className="py-3 px-3 text-right font-medium text-[#4C555B] text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-4 pr-3">
                <input type="checkbox" className="h-4 w-4 text-[#007c89] rounded border-gray-300 focus:ring-[#007c89]" />
              </td>
              <td className="py-4 px-3 xl:w-[416px] flex flex-col gap-1">
                <div className="mb-1">
                  <a href="#" className="font-semibold text-[#007c89]  hover:underline">Health Insurance</a>
                </div>
                <div className="flex items-center text-sm text-[#21262A]">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Regular email
                </div>
                <div className="text-[14px] font-[400] text-[#4C555B] mt-1">
                  Last edited Sat, Jun 28, 02:14 PM by Marketing OS
                </div>
                <span className=" items-center px-2.5 py-0.5 my-3 w-fit rounded-md text-xs font-medium bg-[#e2e9ed] text-gray-800">
                  Draft
                </span>
                <a href="#" className="text-[#007c89] w-fit font-medium border-b-2 border-dashed text-xs">ORACLESOL</a>
              </td>
              {/* <td className="py-4 px-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#e2e9ed] text-gray-800">
                  Draft
                </span>
              </td> */}
              {/* <td className="py-4 px-3">
                <a href="#" className="text-[#007c89] border-b-2 border-dashed text-xs">ORACLESOL</a>
              </td> */}
              <td className="py-4 px-3">
                {/* Empty Analytics column */}
              </td>
              <td className="py-4 px-3">
                <div className="flex justify-end rounded items-center">
                  <div className='w-[90px] flex border border-zinc-200  rounded-lg items-center'>
                    <button className="text-[#21262A] px-3  hover:text-[#005d66] text-sm font-medium">Edit</button>
                    <div className="relative border-l border-zinc-200 ml-2">
                      <button className="text-gray-400 pt-1 pl-1.5 hover:text-gray-600">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                        {/* <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                        </svg> */}

                      </button>
                    </div>
                  </div>

                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-700">
          Showing results 1 - 1 of 1
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Page</span>
          <div className="inline-block w-16">
            <input 
              type="text" 
               
              className="w-full py-1 px-2 text-center border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#007c89] focus:border-[#007c89]" 
            />
          </div>
          <span className="text-sm text-gray-700">of 1</span>
          <div className="flex">
            <button className="p-1 border border-gray-300 rounded-l text-gray-400">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="p-1 border-t border-b border-r border-gray-300 text-gray-400">
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div> */}


      <div className="flex items-center justify-end gap-3 mt-5">
        <div className="">
          Showing results 1 - 1 of 1
        </div>

        <div className="flex items-center space-x-2">
          <button className="px-2 py-1  rounded-l text-gray-400 disabled:opacity-50">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z" />
            </svg>
          </button>

          <button className="px-2 py-1  text-gray-400 disabled:opacity-50">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <span className="text-sm">Page</span>

          <input
            type="text"
            value="1"
            className="w-12 py-1 px-2 text-center border border-gray-300 p-6 w-[62px] h-[45px] rounded text-sm bg-[#d5dee3]"
          />

          <span className="text-sm">of 1</span>

          <button className="px-2 py-1  text-gray-400 disabled:opacity-50">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>

          <button className="px-2 py-1  rounded-r text-gray-400 disabled:opacity-50">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
