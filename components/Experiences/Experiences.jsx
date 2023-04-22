import React from "react";

// breaking down sections into smaller workable components
import Skill from "./Skill.jsx";
import Portfolio from "./Portfolio.jsx";
import ExperienceItem from "./ExperienceItem.jsx";
import EducationItem from "./EducationItem.jsx";

function Experiences() {
  return (
    // starting div for corys experiences
    <div className="cory-experiences" id="experience-cory">
      <div className="text-center">
        <h2 className="section-head fs-1 ps-1">Corys Experiences</h2>
      </div>
      <div className="work-experience">
        <h3 className="fs-4 sub-section-head text-center">
          Professional Experience
        </h3>
        <div className="work-jobs ms-5 pt-4">
          <div className="jobs">
            <ExperienceItem
              jobTitle="Help Desk Sepcialist"
              jobYears="2021 - Present"
            />
            <ExperienceItem
              jobTitle="Field Technician"
              jobYears="2020 - 2021"
            />
          </div>
        </div>
        <div className="education">
          <h3 className="education-header fs-4 sub-section-head text-center">
            Education
          </h3>
          <div className="education-iupui ms-5 pt-4">
            <EducationItem
              educationSchool="IUPUI"
              educationLearned="Major, Computer and Information Technology, 2018"
              educationLearned2="Cert, Organizational Leadership, 2018"
            />
          </div>
        </div>

        <div className="skills-section">
          <h3 className="fs-4 sub-section-head text-center">Skills</h3>
          <div className="all-skills">
            <div className="left-skills">
              <Skill
                name="HTML5"
                icon="fa-html5"
                color="#04aa6d"
                percentage="95%"
              />
              <Skill
                name="CSS"
                icon="fa-css3"
                color="#2196f3"
                percentage="90%"
              />
              <Skill name="JS" icon="fa-js" color="#f44336" percentage="90%" />
              <Skill
                name="Helpdesk"
                icon="fa-hire-a-helper"
                color="#04aa6d"
                percentage="100%"
              />
            </div>
            <div className="middle-skills">
              <Skill
                name="Bootstrap"
                icon="fa-bootstrap"
                color="#2196f3"
                percentage="90%"
              />

              <Skill
                name="iOS"
                icon="fa-apple"
                color="#f44336"
                percentage="70%"
              />

              <Skill
                name="Xcode"
                icon="fa-codepen"
                color="#04aa6d"
                percentage="65%"
              />

              <Skill
                name="Swift"
                icon="fa-swift"
                color="#2196f3"
                percentage="60%"
              />
            </div>
            <div className="right-skills">
              <Skill
                name="Win 10/11"
                icon="fa-windows"
                color="#f44336"
                percentage="95%"
              />

              <Skill
                name="macOS"
                icon="fa-apple"
                color="#04aa6d"
                percentage="90%"
              />

              <h3 className="fs-5">
                AD<i className="fa-solid fa-computer"></i>
              </h3>
              <div className="ps-2">
                <div className="skills-container">
                  <div className="skills active-directory"></div>
                </div>
              </div>

              <Skill
                name="React"
                icon="fa-react"
                color="#f44336"
                percentage="90%"
              />
            </div>
          </div>
        </div>
        <div className="portfolio">
          <h3 className="sub-section-head text-center">Corys Portfolio</h3>
          <Portfolio />
        </div>
      </div>
    </div>
    // ending div for corys experiences
  );
}
export default Experiences;
