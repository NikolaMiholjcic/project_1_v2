import styles from "./Test.module.scss";
import { Col, Row } from "reactstrap";
export default function Test() {
  return (
    <div className={styles.divTest}>
      <div className={styles.divFlex + " d-flex flex-wrap cursor-pointer"}>
        <Col xl={3} lg={4} md={3} xs={12}>
          S
        </Col>
        <Col xl={3} lg={4} md={3} xs={6}>
          D
        </Col>
        <Col xl={3} lg={4} md={3} xs={6}>
          t
        </Col>
        <Col xl={3} lg={4} md={3} xs={6}>
          <p> Rajo</p>
        </Col>
      </div>
    </div>
  );
}
