import styles from "./Dashboard.module.scss";
import Sidebar from "./Sidebar";
import { Row, Col, Container } from "reactstrap";

export default function Dashboard() {
  return (
    <Container className={styles.dashboard + " d-flex"}>
      <Col className="col">
        <Sidebar />
      </Col>
    </Container>
  );
}
