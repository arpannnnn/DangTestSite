"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";

export function LayoutGridDemo() {
    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                House in the woods
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A serene and tranquil retreat, this house in the woods offers a peaceful
                escape from the hustle and bustle of city life.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                House above the clouds
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Perched high above the world, this house offers breathtaking views and a
                unique living experience. It&apos;s a place where the sky meets home,
                and tranquility is a way of life.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Greens all over
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Rivers are serene
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A house by the river is a place of peace and tranquility. It&apos;s the
                perfect place to relax, unwind, and enjoy life.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-1",
        thumbnail:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ambikeshwari_Temple_%E0%A4%85%E0%A4%AE%E0%A5%8D%E0%A4%AC%E0%A4%BF%E0%A4%95%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80_%E0%A4%AE%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%BF%E0%A4%B0%2C_Ghorahi.jpg/1920px-Ambikeshwari_Temple_%E0%A4%85%E0%A4%AE%E0%A5%8D%E0%A4%AC%E0%A4%BF%E0%A4%95%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80_%E0%A4%AE%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%BF%E0%A4%B0%2C_Ghorahi.jpg",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "https://photo.ntb.gov.np/public/uploads/preview/jakhera-tal-lake-19251684552983q3ay7lqjm9.jpg",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Chamere_Gufa%28cave%29.jpg/1280px-Chamere_Gufa%28cave%29.jpg",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-1",
        thumbnail:
            "https://i.ytimg.com/vi/k5ZYUbTXjQk/maxresdefault.jpg",
    },
    {
        id: 5,
        content: <SkeletonFour />,
        className: "md:col-span-1",
        thumbnail:
            "https://i.ytimg.com/vi/boWC88s537E/maxresdefault.jpg",
    },
    {
        id: 6,
        content: <SkeletonFour />,
        className: "md:col-span-1",
        thumbnail:
            "https://upload.wikimedia.org/wikipedia/commons/7/75/World%27s_largest_trident%28Trishul%29.jpg",
    },
    {
        id: 7,
        content: <SkeletonFour />,
        className: "md:col-span-1",
        thumbnail:
            "/Parseni.jpg",
    },
    {
        id: 8,
        content: <SkeletonFour />,
        className: "md:col-span-1",
        thumbnail:
            "https://i.ytimg.com/vi/Mv9TtbT7o70/maxresdefault.jpg",
    },
];
