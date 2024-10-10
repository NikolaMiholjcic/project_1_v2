import styles from "./TooltipArrow.module.scss";
export default function TooltipArrow() {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.TooltipArrow}
    >
      <path
        d="M1 10.7321C-0.333333 9.96225 -0.333333 8.03775 1 7.26795L11.5 1.20577C12.8333 0.435973 14.5 1.39822 14.5 2.93782L14.5 15.0622C14.5 16.6018 12.8333 17.564 11.5 16.7942L1 10.7321Z"
        fill="currentColor"
      />
    </svg>
  );
}
