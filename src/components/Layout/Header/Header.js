import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Login from "../../Authentication/Login";
import Signup from "../../Authentication/Signup";
import styles from "./Header.module.css";

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModalHandler = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModalHandler = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModalHandler = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModalHandler = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <header className={styles["app-header"]}>
      <div>
        <h2>
          <span className={styles["primary-text"]}>Course</span>&nbsp;
          <span className={styles["secondary-text"]}>Catalog</span>
        </h2>
      </div>
      <div className={styles["header-action-buttons"]}>
        <Button secondary>My Courses</Button>
        <Button primary onClick={openLoginModalHandler}>
          Login
        </Button>
        <Button primary onClick={openSignupModalHandler}>
          Signup
        </Button>
      </div>
      {isLoginModalOpen && <Login onCloseModal={closeLoginModalHandler} />}
      {isSignupModalOpen && <Signup onCloseModal={closeSignupModalHandler} />}
    </header>
  );
};

export default Header;
