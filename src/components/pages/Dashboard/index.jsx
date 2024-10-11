import styles from "./Dashboard.module.scss";
import Sidebar from "../../Sidebar";
import Topbar from "../../Topbar";
import { Outlet } from "react-router";
import { Row, Col, Container } from "reactstrap";

export default function Dashboard() {
  return (
    <Container className={styles.dashboard + " d-flex"}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>

      <Col>
        <div
          className={`d-flex flex-column container-fluid flex-grow-1 ${styles.topbarOutletWrapper}`}
        >
          <Topbar />
          <Outlet />
        </div>
      </Col>
    </Container>
  );
}
