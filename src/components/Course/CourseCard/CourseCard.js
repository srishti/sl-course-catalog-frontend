import React from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./CourseCard.module.css";

const CourseCard = (props) => {
  return (
    <Card className={styles["course-card"]}>
      <div className={styles["course-image"]}>
        <img src={props.thumbnailUrl} alt={props.title} />
      </div>

      <div className={styles["course-details"]}>
        <div className={styles["course-title"]}>
          <h3>{props.title}</h3>
        </div>

        <div className={styles["course-footer"]}>
          <div className={styles["course-price"]}>
            <FontAwesomeIcon icon={faRupeeSign} /> &nbsp;
            <span>{props.price.toFixed(2)}</span>
          </div>
          <Button secondary>
            <FontAwesomeIcon icon={faCartPlus} /> &nbsp;Buy
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
