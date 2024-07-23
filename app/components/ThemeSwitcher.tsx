"use client";
import React, { useState, useEffect } from "react";
import { Switch } from "@/app/components/ui/switch";
import { Button } from "./ui/button";

export function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDark(!isDark);
    };

    if (!mounted) {
        return null; // Render nothing until useEffect runs
    }

    return (
        <button
            className="focus:outline-none dark:text-gray-300 "
            onClick={toggleTheme}
        >
            <Switch checked={isDark} 

            
            />
                
        </button>

    );
}
