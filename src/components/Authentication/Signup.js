import React, { useRef, useContext } from "react";
import Modal from "../Layout/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import AuthenticationContext from "../../store/auth-context";
import NotificationContext from "../../store/notification-context";
import styles from "./Signup.module.css";

const Signup = (props) => {
  const authContext = useContext(AuthenticationContext);
  const notificationContext = useContext(NotificationContext);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;

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
    } else if (password !== confirmPassword) {
      notificationContext.showNotification(
        "Password value does not match confirm password field value."
      );
    } else {
      authContext.signup(email, password);
    }
  };

  return (
    <Modal onClose={props.onCloseModal}>
      <form className={styles["signup-form"]} onSubmit={submitFormHandler}>
        <Input
          className={styles["signup-form-field"]}
          label="Email"
          input={{ id: "email", type: "email" }}
          ref={emailInputRef}
        />
        <Input
          className={styles["signup-form-field"]}
          label="Password"
          input={{ id: "password", type: "password" }}
          ref={passwordInputRef}
        />
        <Input
          className={styles["signup-form-field"]}
          label="Confirm Password"
          input={{ id: "confirm-password", type: "password" }}
          ref={confirmPasswordInputRef}
        />
        <Button secondary type="submit">
          Signup
        </Button>
      </form>
    </Modal>
  );
};

export default Signup;
