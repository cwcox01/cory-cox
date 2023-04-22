import React from "react";

export default function EducationItem({ educationSchool, educationLearned, educationLearned2 }) {
  return (
    <div>
      <h4 className="fs-5">{educationSchool}</h4>
      <p className="fs-6">{educationLearned}</p>
      <p className="fs-6">{educationLearned2}</p>
    </div>
  );
}
