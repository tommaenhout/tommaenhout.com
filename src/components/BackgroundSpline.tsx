"use client"
import useScreenSizes from "@/hooks/useScreensizes";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";


const Spline = React.lazy(() => import("@splinetool/react-spline"));

interface BackgroundSplineProps {
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
   isLoading: boolean;
}

function BackgroundSpline({ setIsLoading, isLoading }: BackgroundSplineProps) {
  const { isMobile } = useScreenSizes();
  const [isClient, setIsClient] = useState<boolean>(false);
;
  const onLoad = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient && (
    <>
    {isLoading && !isMobile && 
    <div className="inset-0 absolute bg-nightBlack">
      <div className="flex items-center justify-center h-screen">
        <div className="text-3xl text-white flex gap-2">
          <ClipLoader size={70}  color="#ff9800" />
        </div>
      </div>
    </div>  
    }
    <div className="inset-0 absolute">
      {!isMobile ? <Spline 
        onLoad={onLoad}
        scene={"https://prod.spline.design/XME1RwJcmat0oHI9/scene.splinecode"} 
      /> : <div className="bg-nightBlack w-full h-full"/>}
    </div>
    
    </>
  );
}
export default BackgroundSpline;
