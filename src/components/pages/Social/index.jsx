import styles from "./Social.module.scss";
import InputText from "../../Input/InputText";
import { useState } from "react";
import { useAuth } from "../../../services/authContext";
import Button from "../../Button";
import Checkmark from "../../../assets/svgs/Checkmark";
export default function Social() {
  const { user, updateUser } = useAuth();
  const [inputData, setInputData] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    linkedln: "",
  });
  const [isValidInput, setIsValidInput] = useState({
    facebook: true,
    instagram: true,
    twitter: true,
    linkedln: true,
  });
  function onChangeHandler(event, data) {
    setInputData((oldData) => ({
      ...oldData,
      [data]: event.target.value,
    }));
  }
  function formSubmitHandler(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles.social} d-flex flex-column`}>
        <h3>Social</h3>
        <div className="d-flex flex-column flex-xl-row">
          <div className="flex-grow-1">
            <InputText
              label="Facebook"
              value={inputData.facebook}
              invalid={!isValidInput.facebook}
              placeholder={
                user.facebook.trim() !== "" ? user.facebook : "Add link"
              }
              varName="facebook"
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex-grow-1">
            <InputText
              label="Instagram"
              value={inputData.instagram}
              invalid={!isValidInput.instagram}
              placeholder={
                user.instagram.trim() !== "" ? user.instagram : "Add link"
              }
              varName="instagram"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="d-flex flex-column flex-xl-row">
          <div className="flex-grow-1">
            <InputText
              label="Twitter"
              value={inputData.twitter}
              invalid={!isValidInput.twitter}
              placeholder={
                user.twitter.trim() !== "" ? user.twitter : "Add link"
              }
              varName="twitter"
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex-grow-1">
            <InputText
              label="Linkedln"
              invalid={!isValidInput.linkedln}
              value={inputData.linkedln}
              placeholder={
                user.linkedln.trim() !== "" ? user.linkedln : "Add link"
              }
              varName="linkedln"
              onChange={onChangeHandler}
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
