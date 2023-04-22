import React from "react";

export default function SocialmedianavItem({ socialBtnUrl, socialBtnText }) {
  return (
    <li className="ps-2 pt-1">
      <button className="btn btn-secondary">
        <a href={socialBtnUrl} target="_blank" rel="noreferrer">
          <span>{socialBtnText}</span>
        </a>
      </button>
    </li>
  );
}
