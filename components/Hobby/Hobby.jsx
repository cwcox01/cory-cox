import React from "react"

export default function Hobby({ name, icon }) {
  return (
    <div>
      {name} <i className={`fa-solid ${icon}`}></i>
    </div>
  )
}

