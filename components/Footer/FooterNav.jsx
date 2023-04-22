import React from "react";

// importing smaller footernavitem component
import FooterNavItem from "./FooterNavItem";

export default function FooterNav() {
  return (
    <div>
      <nav className="pe-3 pt-4">
        <ul className="footer-nav d-flex">
          <FooterNavItem
            footerNavUrl="#about-cory"
            footerNavText="About Cory"
          />
          <FooterNavItem
            footerNavUrl="#experience-cory"
            footerNavText="Experiences"
          />
          <FooterNavItem footerNavUrl="#cory-hobby" footerNavText="Hobbies" />
          <FooterNavItem footerNavUrl="#root" footerNavText="Home" />
        </ul>
      </nav>
    </div>
  );
}
