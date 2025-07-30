"use client";

import { useState } from "react";

export default function IntegrationCards() {
    const cards = [
        {
            logo: "https://images.ctfassets.net/yzco4xsimv0y/1v24BNOj7S49nOlj73lcLG/43a07134bad86a182f38b8b747d92191/snap-logo.png", // Shopify logo placeholder
            title: "Shopify",
            description: "Sync Shopify customers, products, and more to Mailchimp to create highly targeted campaigns",
            installs: "15,000+ installs",
            badge: "Made by Mailchimp",
        },
        {
            logo: "https://images.ctfassets.net/yzco4xsimv0y/7otpAMMiclegCyJreVVXom/40a04942aa1dedf272b736f9f633636c/meta.svg", // Squarespace logo placeholder
            title: "Squarespace Integration",
            description: "Squarespace 6 forms integrate easily with Mailchimp lists.",
            installs: "15,000+ installs",
            badge: "Made by Mailchimp",
        },
        {
            logo: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/assets/3p_logos/google_ads.png", // Instagram logo placeholder
            title: "Instagram Content Blocks",
            description: "Free Plan Available\nDrive engagement with your Instagram posts by adding Instagram content blocks to your Mailchimp email",
            installs: "15,000+ installs",
            badge: "Made by Mailchimp",
        },
        {
            logo: "https://images.ctfassets.net/yzco4xsimv0y/4ktvkEPJ0SChqP69iZB4xR/520335995fc4ecdafc1172b976765760/Group_1197134165-1.png", // Squarespace logo placeholder
            title: "Squarespace Integration",
            description: "Squarespace 6 forms integrate easily with Mailchimp lists.",
            installs: "15,000+ installs",
            badge: "Made by Mailchimp",
        },
        {
            logo: "https://images.ctfassets.net/yzco4xsimv0y/1rFHUX2VBmsu6YCkYS0CsM/5ea7100c6fb456d07e1b9aa348fee19f/logo_black.png", // Instagram logo placeholder
            title: "Instagram Content Blocks",
            description: "Free Plan Available\nDrive engagement with your Instagram posts by adding Instagram content blocks to your Mailchimp email",
            installs: "15,000+ installs",
            badge: "Made by Mailchimp",
        },
        {
            logo: "https://images.ctfassets.net/yzco4xsimv0y/1CrRnHjMFpH9Ajg07pYxP6/7fc584044f16c760ba5968c4593c730e/logo-woocommerce_icon.png", // WordPress logo placeholder
            title: "WordPress",
            description: "Boost visitor engagement and grow your audience with the Mailchimp block",
            installs: "15,000+ installs",
            badge: "Made by Mailchimp",
        },
        {
            logo: "https://images.ctfassets.net/yzco4xsimv0y/6Fo4onh7f6Y1CZC9sUNktK/1ef60ca4f39b00058634df5c822f6dec/shopify_logo.png", // Shopify logo placeholder
            title: "Shopify",
            description: "Sync Shopify customers, products, and more to Mailchimp to create highly targeted campaigns",
            installs: "15,000+ installs",
            badge: "Made by Mailchimp",
        },
        {
            logo: "https://images.ctfassets.net/yzco4xsimv0y/saPGuhNkMp7qL1eiZe4ww/b2d288b635464854c959082f9b9caed3/squarespace-logo-stacked-black.png", // Squarespace logo placeholder
            title: "Squarespace Integration",
            description: "Squarespace 6 forms integrate easily with Mailchimp lists.",
            installs: "15,000+ installs",
            badge: "Made by Mailchimp",
        },
        {
            logo: "https://images.ctfassets.net/yzco4xsimv0y/5G0AsxvIPy8irNak22zSgp/5487d5074a9e2010beb936b8119f07e1/instagram_content_blocks_logo.png", // Instagram logo placeholder
            title: "Instagram Content Blocks",
            description: "Free Plan Available\nDrive engagement with your Instagram posts by adding Instagram content blocks to your Mailchimp email",
            installs: "15,000+ installs",
            badge: "Made by Mailchimp",
        },
        {
            logo: "https://images.ctfassets.net/yzco4xsimv0y/2X3kXvIpOYZb9AlsGMNvkl/3f6792c5d7b0940931ea765ce3ac5803/Wordpress_Logo.png", // WordPress logo placeholder
            title: "WordPress",
            description: "Boost visitor engagement and grow your audience with the Mailchimp block",
            installs: "15,000+ installs",
            badge: "Made by Mailchimp",
        },
    ];

    return (
        <div className="mx-auto bg-white mb-8">
            {/* Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 px-4  gap-6">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white 2xl-w-[414px] py-16 border border-gray-300 rounded-lg hover:border hover:border-black shadow-sm p-4 flex flex-col items-center justify-start">
                        {/* Badge */}
                        <div className="mb-3  w-[100%] flex justify-end  rounded">
                            <span className="text-xs  px-2 py-1 rounded-lg text-gray-500 bg-gray-100">{card.badge}</span></div>
               border          {/* Logo */}
                        <img src={card.logo} alt={`${card.title} logo`} className="w-22 h-22 mb-4 object-contain" />
                        {/* Title */}
                        <h3 className="text-[24px] font-medium text-[#21262A] mb-2">{card.title}</h3>
                        {/* Description */}
                        <p className="text-[16px] text-[#4C555B] mb-4 whitespace-pre-line">{card.description}</p>
                        {/* Installs */}
                        <p className="text-xs text-gray-600">{card.installs}</p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {/* <div className="mt-4 text-gray-600 text-right space-x-3">
                1 - 10 of 334 
                 <span className="cursor-pointer text-xl">&lt;</span> <span className="cursor-pointer text-xl">&lt;</span>{" "}
                <span className="cursor-pointerx text-xl">&gt;</span> <span className="cursor-pointer text-xl">&gt;</span>
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