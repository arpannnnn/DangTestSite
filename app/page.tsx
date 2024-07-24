import Image from "next/image";
import { ThreeDCardDemo } from "./components/Explore";

import { LayoutGridDemo } from "./components/Grid";


export default function Home() {
  return (
    <><main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white hover:opacity-90 dark:text-white">
          <span className="font-lobster">Nepal</span>  <span className="font-lobster text-cyan-400">The Land of Himalayas</span>
        </h1>

      </div>



    </main>
    <ThreeDCardDemo />
    <LayoutGridDemo />
    
    </>
  );
}
