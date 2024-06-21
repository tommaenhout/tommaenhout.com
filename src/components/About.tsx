"use client"

import ActiveSection from "@/hooks/activeSection";

interface AboutProps {
  children: React.ReactNode;
  animationIn?: boolean;
  animationOut?: boolean;
}

const About = ({ children, animationIn, animationOut } : AboutProps) => {
  return (
    <div
      className={ActiveSection("about", animationIn, animationOut)}
      id="about"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default About;
