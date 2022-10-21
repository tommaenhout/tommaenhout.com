import Spline from "@splinetool/react-spline";
import "./textfadeIn.css";
import {useEffect, useState} from "react";



function BackgroundSpline(props) {
  const [content, setContent] = useState();

  useEffect(() => {
    if (props.ready) {
      setContent(props.content);
    }
  }, [props.ready, props.content]);
 
  return (
    <div>
      <div className="text bg-transparent">
        <div className={`container-fluid  ${props.screen}`}>{content}</div>
      </div>
      <div>
        <Spline className={props.splineclass}
        scene={props.link} 
        onLoad={props.handleReady}/>
      </div>
    </div>
  );
}
export default BackgroundSpline;
