import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Layout/Header/Header";
import CourseCardsList from "../../components/Course/CourseCard/CourseCardsList";
import Loader from "../../components/UI/Loader/Loader";
import useHttp from "../../hooks/useHttp";
import NotificationContext from "../../store/notification-context";
import * as constants from "../../utils/constants";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const notificationContext = useContext(NotificationContext);
  const { isLoading, error, sendHttpRequest: fetchCourses } = useHttp();

  useEffect(() => {
    const requestConfig = {
      url: `${constants.BASE_API_URL}/course`,
    };

    const setCourseData = (coursesData) => {
      setCourses(coursesData);
    };

    fetchCourses(requestConfig, setCourseData);
  }, [fetchCourses]);

  let courseListToRender = <CourseCardsList courses={courses} />;
  if (courses.length === 0) {
    courseListToRender = <p>No course to show!</p>;
  }
  let contentToRender = courseListToRender;
  if (error) {
    notificationContext.showNotification();
  }
  if (isLoading) {
    contentToRender = <Loader />;
  }

  return (
    <>
      <Header />
      <main>{contentToRender}</main>
    </>
  );
};

export default Dashboard;
