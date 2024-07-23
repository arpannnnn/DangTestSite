"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar";
import { cn } from "../../lib/utils";
import { ThemeSwitcher } from "../ThemeSwitcher";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={cn("fixed top-0 inset-x-0 max-w-full mx-auto z-10  bg-transparent", className)}>
            <div className="flex justify-between items-center p-4">
                <div className="text-2xl text-cyan-400 md:text-4xl">
                    Test <span className="text-orange-400">Site</span>
                </div>

                <div className="justify-end dark:bg-black md:hidden ">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {menuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>

                <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="About">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/about">About Us</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/careers">Careers</HoveredLink>
                            <HoveredLink href="/contact">Contact</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Places">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                            <HoveredLink href="/branding">Branding</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Events">
                        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Tailwind Master Kit"
                                href="https://tailwindmasterkit.com"
                                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                description="Production ready Tailwind css components for your next project"
                            />
                            <ProductItem
                                title="Moonbeam"
                                href="https://gomoonbeam.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                description="Never write from scratch again. Go from idea to blog in minutes."
                            />
                            <ProductItem
                                title="Rogue"
                                href="https://userogue.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                            />
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Explore">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                    <div className="hidden md:block">
                        <ThemeSwitcher />
                    </div>
                </Menu>
            </div>

            {menuOpen && (
                <div className="md:hidden p-4">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/about">About Us</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/careers">Careers</HoveredLink>
                        <HoveredLink href="/contact">Contact</HoveredLink>
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        <ThemeSwitcher />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
