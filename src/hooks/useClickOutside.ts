import { useEffect, useRef } from "react";

interface IUseClickOutside {
  (handler: () => void): any;
}

let useClickOutside = (handler : () => void) => {
  let domNode = useRef<any>();

  useEffect(() => {
    let maybeHandler = (event : any) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
export default useClickOutside;
