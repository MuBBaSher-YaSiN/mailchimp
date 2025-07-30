"use client";

import { useState } from "react";

export default function FilterPanel() {
  const [checkedItems, setCheckedItems] = useState({
    madeByMailchimp: false,
    featured: false,
    advertising: false,
    analytics: false,
    bookingScheduling: false,
    connectorServices: false,
    contactManagement: false,
    content: false,
    customerService: false,
    design: false,
    developerTools: false,
    eCommerce: false,
    financeAccounting: false,
    formsSurveys: false,
    loyalty: false,
    marketing: false,
    payments: false,
    pointOfSale: false,
    productivity: false,
    socialMedia: false,
    subscriptionManagement: false,
    ticketingEventManagement: false,
    websites: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const discoverItems = [
    { name: "madeByMailchimp", label: "Made By Mailchimp" },
    { name: "featured", label: "Featured" },
  ];

  const categoryItems = [
    { name: "advertising", label: "Advertising" },
    { name: "analytics", label: "Analytics" },
    { name: "bookingScheduling", label: "Booking & Scheduling" },
    { name: "connectorServices", label: "Connector Services" },
    { name: "contactManagement", label: "Contact Management" },
    { name: "content", label: "Content" },
    { name: "customerService", label: "Customer Service" },
    { name: "design", label: "Design" },
    { name: "developerTools", label: "Developer Tools" },
    { name: "eCommerce", label: "E-commerce" },
    { name: "financeAccounting", label: "Finance & Accounting" },
    { name: "formsSurveys", label: "Forms & Surveys" },
    { name: "loyalty", label: "Loyalty" },
    { name: "marketing", label: "Marketing" },
    { name: "payments", label: "Payments" },
    { name: "pointOfSale", label: "Point of Sale" },
    { name: "productivity", label: "Productivity" },
    { name: "socialMedia", label: "Social Media" },
    { name: "subscriptionManagement", label: "Subscription Management" },
    { name: "ticketingEventManagement", label: "Ticketing & Event Management" },
    { name: "websites", label: "Websites" },
  ];

  return (
    <div className="w-[248px] bg-white  px-12 lg:px-0 text-[#21262A]">
      {/* Discover Section */}
      <div className="mb-6">
        <h3 className="font-semibold text-[#21262A] mb-3">Discover</h3>
        {discoverItems.map((item) => (
          <div key={item.name} className="flex my-2 items-center mb-2 my-4">
            <input
              type="checkbox"
              name={item.name}
              checked={checkedItems[item.name]}
              onChange={handleCheckboxChange}
              className="mr-2 appearance-none w-5 h-5 border rounded-lg"
            />
            <label className="text-sm">{item.label}</label>
          </div>
        ))}
      </div>

      {/* Category Section */}
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        {categoryItems.map((item) => (
          <div key={item.name} className="flex items-center mb-2 my-4">
            <input
              type="checkbox"
              name={item.name}
              checked={checkedItems[item.name]}
              onChange={handleCheckboxChange}
              className="mr-2 appearance-none h-5 w-5 border rounded-lg text-zinc-600 focus:ring-blue-500"
            />
            <label className="text-sm">{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}