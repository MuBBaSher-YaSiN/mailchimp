"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MailchimpWixPromo() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full max-w-[1248px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
        {/* Left content */}
        <div className="w-full lg:w-1/2">
          {/* Logo */}
          <div className="mb-6">
            <div className="h-8">
              <img
                src="https://www.svgrepo.com/show/362237/monkey.svg"
                width={50}
                height={16}
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-[34px] font-[550] text-[#21262A] mb-4 leading-tight">
            Elevate your Business with a Wix Website
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-[16px] text-[#21262A] mb-6">
            We've partnered with Wix – an intuitive website builder that helps
            you build your business presence online
          </p>

          {/* Why use section */}
          <h3 className="text-lg sm:text-xl font-[550] text-[#21262A] mb-4">
            Why use Wix with Mailchimp?
          </h3>

          {/* Benefits list */}
          <ul className="space-y-3 sm:space-y-4 mb-8">
            {[
              "Launch a professional website in minutes",
              "Grow your audience by automatically syncing your subscribers, leads, and customers",
              "Automate your email and SMS campaigns based on website behavior*",
              "Choose from 900+ pre-designed templates or use the AI website builder",
              "Step by step help from a dedicated Wix support team"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#277e89] mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                  >
                    <path d="M6.75 12.127L3.622 9L2.558 10.057L6.75 14.25L15.75 5.25L14.693 4.193L6.75 12.127Z" />
                  </svg>
                </span>
                <span className="text-sm sm:text-[16px] text-[#21262A]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-[#277e89] hover:bg-[#1b5a62] text-white px-4 py-2 rounded transition-colors text-sm sm:text-[14px] font-medium">
              Get started for free
            </button>
            <button className="bg-[#E2E9ED] hover:bg-[#d5dee3] text-[#21262A] px-4 py-2 rounded transition-colors text-sm sm:text-[14px] font-medium">
              Connect existing Wix site
            </button>
          </div>
        </div>

        {/* Right image - hidden on mobile */}
        <div className="w-full lg:w-1/2 relative hidden lg:flex">
          <div
            className={`transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/wix-and-mailchimp.png"
              alt="Wix website with Mailchimp integration"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}