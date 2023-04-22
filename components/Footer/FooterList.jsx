import React from "react";

// importing Footeritem
import FooterItem from "./FooterItem";

export default function FooterList() {
  return (
    <ul className="menu simple nav">
      <FooterItem
        footerSocialUrl="https://www.facebook.com/cwcox01"
        footerITagClassName="fa fa-facebook fa-sm"
      />
      <FooterItem
        footerSocialUrl="https://www.instagram.com/ugotcced/"
        footerITagClassName="fa fa-instagram fa-sm ps-1"
      />
      <FooterItem
        footerSocialUrl="https://www.linkedin.com/in/corywcox"
        footerITagClassName="fa fa-linkedin fa-sm ps-1"
      />
      <FooterItem
        footerSocialUrl="https://github.com/cwcox01/"
        footerITagClassName="fa fa-github fa-sm ps-1"
      />
    </ul>
  );
}
