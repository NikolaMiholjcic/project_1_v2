import styles from "./Login.module.scss";
import { Row, Col, Container } from "reactstrap";
import Button from "../../Button";
import Logo from "../../../assets/svgs/Logo";
import InputText from "../../Input/InputText";
import ToggleSwitch from "../../Input/ToggleSwitch";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  console.log(
    "add acordaton item border 0, .accordion-button:not(.collapsed) bg color none"
  );
  const navigate = useNavigate();
  const [isValidInput, setIsValidInput] = useState({
    password: false,
    username: true,
  });
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function formSubmitHandler(event) {
    event.preventDefault();
    console.log(isValidInput.password, "+", isValidInput.username);
    if (isValidInput.password && isValidInput.username) navigate("/");
  }
  function onFocusHandler(element) {
    setIsValidInput((oldState) => {
      return { ...oldState, [element]: true };
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
            invalid={!isValidInput.username}
            onFocus={onFocusHandler}
            varName="username"
            onChange={onChangeHandler}
            value={form.username}
          ></InputText>
        </Row>
        <Row>
          <InputText
            placeholder="Password"
            invalid={!isValidInput.password}
            isPassword
            onFocus={onFocusHandler}
            varName="password"
            onChange={onChangeHandler}
            value={form.password}
          ></InputText>
        </Row>
        <Row>
          <Col className="p-0 col-auto">
            <ToggleSwitch
              onChange={onChangeHandler}
              varName="remember"
              color="blue"
            />
          </Col>
          <Col>
            <span className={styles.span}>Remember me</span>
          </Col>
        </Row>
        <Row>
          <Button>Log in</Button>
        </Row>
      </Container>
    </form>
  );
}
