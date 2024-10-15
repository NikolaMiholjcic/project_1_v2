import styles from "./Upload.module.scss";
export default function Upload() {
  return (
    <div className={`${styles.upload}`}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 9V11.667C13 12.0205 12.8596 12.3596 12.6096 12.6096C12.3596 12.8596 12.0205 13 11.667 13H2.333C1.97947 13 1.64041 12.8596 1.39043 12.6096C1.14044 12.3596 1 12.0205 1 11.667V9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.334 4.333L6.99999 1L3.66699 4.333"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 1V9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
