import styles from "./PostNews.module.scss";
import InputText from "../../Input/InputText";
import ImageUploader from "../../ImageUploader";
import { dateCalculations } from "../../../utils/dateCalculations";
import ToggleSwitch from "../../Input/ToggleSwitch";
import Button from "../../Button";
import Eye from "../../../assets/svgs/Eye";
import Checkmark from "../../../assets/svgs/Checkmark";

export default function PostNews() {
  const today = new Date();
  const todayDate = `${today.getDate()} ${dateCalculations(
    today.getMonth()
  )}, ${today.getFullYear()}`;
  return (
    <div className={styles.postNews + " d-flex flex-column"}>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h2>Add New Post</h2>
        <div className={styles.buttonWrapper}>
          <Button color="white">
            <Eye />
            Preview
          </Button>
          <Button>
            <Checkmark />
            Save
          </Button>
        </div>
      </div>

      <div className="row h-100">
        <div
          className={`${styles.section} ${styles.sectionOne} col-12 col-md-8`}
        >
          <div className="row">
            <InputText placeholder="Title" />
          </div>

          <div className="row">
            <div className="col">
              <h3>Content</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <InputText
                type="text-area"
                label="Short decsription"
                placeholder="Short content of the editor..."
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <InputText
                type="text-area"
                label="Content of the editor..."
                large
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Images</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <ImageUploader />
            </div>
          </div>
        </div>

        <div className={`${styles.sectionTwoWrapper} col-4 pe-0`}>
          <div className={`${styles.section} ${styles.sectionTwo} h-100`}>
            <div className="row">
              <div className="col-12 col">
                <InputText
                  placeholder="John Travolta"
                  readOnly
                  label="Written by"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                {" "}
                <InputText readOnly placeholder={todayDate} label="Post Date" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <InputText readOnly label="Categories" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <ToggleSwitch label="Published" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <ToggleSwitch label="Show Author Name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
