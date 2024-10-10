import React from "react";
import styles from "./MenuButton.module.css";

const MenuButton = ({ width = 24, height = 19 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.menuButton}
    >
      <path
        d="M22.5 0H1.5C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H22.5C23.3284 3 24 2.32843 24 1.5C24 0.671573 23.3284 0 22.5 0Z"
        fill="currentColor"
      />
      <path
        d="M14.5 8H1.5C0.671573 8 0 8.67157 0 9.5C0 10.3284 0.671573 11 1.5 11H14.5C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8Z"
        fill="currentColor"
      />
      <path
        d="M8.5 16H1.5C0.671573 16 0 16.6716 0 17.5C0 18.3284 0.671573 19 1.5 19H8.5C9.32843 19 10 18.3284 10 17.5C10 16.6716 9.32843 16 8.5 16Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MenuButton;
