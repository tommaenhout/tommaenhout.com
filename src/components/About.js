import Profil from "../images/profilWithoutBg.png";
import ProgressBar from "./ProgressBar";

function About() {
  return (
    <section id="About">
      <div className="div9">
      </div>
      <div className="row textfont1 mt-0">
        <br></br>
        <div className="row ">
        <div className=" col-4 offset-1 gradient-gray pt-0">
          <img className="img-fluid d-none d-md-block" width={300} src={Profil} alt="profil" />
        </div>
        <div className="col-11 col-md-5 bg-transparent container-fluid text-white color-black mb-4">
          <div className="container-fluid">
            <h2 className="mt-5 textfont1">About Me</h2>
            <p className="mt-4 textfont1">
              I'm a front end developer from Belgium living in Argentina. Just before the pandemic, I made a career shift. I started studying systems analysis at ORT Buenos Aires and graduated in June last year. I've accumulated two years of valuable experience as a front-end developer, working on several major projects with React as my primary framework. I'm eager to keep progressing in my role as a front-end developer.
            </p>
            <div className="row  justify-content-begin">
              <div className="col-12 col-md-auto ">
            <a href="https://drive.google.com/file/d/1EmSMnEn6KPtFCZZFAmvyP0o6AE81_973/view?usp=sharing" className="btn btn-primary bg-dark mt-2 text-white p-2 rounded textfont1 border-success">Download CV</a>
            </div>
            <div className="col-12 col-md-auto ">
            <a href="https://docs.google.com/document/d/1mBfCVSmIUV2pDuLMdHaxM5Ym4bMgT2W8vBtU2ecaBHk/edit?usp=sharing" className="btn btn-primary bg-dark mt-2 text-white p-2 rounded textfont1 border-success">Download Portfolio</a>
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-11  bg-black-hero widthfull text-white offset-1">
            <br></br>
            <h2 className="offset-1 mt-4"> Skills</h2>
            <p className="col-md-7 offset-1 mt-3 opacity-50 textfont1">
              Web development, mobile application development for Android/ iOS, JavaScript, React.js, React Native, MongoDB, Node.js Kotlin, .NET,
              Java, C#, Solidity, Truffle creativity, flexibility, fast learner,
              positive attitude, team player
            </p>
            <div className="row">
              <div className="col-11 col-md-3 offset-1 mt-4">
                <ProgressBar width="w-75" title="Web Application Development"/>
                <ProgressBar width="w-75" title="Bootstrap" />
                <ProgressBar width="w-75" title="POO" />
                <ProgressBar width="w-75" title="Front-end development" />
                <ProgressBar width="w-25" title="C#" />
              </div>
              <div className="col-11 col-md-3 offset-1 mt-4">
              <ProgressBar width="w-50" title="Mobile Application Development"/>
                <ProgressBar width="w-75" title="React.js" />
                <ProgressBar width="w-25" title="Node.js" />
                <ProgressBar width="w-25" title="MongoDb" />
                <ProgressBar width="w-50" title="Kotlin" />
              </div>
            </div>

            <div className="row">
              <div className="col-11 col-md-4 offset-1 mt-4">
                  <h2 className="textfont1">Education</h2>
                  <h6 className="textfont1">Front End Development Coderhouse Argentina (2022 - 2023)</h6>
                  <p className="opacity-50 textfont1">
                  During my time at Coderhouse, I acquired essential front-end development skills, including proficiency in HTML, CSS, JavaScript, and React, along with expertise in responsive design, UI development, and web accessibility. These skills have prepared me to create engaging and user-friendly web experiences.
                  </p>
                  <h6 className="textfont1">Systems Analyst ORT Buenos Aires (2020 - 2022)</h6>
                  <p className="opacity-50 textfont1">
                    During my last semester, I actively participated in the development of a web application and an Android app for "Ciudades del Futuro." My role primarily focused on front-end development using Kotlin.
                  </p>
              </div>
              <div className="col-11 col-md-4 offset-1 mt-4 d-lg-flex align-items-center">
                <div>
                  <h2 className="textfont1">Language skills</h2>
                  <ProgressBar width="width-100" title="Dutch" />
                  <ProgressBar width="width-90" title="English" />
                  <ProgressBar width="width-90" title="Spanish" />
                  <ProgressBar width="width-50" title="French" />
                  <ProgressBar width="width-50" title="German" />
                </div>
              </div>
            </div>
            <h2 className="offset-1 mt-5 mt-lg-0">Experience</h2>
            <div className="d-lg-flex">
              <div className=" col-11 col-md-9 d-lg-flex gap-1 offset-1 mt-4 mb-4">
                  <div className="col-11 col-lg-5">
                    <h6>Front End Developer, IT Rock (April 2023 - now) </h6>
                    <p className="opacity-50">
                    I currently actively contribute to significant projects, leveraging my skills in React.js, CSS/Sass, Styled Components, Git (utilizing Bitbucket), Jira, and Bootstrap add currently
                    </p>
                  </div>
                  <div className="col-11 col-lg-5">
                    <h6>Freelance, Full Stack Developer (2022 - April 2023) </h6>
                    <p className="opacity-50">
                    Since I am graduated as systems analyst, I participated in different projects. Most of them were web applications. The technologies that I used were: React.js, Node.js, Mongo DB, Bootstrap, CSS and HTML.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
