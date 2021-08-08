import React from "react";
import CourseCard from "./CourseCard";
import styles from "./CourseCardsList.module.css";

const CourseCardsList = (props) => {
  return (
    <div className={styles["courses-list"]}>
      {props.courses.map((course) => (
        <CourseCard
          key={course._id}
          thumbnailUrl={course.thumbnailUrl}
          title={course.title}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default CourseCardsList;
