import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/AuthReducer.ts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "Строка почты не может быть пустой"
  );
  const [passwordError, setPasswordError] = useState(
    "Строка пароля не может быть пустой"
  );
  const [formValid, setFormValid] = useState(false);
  const [loginInto, setLoginInto] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
        default: 
        break
    }
  };

  const emailhandler = (e) => {
    setEmail(e.target.value);
    if (
      !String(e.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordhandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value < 3) {
      setPasswordError(
        "Пароль не подходит"
      );
    } else {
      setPasswordError("");
    }
  };

  // function loginHandler(email, password) {
  //   dispatch(login(email, password));
  // }

  useEffect(() => {
    dispatch(login(email, password));
  }, [dispatch, email, password, loginInto])

  // Minimum 8 characters {>>8,20}
  // Maximum 20 characters {8,>>20}
  // At least one uppercase character (?=.*[A-Z])
  // At least one lowercase character (?=.*[a-z])
  // At least one digit (?=.*\d)
  // At least one special character (?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]

  return (
    <div className="w-30 position-absolute top-50 start-50 translate-middle">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Почта</Form.Label>
          <Form.Control
            value={email}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => emailhandler(e)}
            name={"email"}
            placeholder="Введите почту"
          />
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            value={password}
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => passwordhandler(e)}
            name={"password"}
            placeholder="Введите пароль"
          />
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          disabled={!formValid}
          type="submit"
          onClick={() => setLoginInto(true)}
        >
          Вход
        </Button>
      </Form>
    </div>
  );
};

export default Login;
