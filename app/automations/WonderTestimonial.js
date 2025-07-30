"use client";

import React from 'react';
import Image from 'next/image';

export default function WonderTestimonial() {
    return (
        <section className="max-w-[1056px] mx-auto px-6 lg:px-2 py-20 lg:my-8">
            <div className="flex flex-col lg:flex-row items-center md:items-start gap-1 md:gap-10">
                {/* Left Column - Text Content */}
                <div className="lg:max-w-[50%] flex-1 ">
                    {/* Wonder Logo */}
                    <div className="mb-1">
                        <img
                            src="https://cdn-images.mailchimp.com/automations/prebuilt-journeys/wonder_logo.svg"
                            alt="Wonder Logo"
                            className="h-10 w-auto"
                        />
                    </div>

                    {/* Testimonial Content */}
                    <div>
                        <p className="text-[#676767] text-sm my-1">From our customers</p>

                        <h2 className="font-[500] text-[32px] text-[#21262A] ">
                            One of the biggest victories for us is based on one of the flows. We had attendance of our special events increase by 32%.
                        </h2>

                        <p className="text-[#4C555B] text-sm my-3">
                            Michael Paul, Head of Customer Experience at Wonder
                        </p>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex-1 w-full lg:max-w-[50%]">
                    <div className="bg-[#eaeaea] h-full w-full">
                        <img
                            src="https://cdn-images.mailchimp.com/automations/prebuilt-journeys/wonder_dude.jpg"
                            alt="Michael Paul from Wonder"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
