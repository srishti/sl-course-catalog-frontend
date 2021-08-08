import React from "react";
import styles from "./Iframe.module.css";

const Iframe = (props) => {
  let iframeStyleClasses = [styles["iframe"]];
  if (props.className) {
    iframeStyleClasses.unshift(props.className);
  }

  return (
    <div className={iframeStyleClasses.join(" ")}>
      <iframe
        src={props.src}
        title={props.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Iframe;
