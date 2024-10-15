import styles from "./ProfileNavigation.module.scss";
import Person from "../../../assets/svgs/Person";
import Lock from "../../../assets/svgs/Lock";
import Info from "../../../assets/svgs/Info";
import Chain from "../../../assets/svgs/Chain";
import { NavLink } from "react-router-dom";
export default function ProfileNavigation() {
  return (
    <div className={`${styles.profileNavigation} d-flex flex-column gap-2`}>
      <div className="d-flex justify-content-center align-items-center w-100 justify-content-sm-start">
        <h2 className="text-nowrap">Account Settings</h2>
      </div>
      <div className="d-flex flex-sm-column flex-row align-items-center justify-content-center w-100 ">
        <NavLink
          to="general"
          className={({ isActive }) => `${isActive ? styles.active : ""} w-15`}
        >
          <div className={styles.iconNameWrapper}>
            <i>
              <Person />
            </i>
            <span className="d-none d-sm-block">General</span>
          </div>
        </NavLink>
        <NavLink
          to="password"
          className={({ isActive }) => `${isActive ? styles.active : ""}  w-15`}
        >
          {" "}
          <div className={styles.iconNameWrapper}>
            <i>
              <Lock />
            </i>
            <span className="d-none d-sm-block"> Change password</span>
          </div>
        </NavLink>
        <NavLink
          to="information"
          className={({ isActive }) =>
            `${isActive ? styles.active : ""}  w-15 `
          }
        >
          <div className={styles.iconNameWrapper}>
            <i>
              <Info />
            </i>
            <span className="d-none d-sm-block"> Information</span>
          </div>
        </NavLink>
        <NavLink
          to="social"
          className={({ isActive }) =>
            `${isActive ? styles.active : ""}  w-15 `
          }
        >
          {" "}
          <div className={styles.iconNameWrapper}>
            <i>
              <Chain />
            </i>
            <span className="d-none d-sm-block"> Social</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
