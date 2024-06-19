import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypingAnimationProps {
  data?: string[];
}

const TypingAnimation = ({ data } : TypingAnimationProps) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: data ? data : [ "Front End Developer", "Systems Analyst", "Crypto Enthusiast"], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });


    return () => {
      typed.destroy();
    };
  }, []);
  return <div className="subtitle subtitle-typed" ref={el}></div>;
};
export default TypingAnimation;
