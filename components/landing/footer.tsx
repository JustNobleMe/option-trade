"use client";
import React, { useState } from "react";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <footer className="flex flex-col pb-8 bg-purple-50">
            <div className="container mx-auto flex flex-col justify-between items-center">
            <div className="text-3xl font-bold mb-7 pt-10">Trade<span className="text-purple-900">Pro</span></div>
            <div className="text-xl font-bold mb-2 text-gray-500">Subscribe to our newsletter</div>
            <div className="flex mb-4 pb-8 md:mb-0">
                <div className="relative">
                    <input type="email" placeholder="Input your email" className="py-2 pl-10 pr-40 rounded-l-md bg-gray-200 w-full" />
                    <i className="fa-regular fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-700"></i>
                </div>
                <button className="bg-purple-900 py-2 px-4 rounded-r-md hover:bg-purple-700 text-white">Subscribe</button>
            </div>
            <div className="flex justify-between w-2/3">
                <div>
                    <h3 className="font-bold">Product</h3>
                    <ul className="space-y-2">
                        <li>Features</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Resources</h3>
                    <ul className="space-y-2">
                        <li>Blog</li>
                        <li>User guides</li>
                        <li>Webinars</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Company</h3>
                    <ul className="space-y-2">
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                <h3 className="font-bold">Plans & Pricing</h3>
                <ul className="space-y-2">
                    <li>Personal</li>
                    <li>Start up</li>
                    <li>Organization</li>
                </ul>
                </div>
            </div>
            </div>
            <div className="flex justify-center">
                <div className="flex items-center justify-between w-2/3 mt-5">
                    <div className="relative inline-block text-left">
                        <div>
                            <button 
                                type="button" 
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" 
                                id="menu-button" 
                                aria-expanded={isOpen} 
                                aria-haspopup="true"
                            >
                                English
                                <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {isOpen && (
                            <div className="absolute -top-28 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                <div className="py-1" role="none">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Spanish</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">French</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">Arabic</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <p>© 2024 Brand, Inc. • Privacy • Terms • Sitemap</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:text-purple-400"><i className='fa-brands fa-twitter text-2xl text-purple-900'></i></a>
                        <a href="#" className="hover:text-purple-400"><i className="fa-brands fa-facebook text-2xl text-purple-900"></i></a>
                        <a href="#" className="hover:text-purple-400"><i className="fa-brands fa-linkedin text-2xl text-purple-900"></i></a>
                        <a href="#" className="hover:text-purple-400"><i className="fa-brands fa-youtube text-2xl text-purple-900"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default  Footer;