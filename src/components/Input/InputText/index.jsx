import styles from "./InputText.module.scss";
import TooltipArrow from "../../../assets/svgs/TooltipArrow";

export default function InputText({
  type = "text",
  placeholder = "",
  readOnly = false,
  onChange = () => {},
  label = "",
  invalid = false,
  errorMessasge = "",
  onFocus = () => {},
  varName = "",
}) {
  return (
    <div className="d-flex flex-column container position-relative">
      {label !== "" && <span className={styles.label}>{label}</span>}
      {type === "text" ? (
        <input
          placeholder={`${placeholder}`}
          type="text"
          readOnly={readOnly}
          className={`${styles.inputText} ${styles.text} ${
            invalid ? styles.invalid : ""
          }`}
          onChange={(event) => {
            onChange(event, varName);
          }}
          onFocus={() => {
            onFocus(varName);
          }}
        />
      ) : (
        <textarea
          onChange={(event) => {
            onChange(event, varName);
          }}
          onFocus={() => {
            onFocus(varName);
          }}
          placeholder={`${placeholder}`}
          readOnly={readOnly}
          className={`${styles.inputText} ${styles.textArea}`}
        />
      )}
      {invalid && (
        <>
          <span className={`${styles.errorX}`}>x</span>
          <span
            className={`${styles.errorMessage} + " d-flex flex-row justify-content-center align-items-center no-wrap"`}
          >
            {" "}
            <TooltipArrow /> Please enter Your{" "}
            {errorMessasge !== "" ? errorMessasge : placeholder.toLowerCase()}
          </span>
        </>
      )}
    </div>
  );
}
