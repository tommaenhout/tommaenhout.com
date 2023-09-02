import React, { useEffect } from "react";
import { Suspense } from "react";
import "./textfadeIn.css";
import Loader from "./Loader";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function BackgroundSpline({splineclass, screen, link, content, loading, setLoading}) {


  function finishLoadingHandler() {
    setTimeout(() => {
      setLoading(false);
    }
    , 1000);
  }

  return (
    <div>
      <div className="text bg-transparent">
        <div className={`container-fluid  ${screen}`}>{content}</div>
      </div>
      <div>
         {loading && (<Loader/>)}
          <Spline 
            className={splineclass}
            scene={link} 
            onLoad={() => finishLoadingHandler()}
            />
      </div>
    </div>
  );
}
export default BackgroundSpline;
