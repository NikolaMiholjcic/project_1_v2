import React from "react";
import "./VerticalLine.css";

const VerticalLine = () => {
  return (
    <svg
      width="1"
      height="31"
      viewBox="0 0 1 31"
      fill="none"
      className="vertical_line"
    >
      <path
        d="M0.5 0.5V30.5"
        stroke="#8596AB"
        strokeLinecap="round"
        fill="currentColor"
      />
    </svg>
  );
};

export default VerticalLine;
