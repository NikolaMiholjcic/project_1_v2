import styles from "./GeneralSettings.module.scss";
import InputText from "../../Input/InputText";
import { useState } from "react";
import { useAuth } from "../../../services/authContext";
import Button from "../../Button";
import Checkmark from "../../../assets/svgs/Checkmark";
import Upload from "../../../assets/svgs/Upload";
export default function GeneralSettings() {
  const { user, updateUser } = useAuth();
  const [inputData, setInputData] = useState({
    picture: "",
    username: "",
    name: "",
    email: "",
    company: "",
  });
  const [isValidInput, setIsValidInput] = useState({
    picture: true,
    username: true,
    name: true,
    email: true,
    company: true,
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
    <form className={`${styles.generalSettings}`} onSubmit={formSubmitHandler}>
      <h3>General Settings</h3>
      <div className="d-flex flex-row w-100">
        <div className={styles.imageContainer}>
          <img src={`${user.picture}`} />
        </div>
        <div className={styles.pictureUploadControls}>
          <div className={styles.buttonsWrapper}>
            <Button color="gray" width="short" fontSize="small" isPetite>
              <span>Reset</span>
            </Button>
            <Button fontSize="small" isPetite>
              <div className="d-flex flex-row justify-content-center align-items-center flex-no-wrap gap-1">
                <Upload /> <span>Upload</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-xl-row">
        <div className="flex-grow-1">
          {" "}
          <InputText
            label="Username"
            value={inputData.username}
            invalid={!isValidInput.username}
            placeholder={
              user.username.trim() !== "" ? user.username : "Add link"
            }
            varName="username"
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex-grow-1">
          {" "}
          <InputText
            label="Name"
            value={inputData.name}
            invalid={!isValidInput.name}
            placeholder={user.name.trim() !== "" ? user.name : "Add link"}
            varName="name"
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="d-flex flex-column flex-xl-row">
        <div className="flex-grow-1">
          {" "}
          <InputText
            label="E-mail"
            value={inputData.email}
            invalid={!isValidInput.email}
            placeholder={user.email.trim() !== "" ? user.email : "Add link"}
            varName="email"
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex-grow-1">
          {" "}
          <InputText
            label="Company"
            value={inputData.company}
            invalid={!isValidInput.company}
            placeholder={user.company.trim() !== "" ? user.company : "Add link"}
            varName="company"
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
    </form>
  );
}
