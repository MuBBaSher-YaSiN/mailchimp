"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { IoIosGlobe } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

export default function MailchimpLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/home");
        // Handle login logic here
    };

    return (
        <div className="p-3 h-screen max-lg:border-t-8 lg:border-l-8 border-yellow-300">
            <div className='flex justify-between '>
                <div className="">
                    <img
                        src="https://www.svgrepo.com/show/362237/monkey.svg"
                        alt="Mailchimp"
                        className="w-10"
                    />
                </div>

                <div className="flex items-center w-30 justify-between">
                    <div className="w-5 h-5 mr-2">
                        <IoIosGlobe className='text-[#007C89]' size='22' />
                    </div>
                    <div className="text-[#007C89] text-sm font-medium flex items-center">
                        English
                    </div>
                    <div className=''>
                        <svg className="ml-1" width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="#007C89" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

            </div>

            <div className="flex items-center justify-center mt-6">
                <div className="w-full max-w-[480px] py-4 px-7 border border-zinc-300 rounded-xl">
                    <div className="flex justify-center">
                        <img
                            src="https://www.svgrepo.com/show/362237/monkey.svg"
                            alt="Mailchimp"
                            className="w-14"
                        />
                    </div>

                    <h1 className="text-[32px] mb-4 text-center text-[#241C15] " style={{ fontWeight: 500 }}>
                        Log in to Mailchimp
                    </h1>

                    <div className="text-center mb-6 text-[16px]">
                        <span className="text-[#241C15] font-normal">Need a Mailchimp account? </span>
                        <Link href="/create-account" className="text-[#007C89] font-[525] text-shadow-lg underline">
                            Create an account
                        </Link>
                    </div>

                    {/* Notification */}
                    <div className="bg-[#f9e0fa] border-l-3 border-[#f53ebf] p-3 py-4 mb-6 items-center flex">
                        <svg className="flex-shrink-0 mt-1 text-black" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#E01E5A" fillOpacity="0.2" />
                            <path d="M8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z" fill="#E01E5A" />
                            <path d="M7 4V8H9V4H7Z" fill="#E01E5A" />
                        </svg>

                        <div className="ml-3 text-[13px] text-[#241C15] font-medium">
                            <p>
                                Mailchimp is making some changes to enhance your account security. It might look a little different over the next few weeks, but don't worry, your login won't change.
                            </p>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#21262a] text-[16px] font-medium mb-2">
                                Username or Email
                            </label>
                            <input
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-11 border border-[#DBDEE1] rounded p-3 focus:outline-none focus:border-[#007C89] focus:ring-1 focus:ring-[#007C89]"
                            />
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <label htmlFor="password" className="block text-[#21262a] text-[16px] font-medium">
                                    Password
                                </label>
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="text-[#007C89] font-medium rounded-xl"
                                >
                                    <span>
                                        {showPassword ? (
                                            <span className='flex items-center'>
                                                <FaRegEyeSlash className='mr-2' size={20} /> Hide
                                            </span>
                                        ) : (
                                            <span className='flex items-center'>
                                                <IoEyeOutline className='mr-2' size={20} /> Show
                                            </span>
                                        )}
                                    </span>

                                </button>
                            </div>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-11 border border-[#DBDEE1] rounded p-3 focus:outline-none focus:border-[#007C89] focus:ring-1 focus:ring-[#007C89]"
                            />
                        </div>

                        <div className="mb-4 flex items-center">
                            <input
                                id="rememberMe"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="h-6 w-6 text-[#007C89] border-[#DBDEE1]  rounded accent-[#007C89] focus:ring-[#007C89]"
                            />
                            <label htmlFor="rememberMe" className="ml-2 font-medium text-[#241C15]">
                                Keep me logged in
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#007C89] text-sm hover:bg-[#005D66] text-white rounded py-1.5 font-medium flex justify-center items-center"
                            onClick={handleSubmit}
                        >
                            <CiLock size={20} className="mr-2" />
                            Log in
                        </button>
                    </form>

                    <div className="flex max-w-[320px] mx-auto justify-between mt-4 text-[16px]">
                        <Link href="/forgot-username" className="text-[#007C89] underline font-medium ">
                            Forgot username?
                        </Link>
                        <Link href="/forgot-password" className="text-[#007C89] underline font-medium">
                            Forgot password?
                        </Link>
                    </div>

                    <div className="my-5 pt-6 text-[16px] text-center  border-t border-[#E6E6E6]">
                        <p className="mb-4 p-0 font-medium text-[#241C15]">
                            Or, if you created your Mailchimp account with Google:
                        </p>

                        <button
                            type="button"
                            className="w-full border rounded-lg py-2 flex justify-center items-center"
                        >
                            <svg width="24" height="24" viewBox="0 0 18 18" className="mr-2  w-10">
                                <path fill="#EA4335" d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"></path>
                                <path fill="#4285F4" d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"></path>
                                <path fill="#FBBC05" d="M3.88 10.78c-.19-.51-.3-1.05-.3-1.6 0-.56.11-1.1.29-1.6l-2.91-2.26a9 9 0 000 7.72l2.92-2.26z"></path>
                                <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"></path>
                            </svg>
                            <p className='w-full text-[13px] text-[#241C15]'>
                                Continue with Google
                            </p>


                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
