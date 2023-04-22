import React from "react";

export default function FooterContent() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-content d-flex flex-column align-items-center">
      <p className="cory-footer-name mb-0">&copy; Cory Cox {year}</p>
      <p className=" mb-0 footer-email">
        <a className="footer-email" href="mailto: cory@corycox.com">
          Email Me
        </a>
      </p>
    </div>
  );
}
