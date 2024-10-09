import styles from "./Button.module.scss";

export default function Button({
  color = "green",
  width = "full",
  height = "normal",
  children,
}) {
  return (
    <button
      className={`btn ${styles.button} ${styles[color]} ${styles[width]} ${styles[height]} bold`}
    >
      {children}
    </button>
  );
}
