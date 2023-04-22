import React from "react";

export default function ExperienceItem({ jobTitle, jobYears }) {
  return (
    <div>
      <h4 className="fs-5">{jobTitle}</h4>
      <p className="fs-6">{jobYears}</p>
    </div>
  );
}
