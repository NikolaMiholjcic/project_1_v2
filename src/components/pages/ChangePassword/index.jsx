import styles from "./ChangePassword.module.scss";
import InputText from "../../Input/InputText";
import Button from "../../Button";
export default function ChangePassword() {
  return (
    <div className={`${styles.changePassword}`}>
      <h3>Change Password</h3>
      <div className="row">
        <div className="col-md-6 col-12 col">
          <InputText isPassword label="Old Password" toggable />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12 col">
          <InputText isPassword label="New Password" />
        </div>
        <div className="col-md-6 col-12 col">
          <InputText label="Retype New Pasword" />
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}
