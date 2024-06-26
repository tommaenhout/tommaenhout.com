import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Resume from "./Resume";
import AboutMe from "./sections/AboutMe";
import Clients from "./sections/Clients";
import ContactForm from "./sections/ContactForm";
import ContactInfo from "./sections/ContactInfo";
import FunFact from "./sections/FunFact";
import Pricing from "./sections/Pricing";
import Quote from "./sections/Quote";
import ResumeSection from "./sections/Resume";
import Services from "./sections/Services";
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


const bio = `<p>
I’m 33 year old Belgian full stack developer, living in Argentina. Just before the pandemic I decided to change careers. I started to study systems analysis in ORT Buenos Aires. Last June I graduated and now I’m excited to take my first steps into the working field.
</p>`;
const SectionPresentMe = () => {
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
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          <Pricing />
          <FunFact />
          <Clients />
          <Quote />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Testimonials />
        </Resume>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default SectionPresentMe;
