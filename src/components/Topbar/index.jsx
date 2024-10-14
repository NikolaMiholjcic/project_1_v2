import styles from "./Topbar.module.scss";
import MenuButton from "../../assets/svgs/MenuButton";
import InputText from "../Input/InputText";
import Headphones from "../../assets/svgs/Headphones";
import Bell from "../../assets/svgs/Bell";
import ThreeDots from "../../assets/svgs/ThreeDots";

export default function Topbar({ onSidebarButtonClick }) {
  return (
    <div className={`${styles.topbar}`}>
      <button onClick={onSidebarButtonClick}>
        <MenuButton />
      </button>
      <div className={styles.searchbarWrapper}>
        {" "}
        <InputText placeholder="Search something..." isWhite={true} />
      </div>
    </div>
  );
}
