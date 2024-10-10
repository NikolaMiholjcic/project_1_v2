import styles from "./Login.module.scss";
import { Row, Col, Container } from "reactstrap";
import Button from "../Button";
import Logo from "../../assets/svgs/Logo";
import InputText from "../Input/InputText";
import ToggleSwitch from "../Input/ToggleSwitch";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [isInvalidInput, setIsInvalidInput] = useState({
    passowrd: false,
    username: false,
  });
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function formSubmitHandler(event) {
    event.preventDefault();
    navigate("/dashboard");
  }
  function onFocusHandler(element) {
    setIsInvalidInput((oldState) => {
      return { ...oldState, [element]: false };
    });
  }
  function onChangeHandler(event, element) {
    setForm((oldState) => {
      if (typeof oldState[element] === "boolean") {
        return {
          ...oldState,
          [element]: !oldState[element],
        };
      }

      return {
        ...oldState,
        [element]: event.target.value,
      };
    });
  }

  return (
    <form
      className={
        styles.login + " d-flex justify-content-center align-items-center"
      }
      onSubmit={formSubmitHandler}
    >
      <Container
        className={
          styles.loginContainer + " d-flex flex-column justify-content-center"
        }
      >
        <Row>
          <Logo />
        </Row>
        <Row>
          <InputText
            placeholder="Username"
            invalid={isInvalidInput.username}
            onFocus={onFocusHandler}
            varName="username"
            onChange={onChangeHandler}
          ></InputText>
        </Row>
        <Row>
          <InputText
            placeholder="Password"
            invalid={isInvalidInput.password}
            varName="password"
            onChange={onChangeHandler}
          ></InputText>
        </Row>
        <Row>
          <Col className="p-0 col-auto">
            <ToggleSwitch onChange={onChangeHandler} varName="remember" />
          </Col>
          <Col>
            <span>Remember me</span>
          </Col>
        </Row>
        <Row>
          <Button>Log in</Button>
        </Row>
      </Container>
    </form>
  );
}
