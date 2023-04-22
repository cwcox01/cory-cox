import React from "react";
import Image from "next/image";

// importing smaller components
import Socialmedianav from "./Socialmedianav";
import HeadingintroItem from "./HeadingintroItem";

function Header() {
  return (
    <div className="header" id="about-cory">
      <div className="ps-1 d-flex">
        <div className="headshot-img">
          <div className=" pt-2 ps-3">
            <Image src="./img/cory-headshot.png" alt="Cory Cox Headshot" />
          </div>
        </div>
        <div>
          <HeadingintroItem
            headingName="Cory Cox"
            headingJobTitle="Help Desk Specialist"
            headingIntro="I am a Help Desk Specialist aspiring to be a Software Developer. I
                         have a degree in Computer and Information Technology. I also have
                         6 years of experience in the Information Technology Field."
          />
        </div>
      </div>

      <div className="d-flex justify-content-start">
        <Socialmedianav />
      </div>
    </div>
  );
}

export default Header;
