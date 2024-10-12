import styles from "./InputText.module.scss";
import TooltipArrow from "./svgs/TooltipArrow";
import Eye from "./svgs/Eye";
import EyeShut from "./svgs/EyeShut";
import { useState } from "react";
export default function InputText({
  type = "text",
  isPassword = false,
  placeholder = "",
  readOnly = false,
  onChange = () => {},
  label = "",
  invalid = false,
  errorMessasge = "",
  onFocus = () => {},
  value = "",
  varName = "",
  toggable = false,
}) {
  const [isShowingPassword, setIsShowingPassword] = useState(isPassword);
  if (isShowingPassword) {
    value = "*".repeat(value.length);
  }

  return (
    <>
      {label !== "" && <span className={styles.label}>{label}</span>}
      <div className="d-flex flex-column container position-relative ">
        {type === "text" ? (
          <input
            placeholder={`${placeholder}`}
            type="text"
            readOnly={readOnly}
            value={value}
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
            value={value}
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
        {!invalid && toggable && (
          <div
            className={styles.visibilityToggle}
            onClick={() => {
              setIsShowingPassword((oldState) => !oldState);
              console.log("some");
            }}
          >
            {!isShowingPassword && <EyeShut />}
            {isShowingPassword && <Eye />}
          </div>
        )}
      </div>
    </>
  );
}
