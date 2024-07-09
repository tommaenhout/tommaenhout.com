import { Fragment, useContext } from "react";
import Context from "../context/context";
const ResumeSection = () => {
  const { changeNav } = useContext(Context);
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">2023 - Present</div>
                <div className="name">Front-end Developer</div>
                <div className="company">It Rock</div>
                <p>
                  Responsible for the front-end development of multiple large
                  scale websites and applications, mainly using React.js and Next.js.
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2022 - 2023</div>
                <div className="name">Front-end Developer</div>
                <div className="company">Freelance</div>
                <p>
                  Developed multiple web applications for various clients. See my 
                  <a 
                    href="#portfolio" 
                    onClick={() => {
                    changeNav("portfolio");
                  }} className="text-sunsetOrange cursor-pointer not-italic"> portfolio</a> for more information.
                </p>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h">
              <div className="date">2022 - 2023</div>
                <div className="name">Coderhouse</div>
                <div className="company">Argentina</div>
                <p>Coursework - Javascript, React, CSS, HTML, React Native</p>
              </div>
              <div className="resume-item border-line-h">
              <div className="date">2020 - 2022</div>
                <div className="name">Ort</div>
                <div className="company">Argentina</div>
                <p>Degree in systems analysis.</p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;

