"use client";

import React from "react";
import BackgroundSpline from "../components/BackgroundSpline";
import SectionPresentMe from "@/components/SectionPresentMe";
import {motion} from "framer-motion";

export default function Home() {

  return (
    <main>
      <div className="flex sticky top-0 min-h-screen bg-black  flex-col items-center justify-center p-24">
        <BackgroundSpline />
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 2,
          duration: 2 
        }}
        className="absolute top-0 left-0 right-0 min-h-screen bg-opacity-50">
          <SectionPresentMe/>
      </motion.div>
    </main>
  );
}
