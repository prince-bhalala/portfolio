'use client'
import { ColourfulText } from "./ui/colourful-text.js";
import GridBackgroundDemo from "./ui/background-gradient.js";
import { HoverBorderGradient } from "./ui/hover-border-gradient.js";
import { Cover } from "./ui/cover.js";
import { useState } from "react";
import {FlipWords} from "./ui/flip-words.js";

function Herosection() {

  const [showDownload, setShowDownload] = useState(false);

  const handleViewResume = () => {
    window.open("/Blank_Resume.pdf", "_blank");
    setShowDownload(true); 
  };


  return (
    <div id="home" className="relative flex flex-col justify-start pt-20 overflow-hidden bg-black text-white">

      <div className="absolute inset-0 z-0">
        <GridBackgroundDemo />
      </div>

     <span className="block text-center text-neutral-400 text-base sm:text-lg md:text-2xl z-10 mt-6">
  <Cover>welcome to my Portfolio  </Cover>
</span>

      <div className="z-10 px-3 text-center mt-10 sm:mt-20 md:mt-32 lg:mt-9">
        <h1 className="text-3xl mt-15 sm:text-5xl md:text-6xl font-bold leading-tight flex justify-center items-center gap-2 flex-wrap">
          <span className="text-3xl sm:text-5xl md:text-6xl">
            Hi, I&apos;m PRINCE BHALALA
          </span>
        </h1>
        
          <h1 className="mt-10 text-lg font-bold sm:text-3xl md:text-3xl ">
            I’m a developer who turns ideas and real-world  problems into seamless  <ColourfulText text ="digital experiences." />
          </h1>


        <FlipWords
          words={["FULL Stack Developer", "MERN Stack Developer", "NEXT JS Developer"]}
          className="mt-10 text-2xl sm:text-3xl md:text-4xl text-gray-400 !bg-transparent !shadow-none font-bold"
          duration={2000}
        />

        
      </div>
   {/* <div className="mt-10 flex flex-col items-center gap-4 mb-50.5">
       {!showDownload && <button onClick={handleViewResume}>
          <HoverBorderGradient
            className="text-lg sm:text-xl font-semibold text-white rounded-full px-8 py-3 tracking-wide transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_#00FFFF50] hover:text-cyan-300"
            containerClassName="bg-black/80 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400/50 shadow-md shadow-cyan-900/30"
          >
            View Resume
          </HoverBorderGradient>
        </button>}

        {showDownload && (
          <a href="/T2_UNIT - 4_5_6 _PQ_QB_VHA.pdf" download="PRINCE_BHALALA_Resume.pdf">
            <HoverBorderGradient
              className="text-lg sm:text-xl font-semibold text-white rounded-full px-8 py-3 tracking-wide transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_#00FFFF50] hover:text-cyan-300"
              containerClassName="bg-black/80 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400/50 shadow-md shadow-cyan-900/30"
            >
              Download Resume
            </HoverBorderGradient>
          </a>
        )}
      </div>*/}
      <div className="mt-10 flex flex-col items-center gap-4 mb-50.5">
  {!showDownload && (
    <div onClick={handleViewResume}>
      <HoverBorderGradient
        className="text-lg sm:text-xl font-semibold text-white rounded-full px-8 py-3 tracking-wide transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_#00FFFF50] hover:text-cyan-300"
        containerClassName="bg-black/80 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400/50 shadow-md shadow-cyan-900/30"
      >
        View Resume
      </HoverBorderGradient>
    </div>
  )}

  {showDownload && (
    <a
      href="/Blank_Resume.pdf"
      download="PRINCE_BHALALA_Resume.pdf"
    >
      <HoverBorderGradient
        className="text-lg sm:text-xl font-semibold text-white rounded-full px-8 py-3 tracking-wide transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_#00FFFF50] hover:text-cyan-300"
        containerClassName="bg-black/80 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400/50 shadow-md shadow-cyan-900/30"
      >
        Download Resume
      </HoverBorderGradient>
    </a>
  )}
</div>

    </div> 
  );
}

export default Herosection;
