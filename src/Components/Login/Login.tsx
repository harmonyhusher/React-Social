import { useEffect } from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useAppDispatch } from "src/Redux/HooksTypes";
import { login } from "../../Redux/AuthReducer";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (Number(e.target.value) < 3) {
      setPasswordError("Пароль не подходит");
    } else {
      setPasswordError("");
    }
  };

  const loginhandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="w-30 position-absolute top-50 start-50 translate-middle">
      <Form onSubmit={loginhandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Почта</Form.Label>
          <Form.Control
            value={email}
            onBlur={blurHandler}
            onChange={emailHandler}
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
            onBlur={blurHandler}
            onChange={passwordhandler}
            name={"password"}
            type="password"
            placeholder="Введите пароль"
          />
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
        </Form.Group>
        <Button variant="primary" disabled={formValid} type="submit">
          Вход
        </Button>
      </Form>
    </div>
  );
};

export default Login;
