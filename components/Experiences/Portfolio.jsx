import React from "react";
import PortfolioItem from "./PortfolioItem";

function Portfolio() {
  return (
    <ul className="btn-cory pt-4 d-flex portfolio-sites">
      <PortfolioItem
        url="https://cubsplaytoday.com"
        btnText="Cubs Play Today"
      />
      <PortfolioItem
        url="https://main--charming-puffpuff-74fa3a.netlify.app/"
        btnText="Wolverines Corner"
      />
    </ul>
  );
}

export default Portfolio;
