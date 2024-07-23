"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
    return (
        <>
            <div className="text-3xl font-lobster text-orange-400 text-center mt-10 underline">Explore</div>

            <div className="flex flex-col md:flex-row justify-start items-start mx-8 space-y-4 md:space-y-0 md:space-x-4">

                <CardContainer className="flex flex-col mx-auto md:mx-10">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                             Dang District
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Explore the beauty and charm of Dang District, Nepal, and immerse yourself in its rich cultural heritage and natural splendor.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src="/map of Dang.jpg"
                                height={500} 
                                width={500} 
                                className="object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="Map of Dang"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>

                <div className="md:mt-20 md:px-20">
                    <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 dark:text-white py-8">Dang Nepal</h1>
                    <p className="text-base text-neutral-600 dark:text-white text-justify py-4 font-semibold">
                        Dang District, located in the mid-western region of Nepal within Lumbini Province, is a region characterized by its diverse topography and rich cultural heritage. Covering an area of approximately 2,955 square kilometers, Dang is nestled in the Inner Terai Valley, surrounded by hills and lush green forests. The district enjoys a moderate climate, with warm summers and mild winters, making it a favorable destination for agriculture and tourism. Dang is also known for its significant cultural and historical landmarks, including the revered Swargadwari temple, a major pilgrimage site. The population of Dang is a mix of various ethnic groups, contributing to the vibrant cultural mosaic of the region. Agriculture forms the backbone of the local economy, with rice, wheat, and lentils being the primary crops. Additionally, Dang's strategic location and connectivity make it an emerging hub for trade and commerce in the region. Explore the beauty and charm of Dang District, Nepal, and immerse yourself in its rich cultural heritage and natural splendor. 







                    </p>
                </div>
            </div>
        </>
    );
}
