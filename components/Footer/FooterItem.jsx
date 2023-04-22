import React from "react";

export default function FooterItem({
  footerSocialClassName,
  footerSocialUrl,
  footerITagClassName,
}) {
  return (
    <li className="pe-1">
      <a
        className="social-links"
        href={footerSocialUrl}
        target="_blank"
        rel="noreferrer"
      >
        <i className={footerITagClassName} aria-hidden="true"></i>
      </a>
    </li>
  );
}
