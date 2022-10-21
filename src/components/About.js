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
              I’m 33 year old Belgian full stack developer, living in Argentina. 
              Just before the pandemic I decided to change careers. I
              started to study systems analysis in ORT Buenos Aires. Last June I
              graduated and now I’m excited to take my first steps into the
              working field.
            </p>
            <div className="row  justify-content-begin">
              <div className="col-12 col-md-auto ">
            <a href="https://drive.google.com/file/d/1c65QwDdeE0e_7zL5Qhj-qikqWAOrxB8j/view?usp=sharing" className="btn btn-primary bg-dark mt-2 text-white p-2 rounded textfont1 border-success">Download CV</a>
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
                <ProgressBar width="w-75" title="Kotlin" />
              </div>
            </div>

            <div className="row">
              <div className="col-11 col-md-4 offset-1 mt-4">
                <h2 className="textfont1">Education</h2>
                <h6 className="textfont1">Systems Analyst ORT Buenos Aires (2020 - 2022)</h6>
                <p className="opacity-50 textfont1">
                  During the last semester of my studies, I worked on an
                  application for the company “Ciudades del Futuro”. I
                  participated in the development of a web application and an
                  application for Android. I was responsible for the front-end
                  development (Kotlin).
                </p>
              </div>
              <div className="col-11 col-md-4 offset-1 mt-4">
                <h2 className="textfont1">Language skills</h2>
                <ProgressBar width="width-100" title="Dutch" />
                <ProgressBar width="width-90" title="English" />
                <ProgressBar width="width-90" title="Spanish" />
                <ProgressBar width="width-50" title="French" />
              </div>
            </div>
            <div className="d-flex">
              <div className=" col-11 col-md-4 offset-1 mt-4 mb-4">
                <h2>Experience</h2>
                <h6>Freelance, Full Stack Developer (2022 - now) </h6>
                <p className="opacity-50">
                Since I am graduated as systems analyst, I participated in different projects. Most of them were web applications. The technologies that I used were: React.js, Node.js, Mongo DB, Bootstrap, CSS and HTML.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
