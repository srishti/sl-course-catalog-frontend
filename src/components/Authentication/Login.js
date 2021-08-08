import React, { useContext, useRef } from "react";
import Modal from "../Layout/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import AuthenticationContext from "../../store/auth-context";
import NotificationContext from "../../store/notification-context";
import styles from "./Login.module.css";

const Login = (props) => {
  const authContext = useContext(AuthenticationContext);
  const notificationContext = useContext(NotificationContext);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      notificationContext.showNotification(
        "Email or password cannot be empty!"
      );
      return;
    } else if (password.length < 6) {
      notificationContext.showNotification(
        "Password should be atleast 6 characters long!"
      );
      return;
    } else {
      authContext.login(email, password);
    }
  };

  return (
    <Modal onClose={props.onCloseModal}>
      <form className={styles["login-form"]} onSubmit={submitFormHandler}>
        <Input
          className={styles["login-form-field"]}
          label="Email"
          input={{ id: "email", type: "email" }}
          ref={emailInputRef}
        />
        <Input
          className={styles["login-form-field"]}
          label="Password"
          input={{ id: "password", type: "password" }}
          ref={passwordInputRef}
        />
        <Button secondary type="submit">
          Login
        </Button>
      </form>
    </Modal>
  );
};

export default Login;
