import styles from "./ProfileNavigation.module.scss";
import Person from "../../../assets/svgs/Person";
import Lock from "../../../assets/svgs/Lock";
import Info from "../../../assets/svgs/Info";
import Chain from "../../../assets/svgs/Chain";
import { NavLink } from "react-router-dom";
export default function ProfileNavigation() {
  return (
    <div className={`${styles.profileNavigation} d-flex flex-column `}>
      <h2>Account Settings</h2>
      <NavLink
        to="general"
        className={({ isActive }) => `${isActive ? styles.active : ""} w-100`}
      >
        <div className={styles.iconNameWrapper}>
          <i>
            <Person />
          </i>
          <span>General</span>
        </div>
      </NavLink>
      <NavLink
        to="password"
        className={({ isActive }) => `${isActive ? styles.active : ""} w-100`}
      >
        {" "}
        <div className={styles.iconNameWrapper}>
          <i>
            <Lock />
          </i>
          <span> Change password</span>
        </div>
      </NavLink>
      <NavLink
        to="information"
        className={({ isActive }) => `${isActive ? styles.active : ""} w-100`}
      >
        <div className={styles.iconNameWrapper}>
          <i>
            <Info />
          </i>
          <span> Information</span>
        </div>
      </NavLink>
      <NavLink
        to="social"
        className={({ isActive }) => `${isActive ? styles.active : ""} w-100`}
      >
        {" "}
        <div className={styles.iconNameWrapper}>
          <i>
            <Chain />
          </i>
          <span> Social</span>
        </div>
      </NavLink>
    </div>
  );
}
