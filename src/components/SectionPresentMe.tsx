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
import { useContext } from "react";
import Context from "./context/context";
import Portfolio from "./Portfolio";


const bio = `<p>
I'm a front-end developer specializing in React and passionate about leveraging the latest technologies. I strive to learn something new every day to continuously improve my skills. With a strong interest in both design and coding, I focus on creating user experiences that are both engaging and functional. I enjoy collaborating with others to bring innovative ideas to life.
</p>`;
const SectionPresentMe = () => {
  const { changeNav, nav, changeSideBar } = useContext(Context);

  return (
    <Layout bg={"gradient"}>
      <Header />
      <Home>
        <div className="profile">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/bg.jpg)" }}
          />
          <div className="image">
            <img src="images/profile.png" alt="" />
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
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
            </a>
            <a onClick={() => {
              changeNav("contacts");
            }} href="#contacts" className="lnk discover">
              <span className="text">Contact Me</span>
            </a>
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
        <Contact>
          <ContactForm />
        </Contact>
        <Portfolio>
          hola
        </Portfolio>
      </ContentContainer>
    </Layout>
  );
};
export default SectionPresentMe;
