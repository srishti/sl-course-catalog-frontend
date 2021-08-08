import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  let buttonStyleClasses = [styles["button"]];
  if (props.primary) {
    buttonStyleClasses.unshift(styles["primary"]);
  } else if (props.secondary) {
    buttonStyleClasses.unshift(styles["secondary"]);
  }
  if (props.className) {
    buttonStyleClasses.unshift(props.className);
  }

  return (
    <button
      className={buttonStyleClasses.join(" ")}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
