"use client"

import { Fragment, useEffect } from "react";
import ContentModal from "../popup/ContentModal";
import ImageGallery from "../popup/ImageGallery";
import ImageView from "../popup/ImageView";
import VideoPopup from "../popup/VideoPopup";
import { createSkillsDot, dotResize } from "../utils";


interface LayoutProps {
  children: React.ReactNode;
  noSkin?: boolean;
  bg?: string;
  containerCls?: string;
  animationIn?: string;
  animationOut?: string;
}

const Layout = ({
  children,
  noSkin,
  bg,
  containerCls,
  animationIn,
  animationOut,
} : LayoutProps) => {
  useEffect(() => {
    return () => {
      dotResize();
      setTimeout(createSkillsDot, 1000);
    };
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <ImageGallery />
      <ContentModal />
      <div className={`page ${!noSkin ? "new-skin" : ""}`}>
        <div
          className={`${containerCls ? containerCls : "container opened layout-rounded-style minimal-icons-style"}`}
          data-animation-in={animationIn ? animationIn : "fadeInLeft"}
          data-animation-out={animationOut ? animationOut : "fadeOutLeft"}
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
};
export default Layout;
