import styles from "./Login.module.scss";
import { Row, Col, Container } from "reactstrap";
import Button from "../Button";

export default function Login() {
  return (
    <div
      className={
        styles.login + " d-flex justify-content-center align-items-center"
      }
    >
      <Container className={styles.loginContainer}>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col className=" col-12">
            <Button>Log in</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
