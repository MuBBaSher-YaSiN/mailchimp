'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FileManager() {
    const [selectedFiles, setSelectedFiles] = useState({});
    const [viewMode, setViewMode] = useState('list');

     const files = [
        {
            id: 1,
            name: 'ab-3-1-9ffa8.jpg',
            date: 'Sat June 28, 2025 10:51 am',
            dimensions: '521 x 529 px',
            size: '33.9kb',
            type: 'Marketing OS',
            thumbnail: '/thumbnails/ab-3-1-9ffa8.jpg'
        },
        {
            id: 2,
            name: 'counter-bg-2-1-464a5.jpg',
            date: 'Sat June 28, 2025 10:51 am',
            dimensions: '3813 x 655 px',
            size: '94.5kb',
            type: 'Marketing OS',
            thumbnail: '/thumbnails/counter-bg-2-1-464a5.jpg'
        },
        {
            id: 3,
            name: 'cta-bg-1-1-d6c0e.jpg',
            date: 'Sat June 28, 2025 10:51 am',
            dimensions: '3486 x 716 px',
            size: '104.5kb',
            type: 'Marketing OS',
            thumbnail: '/thumbnails/cta-bg-1-1-d6c0e.jpg'
        },
        {
            id: 4,
            name: 'hero-1-1-1536x680-bca16.jpg',
            date: 'Sat June 28, 2025 10:51 am',
            dimensions: '1536 x 680 px',
            size: '80.6kb',
            type: 'Marketing OS',
            thumbnail: '/thumbnails/hero-1-1-1536x680-bca16.jpg'
        }
    ];

    const toggleFileSelection = (id) => {
        setSelectedFiles(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Navigation Tabs - Horizontal Scrollable */}
            <div className="border-b border-gray-200 ">
                <nav className="flex px-4 sm:px-6 lg:px-8 min-w-max">
                    <div className="flex sm:space-x-3 md:space-x-8">
                        <a href="#" className="border-b-2 border-[#017e89] text-[#21262A] inline-flex items-center px-1 py-4 text-xs sm:text-base whitespace-nowrap">
                            Uploads
                        </a>
                        <a href="#" className="text-[#21262A] hover:text-gray-700 inline-flex items-center px-1 py-4 text-xs sm:text-base whitespace-nowrap">
                            My products
                        </a>
                        <a href="#" className="text-[#21262A] hover:text-gray-700 inline-flex items-center px-1 py-4 text-xs sm:text-base whitespace-nowrap">
                            Instagram
                        </a>
                        <a href="#" className="text-[#21262A] hover:text-gray-700 inline-flex items-center px-1 py-4 text-xs sm:text-base whitespace-nowrap">
                            Giphy
                        </a>
                        <a href="#" className="text-[#21262A] hover:text-gray-700 inline-flex items-center px-1 py-4 text-xs sm:text-base whitespace-nowrap">
                            Canva
                        </a>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                {/* Search and Upload */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="w-full sm:max-w-[767px] relative">
                        {/* Search input */}
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#277e89] focus:border-[#277e89] text-sm"
                            placeholder="Search files"
                        />
                    </div>
                    <div className="flex w-full sm:w-auto">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-l-md text-white bg-[#277e89] hover:bg-[#1d6670] focus:outline-none w-full sm:w-auto justify-center"
                        >
                            Upload
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center px-2 py-2 border text-sm font-medium rounded-r-md text-white bg-[#277e89] hover:bg-[#1d6670] focus:outline-none border-l border-[#1d6670]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Filters and View Options */}
                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex space-x-2 w-full sm:w-auto">
                        <div className="relative inline-block text-left w-full sm:w-auto">
                            <button className="inline-flex justify-between w-full sm:w-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                                <span className="flex items-center text-[14px] text-[#21262A]">
                                    Filter
                                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="relative inline-block text-left w-full sm:w-auto">
                            <button className="inline-flex justify-between w-full sm:w-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                                <span className="flex items-center text-[14px] text-[#21262A]">
                                    Folder
                                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                        <span className="text-[16px] text-[#21262A] font-medium">Sort by</span>
                        <div className="relative inline-block text-left w-full sm:w-auto">
                            <button className="inline-flex justify-between w-full sm:w-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                                <span className="flex items-center">
                                    Newest first
                                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="flex border rounded border-zinc-300">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                                    <rect x="3" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="14" width="7" height="7"></rect>
                                    <rect x="3" y="14" width="7" height="7"></rect>
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <line x1="3" y1="12" x2="21" y2="12"></line>
                                    <line x1="3" y1="18" x2="21" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Files List */}
                <div className="mt-4">
                    {viewMode === 'list' && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {files.map((file, index) => (
                                        <tr key={file.id} className={`${index % 2 === 1 ? 'bg-[#f0f4f6]' : 'bg-white'} hover:bg-gray-100`}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <label className="inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="opacity-0 absolute h-5 w-5 cursor-pointer"
                                                        checked={selectedFiles[file.id] || false}
                                                        onChange={() => toggleFileSelection(file.id)}
                                                    />
                                                    <div className="relative h-5 w-5 border border-gray-300 rounded bg-white flex items-center justify-center">
                                                        {selectedFiles[file.id] && (
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <Image
                                                                    src="https://mcusercontent.com/75236bd76ee8400bc070a75dd/_thumbs/da82141e-f6c9-1935-fe6f-81df98e6465e.jpg"
                                                                    alt="Checkmark"
                                                                    width={26}
                                                                    height={26}
                                                                    className="object-contain"
                                                                    unoptimized={true}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </label>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex-shrink-0 h-16 w-16 border border-gray-200 rounded">
                                                    <div className="h-full w-full bg-gray-800"></div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 mb-0.5 truncate">{file.name}</p>
                                                <p className="text-[14px] text-gray-500 truncate">
                                                    {file.date} • {file.dimensions} • {file.size} • {file.type}
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}