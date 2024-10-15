import styles from "./Information.module.scss";
import InputText from "../../Input/InputText";
import { useAuth } from "../../../services/authContext";
import Button from "../../Button";
import Checkmark from "../../../assets/svgs/Checkmark";
import { useState } from "react";
export default function Information() {
  const { user, updateUser } = useAuth();
  const [inputData, setInputData] = useState({
    bio: "",
    birthDate: "",
    website: "",
    country: "",
    phoneNumber: "",
  });
  const [isValidInput, setIsValidInput] = useState({
    bio: true,
    website: true,
    country: true,
    phoneNumber: true,
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
      <div className={`${styles.information} + d-flex flex-column`}>
        <h3>Information</h3>
        <div className="row">
          <div className="col">
            {" "}
            <InputText
              type="text-area"
              placeholder={
                user.bio.trim() !== "" ? user.bio : "Enter your bio data"
              }
              label="Bio"
              value={inputData.bio}
              onChange={onChangeHandler}
              varName="bio"
              invalid={!isValidInput.bio}
            />
          </div>
        </div>

        <div className="d-flex flex-column flex-xl-row">
          <div className="flex-grow-1">
            <InputText
              label="Birth date"
              placeholder={
                user.birthDate.trim() !== ""
                  ? user.birthDate
                  : "Enter your birt date"
              }
              value={inputData.birthDate}
              readOnly
            />
          </div>
          <div className="flex-grow-1">
            <InputText
              label="Country"
              value={inputData.country}
              onChange={onChangeHandler}
              placeholder={
                user.country.trim() !== ""
                  ? user.country
                  : "Select your country"
              }
              varName="country"
              readOnly
            />
          </div>
        </div>
        <div className="d-flex flex-column flex-xl-row">
          <div className="flex-grow-1">
            <InputText
              label="Website"
              placeholder={
                user.website.trim() !== "" ? user.website : "Enter your website"
              }
              value={inputData.website}
              onChange={onChangeHandler}
              varName="website"
              invalid={!isValidInput.phoneNumber}
            />
          </div>
          <div className="flex-grow-1">
            <InputText
              label="Phone"
              value={inputData.phoneNumber}
              onChange={onChangeHandler}
              varName="phoneNumber"
              invalid={!isValidInput.phoneNumber}
              placeholder={
                user.phoneNumber.trim() !== ""
                  ? user.phoneNumber
                  : "Enter your phoneNumber"
              }
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
