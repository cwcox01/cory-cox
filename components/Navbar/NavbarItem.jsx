import React from "react";

export default function NavbarItem({ navbarClassName, navbarURL, navbarText }) {
  return (
    <li className={navbarClassName}>
      <a href={navbarURL}>{navbarText}</a>
    </li>
  );
}
