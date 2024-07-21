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
                            Dharapani
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Dharapani is a quaint village situated in the Dang District of Nepal, within the Lumbini Province.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/7/75/World%27s_largest_trident%28Trishul%29.jpg"
                                height={500} // Adjusted to a more appropriate height
                                width={500}  // Adjusted to a more appropriate width
                                className="object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="Dharapani Trident"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>

                <div className="md:mt-20 md:px-20">
                    <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 dark:text-white py-8">Dharapani</h1>
                    <p className="text-base text-neutral-600 dark:text-black text-justify py-4 font-semibold">
                        Dharapani is a quaint village situated in the Dang District of Nepal, within the Lumbini Province. This rural area is characterized by its hilly terrain and lush greenery, offering a picturesque view of the natural landscape. The community in Dharapani primarily consists of various ethnic groups, reflecting the rich cultural heritage of the region. Agriculture plays a significant role in the local economy, with residents cultivating crops such as rice, maize, and vegetables. The lifestyle in Dharapani is predominantly rural, focusing on traditional practices and local crafts.

                        Infrastructure in Dharapani is relatively basic compared to urban centers, but efforts are ongoing to improve roads, schools, and healthcare facilities as part of regional development initiatives. The village and its surroundings are known for their natural beauty, with opportunities for trekking and exploring the scenic hills and rivers. Local attractions may include temples and historical sites, showcasing the cultural richness of the area. Overall, Dharapani offers a glimpse into the rural way of life in Nepal, combining natural charm with traditional living. Dharapani also benefits from a strong sense of community, where traditional festivals and local events play a significant role in social life, fostering a close-knit environment among residents. The village is gradually seeing improvements in connectivity and access to services, which are enhancing the quality of life for its inhabitants. Additionally, efforts are being made to promote sustainable practices and preserve the natural beauty of the area, ensuring that Dharapani remains a harmonious blend of tradition and progress.
                    </p>
                </div>
            </div>
        </>
    );
}
