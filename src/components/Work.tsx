import ActiveSection from "../hooks/activeSection";
interface WorkProps {
  children: React.ReactNode;
  animationIn: boolean;
  animationOut: boolean;
}
const Work = ({ children, animationIn, animationOut } : WorkProps) => {
  return (
    <div
      className={ActiveSection("works", animationIn, animationOut)}
      id="works"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Work;
