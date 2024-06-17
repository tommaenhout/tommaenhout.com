"use client"
import React from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function BackgroundSpline() {
  return (
    <div className="inset-0 absolute bg-red-600">
      <Spline 
        onScroll={() => {}}
        scene={"https://prod.spline.design/XME1RwJcmat0oHI9/scene.splinecode"} 
      />
    </div>
  );
}
export default BackgroundSpline;
