import { Fragment, useContext } from "react";
import BlogPostNew, { BlogPostClassic } from "../BlogPost";

import Context from "../context/context";
interface ContentContainerProps {
  children: React.ReactNode;
  blog?: string;
}
const ContentContainer = ({ children, blog } : ContentContainerProps) => {
  const { nav } = useContext(Context);
  return (
    <Fragment>
      {nav === "blog-post" ? (
        blog === "classic" ? (
          <BlogPostClassic />
        ) : (
          <BlogPostNew />
        )
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Fragment>
  );
};
export default ContentContainer;
