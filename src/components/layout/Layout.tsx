import { Fragment, useEffect } from "react";
import ContentModal from "../popup/ContentModal.jsx";
import ImageGallery from "../popup/ImageGallery.jsx";
import ImageView from "../popup/ImageView.jsx";
import VideoPopup from "../popup/VideoPopup.jsx";
import { createSkillsDot, dotResize } from "../utils.js";
import Background from "./Background.js";
import ContentSidebar from "./ContentSidebar.js";

interface LayoutProps {
  children: React.ReactNode;
  noSkin?: boolean;
  bg?: string;
  containerCls?: string;
  bgImgUrl?: string;
  animationIn?: string;
  animationOut?: string;
}

const Layout = ({
  children,
  noSkin,
  bg,
  containerCls,
  bgImgUrl,
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
        <Background bg={bg} img={bgImgUrl || ""} />
        <div
          className={`${containerCls ? containerCls : "container opened layout-rounded-style minimal-icons-style"}`}
          data-animation-in={animationIn ? animationIn : "fadeInLeft"}
          data-animation-out={animationOut ? animationOut : "fadeOutLeft"}
        >
          {children}
        </div>
        <ContentSidebar />
      </div>
    </Fragment>
  );
};
export default Layout;
