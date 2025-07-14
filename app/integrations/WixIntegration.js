"use client";

import Image from "next/image";
import { useState } from "react";

export default function WixIntegration() {
  const [selectedOption, setSelectedOption] = useState("Popularity");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mx-auto p-4 my-4 bg-white">
      {/* Main Card Section */}
      <div className=" rounded-lg overflow-hidden flex shadow-md">
        {/* Image Section */}
        <div className="p-5 bg-[#d99536]">
          <img
            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/ftu/gtkm/finish_wix.png"
            alt="Wix website interface"
            width={230}
            height={50}
            className="object-cover"
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="w-1/2 p-5 bg-white flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold mb-2">Create your website with Wix</h2>
            <p className="text-sm mb-4">
              Build a Wix website to boost your business's online visibility. Use your website to drive conversion and convert visitors into loyal customers.
            </p>
          </div>
          <div className="space-x-2">
            <button className="bg-[#277e89] text-white px-4 py-2 rounded text-sm">Get started</button>
            <button className="bg-[#e2e9ed] text-black px-4 py-2 rounded text-sm">Connect existing Wix site</button>
          </div>
        </div>
      </div>

      {/* Secondary Text Section */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Bring your tools together to make the most of your data</h3>
          <p className="mt-4">
            Sync contacts, content, engagement data, and more from your other apps and platforms.
          </p>
        </div>
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className="text-[#2e8b57] px-2 py-1 border rounded text-sm"
        >
          <option value="Popularity">Popularity</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
}