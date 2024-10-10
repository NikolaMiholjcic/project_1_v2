import styles from "./ToggleSwitch.module.scss";
export default function ToggleSwitch({
  onChange = () => {},
  label = "",
  color = "gray",
  varName = "",
}) {
  return (
    <div className="d-flex flex-column container">
      {label !== "" && <span className={styles.label}>{label}</span>}
      <label className={`${styles.switch}`}>
        <input
          type="checkbox"
          onChange={(event) => {
            onChange(event, varName);
          }}
        />
        <span
          className={`${styles.slider}  ${styles[color]} ${styles.round}`}
        ></span>
      </label>
    </div>
  );
}
