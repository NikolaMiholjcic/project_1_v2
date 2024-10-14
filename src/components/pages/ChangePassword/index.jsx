import styles from "./ChangePassword.module.scss";
import InputText from "../../Input/InputText";
import Button from "../../Button";
import Checkmark from "../../../assets/svgs/Checkmark";
import { useAuth } from "../../../services/authContext";
import { useState } from "react";

export default function ChangePassword() {
  const { user, updateUser } = useAuth();
  const [isValidInput, setIsValidInput] = useState({
    password: true,
    passwordRepeat: true,
  });
  const [inputData, setInputData] = useState({
    password: "",
    passwordRepeat: "",
  });
  function formOnChangeHandler(event, data) {
    setInputData((oldData) => ({
      ...oldData,
      [data]: event.target.value,
    }));
  }
  return (
    <form>
      <div className={`${styles.changePassword}`}>
        <h3>Change Password</h3>
        <div className="row">
          <div className="col-xl-6 col-12 col">
            <div className="padding-right-15">
              {" "}
              <InputText
                isPassword
                label="Old Password"
                readOnly
                value={user.password}
                toggable
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-xl-row">
          <div className="flex-grow-1">
            <InputText
              isPassword
              label="New Password"
              toggable
              varName="password"
              value={inputData.password}
              onChange={formOnChangeHandler}
              invalid={!isValidInput.password}
            />
          </div>

          <div className="flex-grow-1">
            <InputText
              label="Retype New Pasword"
              isPassword
              toggable
              varName="passwordRepeat"
              value={inputData.passwordRepeat}
              onChange={formOnChangeHandler}
              invalid={!isValidInput.passwordRepeat}
            />
          </div>
        </div>
        <div className="row">
          <div className={styles.buttonsWrapper}>
            <Button color="gray" width="short" fontSize="small">
              <span>Reset</span>
            </Button>
            <Button width="long" fontSize="small">
              <div className="d-flex flex-row justify-content-center align-items-center flex-no-wrap gap-1">
                <Checkmark /> <span>Save changes</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
