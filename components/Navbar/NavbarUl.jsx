import React from "react";
import NavbarItem from "./NavbarItem";

export default function NavbarUl() {
  return (
    <ul className="nav nav-header mobile-nav">
      <NavbarItem
        navbarURL="#about-cory"
        navbarText="About Cory"
        navbarClassName="nav-item"
      />
      <NavbarItem
        navbarURL="#experience-cory"
        navbarText="Experiences"
        navbarClassName="nav-item"
      />
      <NavbarItem
        navbarURL="#cory-hobby"
        navbarText="Hobbies"
        navbarClassName="nav-item"
      />
      <NavbarItem
        navbarClassName="me-3 nav-item"
        navbarURL="#contact-me"
        navbarText="Contact Me"
      />
    </ul>
  );
}
