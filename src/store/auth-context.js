import React, { useState, useContext } from "react";
import Loader from "../components/UI/Loader/Loader";
import NotificationContext from "./notification-context";
import useHttp from "../hooks/useHttp";
import * as constants from "../utils/constants";

const defaultAuthenticationValue = {
  isLoggedIn: false,
  userDetails: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
};

const AuthenticationContext = React.createContext(defaultAuthenticationValue);

export const AuthenticationContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const { isLoading, error, sendHttpRequest } = useHttp();
  const notificationContext = useContext(NotificationContext);

  const login = (email, password) => {
    const requestConfig = {
      url: `${constants.BASE_API_URL}/login`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: email,
        password: password,
      },
    };

    const loginCallback = (userData) => {
      setUserDetails(userData);
      setIsLoggedIn(true);
      notificationContext.showNotification("Logged in successfully.");
    };

    sendHttpRequest(requestConfig, loginCallback);
  };

  const signup = (email, password) => {
    const requestConfig = {
      url: `${constants.BASE_API_URL}/sign-up`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: email,
        password: password,
      },
    };

    const signupCallback = (userData) => {
      notificationContext.showNotification(
        "Signed up successfully! Please login now."
      );
    };

    sendHttpRequest(requestConfig, signupCallback);
  };

  const logout = (userId) => {
    const requestConfig = {
      url: `${constants.BASE_API_URL}/logout`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        userId: userDetails._id,
      },
    };

    const logoutCallback = () => {
      setUserDetails(null);
      setIsLoggedIn(false);
      notificationContext.showNotification("Logged out successfully.");
    };

    sendHttpRequest(requestConfig, logoutCallback);
  };

  const authenticationContextData = {
    isLoggedIn: isLoggedIn,
    userDetails: userDetails,
    login: login,
    signup: signup,
    logout: logout,
  };

  let contentToRender = props.children;
  if (error) {
    notificationContext.showNotification(error.message);
  }
  if (isLoading) {
    contentToRender = <Loader />;
  }

  return (
    <AuthenticationContext.Provider value={authenticationContextData}>
      {contentToRender}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
