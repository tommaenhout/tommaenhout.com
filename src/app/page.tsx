"use client";

import React from "react";
import BackgroundSpline from "../components/BackgroundSpline";
import SectionPresentMe from "@/components/PresentMe";
import {motion} from "framer-motion";
import TypingAnimation from "@/components/TypingAnimation";
import { useState } from "react";
import useScreenSizes from "@/hooks/useScreensizes";

export default function Home() {
  const [transitionEnded, setTransitionEnded] = useState<boolean>(false);
  const [isCompleteFirstSentence, setIsCompleteFirstSentence] = useState<boolean>(false);
  const [typeAnimationComplete, setTypeAnimationComplete] = useState<boolean>(false);
  const [isLoadingSpline, setIsLoadingSpline] = useState<boolean>(true);
  const {isMobile} = useScreenSizes();
  const [isClient, setIsClient] = useState<boolean>(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);


  const transitionEndedLogic = () => {
      setTransitionEnded(true);
  }
  return isClient &&  (
    <main>
      <div className="flex relative top-0 min-h-screen flex-col items-center justify-center p-24">
        <BackgroundSpline 
          setIsLoading={setIsLoadingSpline} 
          isLoading={isLoadingSpline}
        />
        {(!transitionEnded && !isLoadingSpline) || isMobile && <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 space-y-2 -translate-y-1/2 w-[300px] lg:w-[400px]">
            <TypingAnimation 
                typeSpeed={150} 
                className="text-5xl text-white"
                loop={false}
                setIsComplete={setIsCompleteFirstSentence}
                data={["Tom Maenhout"]}/>
            {isCompleteFirstSentence && <TypingAnimation
                className = "text-3xl text-sunsetOrange"
                loop={false}
                setIsComplete={setTypeAnimationComplete}
                data={["Front End Developer"]}/>}
        </div>}
      </div>
      {typeAnimationComplete && <motion.div
        onTransitionEnd={transitionEndedLogic} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 1,
          duration: 2
        }}
        className="absolute top-0 left-0 right-0 min-h-screen bg-opacity-50">
          <SectionPresentMe/>
      </motion.div>}
    </main>
  );
}
