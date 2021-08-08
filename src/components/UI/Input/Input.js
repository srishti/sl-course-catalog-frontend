import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  let inputStyleClasses = [styles["input"]];
  if (props.className) {
    inputStyleClasses.unshift(props.className);
  }

  return (
    <div className={inputStyleClasses.join(" ")}>
      {props.label && <label htmlFor={props.input.id}>{props.label}</label>}
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
