import React, { useState, useEffect } from "react";
import Toast from "../components/UI/Toast/Toast";

const defaultNotificationValue = {
  notificationMessage: "",
  showNotification: () => {},
  hideNotification: () => {},
};

const NotificationContext = React.createContext(defaultNotificationValue);

export const NotificationContextProvider = (props) => {
  const [notificationMessage, setNotificationMessage] = useState("");

  const showNotification = (message) => {
    setNotificationMessage(message);
  };

  const hideNotification = () => {
    setNotificationMessage("");
  };

  const notificationContextData = {
    showNotification: showNotification,
    hideNotification: hideNotification,
  };

  useEffect(() => {
    let timer;
    if (notificationMessage) {
      timer = setTimeout(() => {
        hideNotification();
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [notificationMessage]);

  return (
    <NotificationContext.Provider value={notificationContextData}>
      {props.children}
      {notificationMessage && <Toast text={notificationMessage} />}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
