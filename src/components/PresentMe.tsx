"use client"
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Resume from "./Resume";
import AboutMe from "./sections/AboutMe";
import ContactForm from "./sections/ContactForm";
import ResumeSection from "./sections/Resume";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import TypingAnimation from "./TypingAnimation";
import ContentContainer from "./layout/ContentContainer";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
import "../../public/css/new-skin/new-skin.css";
import "../../public/css/demos/demo-2-colors.css";
import "../../public/css/new-skin/classic-skin.css";
import "../../public/css/template-dark/dark.css";
import { SocialIcon } from 'react-social-icons'
import { useContext, useState } from "react";
import Context from "./context/context";
import Portfolio from "./Portfolio";
import PortFolioSection from "./sections/PortfolioSection";
import Spline from "@splinetool/react-spline";
import useScreenSizes from "@/hooks/useScreensizes";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useAnimate } from "framer-motion";


const bio = `<p>
I'm a front-end developer specializing in React and passionate about leveraging the latest technologies. I strive to learn something new every day to continuously improve my skills. With a strong interest in both design and coding, I focus on creating user experiences that are both engaging and functional. I enjoy collaborating with others to bring innovative ideas to life.
</p>`;
const PresentMe = () => {
  const { changeNav } = useContext(Context);
  const {isMobile } = useScreenSizes();
  const [show, setShow] = useState<boolean>(true);
  const [scope, animate] = useAnimate();

  const onclickHandlerMinimize = () => {
    console.log(scope.current)
    animate(scope.current, {
      y: 200,
      scale: 0.1
    }, {
      duration: 0.3,
      ease: "easeInOut"
    });
    setShow(false);
  }

  const onclickHandlerMaximize = () => {
    animate(scope.current, {
      y: 0,
      scale: 1
    }, {
      duration: 0.3,
      ease: "easeInOut"
    });
    setShow(true);
  }




  return (
    <div  className= {`${!show ? "relative" : "static"}`}>
    <div
      ref = {scope}>
      <Layout bg={"gradient"}>
      <Header />
      <Home>
        <div className="profile">
        <div className="inset-0 opacity-90 absolute slide">
        {!isMobile && 
          <div className="w-10 h-10 absolute top-5 left-5 cursor-pointer">
            <Image
              onClick={onclickHandlerMinimize}
              width={200}
              height={200}
              src="/images/minus.svg"
              alt=""
              />
        </div>}
        {!isMobile ? <Spline
          scene={"https://prod.spline.design/fKY9DZTJwp82BwAx/scene.splinecode"} 
        /> : <div className="bg-nightBlack w-full h-full"/>}
      </div>
          <div className="image">
            <Image 
                priority 
                width={600} 
                height={600} 
                src="/images/profile.png" 
                alt=""/>
          </div>
          <div className="title">Tom Maenhout</div>
          <TypingAnimation />
          <div className="social">
              <SocialIcon 
                target="_blank" 
                className="hover:scale-105" 
                bgColor="transparent" 
                fgColor="white" 
                url="https://github.com/tommaenhout" />
              <SocialIcon 
                target="_blank"
                className="hover:scale-105" 
                bgColor="transparent" 
                fgColor="white" 
                url="https://www.linkedin.com/in/tom-maenhout-130557135"/>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <Link onClick={() => {
              changeNav("contacts");
            }} href="#contacts" className="lnk discover">
              <span className="text">Contact Me</span>
            </Link>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Testimonials />
        </Resume>
        <Portfolio>
          <PortFolioSection/>
        </Portfolio>
        <Contact>
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
    </div>
  
   {/*  {!show && <div className="fixed bottom-5 right-5 cursor-pointer">
      <Image
        onClick={() => setShow(true)}
        width={200}
        height={200}
        src="/images/minus.svg"
        alt=""
        />
    </div>
      } */}
    
    </div>
  );
};
export default PresentMe;
