import Head from "next/head";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Resume from "./Resume";
import AboutMe from "./sections/AboutMe";
import BlogSection from "./sections/Blog";
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
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
              <span className="fa fa-dribbble" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/">
              <span className="fa fa-github" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
              <span className="fa fa-spotify" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/"
            >
              <span className="fa fa-stack-overflow" />
            </a>
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
