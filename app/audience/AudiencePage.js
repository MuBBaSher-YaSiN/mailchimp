"use client";

import { useState, useEffect } from 'react';
import Header from './Header';

export default function AudiencePage() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    // Dummy data based on the image
    const audienceData = [
        {
            id: 1,
            email: 'ahmed@growix.com',
            address: '',
            phone: '',
            birthday: '',
            company: '',
            tags: [],
            emailMarketing: 'Subscribed',
            source: 'Admin Add',
            rating: 2,
            dateAdded: '6/28/25 2:02PM',
            lastChanged: '6/28/25 2:02PM'
        },
        {
            id: 2,
            email: 'ahmedsji@aol.com',
            address: '',
            phone: '',
            birthday: '',
            company: '',
            tags: [],
            emailMarketing: 'Subscribed',
            source: 'Admin Add',
            rating: 2,
            dateAdded: '6/28/25 2:02PM',
            lastChanged: '6/28/25 2:02PM'
        },
        {
            id: 3,
            email: 'a.sj@live.co.uk',
            address: '',
            phone: '',
            birthday: '',
            company: '',
            tags: [],
            emailMarketing: 'Subscribed',
            source: 'Admin Add',
            rating: 2,
            dateAdded: '6/28/25 2:01PM',
            lastChanged: '6/28/25 2:01PM'
        },
        {
            id: 4,
            email: 'testing@oraclesol.com',
            address: {
                line1: 'ORACLESOL',
                line2: '1405 Dewar Dr',
                line3: 'Rock Springs, WY 82901-5812',
                country: 'USA'
            },
            phone: '',
            birthday: '',
            company: '',
            tags: [],
            emailMarketing: 'Subscribed',
            source: 'Admin Add',
            rating: 2,
            dateAdded: '6/28/25 1:50PM',
            lastChanged: '6/28/25 1:50PM'
        }
    ];

    // Handle select all
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setSelectedRows(selectAll ? [] : audienceData.map(item => item.id));
    };

    // Handle individual row selection
    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    // Update selectAll when all rows are manually selected/deselected
    useEffect(() => {
        if (selectedRows.length === audienceData.length) {
            setSelectAll(true);
        } else if (selectedRows.length === 0) {
            setSelectAll(false);
        }
    }, [selectedRows, audienceData.length]);

    return (
        <div className="bg-white p-4">
            <div className="flex flex-wrap items-center gap-3 mt-16">
                {/* Segments dropdown */}
                <div className="relative">
                    <button className="flex items-center justify-between w-36 h-9 px-3 py-1 bg-white border border-[#dcdcdc] rounded-lg text-[14px] text-[#21262A]">
                        <span>Segments</span>
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Subscription status dropdown */}
                <div className="relative">
                    <button className="flex items-center justify-between  h-9 px-3 py-1 bg-white border border-[#dcdcdc] rounded-lg text-[14px] text-[#21262A]">
                        <span>Subscription status</span>
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Tags dropdown */}
                <div className="relative">
                    <button className="flex items-center justify-between w-24 h-9 px-3 py-1 bg-white border border-[#dcdcdc] rounded-lg text-[14px] text-[#21262A]">
                        <span>Tags</span>
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Signup source dropdown */}
                <div className="relative">
                    <button className="flex items-center justify-between w-36 h-9 px-3 py-1 bg-white border border-[#dcdcdc] rounded-lg text-[14px] text-[#21262A]">
                        <span>Signup source</span>
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                {/* Advanced filters link */}
                <button className="flex items-center text-[#21262A]] font-medium text-[14px] ml-2">
                    <svg className="h-5 w-5 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" />
                    </svg>
                    Advanced filters
                </button>
            </div>

            {/* Stats row */}
            <div className="flex justify-between items-center mb-6">
                <div className="text-[16px] mt-2 text-[#21262A]">
                    <span className="text-[#017E89] font-medium">4</span> total contacts. <span className="text-[#017E89] font-medium">4</span> email subscribers.
                </div>

                <a href="#" className="text-[#21262A] hover:bg-[#f0f4f6] hover:rounded-lg px-3 py-2 text-[14px]">See audience analytics</a>
            </div>

            {/* Search and actions row */}

            {/* Table with fixed columns */}
            <div className="overflow-x-auto border rounded-lg border-[#e6e6e6]">
                <div className="relative">
                    <style jsx>{`
            /* Fixed column styles */
            .table-container {
              position: relative;
              overflow-x: auto;
            }
            
            .sticky-checkbox {
              position: sticky;
              left: 0;
              z-index: 30;
            }
            
            .sticky-email {
              position: sticky;
              left: 48px;
              z-index: 20;
            }
            
            /* Ensure background matches the current state */
            tr.hover\:bg-\[\#f9f9f9\]:hover .sticky-checkbox,
            tr.hover\:bg-\[\#f9f9f9\]:hover .sticky-email {
              background-color: #f9f9f9;
            }
            
            tr .sticky-checkbox {
              background-color: white;
              box-shadow: 2px 0 3px -2px rgba(0,0,0,0.05);
            }
            
            tr .sticky-email {
              background-color: white;
              box-shadow: 2px 0 3px -2px rgba(0,0,0,0.05);
            }
            
            tr:nth-child(1) .sticky-checkbox,
            tr:nth-child(1) .sticky-email {
              background-color: #f6f6f6;
            }
          `}</style>
                    <div className="flex justify-between items-center mb-2 py-5 border-b border-[#e6e6e6] p-3">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search contacts"
                                className="pl-10 pr-4 py-1 border border-[#dcdcdc] rounded-lg text-[14px] w-40 focus:outline-none focus:border-[#007c89]"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Columns button */}
                            <button className="flex items-center text-[#333] text-[14px]">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Columns
                            </button>

                            {/* Export audience button */}
                            <button className="flex items-center text-[#333] text-[14px]">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Export audience
                            </button>
                        </div>
                    </div>

                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#f0f4f6] border-b border-[#e6e6e6] text-left">
                                <th className="p-3 w-12 sticky-checkbox">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                            className="h-4 w-4 text-[#007c89] border-[#ccc] rounded"
                                        />
                                        <svg className="w-4 h-4 ml-2 text-[#666]" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </th>
                                <th className="p-3 py-4 w-48 sticky-email bg-[#f0f4f6]  font-medium text-[14px] text-[#333]">Email Address</th>
                                <th className="p-3 py-4 w-[150px] min-w-[150px] font-medium text-[14px] text-[#333]">Address</th>
                                <th className="p-3 py-4 w-[150px] min-w-[150px] font-medium text-[14px] text-[#333]">Phone Number</th>
                                <th className="p-3 py-4 w-[150px] min-w-[150px] font-medium text-[14px] text-[#333]">Birthday</th>
                                <th className="p-3 py-4 w-[150px] min-w-[150px] font-medium text-[14px] text-[#333]">Company</th>
                                <th className="p-3 py-4 w-[150px] min-w-[150px] font-medium text-[14px] text-[#333]">Tags</th>
                                <th className="p-3 py-4 w-[150px] min-w-[150px] font-medium text-[14px] text-[#333]">Email Marketing</th>
                                <th className="p-3 py-4 w-[150px] min-w-[150px] font-medium text-[14px] text-[#333]">Source</th>
                                <th className="p-3 py-4 w-[150px] min-w-[150px] font-medium text-[14px] text-[#333]">Rating</th>
                                <th className="p-3 py-4 w-[150px] min-w-[150px] font-medium text-[14px] text-[#333]">Contact Date Added</th>
                                <th className="p-3 py-4 w-[150px] min-w-[150px] font-medium text-[14px] text-[#333]">Last Changed</th>
                            </tr>
                        </thead>

                        <tbody>
                            {audienceData.map((contact) => (
                                <tr key={contact.id} className="border-b border-[#e6e6e6] hover:bg-[#f9f9f9]">
                                    <td className="p-3 sticky-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(contact.id)}
                                            onChange={() => handleSelectRow(contact.id)}
                                            className="h-4 w-4 text-[#007c89] border-[#ccc] rounded"
                                        />
                                    </td>
                                    <td className="p-3 sticky-email">
                                        <a href="#" className="text-[#727E85] text-[14px] hover:underline">{contact.email}</a>
                                    </td>
                                    <td className="p-3">
                                        {contact.address && typeof contact.address === 'object' ? (
                                            <div className="text-[14px] text-[#21262A]">
                                                <div>{contact.address.line1}</div>
                                                <div>{contact.address.line2}</div>
                                                <div>{contact.address.line3}</div>
                                                <div>{contact.address.country}</div>
                                            </div>
                                        ) : (
                                            contact.address
                                        )}
                                    </td>
                                    <td className="p-3">{contact.phone}</td>
                                    <td className="p-3">{contact.birthday}</td>
                                    <td className="p-3">{contact.company}</td>
                                    <td className="p-3">
                                        {contact.tags && contact.tags.length > 0 ? (
                                            <div className="flex flex-wrap gap-1">
                                                {contact.tags.map((tag, idx) => (
                                                    <span key={idx} className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : null}
                                    </td>
                                    <td className="p-3">
                                        <span className="bg-[#e3f3e3] text-[#21262A] text-xs font-medium px-2 py-0.5 rounded-sm">
                                            {contact.emailMarketing}
                                        </span>
                                    </td>
                                    <td className="p-3 text-[14px] text-[#21262A]">{contact.source}</td>
                                    <td className="p-3">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-6 h-6 ${i < contact.rating ? 'text-[#c84f00]' : 'text-[#e0e0e0]'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-3 text-[14px] text-[#21262A]">{contact.dateAdded}</td>
                                    <td className="p-3 text-[14px] text-[#21262A]">{contact.lastChanged}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Optional pagination control */}
            {/* <div className="flex justify-center items-center mt-4 opacity-60">
                <div className="flex items-center">
                    <button className="p-1">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className="w-64 h-1 bg-gray-300 mx-2 relative">
                        <div className="absolute inset-0 bg-gray-500 rounded-full"></div>
                    </div>
                    <button className="p-1">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div> */}
        </div>
    );
}
