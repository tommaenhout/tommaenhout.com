import { Fragment } from "react";


const Skills = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">My Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list circles">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-code" />
                </div>
                <div className="name">Front-end</div>
              </div>
              <ul>
                <li>
                  <div className="name">React.js</div>
                  <div className="progress p90">
                    <span>90%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">React Native</div>
                  <div className="progress p75">
                    <span>60%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Next.js</div>
                  <div className="progress p85">
                    <span>85%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">HTML / CSS</div>
                  <div className="progress p95">
                    <span>95%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-flag" />
                </div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Dutch</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "100%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Spanish</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "95%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "95%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">German</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "50%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">French</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "40%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-paint-brush" />
                </div>
                <div className="name">Back-end</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">POO</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Node.js</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "65%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">C#</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "60%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Java</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "60%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Soft skills</div>
              </div>
              <ul>
                <li>
                  <div className="name">Creativity</div>
                </li>
                <li>
                  <div className="name">Team player</div>
                </li>
                <li>
                  <div className="name">Communication</div>
                </li>
                <li>
                  <div className="name">Adaptability</div>
                </li>
                <li>
                  <div className="name">Problem-solving</div>
                </li>
                <li>
                  <div className="name">Time management</div>
                </li>
                <li>
                  <div className="name">Leadership</div>
                </li>
              </ul>
            </div>
          </div>
          
      
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Skills;

