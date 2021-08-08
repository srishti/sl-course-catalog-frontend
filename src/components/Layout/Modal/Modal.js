import React from "react";
import ReactDOM from "react-dom";
import Card from "../../UI/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Modal.module.css";

const ModalOverlay = (props) => {
  return (
    <>
      <Card className={styles["overlay"]}>
        <FontAwesomeIcon
          className={styles["close-icon"]}
          icon={faTimes}
          onClick={props.onClose}
        />
        {props.children}
      </Card>
    </>
  );
};

const Backdrop = (props) => (
  <div className={styles["backdrop"]} onClick={props.onClick}></div>
);

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
