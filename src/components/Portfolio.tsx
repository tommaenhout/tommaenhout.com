"use client"

import ActiveSection from "@/hooks/activeSection";

interface PortfolioProps {
  children: React.ReactNode;
  animationIn?: boolean;
  animationOut?: boolean;
}
const Portfolio = ({ children, animationIn, animationOut } : PortfolioProps) => {
  return (
    <div
      className={ActiveSection("portfolio", animationIn, animationOut)}
      id="portfolio"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Portfolio;