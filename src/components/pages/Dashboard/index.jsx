import styles from "./Dashboard.module.scss";
import Sidebar from "../../Sidebar";
import Topbar from "../../Topbar";
import { Outlet } from "react-router";
import { Row, Col, Container } from "reactstrap";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

export default function Dashboard() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 992px)" });
  function sidebarButtonHandler() {
    setIsSideBarOpen((oldState) => !oldState);
  }
  return (
    <Container className={styles.dashboard + " d-flex"}>
      <div
        className={`${styles.sidebarWrapper} ${
          isSmallScreen ? styles.smallScreenSidebar : ""
        } ${isSideBarOpen ? styles.sidebarIsOpen : ""}`}
      >
        <Sidebar />
      </div>

      <Col>
        <div
          className={`d-flex flex-column container-fluid flex-grow-1 ${
            styles.topbarOutletWrapper
          } ${isSmallScreen ? styles.isSmallScreen : ""}`}
        >
          <Topbar onSidebarButtonClick={sidebarButtonHandler} />
          <Outlet />
        </div>
      </Col>
    </Container>
  );
}
