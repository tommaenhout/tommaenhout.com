import { Fragment } from "react";
import ActiveSection from "@/hooks/activeSection";
interface BlogProps {
  children: React.ReactNode;
  animationIn: boolean;
  animationOut: boolean;
}
const Blog = ({ children, animationIn, animationOut } : BlogProps) => {
  return (
    <Fragment>
      <div
        className={ActiveSection("blog", animationIn, animationOut)}
        id="blog"
      >
        <div className="card-wrap">{children}</div>
      </div>
    </Fragment>
  );
};
export default Blog;
