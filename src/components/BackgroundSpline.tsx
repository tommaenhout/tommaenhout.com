"use client"
import React from "react";
import { useState } from "react";
import TypingAnimation from "./TypingAnimation";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

interface BackgroundSplineProps {
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
   isLoading: boolean;
}

function BackgroundSpline({ setIsLoading, isLoading }: BackgroundSplineProps) {

  const onLoad = () => {
    setIsLoading(false);
  }

  return (
    <>
    {isLoading &&
    <div className="inset-0 absolute">
      <div className="flex items-center justify-center h-screen">
        <div className="text-3xl text-white flex gap-2"> Loading <TypingAnimation className="text-sunsetOrange text-3xl w-[30px]" data={
          ["...", "..", "."]
        }/> 
        </div>
      </div>
    </div>  
    }
    <div className="inset-0 absolute">
      <Spline 
        onLoad={onLoad}
        onScroll={() => {}}
        scene={"https://prod.spline.design/XME1RwJcmat0oHI9/scene.splinecode"} 
      />
    </div>
    
    </>
  );
}
export default BackgroundSpline;
