import React from "react";
import CourseVideo from "./CourseVideo";
import styles from "./CourseVideosList.module.css";
import { courses } from "../../../pages/Dashboard/data";

const CourseVideosList = () => {
  return (
    <div className={styles["course-videos-list"]}>
      {courses[0].videos.map((video) => {
        return (
          <CourseVideo
            key={video.id}
            src={video.videoLink}
            title={video.videoTitle}
          />
        );
      })}
    </div>
  );
};

export default CourseVideosList;
