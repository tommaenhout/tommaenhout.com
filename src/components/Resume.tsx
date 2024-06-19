import ActiveSection from "@/hooks/activeSection";

interface ResumeProps {
  children: React.ReactNode;
  animationIn?: boolean;
  animationOut?: boolean;
}
const Resume = ({ children, animationIn, animationOut } : ResumeProps) => {
  return (
    <div
      className={ActiveSection("resume", animationIn, animationOut)}
      id="resume"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Resume;
