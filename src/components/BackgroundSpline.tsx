"use client"
import React from "react";
import { ClipLoader } from "react-spinners";

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
    <div className="inset-0 absolute bg-nightBlack">
      <div className="flex items-center justify-center h-screen">
        <div className="text-3xl text-white flex gap-2">
          <ClipLoader size={70}  color="#ff9800" />
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
