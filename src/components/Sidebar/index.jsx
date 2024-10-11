import styles from "./Sidebar.module.scss";
import Logo from "../../assets/svgs/Logo";
import {
  UncontrolledAccordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
} from "reactstrap";
import Blocks from "../../assets/svgs/Blocks";
import BlocksTwo from "../../assets/svgs/BlocksTwo";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [sectionIsActive, setSectionIsActive] = useState(1);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Logo width={188} height={24} />
      </div>
      <UncontrolledAccordion
        flush
        defaultOpen={[`${sectionIsActive}`]}
        stayOpen
      >
        <AccordionItem>
          <AccordionHeader targetId="1">
            <Blocks active={sectionIsActive === 1} />
            <span>News</span>
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <ul>
              <li>
                <span>
                  <NavLink
                    onClick={() => {
                      setSectionIsActive(1);
                    }}
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
                    to="/news-list"
                  >
                    News List
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <NavLink
                    onClick={() => {
                      setSectionIsActive(1);
                    }}
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
                    to="/post"
                  >
                    Add News
                  </NavLink>
                </span>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            <BlocksTwo active={sectionIsActive === 2} />
            <span>Profile</span>
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <ul>
              <li>
                <span>
                  <NavLink
                    onClick={() => {
                      setSectionIsActive(2);
                    }}
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
                    to="/profile/general"
                  >
                    General Settings
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    onClick={() => {
                      setSectionIsActive(2);
                    }}
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
                    to="/profile/password"
                  >
                    Change Password
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    onClick={() => {
                      setSectionIsActive(2);
                    }}
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
                    to="/profile/information"
                  >
                    Information
                  </NavLink>
                </span>
              </li>
              <li>
                <span>
                  <NavLink
                    onClick={() => {
                      setSectionIsActive(2);
                    }}
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : ""
                    }
                    to="/profile/social"
                  >
                    Social
                  </NavLink>
                </span>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </div>
  );
}
