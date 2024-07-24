"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar";
import { cn } from "../../lib/utils";
import { ThemeSwitcher } from "../ThemeSwitcher";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={cn("fixed top-0 inset-x-0 max-w-full mx-auto z-10  bg-transparent", className)}>
            <div className="flex justify-between items-center p-4">
                <Link href="/">

                    <div className="text-2xl text-cyan-400 md:text-4xl">
                        Test <span className="text-orange-400">Site</span>
                    </div>
                </Link>

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
                    <MenuItem setActive={setActive} active={active} item=" Education  ">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/colleges">Colleges</HoveredLink>
                            <HoveredLink href="/schools">Schools</HoveredLink>



                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item=" Entertainment">
                        <div className="text-sm grid grid-cols-1 md:grid-cols-1 gap-4 p-2">
                            <ProductItem
                                title="Cinema Hall"
                                href="/CinemaHall"
                                src="https://media.istockphoto.com/id/1406531590/photo/red-cinema-seats-and-cola-popcorn-and-glasses-in-empty-theater-cinema-movie-theater-concept.jpg?s=2048x2048&w=is&k=20&c=wQleptS1PQ0oibalcixd9Tl7Jde9XcscxmE1YJj1mUY="
                                description="Discover the best movie experiences in town"
                            />


                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Hotel">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/resturant">Resturant</HoveredLink>
                            
                            <HoveredLink href="/team">Resort</HoveredLink>
                            <HoveredLink href="/enterprise">Motel</HoveredLink>
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
