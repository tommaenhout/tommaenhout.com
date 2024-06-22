"use client"
import React from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function BackgroundSpline() {

  const onLoad = () => {
    console.log("Spline loaded");
  }

  return (
    <div className="inset-0 absolute">
      <Spline 
        onLoad={onLoad}
        onScroll={() => {}}
        scene={"https://prod.spline.design/XME1RwJcmat0oHI9/scene.splinecode"} 
      />
    </div>
  );
}
export default BackgroundSpline;
