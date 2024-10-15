import styles from "./Button.module.scss";

export default function Button({
  color = "green",
  width = "full",
  height = "normal",
  children,
  label = "",
  fontSize = "normal",
  isPetite = false,
  onClick = () => {},
}) {
  return (
    <div className="d-flex flex-column">
      {label !== "" && <span className={styles.label}>{label}</span>}
      <button
        className={`btn ${styles.button} ${styles[color]} ${styles[width]} ${
          isPetite ? styles.petite : ""
        } ${styles[height]} ${
          fontSize === "small" ? styles.smallFont : ""
        } bold`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
