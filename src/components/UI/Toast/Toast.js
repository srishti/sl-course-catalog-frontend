import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import NotificationContext from "../../../store/notification-context";
import styles from "./Toast.module.css";

const Toast = (props) => {
  const notificationContext = useContext(NotificationContext);

  const hideToast = () => {
    notificationContext.hideNotification();
  };

  return (
    <div className={styles["toast"]}>
      <span>{props.text}</span>
      <FontAwesomeIcon
        className={styles["toast-close-icon"]}
        icon={faTimes}
        onClick={hideToast}
      />
    </div>
  );
};

export default Toast;
