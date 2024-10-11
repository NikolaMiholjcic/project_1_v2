import styles from "./ArrowUpAndDown.module.scss";

const ArrowUpAndDown = () => {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.arrowUpAndDown}
    >
      <path
        d="M5.65738 5.08621L4.24316 3.672L0.000523448 7.91464L1.41474 9.32885L5.65738 5.08621Z"
        fill="currentColor"
      />
      <path
        d="M7.07211 9.32922L8.48633 7.91501L4.24369 3.67237L2.82947 5.08658L7.07211 9.32922Z"
        fill="currentColor"
      />
      <path
        d="M7.41421 0.672792L6 2.08701L10.2426 6.32965L11.6569 4.91543L7.41421 0.672792Z"
        fill="currentColor"
      />
      <path
        d="M8.82895 4.9148L10.2432 6.32901L14.4858 2.08637L13.0716 0.672156L8.82895 4.9148Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowUpAndDown;
