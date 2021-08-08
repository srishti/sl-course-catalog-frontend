import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import CourseContent from "./pages/CourseContent/CourseContent";
import { NotificationContextProvider } from "./store/notification-context";
import { AuthenticationContextProvider } from "./store/auth-context";

const App = () => {
  return (
    <NotificationContextProvider>
      <AuthenticationContextProvider>
        <Dashboard />
      </AuthenticationContextProvider>
    </NotificationContextProvider>
  );
};

export default App;
