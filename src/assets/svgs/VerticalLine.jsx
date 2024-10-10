import styles from "./VerticalLine.module.css";

const VerticalLine = () => {
  return (
    <svg
      width="1"
      height="31"
      viewBox="0 0 1 31"
      fill="none"
      className={styles.verticalLine}
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
