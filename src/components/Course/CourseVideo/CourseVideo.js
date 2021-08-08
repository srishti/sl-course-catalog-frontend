import React from "react";
import Iframe from "../../UI/Iframe/Iframe";
import styles from "./CourseVideo.module.css";

const CourseVideo = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <Iframe
        className={styles["course-video"]}
        src={props.src}
        title={props.title}
      />
    </>
  );
};

export default CourseVideo;
