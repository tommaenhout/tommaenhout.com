"use client";

import React from "react";
import BackgroundSpline from "../components/BackgroundSpline";
import SectionPresentMe from "@/components/SectionPresentMe";
import {motion} from "framer-motion";
import TypingAnimation from "@/components/TypingAnimation";
import { useState } from "react";

export default function Home() {
  const [transitionEnded, setTransitionEnded] = useState(false);
  return (
    <main>
      <div className="flex relative top-0 min-h-screen bg-black  flex-col items-center justify-center p-24">
        <BackgroundSpline />
        {!transitionEnded && <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 space-y-2 -translate-y-1/2 w-[300px] lg:w-[400px]">
            <TypingAnimation 
                typeSpeed={150} 
                className="text-5xl"
                loop={false}
                data={["Tom Maenhout"]}/>
            <TypingAnimation
                className = "text-3xl"
                loop={false}
                data={["Front End Developer"]}/>
        </div>}
      </div>
      <motion.div
        onTransitionEnd={() => setTransitionEnded(true)} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 4,
          duration: 2 
        }}
        className="absolute top-0 left-0 right-0 min-h-screen bg-opacity-50">
          <SectionPresentMe/>
      </motion.div>
    </main>
  );
}
