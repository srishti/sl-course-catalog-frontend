import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  let cardStyleClasses = [styles["card"]];
  if (props.className) {
    cardStyleClasses.unshift(props.className);
  }

  return <div className={cardStyleClasses.join(" ")}>{props.children}</div>;
};

export default Card;
