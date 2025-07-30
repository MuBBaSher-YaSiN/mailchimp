"use client";

import React from 'react';
import Link from 'next/link';

export default function SignUpFormHero() {
    return (
        <div className="w-full bg-[#deeaf7] py-16 md:py-20">
            <div className="max-w-[1248px] mx-auto px-1 text-center">
                {/* Main heading */}
                <h1 className="text-[40px] font-medium text-[#21262A] mb-6 max-w-[650px] mx-auto">
                    Transform site visitors<br className="hidden md:block" /> into email and SMS subscribers
                </h1>

                {/* Subheading */}
                <p className=" text-[#21262A] mb-6 max-w-[550px] mx-auto">
                    Grow your email and SMS audience with multiple, customizable forms while to personalize your marketing.
                </p>

                {/* See Terms Link */}
                <div className="mb-10">
                    <Link href="/terms" className="text-[12px] font-medium text-[#21262A] ">
                        See Terms
                    </Link>
                </div>

                {/* Form Preview Card */}
               
                    <div className="flex flex-col justify-center  relative -top-6 md:flex-row">
                        {/* Left side - Image */}
                        <div className="w-full md:w-[502px] items-center  md:absolute ">
                            <img
                                src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/forms-landing-pages/forms-dashboard/sign_up_form.png"
                                alt="Person using green exercise rope"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
               
            </div>
        </div>
    );
}
