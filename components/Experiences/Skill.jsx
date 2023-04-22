
import React from "react"

export default function Skill({name, icon, color, percentage }) {
  return (
    <div>
        <h3 className="fs-5">
            {name}<i className={`fa-brands ${icon}`}></i>
        </h3>
        <div className="ps-2">
            <div className="skills-container">
                <div className="skills" style={{ 'backgroundColor': color, 'width': percentage}}></div>
            </div>
        </div>
    </div>
  );
}
