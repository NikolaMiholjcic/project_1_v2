import styles from "./XButton.module.scss";

export default function XButton() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.xButton}
    >
      <path
        d="M2.17179 0.757604L5.00022 3.58603L7.82865 0.757604L9.24286 2.17182L6.41443 5.00024L9.24286 7.82867L7.82865 9.24288L5.00022 6.41446L2.17179 9.24288L0.757581 7.82867L3.58601 5.00024L0.757581 2.17182L2.17179 0.757604Z"
        fill="currentColor"
      />
    </svg>
  );
}
