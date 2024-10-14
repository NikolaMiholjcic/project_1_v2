import styles from "./Topbar.module.scss";
import MenuButton from "../../assets/svgs/MenuButton";

export default function Topbar({ onSidebarButtonClick }) {
  return (
    <div className={`${styles.topbar}`}>
      <button onClick={onSidebarButtonClick}>
        <MenuButton />
      </button>
    </div>
  );
}
