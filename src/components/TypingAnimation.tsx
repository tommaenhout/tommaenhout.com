"use client"

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypingAnimationProps {
  data?: string[];
  typeSpeed?: number;
  delay ?: number;
  loop?: boolean;
  className?: string;
  backSpeed?: number;
  setIsComplete?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TypingAnimation = ({ data, typeSpeed, delay, loop, className, backSpeed, setIsComplete } : TypingAnimationProps) => {
  // Create Ref element.
  const classNameTitle = className || "subtitle subtitle-typed";
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: data ? data : [ "Front End Developer", "Systems Analyst", "Crypto Enthusiast"], // Strings to display
      typeSpeed: typeSpeed || 100,
      backSpeed: backSpeed || 50,
      backDelay: delay || 100,
      smartBackspace: true,
      loop: loop,
      showCursor: false,
      onComplete : () => {
        setIsComplete && setIsComplete(true);
      }
    });


    return () => {
      typed.destroy();
    };
  }, []);
  return <div className={classNameTitle} ref={el}></div>;
};
export default TypingAnimation;
