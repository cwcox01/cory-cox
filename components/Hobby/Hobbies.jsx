import React from "react";
import Hobby from "./Hobby";

function Hobbies() {
  return (
    <div className="cory-hobby" id="cory-hobby">
      <h2 className="corys-hobbies section-head section-header text-center">
        My Hobbies
      </h2>
      <div className="hobby-list">
        <div className="hobby-first-list">
          <Hobby name="Cycling" icon="fa-bicycle" />
          <Hobby name="DIY Projects" icon="fa-screwdriver-wrench" />
          <Hobby name="Exercising" icon="fa-person-walking" />
        </div>
        <div className="hobby-second-list">
          <Hobby name="Michigan Wolveries" icon="fa-football" />
          <Hobby name="Chicago Cubs" icon="fa-baseball" />
          <Hobby name="Indianapolis Colts" icon="fa-horse" />
        </div>
        <div className="hobby-third-list">
          <Hobby name="Sports" icon="fa-stopwatch-20" />
          <Hobby name="Football" icon="fa-sharp fa-football" />
          <Hobby name="Baseball" icon="fa-baseball-bat-ball" />
        </div>
        <div className="hobby-fourth-list">
          <Hobby name="Computers" icon="fa-computer-mouse" />
          <div>
            Web Development
            <i className="ps-1 fa-brands fa-internet-explorer"></i>
          </div>
          <Hobby name="App Development" icon="fa-mobile" />
        </div>
      </div>
    </div>
  );
}
export default Hobbies;
