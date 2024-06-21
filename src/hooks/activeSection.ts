"use client"
import { useContext } from "react";
import Context from "../components/context/context";
import useWindowSize from "./useWindowSize";


const ActiveSection = (active : string, animationIn? : boolean, animationOut? : boolean) => {
  const { nav } = useContext(Context);
  const { width } = useWindowSize();
  return `card-inner ${
    nav == active
      ? `animated active ${
          width > 1200 ? (animationIn ? animationIn : "fadeInLeft") : ""
        }`
      : width > 1200
      ? `animated hidden ${
          width > 1200 ? (animationOut ? animationOut : "fadeOutLeft") : ""
        }`
      : ""
  }`;
};
export default ActiveSection;
