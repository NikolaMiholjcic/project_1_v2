import styles from "./Button.module.scss";

export default function Button({
  color = "green",
  width = "full",
  height = "normal",
  children,
  label = "",
  onClick = () => {},
}) {
  return (
    <div className="d-flex flex-column container">
      {label !== "" && <span className={styles.label}>{label}</span>}
      <button
        className={`btn ${styles.button} ${styles[color]} ${styles[width]} ${styles[height]} bold`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
