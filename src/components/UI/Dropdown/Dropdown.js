import React from "react";
import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
  let dropdownStyleClasses = [styles["dropdown"]];
  if (props.className) {
    dropdownStyleClasses.push(props.className);
  }

  return (
    <div className={dropdownStyleClasses}>
      {props.label && <label htmlFor={props.dropdown.id}>{props.label}</label>}
      <select {...props.dropdown}>
        {props.items.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
