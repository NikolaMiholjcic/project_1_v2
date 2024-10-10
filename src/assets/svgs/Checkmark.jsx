import styles from "./Checkmark.module.css";

const Checkmark = () => {
  return (
    <svg
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.checkmark}
    >
      <path
        d="M5.92924 8.51042L0.979492 3.56067L2.39371 2.14646L5.92924 5.68199L11.5861 0.0251351L13.0003 1.43935L5.92924 8.51042Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default Checkmark;
