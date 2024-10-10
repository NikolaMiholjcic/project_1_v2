import styles from "./Dashboard.module.scss";
import Sidebar from "./Sidebar";
import { Row, Col, Container } from "reactstrap";

export default function Dashboard() {
  return (
    <Container className={styles.dashboard + " d-flex align-items-stretch"}>
      <Row className=" ">
        <Col className="col-1-5">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
}
