import styles from "./Information.module.scss";
import InputText from "../../Input/InputText";
import { useAuth } from "../../../services/authContext";
import Button from "../../Button";
import Checkmark from "../../../assets/svgs/Checkmark";
import { useState } from "react";
export default function Information() {
  const [inputData, setInputData] = useState({});
  const { user, updateUser } = useAuth();
  return (
    <div className={`${styles.information} + d-flex flex-column`}>
      <h3>Information</h3>
      <div className="row">
        <div className="col">
          {" "}
          <InputText
            type="text-area"
            placeholder="Enter your bio data"
            label="Bio"
            value={user.bio}
          />
        </div>
      </div>

      <div className="d-flex flex-column flex-xl-row">
        <div className="flex-grow-1">
          <InputText label="Birth date" value={user.birthDate} readOnly />
        </div>
        <div className="flex-grow-1">
          <InputText label="Country" value={user.country} readOnly />
        </div>
      </div>
      <div className="d-flex flex-column flex-xl-row">
        <div className="flex-grow-1">
          <InputText label="Website" placeholder={user.website} />
        </div>
        <div className="flex-grow-1">
          <InputText label="Phone" value={user.phoneNumber} readOnly />
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
  );
}
