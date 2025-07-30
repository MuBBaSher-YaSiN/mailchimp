"use client";

import Image from "next/image";
import { useState } from "react";

export default function WixIntegration() {
  const [selectedOption, setSelectedOption] = useState("Popularity");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mx-auto px-4 mb-5 bg-white">
      {/* Main Card Section */}
      <div className=" rounded-lg overflow-hidden flex shadow-md">
        {/* Image Section */}
        <div className="px-2 flex items-center bg-[#d99536]">
          <img
            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/ftu/gtkm/finish_wix.png"
            alt="Wix website interface"
            width={210}
            height={50}
            className="object-cover my-auto"
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="w-1/2 p-5 bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-[16px] text-[#21262A] font-medium mb-2">Create your website with Wix</h2>
            <p className="text-sm mb-4 text-[#4C555B]">
              Build a Wix website to boost your business's online visibility. Use your website to drive conversion and convert visitors into loyal customers.
            </p>
          </div>
          <div className="space-x-2">
            <button className="bg-[#277e89] text-white px-4 py-1.5 rounded-lg text-sm">Get started</button>
            <button className="bg-[#e2e9ed] text-black px-4 py-1.5 rounded-lg text-sm">Connect existing Wix site</button>
          </div>
        </div>
      </div>

      {/* Secondary Text Section */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-medium text-[#21262A] border-b pb-4 border-zinc-300">Bring your tools together to make the most of your data</h3>
          <p className="mt-4 text-[#21262A]">
            Sync contacts, content, engagement data, and more from your other apps and platforms.
          </p>
        </div>
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="text-[#21262A] px-3 py-2 border border-zinc-300 rounded text-sm"
        >
          <option value="Popularity">Popularity</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
}